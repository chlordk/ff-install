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

package database.js.handlers;

import java.util.Base64;
import java.nio.ByteBuffer;
import java.util.logging.Level;
import java.util.logging.Logger;
import database.js.config.Config;
import database.js.servers.Server;
import database.js.handlers.rest.Rest;
import database.js.handlers.rest.Guid;
import database.js.handlers.file.PathUtil;
import database.js.servers.rest.RESTClient;
import database.js.servers.http.HTTPRequest;
import database.js.servers.http.HTTPResponse;
import database.js.handlers.rest.JSONFormatter;
import database.js.config.Handlers.HandlerProperties;


public class RestHandler extends Handler
{
  private final PathUtil path;
  private final CrossOrigin cors;
  private final static Logger logger = Logger.getLogger("rest");


  public RestHandler(Config config, HandlerProperties properties) throws Exception
  {
    super(config,properties);
    this.cors = new CrossOrigin();
    this.path = new PathUtil(this);
  }


  @Override
  public HTTPResponse handle(HTTPRequest request) throws Exception
  {
    Server server = request.server();
    HTTPResponse response = new HTTPResponse();
    String json = config().getHTTP().mimetypes.get("json");

    server.request();
    response.setContentType(json);
    String path = this.path.getPath(request.path());

    logger.finest("REST request received: "+path);

    if (path == null)
    {
      JSONFormatter jfmt = new JSONFormatter();

      jfmt.success(false);
      jfmt.add("message","Path not mapped to any resource");

      response.setBody(jfmt.toString());
      return(response);
    }

    String errm = cors.allow(request);

    if (errm != null)
    {
      response.setBody(errm);
      return(response);
    }

    cors.addHeaders(request,response);

    if (!server.embedded())
    {
      RESTClient client = null;
      short rsrv = getClient(config(),request);
      logger.finest("Use RestServer "+rsrv);

      if (rsrv < 0) client = server.worker();
      else          client = server.worker(rsrv);

      if (client == null)
      {
        JSONFormatter jfmt = new JSONFormatter();

        jfmt.success(false);
        jfmt.add("message","No RESTServer's connected");

        response.setBody(jfmt.toString());
        logger.warning("No RESTServer's connected");

        return(response);
      }

      String host = request.remote();
      byte[] data = client.send(host,request.page());

      response = new HTTPResponse(data);
      log(logger,request,response);

      return(response);
    }

    setClient(config(),request,response);

    boolean savepoint = false;

    boolean sppost = config().getDatabase().savepoint("post");
    boolean sppatch = config().getDatabase().savepoint("patch");
    boolean spdelete = config().getDatabase().savepoint("delete");

    if (request.method().equals("POST") && sppost) savepoint = true;
    if (request.method().equals("PATCH") && sppatch) savepoint = true;
    if (request.method().equals("DELETE") && spdelete) savepoint = true;

    String session = request.getCookie("JSESSIONID");
    if (session == null) session = new Guid().toString();

    response.setCookie("JSESSIONID",session);

    if (request.body() == null && request.method().equals("OPTIONS"))
      return(response);

    byte[] body = request.body();
    if (body == null) body = "{}".getBytes();

    String remote = request.remote();
    String payload = new String(body);

    boolean returning = false;
    String qret = request.getQuery("returning");
    if (qret != null) returning = Boolean.parseBoolean(qret);

    Rest rest = new Rest(server,savepoint,remote);
    response.setContentType(json);

    response.setBody(rest.execute(path,payload,returning));

    log(logger,request,response);
    return(response);
  }


  public static short getClient(Config config, HTTPRequest request) throws Exception
  {
    Server server = request.server();

    long date = 0;
    short rsrv = -1;
    String cinst = null;
    String instance = config.instance();
    String cookie = request.getCookie("RESTSRVID");

    if (cookie == null)
      return(-1);

    byte[] bytes = Base64.getDecoder().decode(cookie);
    ByteBuffer buffer = ByteBuffer.allocate(bytes.length);

    buffer.put(bytes);
    buffer.flip();

    date = buffer.getLong();
    rsrv = buffer.getShort();

    byte[] inst = new byte[bytes.length-10];

    buffer.get(inst);
    cinst = new String(inst);

    if (date >= server.started() && cinst.equals(instance))
      return(rsrv);

    return(-1);
  }


  public static void setClient(Config config, HTTPRequest request, HTTPResponse response) throws Exception
  {
    Server server = request.server();
    if (!server.isRestType()) return;

    short rsrv = server.id();
    long date = server.started();
    byte[] instance = config.instance().getBytes();

    ByteBuffer buffer = ByteBuffer.allocate(10+instance.length);

    buffer.putLong(date);
    buffer.putShort(rsrv);
    buffer.put(instance);

    byte[] cookie = Base64.getEncoder().encode(buffer.array());
    response.setCookie("RESTSRVID",new String(cookie));
  }


  private static String req = "\n----------------- request -----------------\n";
  private static String rsp = "\n----------------- response -----------------\n";
  private static String end = "\n---------------------------------------------\n";

  private void log(Logger logger, HTTPRequest request, HTTPResponse response)
  {
    long time = System.nanoTime() - request.start();

    if (logger.getLevel() == Level.INFO)
      logger.log(logger.getLevel(),request.path()+" ["+time/1000000+"]ms");

    if (logger.getLevel() == Level.FINE)
      logger.log(logger.getLevel(),request.path()+" ["+time/1000000+"]ms"+req+new String(request.nvlbody())+rsp+new String(response.nvlbody())+end);

    if (logger.getLevel() == Level.FINEST)
      logger.log(logger.getLevel(),request.path()+" ["+time/1000000+"]ms"+req+new String(request.page())+rsp+new String(response.page())+end);
  }
}