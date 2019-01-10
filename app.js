var ibmdb = require('ibm_db');

console.log("Test program to access DB2 sample database");

process.env.DB2CODEPAGE="874";

var connectionString = "DATABASE=<YOUR_DBNAME>;UID=<YOUR_UID>;PWD=<YOUR_PWD>;HOSTNAME=<YOUR_HOSTNAME>;port=<PORT>";

ibmdb.open(connectionString, function(err, conn) {
    if (err) return console.log(err);

    conn.query("select * from SECCALLFORCERATETAB", function(err, data) {
      if (err) console.log(err);
      else console.log(data);

      conn.close(function() {
        console.log('done');
      });
    });
  });
