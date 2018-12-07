CREATE DATABASE  IF NOT EXISTS `basesw` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `basesw`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: basesw
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.34-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciclo` (
  `IDCICLO` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(30) NOT NULL,
  `FECHAINICIO` date NOT NULL,
  `FECHAFIN` date NOT NULL,
  PRIMARY KEY (`IDCICLO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclo`
--

LOCK TABLES `ciclo` WRITE;
/*!40000 ALTER TABLE `ciclo` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciclo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
  `IDHORARIO` int(11) NOT NULL AUTO_INCREMENT,
  `IDLABORATORIO` int(11) NOT NULL,
  `IDMATERIA` int(11) NOT NULL,
  `IDCICLO` int(11) NOT NULL,
  `HORADEINICIO` int(11) NOT NULL,
  `HORADEFIN` int(11) NOT NULL,
  `DIA` int(11) NOT NULL,
  PRIMARY KEY (`IDHORARIO`),
  KEY `FK_HORARIO_LABORATORIO1` (`IDLABORATORIO`),
  KEY `FK_HORARIO_CICLO` (`IDCICLO`),
  KEY `FK_HORARIO_MATERIA` (`IDMATERIA`),
  CONSTRAINT `FK_HORARIO_CICLO` FOREIGN KEY (`IDCICLO`) REFERENCES `ciclo` (`IDCICLO`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_HORARIO_LABORATORIO1` FOREIGN KEY (`IDLABORATORIO`) REFERENCES `laboratorio` (`IDLABORATORIO`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_HORARIO_MATERIA` FOREIGN KEY (`IDMATERIA`) REFERENCES `materia` (`IDMATERIA`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laboratorio`
--

DROP TABLE IF EXISTS `laboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `laboratorio` (
  `IDLABORATORIO` int(11) NOT NULL AUTO_INCREMENT,
  `NUMERO` int(5) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  PRIMARY KEY (`IDLABORATORIO`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laboratorio`
--

LOCK TABLES `laboratorio` WRITE;
/*!40000 ALTER TABLE `laboratorio` DISABLE KEYS */;
/*!40000 ALTER TABLE `laboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materia` (
  `IDMATERIA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(50) NOT NULL,
  `CODIGO` varchar(20) NOT NULL,
  PRIMARY KEY (`IDMATERIA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persona` (
  `IDPERSONA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRECOMPLETO` varchar(100) NOT NULL,
  `IDENTIFICACIONPERSONAL` varchar(50) DEFAULT NULL,
  `IDTIPOPERSONA` int(11) NOT NULL,
  `CORREO` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`IDPERSONA`),
  KEY `FK_PERSONA_TIPOPERSONA` (`IDTIPOPERSONA`),
  CONSTRAINT `FK_PERSONA_TIPOPERSONA` FOREIGN KEY (`IDTIPOPERSONA`) REFERENCES `tipopersona` (`IDTIPOPERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `reservalaboratorio`
--

DROP TABLE IF EXISTS `reservalaboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservalaboratorio` (
  `IDRESERVALABORATORIO` int(11) NOT NULL AUTO_INCREMENT,
  `IDLABORATORIO` int(11) NOT NULL,
  `IDUSUARIO` int(11) NOT NULL,
  `MOTIVORESERVA` varchar(60) NOT NULL,
  `HORADEINICIO` int(11) NOT NULL,
  `HORADEFIN` int(11) NOT NULL,
  `FECHA` date NOT NULL,
  `ESTADORESERVA` varchar(20) NOT NULL,
  PRIMARY KEY (`IDRESERVALABORATORIO`),
  KEY `FK_RESERVALABORATORIO_USUARIO` (`IDUSUARIO`),
  KEY `FK_RESERVALABORATORIO_LABORATORIO` (`IDLABORATORIO`),
  CONSTRAINT `FK_RESERVALABORATORIO_LABORATORIO` FOREIGN KEY (`IDLABORATORIO`) REFERENCES `laboratorio` (`IDLABORATORIO`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_RESERVALABORATORIO_USUARIO` FOREIGN KEY (`IDUSUARIO`) REFERENCES `usuario` (`IDUSUARIO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservalaboratorio`
--

LOCK TABLES `reservalaboratorio` WRITE;
/*!40000 ALTER TABLE `reservalaboratorio` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservalaboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipopersona`
--

DROP TABLE IF EXISTS `tipopersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipopersona` (
  `IDTIPOPERSONA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` char(30) CHARACTER SET utf8mb4 DEFAULT NULL,
  PRIMARY KEY (`IDTIPOPERSONA`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipopersona`
--

LOCK TABLES `tipopersona` WRITE;
/*!40000 ALTER TABLE `tipopersona` DISABLE KEYS */;
INSERT INTO `tipopersona` VALUES (1,'Administrador'),(2,'Profesor');
/*!40000 ALTER TABLE `tipopersona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `IDUSUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `IDPERSONA` int(11) NOT NULL,
  `NOMBREUSUARIO` varchar(20) NOT NULL,
  `PASSWORD` varchar(32) NOT NULL,
  `ESTADO` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`IDUSUARIO`),
  KEY `FK_USUARIO_PERSONA` (`IDPERSONA`),
  CONSTRAINT `FK_USUARIO_PERSONA` FOREIGN KEY (`IDPERSONA`) REFERENCES `persona` (`IDPERSONA`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-07 15:07:15
