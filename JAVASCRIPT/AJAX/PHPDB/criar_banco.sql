-- Execute no seu MySQL
CREATE DATABASE exemplo_ajax;
USE exemplo_ajax;

CREATE TABLE nomes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO nomes (nome) VALUES
('Ana'), ('Bruno'), ('Carlos'), ('Daniela'), ('Eduardo'),
('Fernanda'), ('Gabriel'), ('Helena'), ('Isabela'), ('João'),
('Lucas'), ('Mariana'), ('Pedro'), ('Rafael'), ('Sofia');
