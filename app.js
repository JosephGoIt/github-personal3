function logMeIn(u,p)
   {  
      var uid = document.getElementById(u).value;
      var pass = document.getElementById(p).value;
      var pad = "Database1.accdb";
      var cn = new ActiveXObject("ADODB.Connection");
      var connStr = "Provider=microsoft.ace.oledb.12.0;Data Source=" + pad;
      cn.Open(connStr);
      var rs = new ActiveXObject("ADODB.Recordset");
      var sql = "SELECT UserID, Password, FirstName FROM Login WHERE UserID = '" + uid + "' AND Password = '" + pass + "';";
      rs.Open(sql, cn);
      if(!rs.bof)
      {
         window.alert("Hello " + rs.fields(2).value + "!");
      }
      else
      {  
         window.alert("Invalid user or password");
      }
      rs.Close();
      cn.Close();
   }

function loginOnKeyPress(e)
   {  
      if(e && e.keyCode == 13)
         {  
            logMeIn();
         }
   }