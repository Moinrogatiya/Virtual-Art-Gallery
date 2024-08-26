CREATE DATABASE  IF NOT EXISTS `virtual_art_gallery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `virtual_art_gallery`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: virtual_art_gallery
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_name` varchar(255) DEFAULT NULL,
  `pincode` int NOT NULL,
  `city_id` int NOT NULL,
  PRIMARY KEY (`area_id`),
  KEY `city_id_idx` (`city_id`),
  CONSTRAINT `city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=265 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,'Civil Lines',282002,1),(2,'Khandari',282001,1),(3,'Ellisbridge',380006,2),(4,'Vastrapur',380015,2),(5,'Bung',796001,3),(6,'Khawrul',796002,3),(7,'Vaishali Nagar',305001,4),(8,'Kuchaman City',305001,4),(9,'Kashmiri Gate',202001,5),(10,'Raya',202001,5),(11,'Civil Lines',211001,6),(12,'Chowk',211002,6),(13,'Golden Temple',143001,7),(14,'Ranjit Avenue',143002,7),(15,'Bibi Ka Maqbara',431001,8),(16,'Adalatabad',431001,8),(17,'Koramangala',560034,9),(18,'Whitefield',560066,9),(19,'Habibganj',462024,10),(20,'MP Nagar',462011,10),(21,'Old Town',751002,11),(22,'Bapuji Nagar',751009,11),(23,'Sector 17',160017,12),(24,'Sector 34',160022,12),(25,'Adyar',600020,13),(26,'T. Nagar',600017,13),(27,'R.S. Puram',641002,14),(28,'Saibaba Colony',641011,14),(29,'Sadar',753001,15),(30,'Millenium City',753014,15),(31,'Rajpur Road',248001,16),(32,'Chukkuwala',248001,16),(33,'Connaught Place',110001,17),(34,'Dwarka',110075,17),(35,'Katras',828113,18),(36,'Jharia',828111,18),(37,'City Centre',713216,19),(38,'Benachity',713213,19),(39,'Sector 15',121002,20),(40,'Sector 21',121001,20),(41,'Sector 16',382016,21),(42,'Sector 21',382021,21),(43,'Indirapuram',201014,22),(44,'Vasundhara',201012,22),(45,'Panaji',403001,23),(46,'Margao',403601,23),(47,'Sector 29',122001,24),(48,'DLF Phase 1',122002,24),(49,'Dispur',781006,25),(50,'Ulubari',781007,25),(51,'Lashkar',474001,26),(52,'Morar',474006,26),(53,'Banjara Hills',500034,27),(54,'Secunderabad',500003,27),(55,'Keishampat',795001,28),(56,'Nagaram',795002,28),(57,'Rajendra Nagar',452012,29),(58,'Vijay Nagar',452010,29),(59,'Civil Lines',482001,30),(60,'Napier Town',482002,30),(61,'C-Scheme',302001,31),(62,'Malviya Nagar',302017,31),(63,'Model Town',144001,32),(64,'Civil Lines',144005,32),(65,'Gandhi Nagar',180004,33),(66,'Jammu Cantt',180003,33),(67,'Bistupur',831001,34),(68,'Golmuri',831002,34),(69,'Pal Road',342008,35),(70,'Ratanada',342001,35),(71,'Civil Lines',208001,36),(72,'Kalyanpur',208017,36),(73,'Ernakulam',682011,37),(74,'Kochi',682020,37),(75,'Ballygunge',700019,38),(76,'Howrah',711101,38),(77,'Vijaypur',324007,39),(78,'Kota Industrial Area',324005,39),(79,'Hazratganj',226001,40),(80,'Indira Nagar',226016,40),(81,'Ferozepur Road',141001,41),(82,'Civil Lines',141001,41),(83,'Tallakulam',625002,42),(84,'Periyar',625004,42),(85,'Central Market',575001,43),(86,'Pajaka',575014,43),(87,'Colaba',400001,44),(88,'Andheri',400058,44),(89,'Gokulam',570002,45),(90,'Lakshmipuram',570004,45),(91,'Civil Lines',440001,46),(92,'Mahal',440032,46),(93,'Gangapur Road',422002,47),(94,'Panchavati',422003,47),(95,'Sector 15',201301,48),(96,'Sector 62',201309,48),(97,'Boring Road',800013,49),(98,'Rajendra Nagar',800016,49),(99,'White Town',605001,50),(100,'Lawspet',605008,50),(101,'Camp',411001,51),(102,'Kothrud',411038,51),(103,'Shanker Nagar',492001,52),(104,'VIP Road',492007,52),(105,'Jamnagar Road',360001,53),(106,'Kalavad Road',360001,53),(107,'Doranda',834002,54),(108,'Harmu Housing Colony',834001,54),(109,'Sector 1',769001,55),(110,'Sector 2',769002,55),(111,'Laitumkhrah',793003,56),(112,'Police Bazaar',793001,56),(113,'Mall Road',171001,57),(114,'Chhota Shimla',171002,57),(115,'Rajbagh',190008,58),(116,'Lal Chowk',190001,58),(117,'Adajan',395009,59),(118,'Ghod Dod Road',395007,59),(119,'Kowdiar',695003,60),(120,'Pattom',695004,60),(121,'Srirangam',620006,61),(122,'Puthur',620017,61),(123,'Raja Park',313001,62),(124,'University Road',313002,62),(125,'Alkapuri',390007,63),(126,'Sayaji Ganj',390005,63),(127,'Assi',221005,64),(128,'Sarnath',221007,64),(129,'Krishna Lanka',520010,65),(130,'Moghalrajpuram',520010,65),(131,'Beach Road',530001,66),(132,'Dwaraka Nagar',530016,66),(133,'Sanjay Place',282002,67),(134,'Madhupur',282001,67),(135,'Naranpura',380013,68),(136,'Sardar Patel Stadium',380014,68),(137,'Lunglei',796002,69),(138,'Sairang',796001,69),(139,'Pushkar Road',305001,70),(140,'Rajasthan University',305002,70),(141,'Vikramshila',202001,71),(142,'Sarai Khwaja',202002,71),(143,'Naini',211002,72),(144,'Kalyani Devi',211003,72),(145,'Town Hall',143001,73),(146,'Ranjit Avenue',143002,73),(147,'Cidco',431001,74),(148,'Jalna Road',431002,74),(149,'Jayanagar',560041,75),(150,'Basavanagudi',560004,75),(151,'T T Nagar',462003,76),(152,'Shahpura',462039,76),(153,'Khandagiri',751030,77),(154,'Rasulgarh',751010,77),(155,'Sector 43',160043,78),(156,'Sector 35',160036,78),(157,'Tambaram',600045,79),(158,'Pallavaram',600043,79),(159,'Singanallur',641005,80),(160,'Peelamedu',641004,80),(161,'Chandini Chowk',753002,81),(162,'Malgodown',753001,81),(163,'Mussoorie',248179,82),(164,'Doiwala',248140,82),(165,'Dwarka Sector 21',110075,83),(166,'Vikaspuri',110018,83),(167,'Koylanagar',828117,84),(168,'Sindri',828122,84),(169,'Benachity',713213,85),(170,'City Centre',713216,85),(171,'Sector 16A',121002,86),(172,'Sector 27',121003,86),(173,'Sector 8',382008,87),(174,'Sector 10',382010,87),(175,'Vaishali',201010,88),(176,'Kaushambi',201010,88),(177,'Calangute',403516,89),(178,'Mapusa',403507,89),(179,'Sector 56',122018,90),(180,'Sector 67',122018,90),(181,'Beltola',781028,91),(182,'Lalganesh',781024,91),(183,'Kila Maidan',474001,92),(184,'Mahalgaon',474009,92),(185,'Madhapur',500081,93),(186,'Kukatpally',500072,93),(187,'Canchipur',795003,94),(188,'Thangmeiband',795001,94),(189,'Gulmohar Colony',452009,95),(190,'Scheme No. 74-C',452010,95),(191,'Shivaji Nagar',482002,96),(192,'Bediya',482002,96),(193,'Malviya Nagar',302017,97),(194,'Vaishali Nagar',302021,97),(195,'Model Town',144001,98),(196,'Civil Lines',144001,98),(197,'Channi Himmat',180017,99),(198,'Sainik Colony',180011,99),(199,'Sonari',831011,100),(200,'Sakchi',831001,100),(201,'Shivaji Circle',342003,101),(202,'Ratanada',342001,101),(203,'Swaroop Nagar',208002,102),(204,'Kalyanpur',208017,102),(205,'Ernakulam South',682016,103),(206,'Kalamassery',683104,103),(207,'Tollygunge',700033,104),(208,'New Alipore',700053,104),(209,'Dhanmandi',324006,105),(210,'Jawahar Nagar',324001,105),(211,'Rajajipuram',226017,106),(212,'Chowk',226003,106),(213,'Model Town',141002,107),(214,'Ferozepur Road',141001,107),(215,'Madurai East',625020,108),(216,'Simmakkal',625001,108),(217,'Puttur',574201,109),(218,'Sultan Battery',575002,109),(219,'Bandra',400050,110),(220,'Versova',400061,110),(221,'Hunsur',571105,111),(222,'T.K. Layout',570009,111),(223,'Sitabuldi',440012,112),(224,'Hingna',440016,112),(225,'Sharanpur',422002,113),(226,'Peth Road',422001,113),(227,'Sector 11',201301,114),(228,'Sector 18',201301,114),(229,'Gandhi Maidan',800001,115),(230,'Boring Road',800013,115),(231,'Muthialpet',605003,116),(232,'Kamaraj Nagar',605008,116),(233,'Shivaji Nagar',411005,117),(234,'Aundh',411007,117),(235,'Dhamtari Road',492001,118),(236,'Tatibandh',492009,118),(237,'Shastri Nagar',360001,119),(238,'Kailash Nagar',360005,119),(239,'Harmu',834002,120),(240,'Doranda',834002,120),(241,'Udit Nagar',769012,121),(242,'Sector 7',769002,121),(243,'Laitumkhrah',793003,122),(244,'Police Bazaar',793001,122),(245,'Chhota Shimla',171002,123),(246,'New Shimla',171009,123),(247,'Lal Chowk',190001,124),(248,'Rajbagh',190008,124),(249,'Udhna',395007,125),(250,'Khatodara',395004,125),(251,'Kowdiar',695003,126),(252,'Vellayambalam',695010,126),(253,'Srirangam',620006,127),(254,'Puthur',620017,127),(255,'Sukher',313001,128),(256,'Naya Kadam',313002,128),(257,'Gorwa',390016,129),(258,'Vasna',390007,129),(259,'Assi',221005,130),(260,'Sarnath',221007,130),(261,'Moghalrajpuram',520010,131),(262,'Vijayawada East',520001,131),(263,'Dwaraka Nagar',530016,132),(264,'Gajuwaka',530026,132);
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `art_category`
--

DROP TABLE IF EXISTS `art_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art_category` (
  `acat_id` int NOT NULL AUTO_INCREMENT,
  `acat_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`acat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art_category`
