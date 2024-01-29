/*
    Script de Base de Datos - Sistema de Gestión de Vídeos
    Autor: [Jesús Ariel González Bonilla]
    Fecha: [29-01-2024]

    Descripción:
    Este script crea una base de datos llamada 'punto_4' con varias tablas relacionadas para un sistema de gestión de vídeos.
*/

-- Eliminar la base de datos si existe
DROP DATABASE IF EXISTS punto_4;

-- Crear la base de datos punto_4
CREATE DATABASE punto_4;

-- Usar la base de datos punto_4
USE punto_4;

-- Tabla para almacenar datos básicos de los usuarios
CREATE TABLE dato_basico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_documento ENUM('CC','TI','CE','P') NOT NULL,
    documento VARCHAR(11) NOT NULL UNIQUE,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
);

-- Tabla para almacenar información de los usuarios
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    tipo ENUM('colaborador', 'usuario') NOT NULL,
    dato_basico_id INT NOT NULL UNIQUE,
    CONSTRAINT fk_usuario_dato_basico FOREIGN KEY (dato_basico_id) REFERENCES dato_basico(id)
);

-- Tabla para almacenar información de los autores de los vídeos
CREATE TABLE autor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL
);

-- Tabla para almacenar información de los vídeos
CREATE TABLE video (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_publicacion DATE,
    autor_id INT,
    CONSTRAINT fk_video_autor FOREIGN KEY (autor_id) REFERENCES autor(id)
);

-- Tabla para almacenar comentarios de los usuarios en los vídeos
CREATE TABLE comentario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    contenido TEXT NOT NULL,
    fecha_comentario DATE
);

-- Tabla para almacenar revisiones de los usuarios sobre los vídeos
CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    puntuacion INT,
    comentario TEXT
);

-- Tabla para almacenar la interacción de los usuarios con los vídeos
CREATE TABLE interaccion_usuario_video (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    video_id INT,
    comentario_id INT,
    review_id INT,
    fecha_interaccion DATE,
    CONSTRAINT fk_usuario_interaccion FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    CONSTRAINT fk_video_interaccion FOREIGN KEY (video_id) REFERENCES video(id),
    CONSTRAINT fk_comentario_interaccion FOREIGN KEY (comentario_id) REFERENCES comentario(id),
    CONSTRAINT fk_review_interaccion FOREIGN KEY (review_id) REFERENCES review(id)
);