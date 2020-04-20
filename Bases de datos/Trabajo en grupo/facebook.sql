CREATE DATABASE facebook CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE facebook;

CREATE 	TABLE rolles(
    idRolles INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol VARCHAR(128)
	);
INSERT INTO rolles (rol) VALUES ("Administrador"),("UsuNormal"),("Moderador");

CREATE TABLE ingresos(
	idIngresos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(128) NOT NULL,
	password VARCHAR(128) NOT NULL,
	idPersonas INT,
	idRolles INT
	);

INSERT INTO ingresos (nombre,password,idPersonas,idRolles) VALUES
	("Pepito","Pelangas1234",1,1),
	("Santori22","Droxila_23",2,2),
	("Renegado_Tantilo","residenteMortal23",3,3),
	("samara_bonita","todoLoLindo_23",4,2),
	("Capital_leonidas","Elizabeth_IL",2,2),
	("ventitoxic","123456789",1,3),
	("pepegamer","sonic_Biggram",2,3),
	("xPepe777","Marzo1234",1,2),
	("ventas_masVentas","El_negocio_1234",2,3),
	("John@maromas","5692204",1,2),
	("mod123","siemprePro",2,2),
	("hotPlayer","73985729",1,2),
	("Alfredo","superMAn123",2,2),
	("MarioPerez","MdeMario123",2,3),
	("DarkNight","blackmen2",1,2),
	("soloEscritura","LapisesGustan",2,3),
	("CristianFRojas","CristianProPlayer",2,3),
	("AlejoGamerOMG","Contraseña2020",1,2),
	("otroUsuario","SoyUnico",2,3),
	("Alacatelez","1984646373",2,3);

CREATE TABLE personas(
    idPersonas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	personas VARCHAR(50)
	);
INSERT INTO personas (personas) VALUES ("Nuevo"),("Antiguo"),("Bloqueado"),("Existente");



CREATE TABLE usuarios(
	idUsuarios INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	datos INT,
	chat INT,
	historial INT,
	eleGuardados INT,
	personas INT,
	idRoles INT,
	idEstado INT
	);

INSERT INTO usuarios (datos,chat,historial,eleGuardados,personas,idRoles,idEstado) VALUES
	(1,1,1,23,1,1,1),
	(2,2,1,5,2,2,1),
	(3,1,1,12,3,3,1),
	(4,1,1,14,4,1,1),
	(5,1,1,5,5,1,1),
	(6,1,1,15,6,2,1),
	(7,1,1,8,7,3,1),
	(8,1,1,16,8,4,1),
	(9,1,1,4,9,2,1),
	(10,2,1,5,10,2,1),
	(11,1,1,7,11,1,1),
	(12,1,1,2,12,1,1),
	(13,1,1,0,13,1,1),
	(14,2,1,8,14,1,1),
	(15,2,1,2,15,2,1),
	(16,1,1,1,16,2,1),
	(17,1,1,6,17,3,1),
	(18,1,1,8,18,4,1),
	(19,2,1,4,19,2,1),
	(20,2,1,5,20,2,1);

CREATE TABLE datos(
	idDatos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50),
	apellido VARCHAR(50),
	nacimiento VARCHAR(50),
	estado VARCHAR(50),
	correo Varchar(128)
	);

INSERT INTO datos (nombre,apellido,correo,nacimiento,estado) VALUES
	("Jose"	,"Contreras","jose@gmail.com","14/03/1980","casado"),
	("Maria","Martinez","maryyahoo.com","10/02/1970","casada"),
	("Jose","Lopez","lopexM@gmail.com","14/03/1985","soltero"),
	("Periquito","Cortez","pcortez@gmail.com","12/11/1970","casado"),
	("Manuela","Beltrana","manuexd@hotmail.com","14/03/2000","soltera"),
	("Juan","Pasto","jpasto@gmail.com","14/03/1990"	,"soltero"),
	("Manuel","Perez","PerezManu@gmail.com","14/03/1960","viudo"),
	("Natalia","Ramirez","ramirez@gmail.com","14/05/1980","divoricada"),
	("Juan","Giraldo","Giraldo@example.com","21/12/1970","casado"),
	("Mario","Parada","perdfs@gmail.com","14/06/1995","soltero"),
	("Aisha","Gomez","Aishis@gmail.com","24/05/2000","soltera"),
	("Latrai","GoParada","xpepes@outlook.com","14/02/1993","soltero"),
	("Fernanda","Aroyave","aeiou@gmail.com","31/06/1980","casada"),
	("Carlos","Carmelo","carmenxlos@hotmail.com","1/03/1973","casado"),
	("Cristobal","Colon","America@yahoo.com","14/03/1492","viudo"),
	("Cristina","Perez","cristiaplase@gmail.com","22/10/1960","viuda"),
	("Jose Maria","Beltran","B324kes@hotmail.com","19/04/1994","casado"),
	("Santiago","Bermudez","Bakigg@hotmail.com","19/04/2001","soltero"),
	("Martin","Cardenas","DonusBest@hotmail.com","29/04/2005","casado"),
	("Camilo","Hernandez","B324kes@hotmail.com","19/04/1994","casado");


