-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 31, 2020 at 05:15 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodetest`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `gender` enum('m','f','other') DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `number` char(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(1, 'Tarique', 'Fatey', 'm', 'test@gmail.com', '$2b$10$ZiO5Oo9wUeceM20z9MQck.wLoeXAaWlzJf55/nwdtlF4vk3ipBKoq', '7890337789'),
(2, 'Mariya', 'Khan', 'f', 'mariya@gmail.com', '$2b$10$AhTJiUrDl025Y7tgtwE33OjR9syZZCYQ6JLKAbcvEyyxm9m1hoFz.', '8975474858'),
(3, 'Meena', 'Taman', 'f', 'zeena@gmail.com', '$2b$10$4gSMexPy.dZ1oKC4bXL43eGL2yl8.luW6dqrOucf14J8BLSJBQ2/S', '9875474858'),
(4, 'Ravan', 'Prasad', 'm', 'ravan@gmail.com', '$2b$10$YA7L6rnS/0HySHF3EuqAmumBmGVmxz2xIli78rKEWTASogZGHkqim', '8275474858'),
(5, 'Varun', 'Dhavan', 'm', 'varun@gmail.com', '$2b$10$.vGWN.EbNoERdTIQaDJjWudyP28Ro6m4dixzdfKe23TGhQ2JprZD.', '7896363625'),
(6, 'Pream', 'Kumar', 'm', 'pream@gmail.com', '$2b$10$9nYX94khA1..JjT02Qsg5eKHGxHo0jyIDGb5nNa3xwvoKrQ3o7C..', '9163754548'),
(7, 'Pream Sankar', 'Kumar', 'm', 'pream@gmail.com', '$2b$10$hvWerTcceWbsIOACwa3Hjub1plbpaaM51QwvxgVZqMieXVt8vtw5S', '9163754548');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
