CREATE DATABASE carrosMarca CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE carrosMarca;

CREATE TABLE autos(
	idAuto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(128) NOT NULL,
	precio INT NOT NULL,
	idMarca INT NOT NULL
	);

CREATE TABLE marcas(
	idMarca INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(128) NOT NULL
	);	

INSERT INTO autos (nombre,precio,idMArca) VALUES ("RS6",100,2),("Sport clio R.S. '11",80,5),("Corvette Stingray L46 350",500,3),
("Mustang GT",290,4),("Scirocco GT24",140,6),("RS200",640,4),("TT ABT Touring Car",279,2),("Diablo GT '00",1000,1),("Camaro Z28 Coupe",550,3),
("Reventon '08",800,1);

INSERT INTO marcas (nombre) VALUES ("Lamborghini"),("Audi"),("Chevrolet"),("Ford"),("Renault"),("Volkwagen");

ALTER TABLE autos ADD CONSTRAINT fk_auto FOREIGN KEY (idMarca) REFERENCES marcas (idMarca);