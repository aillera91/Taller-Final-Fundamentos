CREATE DATABASE productos;

USE productos;

CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR (50),
	Precio DECIMAL (10, 2),
    Cantidad INT
    );