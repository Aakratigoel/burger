DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(ID int not null AUTO_INCREMENT, Burger_Name varchar(45), Devoured boolean, PRIMARY KEY (ID));


