const fs = require("fs");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb"
});

fs.readFile("CreditosEstudiantes.json", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const CreditosEstudiantes = JSON.parse(data);

  const query = `INSERT INTO CreditosEstudiantes (Encabezado, Cedula, Matricula, Carrera, NoUniversidad, AnoEnCurso, CantCreditos, MontoFinanciar, FechaEnvio, FechaEntrega)
                VALUES ('${CreditosEstudiantes.Encabezado.value}', '${CreditosEstudiantes.Cedula.value}', '${CreditosEstudiantes.Matricula.value}', '${CreditosEstudiantes.Carrera.value}', '${CreditosEstudiantes.NoUniversidad.value}', '${CreditosEstudiantes.AnoEnCurso.value}', '${CreditosEstudiantes.CantCreditos.value}', '${CreditosEstudiantes.MontoFinanciar.value}', '${CreditosEstudiantes.FechaEnvio.value}', '${CreditosEstudiantes.FechaEntrega.value}')`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Data inserted into table successfully");
  });
});