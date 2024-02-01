-- Create tables
CREATE TABLE
    Users (
        idUser SERIAL,
        firstname VARCHAR(25) NOT NULL,
        lastname VARCHAR(25) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(30) NOT NULL,
        PRIMARY KEY (idUser),
        UNIQUE (email)
    );

CREATE TABLE
    Colors (
        idColor SERIAL,
        name VARCHAR(10) NOT NULL,
        PRIMARY KEY (idColor)
    );

CREATE TABLE
    Engine (
        idEngine SERIAL,
        horsePower INTEGER NOT NULL,
        PRIMARY KEY (idEngine)
    );

CREATE TABLE
    Models (
        idModel SERIAL,
        name VARCHAR(20) NOT NULL,
        description TEXT NOT NULL,
        price INT NOT NULL,
        picture TEXT NOT NULL,
        PRIMARY KEY (idModel)
    );

CREATE TABLE
    Adress (
        idAdress SERIAL,
        name VARCHAR(20) NOT NULL,
        PRIMARY KEY (idAdress)
    );

CREATE TABLE
    Cars (
        idCar SERIAL,
        idColor INTEGER NOT NULL,
        idModel INTEGER NOT NULL,
        idAdress INTEGER NOT NULL,
        idEngine INTEGER NOT NULL,
        idPrice FLOAT NOT NULL,
        PRIMARY KEY (idCar),
        FOREIGN KEY (idColor) REFERENCES Colors (idColor),
        FOREIGN KEY (idModel) REFERENCES Models (idModel),
        FOREIGN KEY (idAdress) REFERENCES Adress (idAdress),
        FOREIGN KEY (idEngine) REFERENCES Engine (idEngine)
    );

CREATE TABLE
    Command (
        idCommand SERIAL,
        isValid BOOLEAN NOT NULL,
        placeDelivery VARCHAR(50) NOT NULL,
        statusCommand VARCHAR(20) NOT NULL,
        idCar INTEGER NOT NULL,
        idUser INTEGER NOT NULL,
        PRIMARY KEY (idCommand),
        UNIQUE (idCar),
        FOREIGN KEY (idCar) REFERENCES Cars (idCar),
        FOREIGN KEY (idUser) REFERENCES Users (idUser)
    );

-- Create Users datas
INSERT INTO
    Users (firstname, lastname, email, password)
VALUES
    ('Elon', 'Musk', 'elonmusk@tesla.com', 'password');

-- Create Colors datas
INSERT INTO
    Colors (name)
VALUES
    ('White');

INSERT INTO
    Colors (name)
VALUES
    ('Black');

INSERT INTO
    Colors (name)
VALUES
    ('Blue');

INSERT INTO
    Colors (name)
VALUES
    ('Red');

INSERT INTO
    Colors (name)
VALUES
    ('Grey');

-- Create Adresses datas
INSERT INTO
    Adress (name)
VALUES
    ('Valenciennes');

INSERT INTO
    Adress (name)
VALUES
    ('Paris');

INSERT INTO
    Adress (name)
VALUES
    ('Lille');

-- Create Engine datas
INSERT INTO
    Engine (horsePower)
VALUES
    (200);

INSERT INTO
    Engine (horsePower)
VALUES
    (400);

INSERT INTO
    Engine (horsePower)
VALUES
    (1500);

-- Create Models datas
INSERT INTO
    Models (name, description, price, picture)
VALUES
    ('Cybertruck', 
    'The Tesla Cybertruck is a battery electric full-size pickup truck built by Tesla, Inc. since 2023.',
    92000,
    '../src/assets/Mega-Menu-Vehicles-Cybertruck-1x.webp');

INSERT INTO
    Models (name, description, price, picture)
VALUES
    ('Model-S', 
    'The Tesla Model S is a battery electric full-size car with a liftback body style built by Tesla, Inc. since 2012.',
    49900,
    '../src/assets/Mega-Menu-Vehicles-Model-S.webp');

INSERT INTO
    Models (name, description, price, picture)
VALUES
    ('Model-X', 
    'The Tesla Model X is a battery electric mid-size luxury crossover SUV built by Tesla, Inc. since 2015.',
    101990,
    '../src/assets/Mega-Menu-Vehicles-Model-X.webp');