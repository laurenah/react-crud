-- MySQL dump 10.16  Distrib 10.1.37-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	10.1.37-MariaDB

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
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `link` text DEFAULT '' NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1, 'portfolio website', 'You\'re looking at it right now! This site is built using React with a Node/Express backend that communicates with a MySQL database.', null);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'first post','hello i am updated blog post v2','2020-09-09 15:47:02'),(3,'The Odd One Out','For my last two years of high school, I decided to leave the school I had attended for the first 16 years of my life in order to specialise for the university degree I wanted. This meant leaving behind most of my friends, but I gained so much more than I expected. The best friend who I\'ve lived on the same street as for my entire life was at the school I transferred to. Tuition fees went down to around $1,000, which meant my family could afford to knock down and entirely rebuilt our house (with a pool!) instead of only renovating a bathroom. Private school didn\'t offer nearly half as many courses as my new school did. Straight away I knew I wanted to sign up for as many computer-related courses I could. Software Development (if you could call it that, more on this later) and VET Game Design were my first choices. <br /><br />Of course, the Australian Curriculum exists, so I couldn\'t do every single computer-related course at my disposal. The core units I went with were: English Language, Chemistry, Math Methods. My other picks changed between Year 11 and Year 12. In 11 I did Physics and in 12 I dropped Physics and Game Design and picked up this funky course made by the University of Melbourne and Monash University called Algorithmics. <br />Okay, now that you know my story, lets get to the title of this post. My time in VCE Software Development was rocky to start. I, along with one other girl, were the only females in this class during Year 11. That one girl and I became good friends during out time in this class, helping each other with the exercises and assignments whilst the teacher berated the absolute ears off every other person in the class for constantly slacking off (Halo LAN game anyone?) and gave thrilling 100+ page PowerPoint presentations about each learning outcome. <br /><br />After Year 11, my only female IT companion decided to drop Software Development so she could specialise for her passion Audio Engineering. That made me the only female student left in Software Development. Now, remember from earlier: \'If you could call it that, more on this later\'? In Software Development I learned, drumroll please, Microsoft Excel. Tasty Macros and Cheese. Learning the basics of VBA and the Waterfall SDLC was all it was. Of course, nowadays this course is more current, probably more useful to students than it was to me. I wouldn\'t trade the world for it though, because it made my final years in high school a pleasure to look back on. Being the only female in the class could\'ve beaten my confidence down, but it only made me more motivated (and the top student in the class). <br /><br />This experience ultimately gave me more confidence in myself and my abilities, and prepared me for my time at university. Thankfully, I was never the only female in my class ever again. However, the balance was still out, and that meant that us girls tended to band together in a single assignment group. When the tutors picked out groups for us however, I was once again the only female in the group. Normal is boring, be the odd one out.','2020-09-18 13:49:54');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-25 13:42:41
