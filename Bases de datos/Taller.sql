CREATE DATABASE taller CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE taller; 

CREATE TABLE estado(
	idEstado	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	estado		VARCHAR(255)
);

CREATE TABLE rol(
	idRol	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Rol	VARCHAR(255)
);

CREATE TABLE categoria(
	idCategoria	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	categoria	VARCHAR(255),
	idEstado 	INT NOT NULL,
	idSubcategoria 	INT NOT NULL
);

CREATE TABLE subcategoria(
	idSubcategoria	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	subcategoria	VARCHAR(255),
	idEstado 	INT NOT NULL
);

CREATE TABLE producto(
	idProducto	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombreProd	VARCHAR(255),
	precio		INT,
	imgProd		VARCHAR(255),
	descripción	VARCHAR(255),
	idEstado	INT NOT NULL,
	idCategoria	INT NOT NULL,
	idSubcategoria	INT NOT NULL
);

CREATE TABLE usuario(
	idUsuario	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre		VARCHAR(255),
	apellido	VARCHAR(255),
	correo		VARCHAR(255),
	contraseña	VARCHAR(255),
	idEstado	INT NOT NULL,
	idRol		INT NOT NULL
);

INSERT INTO estado VALUES (NULL,'Activo'), (NULL, 'Inactivo');

INSERT INTO rol VALUES (NULL, 'SuperAdmin'), (NULL, 'Admin');

INSERT INTO categoria VALUES (NULL, 'Chaquetas', 1, 2), (NULL, 'Camisas', 1, 4), (NULL, 'Leggins', 1, 1), (NULL, 'Botas', 1, 9);

INSERT INTO subcategoria VALUES (NULL, 'Drill', 1), (NULL, 'Cuerina', 1), (NULL, 'Camufladas', 2), (NULL, 'Estampado', 1), (NULL, 'Sin estampado', 2), 
(NULL, 'Algodón', 1), (NULL, 'Altas', 2), (NULL, 'Medias', 2), (NULL, 'Taches', 1);

INSERT INTO producto VALUES (NULL, 'Camisa Snoopy', 39900, '', 'Camisa manga corta de algodón con estampados en toda la camisa de Snoopy', 1, 2, 6),  
(NULL, 'Leggin deportivo', 13160, '', 'Leggin deportivo largo de color rosado y negro en degrade de drill', 1, 3, 1), 
(NULL, 'Botas Thaolith', 79990, '', 'Botines taches de tela negra', 1, 4, 9);

INSERT INTO usuario VALUES (NULL, 'Enrique', 'Caseres', 'enriquecas@gmail.com', 'estaesmicontraseña123', 1, 1), 
(NULL, 'Enriqueta', 'Casas', 'enriquetacas@gmail.com', 'estaesmicontraseña456', 1, 2);


ALTER TABLE producto ADD CONSTRAINT fk_pro_es FOREIGN KEY producto(idEstado) REFERENCES estado(idEstado) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE producto ADD CONSTRAINT fk_pro_cat FOREIGN KEY producto(idCategoria) REFERENCES categoria(idCategoria) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE producto ADD CONSTRAINT fk_pro_sub FOREIGN KEY producto(idSubcategoria) REFERENCES subcategoria(idSubcategoria) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE categoria ADD CONSTRAINT fk_cat_es FOREIGN KEY categoria(idEstado) REFERENCES estado(idEstado) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE categoria ADD CONSTRAINT fk_cat_sub FOREIGN KEY categoria(idSubcategoria) REFERENCES subcategoria(idSubcategoria) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE subcategoria ADD CONSTRAINT fk_sub_es FOREIGN KEY subcategoria(idEstado) REFERENCES estado(idEstado) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE usuario ADD CONSTRAINT fk_us_rol FOREIGN KEY usuario(idRol) REFERENCES rol(idRol) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE usuario ADD CONSTRAINT fk_us_es FOREIGN KEY usuario(idEstado) REFERENCES estado(idEstado) ON DELETE CASCADE ON UPDATE CASCADE;