--

LOCK TABLES `art_category` WRITE;
/*!40000 ALTER TABLE `art_category` DISABLE KEYS */;
INSERT INTO `art_category` VALUES (1,'Painting','there are 7 types of Painting'),(2,'Sculpture','there are 4 type of the sculpture'),(3,'Digital Photography','there are 3 types added by us you can choose other option which is not from the above 3'),(4,'Sketching','there are 4 type of sketching');
/*!40000 ALTER TABLE `art_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `art_order`
--

DROP TABLE IF EXISTS `art_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art_order` (
  `aor_id` int NOT NULL AUTO_INCREMENT,
  `aor_date` date NOT NULL,
  `payment_status` int NOT NULL,
  `order_status` int NOT NULL,
  `user_id` int NOT NULL,
  `artwork_id` int DEFAULT NULL,
  PRIMARY KEY (`aor_id`),
  UNIQUE KEY `UKa8m87aoikorc261gugbn9bmm` (`artwork_id`),
  KEY `user_id_fk_idx` (`user_id`),
  CONSTRAINT `FKrp1abukegwx5n2ok0uedesmob` FOREIGN KEY (`artwork_id`) REFERENCES `artwork` (`art_id`),
  CONSTRAINT `user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art_order`
--

LOCK TABLES `art_order` WRITE;
/*!40000 ALTER TABLE `art_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `art_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `art_sub_category`
--

DROP TABLE IF EXISTS `art_sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `art_sub_category` (
  `sc_id` int NOT NULL AUTO_INCREMENT,
  `sc_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `acat_id` int NOT NULL,
  PRIMARY KEY (`sc_id`),
  KEY `acat_id_fk_idx` (`acat_id`),
  CONSTRAINT `acat_id_fk` FOREIGN KEY (`acat_id`) REFERENCES `art_category` (`acat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `art_sub_category`
--

LOCK TABLES `art_sub_category` WRITE;
/*!40000 ALTER TABLE `art_sub_category` DISABLE KEYS */;
INSERT INTO `art_sub_category` VALUES (1,'Madhubani Paintings',' Madhubani Painting is very beauty full Art Workd',1),(2,'Warli Paintings','Warli Paintings is very beauty full Art work.',1),(3,'Nature Paintings','Natures Paintings is very nice Art work Painting',1),(4,'Land Art Sculpture','Land art is vert nice art work',2),(5,'Cast Sculpture','Cast sculpture is very nice art work',2),(6,'Relif sculpture','Relif sculpture is very nice art work',2),(7,'Fine Art Photography','Fine art photography is very nice photography',3),(8,'Portrait Photography','Portrait Photography is very nice photography',3),(9,'Astrophotography','Astrophotography is very nice photography',3),(10,'Technical Drawing','Technical drawing is very nice art work',4),(11,'Drawing','Drawing is very nice art work',4),(12,'Doodling Drawing','Doodling drawing is very nice drawing',4);
/*!40000 ALTER TABLE `art_sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `id` int NOT NULL,
  `about` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `userid_fk` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (7,'hello'),(10,'hello'),(11,'xxxxxxxxxxxxxx'),(12,'yyyyyyyyyyyyyyyy'),(13,'ooooooooooooooooo'),(16,'rrrrrrrrrrrrrrrrrrrrrrr'),(17,'aaaaaaaaaaa'),(18,'asdsd'),(19,'asdsd'),(20,'asdsd'),(21,'asdsd'),(22,'asdsd'),(23,'asdsd'),(24,'asdsd'),(25,'sad'),(26,'sdf');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork`
--

DROP TABLE IF EXISTS `artwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork` (
  `art_id` int NOT NULL AUTO_INCREMENT,
  `art_name` varchar(255) DEFAULT NULL,
  `art_photo` varbinary(255) DEFAULT NULL,
  `amount` float NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `dimension` varchar(255) DEFAULT NULL,
  `weight` float NOT NULL,
  `artist_id` int NOT NULL,
  `sub_cat_id` int NOT NULL,
  `sc_id` int DEFAULT NULL,
  PRIMARY KEY (`art_id`),
  KEY `uid_fk_idx` (`artist_id`),
  KEY `sub_cat_id_fk_idx` (`sub_cat_id`),
  KEY `FKhebtj28dxqpb0us1ny0guixc0` (`sc_id`),
  CONSTRAINT `artist_id_fk` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`id`),
  CONSTRAINT `FKhebtj28dxqpb0us1ny0guixc0` FOREIGN KEY (`sc_id`) REFERENCES `art_sub_category` (`sc_id`),
  CONSTRAINT `sub_cat_id_fk` FOREIGN KEY (`sub_cat_id`) REFERENCES `art_sub_category` (`sc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork`
--

LOCK TABLES `artwork` WRITE;
/*!40000 ALTER TABLE `artwork` DISABLE KEYS */;
/*!40000 ALTER TABLE `artwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `b_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Camel','AAAAAAAAAAAAAAA'),(2,'Faber-Castell','FFFFFFFFFFF'),(3,'LANA','LLLLLLLLLLLLLLL'),(4,'xx','YYYYYYYY'),(5,'pixel','ddddddddddddd'),(6,'aaa','aaaaa dfdf'),(7,'bbb','bbb dfdf');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'Agra'),(2,'Ahmedabad'),(3,'Aizawl'),(4,'Ajmer'),(5,'Aligarh'),(6,'Allahabad'),(7,'Amritsar'),(8,'Aurangabad'),(9,'Bangalore'),(10,'Bhopal'),(11,'Bhubaneswar'),(12,'Chandigarh'),(13,'Chennai'),(14,'Coimbatore'),(15,'Cuttack'),(16,'Dehradun'),(17,'Delhi'),(18,'Dhanbad'),(19,'Durgapur'),(20,'Faridabad'),(21,'Gandhinagar'),(22,'Ghaziabad'),(23,'Goa'),(24,'Gurgaon'),(25,'Guwahati'),(26,'Gwalior'),(27,'Hyderabad'),(28,'Imphal'),(29,'Indore'),(30,'Jabalpur'),(31,'Jaipur'),(32,'Jalandhar'),(33,'Jammu'),(34,'Jamshedpur'),(35,'Jodhpur'),(36,'Kanpur'),(37,'Kochi'),(38,'Kolkata'),(39,'Kota'),(40,'Lucknow'),(41,'Ludhiana'),(42,'Madurai'),(43,'Mangalore'),(44,'Mumbai'),(45,'Mysore'),(46,'Nagpur'),(47,'Nashik'),(48,'Noida'),(49,'Patna'),(50,'Pondicherry'),(51,'Pune'),(52,'Raipur'),(53,'Rajkot'),(54,'Ranchi'),(55,'Rourkela'),(56,'Shillong'),(57,'Shimla'),(58,'Srinagar'),(59,'Surat'),(60,'Thiruvananthapuram'),(61,'Tiruchirappalli'),(62,'Udaipur'),(63,'Vadodara'),(64,'Varanasi'),(65,'Vijayawada'),(66,'Visakhapatnam'),(67,'Agra'),(68,'Ahmedabad'),(69,'Aizawl'),(70,'Ajmer'),(71,'Aligarh'),(72,'Allahabad'),(73,'Amritsar'),(74,'Aurangabad'),(75,'Bangalore'),(76,'Bhopal'),(77,'Bhubaneswar'),(78,'Chandigarh'),(79,'Chennai'),(80,'Coimbatore'),(81,'Cuttack'),(82,'Dehradun'),(83,'Delhi'),(84,'Dhanbad'),(85,'Durgapur'),(86,'Faridabad'),(87,'Gandhinagar'),(88,'Ghaziabad'),(89,'Goa'),(90,'Gurgaon'),(91,'Guwahati'),(92,'Gwalior'),(93,'Hyderabad'),(94,'Imphal'),(95,'Indore'),(96,'Jabalpur'),(97,'Jaipur'),(98,'Jalandhar'),(99,'Jammu'),(100,'Jamshedpur'),(101,'Jodhpur'),(102,'Kanpur'),(103,'Kochi'),(104,'Kolkata'),(105,'Kota'),(106,'Lucknow'),(107,'Ludhiana'),(108,'Madurai'),(109,'Mangalore'),(110,'Mumbai'),(111,'Mysore'),(112,'Nagpur'),(113,'Nashik'),(114,'Noida'),(115,'Patna'),(116,'Pondicherry'),(117,'Pune'),(118,'Raipur'),(119,'Rajkot'),(120,'Ranchi'),(121,'Rourkela'),(122,'Shillong'),(123,'Shimla'),(124,'Srinagar'),(125,'Surat'),(126,'Thiruvananthapuram'),(127,'Tiruchirappalli'),(128,'Udaipur'),(129,'Vadodara'),(130,'Varanasi'),(131,'Vijayawada'),(132,'Visakhapatnam');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `od_id` int NOT NULL AUTO_INCREMENT,
  `qty` int DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `aor_id` int NOT NULL,
  `por_id` int NOT NULL,
  `p_id` int NOT NULL,
  `art_id` int NOT NULL,
  PRIMARY KEY (`od_id`),
  KEY `aor_id_fk_idx` (`aor_id`),
  KEY `art_id_fk_idx` (`art_id`),
  KEY `pid_fk_idx` (`p_id`),
  KEY `por_id_idx` (`por_id`),
  CONSTRAINT `aor_id_fk` FOREIGN KEY (`aor_id`) REFERENCES `art_order` (`aor_id`),
  CONSTRAINT `art_id_fk` FOREIGN KEY (`art_id`) REFERENCES `artwork` (`art_id`),
  CONSTRAINT `pid_fk` FOREIGN KEY (`p_id`) REFERENCES `product` (`p_id`),
  CONSTRAINT `por_id` FOREIGN KEY (`por_id`) REFERENCES `product_order` (`por_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `stock_quantity` int NOT NULL,
  `product_img` varbinary(255) NOT NULL,
  `b_id` int NOT NULL,
  `psub_id` int NOT NULL,
  PRIMARY KEY (`p_id`),
  KEY `b_id_fk_idx` (`b_id`),
  KEY `psub_id_fk_idx` (`psub_id`),
  CONSTRAINT `b_id_fk` FOREIGN KEY (`b_id`) REFERENCES `brand` (`b_id`),
  CONSTRAINT `psub_id_fk` FOREIGN KEY (`psub_id`) REFERENCES `psub_category` (`psub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `pcat_id` int NOT NULL AUTO_INCREMENT,
  `pcat_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pcat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'colour','there are different types of colours'),(2,'Brush','There are different types of brush'),(3,'Sketpain','There are different types of sketpain'),(4,'canvas','There are different size of canvas '),(5,'Pen','');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_order`
--

DROP TABLE IF EXISTS `product_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_order` (
  `por_id` int NOT NULL AUTO_INCREMENT,
  `por_date` date NOT NULL,
  `user_id` int NOT NULL,
  `amount` float NOT NULL,
  `order_status` int NOT NULL,
  `payment_status` int NOT NULL,
  PRIMARY KEY (`por_id`),
  KEY `user_id_fk_idx` (`user_id`),
  CONSTRAINT `p_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_order`
--

LOCK TABLES `product_order` WRITE;
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psub_category`
--

DROP TABLE IF EXISTS `psub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psub_category` (
  `psub_id` int NOT NULL AUTO_INCREMENT,
  `psub_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pcat_id` int NOT NULL,
  PRIMARY KEY (`psub_id`),
  KEY `pcat_id_fk_idx` (`pcat_id`),
  CONSTRAINT `pcat_id_fk` FOREIGN KEY (`pcat_id`) REFERENCES `product_category` (`pcat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psub_category`
--

LOCK TABLES `psub_category` WRITE;
/*!40000 ALTER TABLE `psub_category` DISABLE KEYS */;
INSERT INTO `psub_category` VALUES (1,'Water Colour','These coloue is very good colour',1),(2,'Oil Colour','These Colour is very nice colour',1),(3,'Wax Colour','These colour is very nice colour',1),(4,'Flat Brush','These brush is very frequently used',2),(5,'Round Brush','Thses brush is frequently used',2),(6,'Angled Brush','These brush used rearly used',2),(7,'Brush Tip sketchpain','THis is very nice sketchpain',3),(8,'Fiber Tip sketchpain','this is very nice ',3),(9,'Round Shap Nib sketchpain','This is very commonly used',3),(10,'Small canvas','This is small canvas',4),(11,'Medium canvas','This is Medium canvas',4),(12,'Large canvas','This is large canvas',4);
/*!40000 ALTER TABLE `psub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'artist'),(3,'buyer');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `profile_photo` varbinary(255) DEFAULT NULL,
  `area_id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `role_id` int NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `area_id_idx` (`area_id`),
  KEY `role_id_fk_idx` (`role_id`),
  CONSTRAINT `area_id_fk` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`),
  CONSTRAINT `role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'Artist','Role','artist@gmail.com','2233',NULL,1,'artist','$2a$11$VSVys1jhcsWvTvHwTI4T4.HoooBwzbRI8GJQbsugIGxuWsx2z8GLS',_binary '\0',2,'hjgh'),(8,'Buyer','Role','buyer@gmail.com','2233',NULL,2,'buyer','$2a$11$ztzXySYYi4v.57/NidyAmOAiYOXV7wz3qmhzLEQAatEmEocgO8hDG',_binary '\0',3,'hjgh'),(9,'Admin','Role','admin@gmail.com','2233',NULL,2,'admin','$2a$11$ReWm5gTk1dFQKNTKjjnenuBECpEIhqmGsMkIo.5USEhUs4CxvUjna',_binary '\0',1,'hjgh'),(10,'Dhanashree','Sonawane','dhanshree@123','9373315055',NULL,1,'dhanu','$2a$11$VkBCsdt86J6cZCNsTnTBOugxAUCZq1xRrhW7GpAA4W.E4hyG.9uz.',_binary '\0',2,'fdmgj'),(11,'Bakul','Joshi','bakul@gmail.com','888888888',NULL,1,'bakul.joshi','$2a$11$ywWp7BEYe8IdiVwcfxooZejIpGpDmbjvCJxsMXRUbGm93BHH6o/w2',_binary '',2,'xxxxxxxxxx'),(12,'Prasad','Deshmukh','prasad@gmail.com','9999999999',NULL,1,'prasad.d','$2a$11$deD9vfnb7i6apWREyeTz9OE1bnAOTe6uahpNicWoBOh.OaGRStIw6',_binary '\0',2,'xxxxxxxxxxxxxxxxx'),(13,'Prasad1','Deshmukh1','prasad@gmail.com1','9999999999',NULL,1,'prasad.d1','$2a$11$cOO2ZQ4ctMajpdhGJ.kJbeAqjkIx5YpQgMEB/x0O1ntVsLQBBf/N.',_binary '\0',2,'uuuuuuuuuuuuuu'),(14,'mansi','patil','manasi@gmail.com','1234567891',NULL,1,'mansi','$2a$11$Eqa8bHVd/JihUwvaQGVvn.kFFZeGWdPcydjKFs91UJfwqEb00yTya',_binary '\0',2,'aaaaaaaaaaaaaaaaaa'),(15,'mansi1','patil1','manasi@gmail.com','1234567891',NULL,1,'mansia','$2a$11$i.2cxcD6sQxssD6tU18j0.1SxJnLAILvkwkqGicY5oB6j3rToPCOu',_binary '\0',3,'aaaaaaaaaaaaaaaaaa'),(16,'moin','rogatiya','moin@gmail.com','4323125456',NULL,1,'moin','$2a$11$eI0uXxaWDzmVZanxnl8FOuNVCvsP610OXbo/vIYP/oWujrZzgO1Ki',_binary '\0',2,'mmmmmmmmmmmmmmmmm'),(17,'jayashree','kalaskar','jayu@gmail.com','9898989898',NULL,1,'jayu','$2a$11$9x0ObUcItdbcOdb35hjS/uRNetx8y.qb9SzQhX9ePLNFakr7O5Cv.',_binary '\0',2,'zzzzzzzzzzz'),(18,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$AGNfuqLfYi6.rODrY/HtWOpaAlQg7PSzGMzaO5qr6IRkbI2Vp2aUa',NULL,2,'assd'),(19,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$dP4nWbdcWrBPY/Xe/gUcDuT5xB1toWy6lqHd7N1vWCkZtn9BHiVMW',NULL,2,'assd'),(20,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$f6BdKPsk1wYEGmQbc4ZmN.oacVCuujOR2u02EOAu6.CKdVWjZRNei',NULL,2,'assd'),(21,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$iReHzDUF7KhhOSEPuef/q.Y0CfKydBwyP.4byCEbG9n5.QBbKMbIi',NULL,2,'assd'),(22,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$yUoGZAfo.kFamOwrUoZ0Wez8CcIUX6y3N5TnzK9RJMQZxOTWR3bKO',NULL,2,'assd'),(23,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$LzTO9U.72wlyIjZXJ7bBXeT7uz9dON0Q70o694MfAjm53sUIt1Ogu',NULL,2,'assd'),(24,'abcd','aaaa','abcd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$adHVhL6xADCOac4.kbkR7.KhcBkV5Op.086i/yrsiCG7SJqew99C6',NULL,2,'assd'),(25,'abcd','aa','abd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$cniseSrsdZghfKWxj80YLe2bfhVOxCaYP11nDW/TJYG4CySkotm5u',NULL,2,'asd'),(26,'abcd','aa','abd@gmail.com','2323232323',NULL,1,'abcd','$2a$11$U/bPy3Je7DE2inE2yImmLOdmFoRYh9rG9zDrZp4c85zVA7XkdvOXe',NULL,2,'sd');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-19  8:45:54
