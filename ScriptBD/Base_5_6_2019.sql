-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: basesw
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrera`
--

DROP TABLE IF EXISTS `carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `carrera` (
  `IDCARRERA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(80) NOT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDCARRERA`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrera`
--

LOCK TABLES `carrera` WRITE;
/*!40000 ALTER TABLE `carrera` DISABLE KEYS */;
INSERT INTO `carrera` VALUES (1,'Ingeniería en Sistemas Informáticos y de Computación','ACTIVO'),(2,'Ingeniería en Computación','ACTIVO'),(3,'Ingeniería en Software','ACTIVO');
/*!40000 ALTER TABLE `carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciclo`
--

DROP TABLE IF EXISTS `ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ciclo` (
  `IDCICLO` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(30) NOT NULL,
  `FECHAINICIO` datetime NOT NULL,
  `FECHAFIN` datetime NOT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDCICLO`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciclo`
--

LOCK TABLES `ciclo` WRITE;
/*!40000 ALTER TABLE `ciclo` DISABLE KEYS */;
INSERT INTO `ciclo` VALUES (1,'Semestre 2018A','2018-01-01 00:00:00','2018-05-05 00:00:00','ACTIVO'),(3,'Semestre 2018B','2018-06-06 00:00:00','2018-12-12 00:00:00','ACTIVO'),(5,'Semestre 2019B','2019-06-06 00:00:00','2019-12-12 00:00:00','ACTIVO'),(6,'Semestre 2020A','2020-01-01 00:00:00','2020-05-05 00:00:00','ACTIVO'),(7,'Semestre 2020B','2020-06-06 00:00:00','2020-12-12 00:00:00','ACTIVO'),(12,'2019A','2019-01-01 00:00:00','2019-05-05 00:00:00','ACTIVO'),(13,'2019B','2019-10-10 00:00:00','2020-02-15 23:59:59','ACTIVO');
/*!40000 ALTER TABLE `ciclo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
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
  CONSTRAINT `FK_HORARIO_LABORATORIO1` FOREIGN KEY (`IDLABORATORIO`) REFERENCES `laboratorio` (`idlaboratorio`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_HORARIO_MATERIA` FOREIGN KEY (`IDMATERIA`) REFERENCES `materia` (`idmateria`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (40,2,1,3,8,11,4),(41,6,3,3,8,10,2),(42,1,4,5,8,7,2),(43,1,5,5,9,10,2),(44,1,2,5,7,10,1),(45,1,17,5,7,7,2),(46,1,35,5,7,8,3);
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laboratorio`
--

DROP TABLE IF EXISTS `laboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `laboratorio` (
  `IDLABORATORIO` int(11) NOT NULL AUTO_INCREMENT,
  `NUMERO` int(5) NOT NULL,
  `NOMBRE` varchar(30) NOT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDLABORATORIO`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laboratorio`
--

LOCK TABLES `laboratorio` WRITE;
/*!40000 ALTER TABLE `laboratorio` DISABLE KEYS */;
INSERT INTO `laboratorio` VALUES (1,301,'ALFA','ACTIVO'),(2,302,'Beta','ACTIVO'),(3,303,'Gamma','ACTIVO'),(4,304,'Delta','ACTIVO'),(5,305,'Epsilon','ACTIVO'),(6,306,'Kappa','ACTIVO'),(7,307,'Sigma','ACTIVO'),(8,308,'Lambda','ACTIVO');
/*!40000 ALTER TABLE `laboratorio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `materia` (
  `IDMATERIA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(160) DEFAULT NULL,
  `CODIGO` varchar(20) NOT NULL,
  `CARRERA` int(11) DEFAULT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDMATERIA`),
  KEY `FK_CARRERA` (`CARRERA`),
  CONSTRAINT `FK_CARRERA` FOREIGN KEY (`CARRERA`) REFERENCES `carrera` (`IDCARRERA`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'ING SOFTWARE II','SIC744',1,'ACTIVO'),(2,'Administración de Empresas','SIC555',NULL,'ACTIVO'),(3,'ADMINISTRACION DE BASE DE DATOS','SIC744',1,'ACTIVO'),(4,'ADMINISTRACION DE SISTEMAS OPERATIVOS Y REDES','SIC714',1,'ACTIVO'),(5,'ADMINISTRACION FINANCIERA','SIC613',1,'ACTIVO'),(6,'ALGORITMOS','SIC324',1,'ACTIVO'),(7,'ALGORITMOS NUMERICOS','SIC412',1,'ACTIVO'),(8,'APLICACIONES EN AMBIENTES LIBRES','SIC644',1,'ACTIVO'),(9,'APLICACIONES EN AMBIENTES PROPIETARIOS','SIC554',1,'ACTIVO'),(10,'APLICACIONES MOVILES','SIC764',1,'ACTIVO'),(11,'APLICACIONES WEB','SIC754',1,'ACTIVO'),(12,'ARQUITECTURA DE COMPUTADORES','SIC316',1,'ACTIVO'),(13,'AUDITORIA Y EVALUACION DE SISTEMAS COMPUTACIONALES','SIC816',1,'ACTIVO'),(15,'BASES DE DATOS DISTRIBUIDAS II','SIC534',1,'ACTIVO'),(16,'CALCULO VECTORIAL','MAT214',1,'ACTIVO'),(17,'CALIDAD DE SOFTWARE','SIC734',1,'ACTIVO'),(18,'CALIDAD DE SOFTWARE','SIC734',1,'ACTIVO'),(19,'CCNA CISCO','SIC854',1,'ACTIVO'),(20,'CERTIFICACION EN GERENCIA DE SEGURIDAD DE INFORMACION','SIC803',1,'ACTIVO'),(21,'COMPILADORES Y LENGUAJES','SIC424',1,'ACTIVO'),(22,'COMPUTACION DISTRIBUIDA','SIC616',1,'ACTIVO'),(23,'CP-BASES DE DATOS','ICCR464CP',1,'ACTIVO'),(24,'CP-CALCULO VECTORIAL','MATR224CP',1,'ACTIVO'),(25,'CP-ESTRUCTURA DE DATOS','ICCR363CP',1,'ACTIVO'),(26,'CURSO DE ACTUALIZACION','CAP001',1,'ACTIVO'),(27,'CURSO DE ACTUALIZACION','CAP002',1,'ACTIVO'),(28,'DISEÑO DE PROCESOS ORGANIZACIONALES','SIC623',1,'ACTIVO'),(29,'ECOLOGIA Y MEDIO AMBIENTE','EMA313',1,'ACTIVO'),(30,'ESTRUCTURAS DE DATOS','SIC334',1,'ACTIVO'),(31,'EXAMEN COMPLEXIVO','EXCOM1',1,'ACTIVO'),(32,'GESTION DE PROYECTOS','SIC434',1,'ACTIVO'),(33,'GESTION DE SEGURIDAD INFORMATICA','SIC814',1,'ACTIVO'),(34,'GESTION DE TIC Y UNIDADES INFORMATICAS','SIC826',1,'ACTIVO'),(35,'GNU LINUX','SIC864',1,'ACTIVO'),(36,'HABILIDADES DIRECTIVAS','SIC774',1,'ACTIVO'),(37,'INGENIERIA DE SOFTWARE I','SIC544',1,'ACTIVO'),(38,'INGENIERIA DE SOFTWARE II','SIC634',1,'ACTIVO'),(39,'INTELIGENCIA ARTIFICIAL','SIC524',1,'ACTIVO'),(40,'INTELIGENCIA DE NEGOCIOS','SIC614',1,'ACTIVO'),(41,'INTRODUCCION AL DESARROLLO WEB','SIC694',1,'ACTIVO'),(42,'LEGISLACION INFORMATICA','ADM612',1,'ACTIVO'),(43,'MATEMATICAS DISCRETAS','MAT304',1,'ACTIVO'),(44,'OPTATIVA DE FORMACION PROFESIONAL III','SIC824',1,'ACTIVO'),(45,'ORACLE CERTIFIED JAVA PROGRAMMER','SIC704',1,'ACTIVO'),(46,'PLANES DE NEGOCIOS TIC','SIC884',1,'ACTIVO'),(47,'PROGRAMACION II','SIC216',1,'ACTIVO'),(48,'PROYECTO DE TITULACION','PTP001',1,'ACTIVO'),(49,'PROYECTOS DE INVESTIGACION','TIT001',1,'ACTIVO'),(50,'PROYECTOS INTEGRADORES','TIT002',1,'ACTIVO'),(51,'REDES DE COMPUTADORAS','SIC416',1,'ACTIVO'),(52,'SEMILLEROS Y PROYECTOS PROFESIONALES','SIC664',1,'ACTIVO'),(53,'SEMINARIO PROFESIONAL I','SIC311',1,'ACTIVO'),(54,'SIG EN AMBIENTES PROPIETARIOS','SIC604',1,'ACTIVO'),(55,'SISTEMAS DE COMUNICACION','SIC314',1,'ACTIVO'),(56,'SISTEMAS OPERATIVOS','SIC414',1,'ACTIVO'),(57,'TALLER DE FORMULACION DE PROYECTOS DE TITULACION','SIC812',1,'ACTIVO'),(58,'TCP/IP','SIC516',1,'ACTIVO'),(59,'TECNOLOGIAS DE SEGURIDAD','SIC514',1,'ACTIVO'),(60,'TECNOLOGIAS WEB CON JAVASCRIPT','SIC8B4',1,'ACTIVO'),(61,'Mecánica Newtoniana','FISR124',2,'ACTIVO'),(62,'Comunicación Oral y Escrita','CSHR112',2,'ACTIVO'),(63,'Cálculo en una variable','MATR124',2,'ACTIVO'),(64,'Algebra Lineal','MATR114',2,'ACTIVO'),(65,'Fundamentos de Programación','ICCR153',2,'ACTIVO'),(66,'Fundamentos de Ciencias de la Computación','ICCR163',2,'ACTIVO'),(67,'Electricidad y Magnetismo','FISR214',2,'ACTIVO'),(68,'Cálculo Vectorial','MATR224',2,'ACTIVO'),(69,'Ecuaciones Diferenciales Ordinarias','MATR214',2,'ACTIVO'),(70,'Arquitectura de Computadores','ICCR243',2,'ACTIVO'),(71,'Programación Orientada a Objetos','ICCR253',2,'ACTIVO'),(72,'Análisis Socioeconómico y Político del Ecuador','CSHR212',2,'ACTIVO'),(73,'Asignatura de Artes y Humanidades','CSHR300',2,'ACTIVO'),(74,'Sistemas de Comunicación','ICCR323',2,'ACTIVO'),(75,'Matemáticas Discretas','ICCR334',2,'ACTIVO'),(76,'Sistemas Operativos','ICCR343',2,'ACTIVO'),(77,'Compiladores y Lenguajes','ICCR353',2,'ACTIVO'),(78,'Estructura de Datos','ICCR363',2,'ACTIVO'),(79,'Analisis socioeconómico y politico del mundo contemporaneo','CSHR222',2,'ACTIVO'),(80,'Probabilidad y Estadística','MATR234',2,'ACTIVO'),(81,'Redes de Computadores','ICCR433',2,'ACTIVO'),(82,'Multiprocesamiento y Arquitecturas Alternativas','ICCR443',2,'ACTIVO'),(83,'Algoritmos','ICCR452',2,'ACTIVO'),(84,'Bases de Datos','ICCR464',2,'ACTIVO'),(85,'Métodos Numéricos','ICCR472',2,'ACTIVO'),(86,'Asignatura de Economía y Sociedad','CSHR400',2,'ACTIVO'),(87,'Ecología y Ambiente','AMBR512',2,'ACTIVO'),(88,'Internetworking','ICCR533',2,'ACTIVO'),(89,'Fundamentos de Ingeniería de Software','ICCR544',2,'ACTIVO'),(90,'Bases de Datos Distribuidas','ICCR554',2,'ACTIVO'),(91,'Inteligencia Artificial','ICCR563',2,'ACTIVO'),(92,'Computación Distribuida','ICCR613',2,'ACTIVO'),(93,'Ingeniería de Software','ICCR624',2,'ACTIVO'),(94,'Interacción Humano Computador','ICCR632',2,'ACTIVO'),(95,'Inteligencia de Negocios','ICCR644',2,'ACTIVO'),(96,'Computación Gráfica','ICCR653',2,'ACTIVO'),(97,'Diseño y Construcción de Software','ICCR662',2,'ACTIVO'),(98,'Asignatura de Formación Profesional','ICCR672',2,'ACTIVO'),(99,'Tecnologías de Seguridad','ICCR714',2,'ACTIVO'),(100,'Verificación y Validación de Software','ICCR724',2,'ACTIVO'),(101,'Aplicaciones Web','ICCR733',2,'ACTIVO'),(102,'Aplicaciones Móviles','ICCR743',2,'ACTIVO'),(103,'Formación de Emprendedores','ICCR812',2,'ACTIVO'),(104,'Seguridad Informática','ICCR824',2,'ACTIVO'),(105,'Auditoría Informática','ICCR833',2,'ACTIVO'),(106,'Evaluación de TICs','ICCR842',2,'ACTIVO'),(107,'Gestión de Proyectos','ICCR853',2,'ACTIVO'),(108,'Administración Financiera','ADMR722',2,'ACTIVO'),(109,'Taller de Titulación Inicial','ICCR913',2,'ACTIVO'),(110,'Recuperación y Búsqueda de Información','ICCR924',2,'ACTIVO'),(111,'Comportamiento humano en las organizaciones','ADMR742',2,'ACTIVO'),(112,'Gestión Organizacional','ADMR712',2,'ACTIVO'),(113,'Computación y Sociedad','ICCR952',2,'ACTIVO'),(114,'Metodología de la Investigación','TITR212',2,'ACTIVO'),(115,'Taller de Titulación Final','ICCR013',2,'ACTIVO'),(116,'Introducción a Modelos y Simulación','ICCR701',2,'ACTIVO'),(117,'Modelamiento y Simulación Avanzados','ICCR801',2,'ACTIVO'),(118,'Aprendizaje de Máquina','ICCR901',2,'ACTIVO'),(119,'Métodos Formales para la Ingeniería de Software','ICCR702',2,'ACTIVO'),(120,'Herramientas y Ambientes para Ingeniería de Software','ICCR802',2,'ACTIVO'),(121,'Modelos para la Calidad de Software','ICCR902',2,'ACTIVO'),(122,'Virtualización y Cloud Computing','ICCR703',2,'ACTIVO'),(123,'Computación Forense','ICCR803',2,'ACTIVO'),(124,'Criptografía','ICCR903',2,'ACTIVO'),(125,'Mecánica Newtoniana','FISR124',3,'ACTIVO'),(126,'Comunicación Oral y Escrita','CSHR112',3,'ACTIVO'),(127,'Cálculo en una variable','MATR124',3,'ACTIVO'),(128,'Algebra Lineal','MATR114',3,'ACTIVO'),(129,'Fundamentos de Ciencias de la Computación','ISWR153',3,'ACTIVO'),(130,'Arquitectura de Computadores','ISWR163',3,'ACTIVO'),(131,'Electricidad y Magnetismo','FISR214',3,'ACTIVO'),(132,'Cálculo Vectorial','MATR224',3,'ACTIVO'),(133,'Ecuaciones Diferenciales Ordinarias','MATR214',3,'ACTIVO'),(134,'Análisis Socioeconómico y Político del Ecuador','CSHR212',3,'ACTIVO'),(135,'Fundamentos de Programación','ISWR253',3,'ACTIVO'),(136,'Compiladores y Lenguajes','ISWR263',3,'ACTIVO'),(137,'Asignatura de Artes y Humanidades','CSHR300',3,'ACTIVO'),(138,'Análisis socioeconómico y politico del mundo contemporaneo','CSHR222',3,'ACTIVO'),(139,'Probabilidad y Estadística','MATR234',3,'ACTIVO'),(140,'Asignatura de Economía y Sociedad','CSHR400',3,'ACTIVO'),(141,'Programación Orientada a Objetos','ISWR343',3,'ACTIVO'),(142,'Bases de Datos','ISWR354',3,'ACTIVO'),(143,'Sistemas Operativos','ISWR363',3,'ACTIVO'),(144,'Comunicación Profesional','CSHR362',3,'ACTIVO'),(145,'Ecología y Ambiente','AMBR512',3,'ACTIVO'),(146,'Fundamentos de Ingeniería de Software','ISWR434',3,'ACTIVO'),(147,'Algoritmos','ISWR442',3,'ACTIVO'),(148,'Estructura de Datos','ISWR453',3,'ACTIVO'),(149,'Bases de Datos Distribuídas','ISWR464',3,'ACTIVO'),(150,'Redes de Computadores','ISWR473',3,'ACTIVO'),(151,'Modelamiento y Diseño de Software','ISWR514',3,'ACTIVO'),(152,'Ingeniería de Requerimientos','ISWR524',3,'ACTIVO'),(153,'Gestión de la Configuración de Software','ISWR533',3,'ACTIVO'),(154,'Interacción Humano Computador','ISWR542',3,'ACTIVO'),(155,'Fundamentos de Sistemas de Información','ISWR553',3,'ACTIVO'),(156,'Tecnologías de Seguridad','ISWR564',3,'ACTIVO'),(157,'Metodologías Ágiles','ISWR614',3,'ACTIVO'),(158,'Aplicaciones Web','ISWR624',3,'ACTIVO'),(159,'Computación Gráfica','ISWR633',3,'ACTIVO'),(160,'Desarrollo de software seguro','ISWR643',3,'ACTIVO'),(161,'Automatización de Procesos','ISWR652',3,'ACTIVO'),(162,'Inteligencia de Negocios','ISWR664',3,'ACTIVO'),(163,'Construcción de Software','ISWR713',3,'ACTIVO'),(164,'Aplicaciones Móviles','ISWR724',3,'ACTIVO'),(165,'Desarrollo de Juegos Interactivos','ISWR733',3,'ACTIVO'),(166,'Administración Financiera','ADMR722',3,'ACTIVO'),(167,'Asignatura de Itinerario Básico','ISWR700',3,'ACTIVO'),(168,'Verificación y Validación de Software','ISWR814',3,'ACTIVO'),(169,'Usabilidad y Accesibilidad','ISWR824',3,'ACTIVO'),(170,'Gestión Organizacional','ADM712',3,'ACTIVO'),(171,'Inteligencia Artificial','ISWR844',3,'ACTIVO'),(172,'Formación de Emprendedores','ISWR852',3,'ACTIVO'),(173,'Calidad de Software','ISWR914',3,'ACTIVO'),(174,'Auditoría Informática','ISWR923',3,'ACTIVO'),(175,'Fundamentos de Diseño de Proyecto Senior','ISWR933',3,'ACTIVO'),(176,'Computación y sociedad','ISWR012',3,'ACTIVO'),(177,'Metodología de la Investigación','TITR212',3,'ACTIVO'),(178,'Formulación y evaluación de proyectos','TITR622',3,'ACTIVO'),(179,'Proyecto Senior ó Taller de Titulación','ISWR044',3,'ACTIVO'),(180,'Formulación, Desarrollo y Sistematización del Proyecto de Titulación','ISWR050',3,'ACTIVO'),(181,'Asignatura de Itinerario Intermedio','ISWR800',3,'ACTIVO'),(182,'Asignatura de Itinerario Avanzado','ISWR900',3,'ACTIVO'),(183,'Ambientes para Computación Ubicua','ISW701',3,'ACTIVO'),(184,'Computación Ubicua Web','ISW801',3,'ACTIVO'),(185,'Computación Ubicua Móvil','ISW901',3,'ACTIVO'),(186,'Computación Distribuida','ISW702',3,'ACTIVO'),(187,'Criptografía','ISW802',3,'ACTIVO'),(188,'Programación Segura','ISW902',3,'ACTIVO'),(189,'Almacenamiento y Recuperación de Infromación','ISW703',3,'ACTIVO'),(190,'Web Semántica','ISW803',3,'ACTIVO'),(191,'Sitemas Información de Especializacion','ISW903',3,'ACTIVO'),(192,'Electrónica','SIC666',1,'ACTIVO');
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `persona` (
  `IDPERSONA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRECOMPLETO` varchar(100) NOT NULL,
  `IDENTIFICACIONPERSONAL` varchar(50) DEFAULT NULL,
  `IDTIPOPERSONA` int(11) NOT NULL,
  `CORREO` varchar(60) DEFAULT NULL,
  `ESTADO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IDPERSONA`),
  KEY `FK_PERSONA_TIPOPERSONA` (`IDTIPOPERSONA`),
  CONSTRAINT `FK_PERSONA_TIPOPERSONA` FOREIGN KEY (`IDTIPOPERSONA`) REFERENCES `tipopersona` (`idtipopersona`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'Isaac Pilatuña','1723744445',1,'isaac.pilatuna@epn.edu.ec',NULL),(2,'Sofía Guerrero','1723744445',1,'sofia.guerrero@epn.edu.ec',NULL),(3,'Josué Díaz','1723744445',1,'josue.diaz@epn.edu.ec',NULL),(4,'César Balcazar','1723744445',1,'cesar.balcazar@epn.edu.ec',NULL),(5,'Juan Martinez','1725056459',2,'juan.martinez@epn.edu.ec',NULL),(6,'HERNANDEZ ALVAREZ MYRIAM BEATRIZ',NULL,2,'myriam.hernandez@epn.edu.ec',NULL),(7,'TENEMAZA VERA REGINA MARITZOL',NULL,2,'maritzol.tenemaza@epn.edu.ec',NULL),(8,'PEÑAFIEL AGUILAR MIRIAN GUADALUPE',NULL,2,'myriam.penafiel@epn.edu.ec',NULL),(9,'HALLO CARRASCO MARIA ASUNCION',NULL,2,'maria.hallo@epn.edu.ec',NULL),(10,'MAFLA GALLEGOS LUIS ENRIQUE',NULL,2,'enrique.mafla@epn.edu.ec',NULL),(11,'AGUIAR PONTES JOSAFA DE JESUS',NULL,2,'josafa.aguiar@epn.edu.ec',NULL),(12,'BENALCAZAR PALACIOS MARCO ENRIQUE',NULL,2,'marco.benalcazar@epn.edu.ec',NULL),(13,'PEREZ HERNANDEZ MARIA GABRIELA',NULL,2,'maria.perez@epn.edu.ec',NULL),(14,'SANCHEZ GORDON SANDRA PATRICIA',NULL,2,'sandra.sanchez@epn.edu.ec',NULL),(15,'VINTIMILLA JARAMILLO LUZ MARINA',NULL,2,'marina.vintimilla@epn.edu.ec',NULL),(16,'CARRERA IZURIETA IVAN MARCELO',NULL,2,'ivan.carrera@epn.edu.ec',NULL),(17,'INTRIAGO PAZMIÑO MARIA MONSERRATE',NULL,2,'monserrate.intriago@epn.edu.ec',NULL),(18,'LUCIO NARANJO JOSE FRANCISCO',NULL,2,'jose.lucio@epn.edu.ec',NULL),(19,'MONTENEGRO ARMAS CARLOS ESTALESMIT WILLAM',NULL,2,'carlos.montenegro@epn.edu.ec',NULL),(20,'NAVARRETE RUEDA ROSA DEL CARMEN',NULL,2,'rosa.navarrete@epn.edu.ec',NULL),(21,'SANTORUM GAIBOR MARCO OSWALDO',NULL,2,'marco.santorum@epn.edu.ec',NULL),(22,'FLORES ARMAS DENYS ALBERTO',NULL,2,'denys.flores@epn.edu.ec',NULL),(23,'CALLE JIMENEZ TANIA ELIZABETH',NULL,2,'tania.calle@epn.edu.ec',NULL),(24,'TORRES OLMEDO JENNY GABRIELA',NULL,2,'jenny.torres@epn.edu.ec',NULL),(25,'CORDOVA BAYAS MARCOS RAUL',NULL,2,'raul.cordova@epn.edu.ec',NULL),(26,'FLORES NARANJO PAMELA CATHERINE',NULL,2,'pamela.flores@epn.edu.ec',NULL),(27,'BARONA LOPEZ LORENA ISABEL',NULL,2,'lorena.barona@epn.edu.ec',NULL),(28,'EGUEZ SARZOSA VICENTE ADRIAN',NULL,2,'adrian.eguez@epn.edu.ec',NULL),(29,'LOZA AGUIRRE EDISON FERNANDO',NULL,2,'edison.loza@epn.edu.ec',NULL),(30,'PAZ ARIAS HENRY PATRICIO',NULL,2,'henry.paz@epn.edu.ec',NULL),(31,'YOO SANG GUUN',NULL,2,'sang.yoo@epn.edu.ec',NULL),(32,'LARCO AMPUDIA ENRIQUE ANDRES',NULL,2,'andres.larco@epn.edu.ec',NULL),(33,'MIER ARAUJO SUSANA PIEDAD',NULL,2,'susana.mier@epn.edu.ec',NULL),(34,'YANEZ QUESADA EDDIE HANS',NULL,2,'eddie.yanez@epn.edu.ec',NULL),(35,'CARRION TORO MAYRA DEL CISNE',NULL,2,'mayra.carrion@epn.edu.ec',NULL),(36,'IÑIGUEZ JARRIN CARLOS EFRAIN',NULL,2,'carlos.iniguez@epn.edu.ec',NULL),(37,'SANDOBALIN GUAMAN JULIO CESAR',NULL,2,'julio.sandobalin@epn.edu.ec',NULL),(38,'YACCHIREMA VARGAS DIANA CECILIA',NULL,2,'diana.yacchirema@epn.edu.ec',NULL),(39,'ANCHUNDIA VALENCIA CARLOS EDUARDO',NULL,2,'carlos.anchundia@epn.edu.ec',NULL),(40,'BARRIGA ANDRADE JHONATTAN JAVIER',NULL,2,'jhonattan.barriga@epn.edu.ec',NULL),(41,'GALINDO LOSADA JULIAN ANDRES',NULL,2,'julian.galindo@epn.edu.ec',NULL),(42,'SUNTAXI OÑA GABRIELA LORENA',NULL,2,'gabriela.suntaxi@epn.edu.ec',NULL),(43,'ZAMBRANO RODRIGUEZ PATRICIO XAVIER',NULL,2,'patricio.zambrano@epn.edu.ec',NULL),(44,'BETANCOURT MENDOZA NANCY CRISTINA',NULL,2,'nancy.betancourt@epn.edu.ec',NULL),(45,'CAMPAÑA ORTEGA EDUARDO MAURICIO',NULL,2,'eduardo.campana@epn.edu.ec',NULL),(46,'CEVALLOS TERAN CARLOS XAVIER',NULL,2,'carlos.cevallost@epn.edu.ec',NULL),(47,'CHANCUSIG CHUQUILLA RODRIGO FABIAN',NULL,2,'rodrigo.chancusig@epn.edu.ec',NULL),(48,'FUERTES DIAZ WALTER MARCELO',NULL,2,'walter.fuertes@epn.edu.ec',NULL),(49,'GAVILANES SAGÑAY FREDY MARCELO',NULL,2,'fredy.gavilanes@epn.edu.ec',NULL),(50,'GUERRERO FLOR MARCO SEBASTIAN',NULL,2,'sebastian.guerrero@epn.edu.ec',NULL),(51,'LOPEZ CHULCA CINDY PAMELA',NULL,2,'cindy.lopez@epn.edu.ec',NULL),(52,'MALDONADO RUIZ DANIEL ALEJANDRO',NULL,2,'daniel.maldonado02@epn.edu.ec',NULL),(53,'MOLINA BUSTAMANTE MARCO EDUARDO',NULL,2,'marco.molinab@epn.edu.ec',NULL),(54,'SEGURA MORALES MARCO ANTONIO',NULL,2,'marco.segura@epn.edu.ec',NULL),(55,'HERRERA SILVA JUAN ALBERTO',NULL,2,'juan.herrera@epn.edu.ec',NULL),(56,'BONILLA JATIVA CARLOS ARTURO RAMON',NULL,2,'carlos.bonilla@epn.edu.ec',NULL),(57,'AGUILAR BARRERA SUSANA DE LOS ANGELES',NULL,2,'susana.aguilar@epn.edu.ec',NULL),(58,'ANDRADE HINOJOSA WILLIAM HUMBERTO',NULL,2,'william.andrade@epn.edu.ec',NULL),(59,'NOBOA CRUZ SHEILA LORENA',NULL,2,'sheila.noboa@epn.edu.ec',NULL),(60,'CHANCUSIG ESPIN BERNARDINO',NULL,2,'bernardo.chancusig@epn.edu.ec',NULL),(61,'TORRES PROAÑO EDGAR PORFIRIO',NULL,2,'edgar.torres@epn.edu.ec',NULL),(62,'CARRILLO CALDERON SANTIAGO ROBERTO',NULL,2,'santiago.carrillo@epn.edu.ec',NULL),(63,'CARRASCO DELHY LUIS FERNANDO',NULL,2,'luis.carrasco@epn.edu.ec',NULL),(64,'ORQUERA ANDRADE LUIS MIGUEL',NULL,2,'luis.orquera@epn.edu.ec',NULL),(65,'ECHEVERRIA CULQUI HENRY MANOLO',NULL,2,'henry.echeverria@epn.edu.ec',NULL),(66,'Sofia','132132',1,'sofig.0106@gmail.com',NULL);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservalaboratorio`
--

DROP TABLE IF EXISTS `reservalaboratorio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reservalaboratorio` (
  `IDRESERVALABORATORIO` int(11) NOT NULL AUTO_INCREMENT,
  `IDLABORATORIO` int(11) NOT NULL,
  `MOTIVORESERVA` varchar(60) NOT NULL,
  `HORADEINICIO` int(11) NOT NULL,
  `HORADEFIN` int(11) NOT NULL,
  `FECHA` date NOT NULL,
  `ESTADORESERVA` varchar(20) NOT NULL,
  `IDPERSONA` int(11) NOT NULL,
  PRIMARY KEY (`IDRESERVALABORATORIO`),
  KEY `FK_RESERVALABORATORIO_LABORATORIO` (`IDLABORATORIO`),
  KEY `FK_RESERVALABORATORIO_PERSONA_idx` (`IDPERSONA`),
  CONSTRAINT `FK_RESERVALABORATORIO_LABORATORIO` FOREIGN KEY (`IDLABORATORIO`) REFERENCES `laboratorio` (`IDLABORATORIO`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_RESERVALABORATORIO_PERSONA` FOREIGN KEY (`IDPERSONA`) REFERENCES `persona` (`IDPERSONA`)
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
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reservas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Anio` int(11) DEFAULT NULL,
  `Mes` int(11) DEFAULT NULL,
  `Dia` int(11) DEFAULT NULL,
  `Hora` int(11) DEFAULT NULL,
  `Minutos` int(11) DEFAULT NULL,
  `Aniofin` int(11) DEFAULT NULL,
  `Mesfin` int(11) DEFAULT NULL,
  `Diafin` int(11) DEFAULT NULL,
  `Horafin` int(11) DEFAULT NULL,
  `Minutosfin` int(11) DEFAULT NULL,
  `Subject` varchar(255) DEFAULT NULL,
  `Tipo` varchar(1) DEFAULT NULL,
  `Idlaboratorio` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (1,2019,0,29,15,0,2019,0,29,18,0,'test11','R',1),(3,2019,3,3,7,0,2019,3,3,8,0,'Prueba','R',1),(4,2019,3,2,8,0,2019,3,2,9,0,'kdkd','R',1),(5,2019,3,3,8,0,2019,3,3,9,0,'lll','R',3),(6,2019,3,2,8,0,2019,3,2,9,0,'kdkd','R',3),(7,2019,3,3,7,0,2019,3,3,8,0,'dddd','R',6),(8,2019,3,16,7,0,2019,3,16,8,0,'ddd','R',3),(9,2019,3,16,7,0,2019,3,16,8,0,'dddd','R',1),(11,2019,1,3,7,0,2019,1,3,8,0,'GNU LINUX','H',1);
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semana`
--

DROP TABLE IF EXISTS `semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `semana` (
  `IDSEMANA` int(11) NOT NULL AUTO_INCREMENT,
  `DIA` varchar(15) DEFAULT NULL,
  `NUMDIA` int(11) DEFAULT NULL,
  `HORAINICIO` int(11) DEFAULT NULL,
  `HORAFIN` int(11) DEFAULT NULL,
  `HORASTRING` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`IDSEMANA`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semana`
--

LOCK TABLES `semana` WRITE;
/*!40000 ALTER TABLE `semana` DISABLE KEYS */;
INSERT INTO `semana` VALUES (1,'Lunes',1,7,8,'07:00 - 08:00'),(2,'Lunes',1,8,9,'08:00 - 09:00'),(3,'Lunes',1,9,10,'09:00 - 10:00'),(4,'Lunes',1,10,11,'10:00 - 11:00'),(5,'Lunes',1,11,12,'11:00 - 12:00'),(6,'Lunes',1,12,13,'12:00 - 13:00'),(7,'Lunes',1,13,14,'13:00 - 14:00'),(8,'Lunes',1,14,15,'14:00 - 15:00'),(9,'Lunes',1,15,16,'15:00 - 16:00'),(10,'Lunes',1,16,17,'16:00 - 17:00'),(11,'Lunes',1,17,18,'17:00 - 18:00'),(12,'Lunes',1,18,19,'18:00 - 19:00'),(13,'Lunes',1,19,20,'19:00 - 20:00'),(14,'Lunes',1,20,21,'20:00 - 21:00'),(15,'Lunes',1,21,22,'21:00 - 22:00'),(16,'Martes',2,7,8,'07:00 - 08:00'),(17,'Martes',2,8,9,'08:00 - 09:00'),(18,'Martes',2,9,10,'09:00 - 10:00'),(19,'Martes',2,10,11,'10:00 - 11:00'),(20,'Martes',2,11,12,'11:00 - 12:00'),(21,'Martes',2,12,13,'12:00 - 13:00'),(22,'Martes',2,13,14,'13:00 - 14:00'),(23,'Martes',2,14,15,'14:00 - 15:00'),(24,'Martes',2,15,16,'15:00 - 16:00'),(25,'Martes',2,16,17,'16:00 - 17:00'),(26,'Martes',2,17,18,'17:00 - 18:00'),(27,'Martes',2,18,19,'18:00 - 19:00'),(28,'Martes',2,19,20,'19:00 - 20:00'),(29,'Martes',2,20,21,'20:00 - 21:00'),(30,'Martes',2,21,22,'21:00 - 22:00'),(31,'Miércoles',3,7,8,'07:00 - 08:00'),(32,'Miércoles',3,8,9,'08:00 - 09:00'),(33,'Miércoles',3,9,10,'09:00 - 10:00'),(34,'Miércoles',3,10,11,'10:00 - 11:00'),(35,'Miércoles',3,11,12,'11:00 - 12:00'),(36,'Miércoles',3,12,13,'12:00 - 13:00'),(37,'Miércoles',3,13,14,'13:00 - 14:00'),(38,'Miércoles',3,14,15,'14:00 - 15:00'),(39,'Miércoles',3,15,16,'15:00 - 16:00'),(40,'Miércoles',3,16,17,'16:00 - 17:00'),(41,'Miércoles',3,17,18,'17:00 - 18:00'),(42,'Miércoles',3,18,19,'18:00 - 19:00'),(43,'Miércoles',3,19,20,'19:00 - 20:00'),(44,'Miércoles',3,20,21,'20:00 - 21:00'),(45,'Miércoles',3,21,22,'21:00 - 22:00'),(46,'Jueves',4,7,8,'07:00 - 08:00'),(47,'Jueves',4,8,9,'08:00 - 09:00'),(48,'Jueves',4,9,10,'09:00 - 10:00'),(49,'Jueves',4,10,11,'10:00 - 11:00'),(50,'Jueves',4,11,12,'11:00 - 12:00'),(51,'Jueves',4,12,13,'12:00 - 13:00'),(52,'Jueves',4,13,14,'13:00 - 14:00'),(53,'Jueves',4,14,15,'14:00 - 15:00'),(54,'Jueves',4,15,16,'15:00 - 16:00'),(55,'Jueves',4,16,17,'16:00 - 17:00'),(56,'Jueves',4,17,18,'17:00 - 18:00'),(57,'Jueves',4,18,19,'18:00 - 19:00'),(58,'Jueves',4,19,20,'19:00 - 20:00'),(59,'Jueves',4,20,21,'20:00 - 21:00'),(60,'Jueves',4,21,22,'21:00 - 22:00'),(61,'Viernes',5,7,8,'07:00 - 08:00'),(62,'Viernes',5,8,9,'08:00 - 09:00'),(63,'Viernes',5,9,10,'09:00 - 10:00'),(64,'Viernes',5,10,11,'10:00 - 11:00'),(65,'Viernes',5,11,12,'11:00 - 12:00'),(66,'Viernes',5,12,13,'12:00 - 13:00'),(67,'Viernes',5,13,14,'13:00 - 14:00'),(68,'Viernes',5,14,15,'14:00 - 15:00'),(69,'Viernes',5,15,16,'15:00 - 16:00'),(70,'Viernes',5,16,17,'16:00 - 17:00'),(71,'Viernes',5,17,18,'17:00 - 18:00'),(72,'Viernes',5,18,19,'18:00 - 19:00'),(73,'Viernes',5,19,20,'19:00 - 20:00'),(74,'Viernes',5,20,21,'20:00 - 21:00'),(75,'Viernes',5,21,22,'21:00 - 22:00'),(76,'Sábado',6,7,8,'07:00 - 08:00'),(77,'Sábado',6,8,9,'08:00 - 09:00'),(78,'Sábado',6,9,10,'09:00 - 10:00'),(79,'Sábado',6,10,11,'10:00 - 11:00'),(80,'Sábado',6,11,12,'11:00 - 12:00'),(81,'Sábado',6,12,13,'12:00 - 13:00'),(82,'Sábado',6,13,14,'13:00 - 14:00'),(83,'Sábado',6,14,15,'14:00 - 15:00'),(84,'Sábado',6,15,16,'15:00 - 16:00'),(85,'Sábado',6,16,17,'16:00 - 17:00'),(86,'Sábado',6,17,18,'17:00 - 18:00'),(87,'Sábado',6,18,19,'18:00 - 19:00'),(88,'Sábado',6,19,20,'19:00 - 20:00'),(89,'Sábado',6,20,21,'20:00 - 21:00'),(90,'Sábado',6,21,22,'21:00 - 22:00');
/*!40000 ALTER TABLE `semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipopersona`
--

DROP TABLE IF EXISTS `tipopersona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipopersona` (
  `IDTIPOPERSONA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` char(30) DEFAULT NULL,
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `IDUSUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `IDPERSONA` int(11) NOT NULL,
  `NOMBREUSUARIO` varchar(20) NOT NULL,
  `PASSWORD` varchar(60) NOT NULL,
  `ESTADO` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`IDUSUARIO`),
  KEY `FK_USUARIO_PERSONA` (`IDPERSONA`),
  CONSTRAINT `FK_USUARIO_PERSONA` FOREIGN KEY (`IDPERSONA`) REFERENCES `persona` (`IDPERSONA`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (3,1,'isaac','$2b$10$ZFsTBfm2t1aX3RI09gr6puPWVL/u/KkM.3249vElr70d55.9K1p.e','ACTIVO'),(4,17,'monse','$2b$10$sTqViWRQZ.Mp7JStlfzNfeNrHz2hk9OucfW3B6cWAa0smY5oAkhSu','ACTIVO'),(6,3,'admin','$2b$10$Od8d5hfIn0FFnJP2mR4Leu3zGk6E0ti15XgBknG/bFRXiYtb0jjRq','ACTIVO'),(7,66,'sofi','$2b$10$WUpOft25Gv/V/3jWHEtbXuZvy7ggfRFhRIM6Ie81WcYcJuANEKEbS','ACTIVO');
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

-- Dump completed on 2019-05-12 19:28:22
