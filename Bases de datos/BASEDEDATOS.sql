CREATE DATABASE ejemplo CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE ejemplo; 

CREATE TABLE resultados(
	idResultado	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre		VARCHAR(255),
	apellido	VARCHAR(255),
	idNota		INT NOT NULL
);

CREATE TABLE notas(
	idNota		INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nota		INT
);

INSERT INTO notas (nota) VALUES (0), (1), (2), (3), (4), (5);

INSERT INTO resultados (nombre, apellido, idNota) VALUES ('Pepe','Pepito',2);


ALTER TABLE resultados ADD CONSTRAINT fk_nota FOREIGN KEY (idNota) REFERENCES notas(idNota)
ON DELETE CASCADE ON UPDATE CASCADE;





