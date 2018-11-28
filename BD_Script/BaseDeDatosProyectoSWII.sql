-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema basesw
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `basesw` ;

-- -----------------------------------------------------
-- Schema basesw
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `basesw` DEFAULT CHARACTER SET latin1 ;
USE `basesw` ;

-- -----------------------------------------------------
-- Table `basesw`.`ciclo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`ciclo` ;

CREATE TABLE IF NOT EXISTS `basesw`.`ciclo` (
  `IDCICLO` INT(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(30) NOT NULL,
  `FECHAINICIO` DATE NOT NULL,
  `FECHAFIN` DATE NOT NULL,
  PRIMARY KEY (`IDCICLO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`laboratorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`laboratorio` ;

CREATE TABLE IF NOT EXISTS `basesw`.`laboratorio` (
  `IDLABORATORIO` INT(11) NOT NULL AUTO_INCREMENT,
  `NUMERO` INT(5) NOT NULL,
  `NOMBRE` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`IDLABORATORIO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`materia` ;

CREATE TABLE IF NOT EXISTS `basesw`.`materia` (
  `IDMATERIA` INT(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` VARCHAR(50) NOT NULL,
  `CODIGO` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`IDMATERIA`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`horario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`horario` ;

CREATE TABLE IF NOT EXISTS `basesw`.`horario` (
  `IDHORARIO` INT(11) NOT NULL AUTO_INCREMENT,
  `IDLABORATORIO` INT(11) NOT NULL,
  `IDMATERIA` INT(11) NOT NULL,
  `IDCICLO` INT(11) NOT NULL,
  `HORADEINICIO` INT NOT NULL,
  `HORADEFIN` INT NOT NULL,
  `DIA` INT NOT NULL,
  PRIMARY KEY (`IDHORARIO`),
  INDEX `FK_HORARIO_LABORATORIO1` (`IDLABORATORIO` ASC),
  INDEX `FK_HORARIO_CICLO` (`IDCICLO` ASC),
  INDEX `FK_HORARIO_MATERIA` (`IDMATERIA` ASC),
  CONSTRAINT `FK_HORARIO_CICLO`
    FOREIGN KEY (`IDCICLO`)
    REFERENCES `basesw`.`ciclo` (`IDCICLO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_HORARIO_LABORATORIO1`
    FOREIGN KEY (`IDLABORATORIO`)
    REFERENCES `basesw`.`laboratorio` (`IDLABORATORIO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_HORARIO_MATERIA`
    FOREIGN KEY (`IDMATERIA`)
    REFERENCES `basesw`.`materia` (`IDMATERIA`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`tipopersona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`tipopersona` ;

CREATE TABLE IF NOT EXISTS `basesw`.`tipopersona` (
  `IDTIPOPERSONA` INT(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` CHAR(30) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL,
  PRIMARY KEY (`IDTIPOPERSONA`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`persona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`persona` ;

CREATE TABLE IF NOT EXISTS `basesw`.`persona` (
  `IDPERSONA` INT(11) NOT NULL AUTO_INCREMENT,
  `NOMBRECOMPLETO` VARCHAR(100) NOT NULL,
  `IDENTIFICACIONPERSONAL` VARCHAR(50) NOT NULL,
  `IDTIPOPERSONA` INT(11) NOT NULL,
  PRIMARY KEY (`IDPERSONA`),
  CONSTRAINT `FK_PERSONA_TIPOPERSONA`
    FOREIGN KEY (`IDTIPOPERSONA`)
    REFERENCES `basesw`.`tipopersona` (`IDTIPOPERSONA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`usuario` ;

CREATE TABLE IF NOT EXISTS `basesw`.`usuario` (
  `IDUSUARIO` INT(11) NOT NULL AUTO_INCREMENT,
  `IDPERSONA` INT(11) NOT NULL,
  `NOMBREUSUARIO` VARCHAR(20) NOT NULL,
  `CORREO` VARCHAR(45) NOT NULL,
  `PASSWORD` VARCHAR(32) NOT NULL,
  `ESTADO` VARCHAR(15) NULL,
  PRIMARY KEY (`IDUSUARIO`),
  INDEX `FK_USUARIO_PERSONA` (`IDPERSONA` ASC),
  CONSTRAINT `FK_USUARIO_PERSONA`
    FOREIGN KEY (`IDPERSONA`)
    REFERENCES `basesw`.`persona` (`IDPERSONA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `basesw`.`reservalaboratorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `basesw`.`reservalaboratorio` ;

CREATE TABLE IF NOT EXISTS `basesw`.`reservalaboratorio` (
  `IDRESERVALABORATORIO` INT(11) NOT NULL AUTO_INCREMENT,
  `IDLABORATORIO` INT(11) NOT NULL,
  `IDUSUARIO` INT(11) NOT NULL,
  `MOTIVORESERVA` VARCHAR(60) NOT NULL,
  `HORADEINICIO` INT NOT NULL,
  `HORADEFIN` INT NOT NULL,
  `FECHA` DATE NOT NULL,
  `ESTADORESERVA` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`IDRESERVALABORATORIO`),
  INDEX `FK_RESERVALABORATORIO_USUARIO` (`IDUSUARIO` ASC),
  INDEX `FK_RESERVALABORATORIO_LABORATORIO` (`IDLABORATORIO` ASC),
  CONSTRAINT `FK_RESERVALABORATORIO_LABORATORIO`
    FOREIGN KEY (`IDLABORATORIO`)
    REFERENCES `basesw`.`laboratorio` (`IDLABORATORIO`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_RESERVALABORATORIO_USUARIO`
    FOREIGN KEY (`IDUSUARIO`)
    REFERENCES `basesw`.`usuario` (`IDUSUARIO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;

INSERT INTO `basesw`.`tipopersona` (`NOMBRE`) VALUES ('Administrador');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
