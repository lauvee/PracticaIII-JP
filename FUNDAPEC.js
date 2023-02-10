const fs = require("fs");

const CreditosEstudiantes = {
  Encabezado: {
    type: "Char",
    required: true,
    value: ""
  },
  Cedula: {
    type: "Char",
    required: true,
    value: ""
  },
  Matricula: {
    type: "Char",
    required: true,
    value: ""
  },
  Carrera: {
    type: "Char",
    required: true,
    value: ""
  },
  NoUniversidad: {
    type: "Char",
    value: ""
  },
  AnoEnCurso: {
    type: "DateTime",
    required: true,
    value: ""
  },
  CantCreditos: {
    type: "Int",
    required: true,
    value: ""
  },
  MontoFinanciar: {
    type: "Int",
    required: true,
    value: ""
  },
  FechaEnvio: {
    type: "DateTime",
    required: true,
    value: ""
  },
  FechaEntrega: {
    type: "DateTime",
    required: true,
    value: ""
  }
};

fs.writeFile("CreditosEstudiantes.json", JSON.stringify(CreditosEstudiantes), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data written to file successfully");
});