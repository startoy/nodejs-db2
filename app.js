var ibmdb = require('ibm_db');

console.log("Test program to access DB2 sample database");

process.env.DB2CODEPAGE="874";

var connectionString = "DATABASE=fisdb_nt;UID=db2inst1;PWD=db2inst1;HOSTNAME=10.22.19.13;port=50001";

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
