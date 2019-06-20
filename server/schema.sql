DROP DATABASE IF EXISTS chat;
-- DROP TABLE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;



DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  message TEXT,
  room_id INT NOT NULL,
  PRIMARY KEY (id)  
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL auto_increment,
  username text not null,
  PRIMARY KEY (id)
);
drop table if exists rooms;

create table rooms (
  id int not null auto_increment,
  room_name text not null,
  PRIMARY KEY(id)
);

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_id) REFERENCES rooms (id);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

