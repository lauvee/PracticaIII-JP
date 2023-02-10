CREATE TABLE CreditosEstudiantes (
  Encabezado varchar(255) NOT NULL,
  Cedula varchar(255) NOT NULL,
  Matricula varchar(255) NOT NULL,
  Carrera varchar(255) NOT NULL,
  NoUniversidad varchar(255),
  AnoEnCurso datetime NOT NULL,
  CantCreditos int NOT NULL,
  MontoFinanciar int NOT NULL,
  FechaEnvio datetime NOT NULL,
  FechaEntrega datetime NOT NULL,
  PRIMARY KEY (Encabezado, Cedula)
);