CREATE TABLE chat(
	idChat INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	chat VARCHAR(50) NOT NULL
	);
INSERT INTO chat (chat) VALUES ("Activo"),("Inactivo"),("Activo"),("Inactivo");

CREATE TABLE conocidos(
	idConocidos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombreCon VARCHAR(128) 
	);
INSERT INTO conocidos (nombreCon) VALUES ("Hermano"),("Hermana"),("Mama"),("Papa"),("Amigo"),("Crush"),("Amigo"),("arroz en bajo");


CREATE TABLE historias(
	idHistoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	usuario INT
	);
INSERT INTO historias (usuario) VALUES (1);

CREATE TABLE publicaciones(
	idPublicaciones INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	publico BIT,
	amigos  BIT,
	amigosExcepto BIT,
	amigosConcretos BIT,	
	soloyo BIT,
	personalizado BIT
	);
INSERT INTO publicaciones(publico,amigos,amigosExcepto,amigosConcretos,soloyo,personalizado) VALUES 
	(1,0,0,0,0,0),(0,1,0,0,0,0),(0,0,0,0,1,0),
    (0,0,0,1,0,0),(1,0,0,0,0,0),(0,1,0,0,0,0),
    (0,0,0,1,0,0),(0,0,0,0,0,1),(0,0,1,0,0,0),
    (1,0,0,0,0,0),(0,1,0,0,0,0),(1,0,0,0,0,0),
    (1,0,0,0,0,0),(0,1,0,0,0,0),(0,0,0,0,0,1),
    (1,0,0,0,0,0),(1,0,0,0,0,0),(1,0,0,0,0,0),
    (0,1,0,0,0,0),(1,0,0,0,0,0);

CREATE TABLE juegos(
	idJuegos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	puzzies INT,
	accion INT,
	logica INT,
	estrategia INT,
	otros INT);
INSERT INTO juegos(puzzies,accion,logica,estrategia,otros) VALUES 
	(2,4,2,0,1),(3,5,6,8,9),(2,5,1,8,2),(10,1,1,2,1),
	(4,5,2,2,1),(4,6,7,9,1),(2,2,2,2,3),(4,8,1,3,4),
	(2,4,5,6,1),(3,5,1,6,7),(4,2,3,7,8),(3,6,8,12,1),
	(1,1,1,2,1),(2,3,4,1,2),(3,6,1,2,3),(1,2,1,2,1),
	(3,5,6,7,1),(2,5,6,2,1),(2,4,5,1,3),(1,5,3,7,2);

CREATE TABLE grupos(
	idGrupos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	memes INT,
	chistes INT,
	terror INT,
	videoJuegos INT,
	otros INT
	);
INSERT INTO grupos(memes,chistes,terror,videoJuegos,otros) VALUE 
	(5,12,1,9,2),(2,2,6,8,2),(6,5,2,12,8),(8,9,2,4,7),(4,7,12,5,7),
	(2,3,4,5,6),(2,5,7,1,2),(1,5,9,2,6),(1,13,12,2,5),(4,6,2,7,8),
	(5,12,1,9,2),(2,2,6,8,2),(6,5,2,12,8),(8,9,2,4,7),(4,7,12,5,7),
	(2,3,4,5,6),(2,5,7,1,2),(1,5,9,2,6),(1,13,12,2,5),(4,6,2,7,8);	


CREATE TABLE paginas(
	home 			    INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	idWatch 		    INT NOT NULL,
	idRelations		    INT NOT NULL,
	idMarketplace		INT NOT NULL,
	idNotificaciones	INT NOT NULL,
	idContenido		    INT NOT NULL	
    );
INSERT INTO paginas (idWatch,idRelations,idMarketplace,idNotificaciones,idContenido) VALUES 
	(2,1,1,1,1);

