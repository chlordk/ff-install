/*
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.

 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 */

package database.js.client;

import java.io.InputStream;
import java.util.ArrayList;
import java.io.ByteArrayOutputStream;


public class SocketReader
{
  private int pos = 0;
  private int size = 0;
  private final InputStream in;
  private final static int MAX = 8192;
  private final byte[] buffer = new byte[MAX];


  public SocketReader(InputStream in)
  {
    this.in = in;
  }


  public ArrayList<String> getHeader() throws Exception
  {
    int i = 0;
    int match = 0;
    int start = 0;
    byte[] buf = new byte[MAX];
    ArrayList<String> lines = new ArrayList<String>();

    while(match < 4 && i < MAX)
    {
      buf[i] = read();
      boolean use = false;

      if ((match == 0 || match == 2) && buf[i] == 13) use = true;
      if ((match == 1 || match == 3) && buf[i] == 10) use = true;

      if (use) match++;
      else
      {
        match = 0;
        if (buf[i] == 10) match++;
      }

      if (match == 2)
      {
        String line = new String(buf,start,i-start-1);
        lines.add(line);
        start = i+1;
      }

      i++;
    }

    byte[] header = new byte[i-4];
    System.arraycopy(buf,0,header,0,header.length);

    return(lines);
  }


  public byte[] getContent(int bytes) throws Exception
  {
    int pos = 0;
    byte[] body = new byte[bytes];

    while(pos < body.length)
    {
      int avail = this.size-this.pos;
      int amount = body.length - pos;
      if (avail < amount) amount = avail;

      if (amount == 0)
      {
        this.pos = 0;
        this.size = in.read(buffer);
        continue;
      }

      System.arraycopy(this.buffer,this.pos,body,pos,amount);

      pos += amount;
      this.pos += amount;
    }

    return(body);
  }


  public byte[] getChunkedContent() throws Exception
  {
    int csize = 0;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    while(true)
    {
      byte[] bx = readline(true);
      String hex = new String(bx);
      csize = Integer.parseInt(hex,16);

      if (csize == 0) break;

      byte[] chunk = getContent(csize+2);
      out.write(chunk,0,csize);
    }

    return(out.toByteArray());
  }

  public byte[] readline(boolean strip) throws Exception
  {
    int match = 0;
    boolean use = false;
    ByteArrayOutputStream out = new ByteArrayOutputStream();

    while(match < 2)
    {
      byte b = read();

      if (b == 13 && match == 0) use = true;
      if (b == 10 && match == 1) use = true;

      if (use) match++;
      else
      {
        match = 0;
        if (b == 10) match++;
      }

      out.write(b);
    }

    byte[] line = out.toByteArray();

    if (strip)
    {
      byte[] stripped = new byte[line.length-2];
      System.arraycopy(line,0,stripped,0,stripped.length);
      line = stripped;
    }

    return(line);
  }


  private byte read() throws Exception
  {
    if (pos < size) return(buffer[pos++]);

    pos = 0;
    size = in.read(buffer);

    if (size == -1)
      throw new Exception("Socket closed");

    return(read());
  }
}