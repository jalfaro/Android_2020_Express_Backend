CREATE TABLE `awa`.`contacto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(80) NULL,
  `telefono` VARCHAR(10) NULL,
  PRIMARY KEY (`id`));