CREATE TABLE notificaciones(
	idNotificaciones	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	idprivacidad		INT NOT NULL,
	publicaciones 		INT NOT NULL,
	reacciones		    INT NOT NULL,
	grupos			    VARCHAR(255),
	juegos			    VARCHAR(255)
	
	);


CREATE TABLE watch(
	idWatch			INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	gameplays		VARCHAR(255),
	videosRandom    VARCHAR(255),
	anime			VARCHAR(255),
	tiktoks			VARCHAR(255)
);


CREATE TABLE marketplace(
	idMarketplace 	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	productos	VARCHAR(255)
);


CREATE TABLE relations(
	idRelations	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	soltero 	BIT,
	casado 		BIT,
	indeciso 	BIT
);

CREATE TABLE contenido(
	idcontenido	INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	videos		VARCHAR(255),
	imagenes	VARCHAR(255)
);

ALTER TABLE ingresos ADD CONSTRAINT fk_ingRoles FOREIGN KEY (idRolles) REFERENCES rolles (idRolles);
ALTER TABLE ingresos ADD CONSTRAINT fk_ingPersonas FOREIGN KEY (idPersonas) REFERENCES personas (idPersonas);

ALTER TABLE usuarios ADD CONSTRAINT fk_usuarios FOREIGN KEY (personas) REFERENCES ingresos  (idIngresos);
/* llaves de foraneas que tiene usuarios */

ALTER TABLE usuarios ADD CONSTRAINT fk_usuDatos FOREIGN KEY (datos) REFERENCES datos (idDatos);	
ALTER TABLE usuarios ADD CONSTRAINT fk_usuChat FOREIGN KEY (chat) REFERENCES chat (idChat);
ALTER TABLE usuarios ADD CONSTRAINT fk_usuahistorial FOREIGN KEY (historial) REFERENCES historias (idHistoria);
/*ALTER TABLE usuarios ADD CONSTRAINT fk_usuariosCon FOREIGN KEY (personas) REFERENCES conocidos (idConocidos);*/
ALTER TABLE usuarios ADD CONSTRAINT fk_usuPaguinas FOREIGN KEY (IdEstado)  REFERENCES paginas (home);

/*  llaves foraneas de historial*/

ALTER TABLE historias ADD CONSTRAINT fk_grupos FOREIGN KEY (usuario) REFERENCES grupos (idGrupos);
ALTER TABLE historias ADD CONSTRAINT fk_juegos FOREIGN KEY (usuario) REFERENCES juegos (idJuegos);
ALTER TABLE historias ADD CONSTRAINT fk_publicaciones FOREIGN KEY (usuario) References publicaciones(idPublicaciones);

INSERT INTO contenido (videos,imagenes) VALUES ("https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/dfd/996/dfd996d0c22dd7e69412274972f5598d/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1579565836","https://www.youtube.com/watch?v=wrcGFESn1qQ&list=RDMMwrcGFESn1qQ&start_radio=1");
INSERT INTO notificaciones (grupos,juegos) VALUES ("Seguidores de la gloria","Candy Rush"),("Grupo de memes 100% reales no fakes","Social Wars"),("Amigos en grupo","Dragon City");
INSERT INTO watch (gameplays,videosRandom,anime,tiktoks) VALUES ("Minecraft","Africanos bailando dupsteb en funeral","Tokyo Ghoul","RandomUno"),("Halo","Podria ser el fin del hombre araña","Naruto","RandomDos");
INSERT INTO marketplace (productos) VALUES ("Ropa"),("Juguetes"),("Videojuegos"),("Hogar"),("Utiles Escolares");
INSERT INTO relations (soltero,casado,indeciso) VALUES (1,0,0);


ALTER TABLE paginas ADD CONSTRAINT fk_notificacion FOREIGN KEY (idNotificaciones) REFERENCES notificaciones (idNotificaciones) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE paginas ADD CONSTRAINT fk_watch FOREIGN KEY (idWatch) REFERENCES watch (idWatch) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE paginas ADD CONSTRAINT fk_market FOREIGN KEY (idMarketplace) REFERENCES marketplace (idMarketplace) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE paginas ADD CONSTRAINT fk_relations FOREIGN KEY (idRelations) REFERENCES relations (idRelations) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE paginas ADD CONSTRAINT fk_contenido FOREIGN KEY (idContenido) REFERENCES contenido (idContenido) ON DELETE CASCADE ON UPDATE CASCADE;


