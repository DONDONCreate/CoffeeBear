
CREATE TABLE users(
  id int primary key AUTO_INCREMENT,
  name varchar(128) NOT NULL,
  is_payment boolean
);

CREATE TABLE coffee_history(
  id int primary key AUTO_INCREMENT,
  user_id varchar(128) NOT NULL,
  user_name varchar(128) NOT NULL,
  year int NOT NULL,
  month int NOT NULL
);
CREATE TABLE message(
  id int primary key AUTO_INCREMENT,
  id_name int NOT NULL,
  text_name varchar(128) NOT NULL
);
