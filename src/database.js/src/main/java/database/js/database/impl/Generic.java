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

package database.js.database.impl;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.PreparedStatement;
import database.js.database.Database;
import database.js.database.BindValue;


public class Generic extends Database
{
  @Override
  public void setProxyUser(String username) throws Exception
  {
    throw new Exception("Feature not supported");
  }

  @Override
  public void releaseProxyUser() throws Exception
  {
    throw new Exception("Feature not supported");
  }

  @Override
  public ReturnValueHandle prepareWithReturnValues(String sql, ArrayList<BindValue> bindvalues) throws Exception
  {
    throw new Exception("Feature not supported");
  }

  @Override
  public ResultSet executeUpdateWithReturnValues(PreparedStatement stmt) throws Exception
  {
    throw new Exception("Feature not supported");
  }
}