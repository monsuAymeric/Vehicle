CREATE TABLE Users(
   idUser SERIAL,
   firstname VARCHAR(25) NOT NULL,
   lastname VARCHAR(25) NOT NULL,
   email VARCHAR(50) NOT NULL,
   password VARCHAR(30) NOT NULL,
   PRIMARY KEY(idUser),
   UNIQUE(email)
);

CREATE TABLE Colors(
   id_color SERIAL,
   name VARCHAR(10) NOT NULL,
   PRIMARY KEY(id_color)
);

CREATE TABLE Engine(
   id_engine SERIAL,
   horsePower INTEGER NOT NULL,
   PRIMARY KEY(id_engine)
);

CREATE TABLE Models(
   id_model SERIAL,
   name VARCHAR(20) NOT NULL,
   PRIMARY KEY(id_model)
);

CREATE TABLE Adress(
   id_adress SERIAL,
   name VARCHAR(20) NOT NULL,
   PRIMARY KEY(id_adress)
);

CREATE TABLE Cars(
   idCar SERIAL,
   id_color INTEGER NOT NULL,
   id_model INTEGER NOT NULL,
   id_adress INTEGER NOT NULL,
   id_engine INTEGER NOT NULL,
   PRIMARY KEY(idCar),
   FOREIGN KEY(id_color) REFERENCES Colors(id_color),
   FOREIGN KEY(id_model) REFERENCES Models(id_model),
   FOREIGN KEY(id_adress) REFERENCES Adress(id_adress),
   FOREIGN KEY(id_engine) REFERENCES Engine(id_engine)
);

CREATE TABLE Commande(
   idUser INTEGER,
   idCar INTEGER,
   isValid BOOLEAN NOT NULL,
   PRIMARY KEY(idUser, idCar),
   FOREIGN KEY(idUser) REFERENCES Users(idUser),
   FOREIGN KEY(idCar) REFERENCES Cars(idCar)
);

