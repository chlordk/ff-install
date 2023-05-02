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

package database.js.handlers.rest;

import java.sql.ResultSet;
import java.sql.PreparedStatement;


public class Cursor
{
  final String name;
  final ResultSet rset;
  final PreparedStatement stmt;

  int rows = 0;
  boolean closed = false;
  boolean compact = false;
  String[] columns = null;
  String dateformat = null;


  public Cursor(String name, PreparedStatement stmt, ResultSet rset)
  {
    this.name = name;
    this.stmt = stmt;
    this.rset = rset;
  }


  public Cursor(String name, PreparedStatement stmt, ResultSet rset, String[] columns)
  {
    this.name = name;
    this.stmt = stmt;
    this.rset = rset;
    this.columns = columns;
  }
}