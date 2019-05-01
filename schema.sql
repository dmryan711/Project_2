DROP Database IF EXISTS user;
CREATE DATABASE user;
USE user;

CREATE TABLE user (
	first_name VARCHAR( 30) NOT NULL,
	last_name VARCHAR( 30) NOT NULL,
	email VARCHAR( 30) NOT NULL,
	password VARCHAR(100) NOT NULL
);

SELECT * FROM user;



