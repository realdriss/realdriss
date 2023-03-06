-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2023 at 03:33 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `realdriss`
--

-- --------------------------------------------------------

--
-- Table structure for table `activations`
--

CREATE TABLE `activations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `code` varchar(120) NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT 0,
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activations`
--

INSERT INTO `activations` (`id`, `user_id`, `code`, `completed`, `completed_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'LKMKLKbH9mIsFgixy2l2bZUHHHUrPRcL', 1, '2023-03-05 04:00:29', '2023-03-05 04:00:29', '2023-03-05 04:00:29');

-- --------------------------------------------------------

--
-- Table structure for table `audit_histories`
--

CREATE TABLE `audit_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `module` varchar(60) NOT NULL,
  `request` text DEFAULT NULL,
  `action` varchar(120) NOT NULL,
  `user_agent` text DEFAULT NULL,
  `ip_address` varchar(39) DEFAULT NULL,
  `reference_user` int(10) UNSIGNED NOT NULL,
  `reference_id` int(10) UNSIGNED NOT NULL,
  `reference_name` varchar(255) NOT NULL,
  `type` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `audit_histories`
--

INSERT INTO `audit_histories` (`id`, `user_id`, `module`, `request`, `action`, `user_agent`, `ip_address`, `reference_user`, `reference_id`, `reference_name`, `type`, `created_at`, `updated_at`) VALUES
(1, 1, 'of the system', '[]', 'logged out', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0', '127.0.0.1', 1, 1, 'System Admin', 'info', '2023-03-05 04:08:03', '2023-03-05 04:08:03'),
(2, 1, 'to the system', NULL, 'logged in', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0', '127.0.0.1', 0, 1, 'System Admin', 'info', '2023-03-05 04:08:43', '2023-03-05 04:08:43'),
(3, 1, 'to the system', NULL, 'logged in', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0', '127.0.0.1', 0, 1, 'System Admin', 'info', '2023-03-05 09:53:23', '2023-03-05 09:53:23');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `description` varchar(400) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `author_id` int(11) NOT NULL,
  `author_type` varchar(255) NOT NULL DEFAULT 'Botble\\ACL\\Models\\User',
  `icon` varchar(60) DEFAULT NULL,
  `order` tinyint(4) NOT NULL DEFAULT 0,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0,
  `is_default` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `description`, `status`, `author_id`, `author_type`, `icon`, `order`, `is_featured`, `is_default`, `created_at`, `updated_at`) VALUES
(1, 'Ecommerce', 0, NULL, 'published', 1, 'Botble\\ACL\\Models\\User', NULL, 0, 0, 1, '2023-03-05 04:00:11', '2023-03-05 04:00:11'),
(2, 'Fashion', 0, NULL, 'published', 1, 'Botble\\ACL\\Models\\User', NULL, 0, 0, 0, '2023-03-05 04:00:11', '2023-03-05 04:00:11'),
(3, 'Electronic', 0, NULL, 'published', 1, 'Botble\\ACL\\Models\\User', NULL, 0, 0, 0, '2023-03-05 04:00:11', '2023-03-05 04:00:11'),
(4, 'Commercial', 0, NULL, 'published', 1, 'Botble\\ACL\\Models\\User', NULL, 0, 0, 0, '2023-03-05 04:00:11', '2023-03-05 04:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(60) DEFAULT NULL,
  `address` varchar(120) DEFAULT NULL,
  `subject` varchar(120) DEFAULT NULL,
  `content` longtext NOT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'unread',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_replies`
--

CREATE TABLE `contact_replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `message` longtext NOT NULL,
  `contact_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_widgets`
--

CREATE TABLE `dashboard_widgets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dashboard_widgets`
--

INSERT INTO `dashboard_widgets` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'widget_total_1', '2023-03-05 04:06:17', '2023-03-05 04:06:17'),
(2, 'widget_total_2', '2023-03-05 04:06:18', '2023-03-05 04:06:18'),
(3, 'widget_total_themes', '2023-03-05 04:06:18', '2023-03-05 04:06:18'),
(4, 'widget_total_3', '2023-03-05 04:06:18', '2023-03-05 04:06:18'),
(5, 'widget_total_4', '2023-03-05 04:06:19', '2023-03-05 04:06:19'),
(6, 'widget_total_users', '2023-03-05 04:06:19', '2023-03-05 04:06:19'),
(7, 'widget_total_pages', '2023-03-05 04:06:19', '2023-03-05 04:06:19'),
(8, 'widget_total_plugins', '2023-03-05 04:06:20', '2023-03-05 04:06:20'),
(9, 'widget_analytics_general', '2023-03-05 04:06:20', '2023-03-05 04:06:20'),
(10, 'widget_analytics_page', '2023-03-05 04:06:20', '2023-03-05 04:06:20'),
(11, 'widget_analytics_browser', '2023-03-05 04:06:21', '2023-03-05 04:06:21'),
(12, 'widget_posts_recent', '2023-03-05 04:06:21', '2023-03-05 04:06:21'),
(13, 'widget_analytics_referrer', '2023-03-05 04:06:21', '2023-03-05 04:06:21'),
(14, 'widget_audit_logs', '2023-03-05 04:06:21', '2023-03-05 04:06:21'),
(15, 'widget_ecommerce_report_general', '2023-03-05 04:06:21', '2023-03-05 04:06:21');

-- --------------------------------------------------------

--
-- Table structure for table `dashboard_widget_settings`
--

CREATE TABLE `dashboard_widget_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `settings` text DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `widget_id` int(10) UNSIGNED NOT NULL,
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_brands`
--

CREATE TABLE `ec_brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `is_featured` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_brands`
--

INSERT INTO `ec_brands` (`id`, `name`, `description`, `website`, `logo`, `status`, `order`, `is_featured`, `created_at`, `updated_at`) VALUES
(1, 'Fashion live', NULL, NULL, 'brands/1.png', 'published', 0, 1, '2023-03-05 03:56:49', '2023-03-05 03:56:49'),
(2, 'Hand crafted', NULL, NULL, 'brands/2.png', 'published', 1, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(3, 'Mestonix', NULL, NULL, 'brands/3.png', 'published', 2, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(4, 'Sunshine', NULL, NULL, 'brands/4.png', 'published', 3, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(5, 'Pure', NULL, NULL, 'brands/5.png', 'published', 4, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(6, 'Anfold', NULL, NULL, 'brands/6.png', 'published', 5, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(7, 'Automotive', NULL, NULL, 'brands/7.png', 'published', 6, 1, '2023-03-05 03:56:50', '2023-03-05 03:56:50');

-- --------------------------------------------------------

--
-- Table structure for table `ec_brands_translations`
--

CREATE TABLE `ec_brands_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_brands_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_cart`
--

CREATE TABLE `ec_cart` (
  `identifier` varchar(191) NOT NULL,
  `instance` varchar(191) NOT NULL,
  `content` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_currencies`
--

CREATE TABLE `ec_currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) NOT NULL,
  `symbol` varchar(10) NOT NULL,
  `is_prefix_symbol` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `decimals` tinyint(3) UNSIGNED DEFAULT 0,
  `order` int(10) UNSIGNED DEFAULT 0,
  `is_default` tinyint(4) NOT NULL DEFAULT 0,
  `exchange_rate` double NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_currencies`
--

INSERT INTO `ec_currencies` (`id`, `title`, `symbol`, `is_prefix_symbol`, `decimals`, `order`, `is_default`, `exchange_rate`, `created_at`, `updated_at`) VALUES
(1, 'USD', '$', 1, 2, 0, 1, 1, '2023-03-05 03:56:51', '2023-03-05 03:56:51'),
(2, 'EUR', '€', 0, 2, 1, 0, 0.84, '2023-03-05 03:56:51', '2023-03-05 03:56:51'),
(3, 'VND', '₫', 0, 0, 2, 0, 23203, '2023-03-05 03:56:51', '2023-03-05 03:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `ec_customers`
--

CREATE TABLE `ec_customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `phone` varchar(25) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `confirmed_at` datetime DEFAULT NULL,
  `email_verify_token` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_customers`
--

INSERT INTO `ec_customers` (`id`, `name`, `email`, `password`, `avatar`, `dob`, `phone`, `remember_token`, `created_at`, `updated_at`, `confirmed_at`, `email_verify_token`) VALUES
(1, 'John Smith', 'john.smith@botble.com', '$2y$10$Tbg8ERdGDi39HIQcWwxNJuHX8jtUe3RpdJQSDB7aP5N0d66rUlKya', 'customers/1.jpg', NULL, '+16891109405', NULL, '2023-03-05 03:57:24', '2023-03-05 03:57:24', '2023-03-05 06:57:24', NULL),
(2, 'Jacques Monahan', 'schimmel.jamie@example.net', '$2y$10$XzTgJG4dckpPFXM01ijO7.yw3a8db2tZ6SY36YyzLNfLTJ.0C6ERS', 'customers/1.jpg', NULL, '+15059268157', NULL, '2023-03-05 03:57:25', '2023-03-05 03:57:25', '2023-03-05 06:57:25', NULL),
(3, 'Alayna Ritchie', 'fabian.jones@example.com', '$2y$10$AiuD9eQydHA4L7qZQIsY4e8k.3WRZXy.W5w/6ol4m3/bZpO1..0rG', 'customers/2.jpg', NULL, '+14846196167', NULL, '2023-03-05 03:57:25', '2023-03-05 03:57:25', '2023-03-05 06:57:25', NULL),
(4, 'Cassie Effertz I', 'vemmerich@example.com', '$2y$10$12Zo6639J8Aqy2JFxwyleersbLZ1ucgS7vg.BYsVld0uLnMalHTlW', 'customers/3.jpg', NULL, '+15865520967', NULL, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '2023-03-05 06:57:26', NULL),
(5, 'Mrs. Nova Rodriguez I', 'reichert.leonard@example.org', '$2y$10$nuknGuvRDqfcZahz0AiRuexbksuCReklG9UbsPt9szFvoNwB6Otqq', 'customers/4.jpg', NULL, '+19522476277', NULL, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '2023-03-05 06:57:26', NULL),
(6, 'Prof. Arlo Keebler', 'eula.mayer@example.com', '$2y$10$HGmnznIBiE.e/2mT6j532.V9J6CARZtr/MpacF6uaArArtUmcJmU.', 'customers/5.jpg', NULL, '+12063809031', NULL, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '2023-03-05 06:57:26', NULL),
(7, 'Dr. Kian Krajcik II', 'daugherty.aaron@example.net', '$2y$10$lBH8QTVUrVRLuNPNLqVW2uU4OZqD3.2A4K1z5pUg0d1uLKpbWtb7i', 'customers/6.jpg', NULL, '+12721364623', NULL, '2023-03-05 03:57:26', '2023-03-05 03:57:27', '2023-03-05 06:57:27', NULL),
(8, 'Dr. Boris Wilderman', 'maggie.champlin@example.net', '$2y$10$7IAxwFroBzfDFK5lBkvozOV4G4eCbTlY2UFm6kKPBHECqy/Qht3N6', 'customers/7.jpg', NULL, '+13850099401', NULL, '2023-03-05 03:57:27', '2023-03-05 03:57:27', '2023-03-05 06:57:27', NULL),
(9, 'Dr. Mckenna Bernier II', 'mollie05@example.com', '$2y$10$Irk/vlkPUcmrJdd2H6ZL..YB36vrza9XdqvlAdYgr3Y/CX7ZgZLX2', 'customers/8.jpg', NULL, '+12706500348', NULL, '2023-03-05 03:57:27', '2023-03-05 03:57:27', '2023-03-05 06:57:27', NULL),
(10, 'Joe Walker PhD', 'laurianne44@example.net', '$2y$10$/y7h/M363/Cl4y3QsvQQkOkHwiI8Jv4fZv/Xl5n6pICOWR1ztmuF6', 'customers/9.jpg', NULL, '+18478479193', NULL, '2023-03-05 03:57:27', '2023-03-05 03:57:28', '2023-03-05 06:57:27', NULL),
(11, 'Eladio O\'Kon', 'ada.glover@example.net', '$2y$10$.R67yeb6MpbvV0WVfxgwveY11EIsmLUvzD9WAQtHtZr63F2Rwpki.', 'customers/10.jpg', NULL, '+12058970018', NULL, '2023-03-05 03:57:28', '2023-03-05 03:57:28', '2023-03-05 06:57:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ec_customer_addresses`
--

CREATE TABLE `ec_customer_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `phone` varchar(191) NOT NULL,
  `country` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `address` varchar(191) NOT NULL,
  `customer_id` int(10) UNSIGNED NOT NULL,
  `is_default` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_customer_addresses`
--

INSERT INTO `ec_customer_addresses` (`id`, `name`, `email`, `phone`, `country`, `state`, `city`, `address`, `customer_id`, `is_default`, `created_at`, `updated_at`, `zip_code`) VALUES
(1, 'John Smith', 'john.smith@botble.com', '+18591696769', 'EG', 'Indiana', 'New Pearline', '713 Kuhic Neck Apt. 151', 1, 1, '2023-03-05 03:57:24', '2023-03-05 03:57:24', '04225'),
(2, 'John Smith', 'john.smith@botble.com', '+19081997506', 'DO', 'Hawaii', 'Lizashire', '9407 Dietrich Highway', 1, 0, '2023-03-05 03:57:24', '2023-03-05 03:57:24', '90230-3114'),
(3, 'Jacques Monahan', 'schimmel.jamie@example.net', '+13867688869', 'MW', 'Ohio', 'Alejandrashire', '63379 Dach Fork Suite 581', 2, 1, '2023-03-05 03:57:25', '2023-03-05 03:57:25', '12264-1952'),
(4, 'Alayna Ritchie', 'fabian.jones@example.com', '+14246248709', 'SY', 'South Carolina', 'Lake Hassie', '176 Jerrell Haven', 3, 1, '2023-03-05 03:57:25', '2023-03-05 03:57:25', '26859'),
(5, 'Cassie Effertz I', 'vemmerich@example.com', '+16675695891', 'MD', 'Georgia', 'Port Scot', '6746 Paucek Stream Apt. 380', 4, 1, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '26225'),
(6, 'Mrs. Nova Rodriguez I', 'reichert.leonard@example.org', '+12819147677', 'KH', 'Colorado', 'New Gabriel', '4637 Konopelski Hill Apt. 786', 5, 1, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '07761'),
(7, 'Prof. Arlo Keebler', 'eula.mayer@example.com', '+18636465920', 'MA', 'Mississippi', 'North Lorainefurt', '244 Irwin Drives', 6, 1, '2023-03-05 03:57:26', '2023-03-05 03:57:26', '75738'),
(8, 'Dr. Kian Krajcik II', 'daugherty.aaron@example.net', '+19048790827', 'BA', 'Arkansas', 'East Kim', '861 Sanford Court Suite 230', 7, 1, '2023-03-05 03:57:27', '2023-03-05 03:57:27', '78256-0609'),
(9, 'Dr. Boris Wilderman', 'maggie.champlin@example.net', '+15405941200', 'BS', 'Illinois', 'East Olgastad', '5149 Padberg Groves Apt. 799', 8, 1, '2023-03-05 03:57:27', '2023-03-05 03:57:27', '13771'),
(10, 'Dr. Mckenna Bernier II', 'mollie05@example.com', '+14798049201', 'IQ', 'Hawaii', 'Lake Garrison', '2668 Frami Rapid', 9, 1, '2023-03-05 03:57:27', '2023-03-05 03:57:27', '28858'),
(11, 'Joe Walker PhD', 'laurianne44@example.net', '+12298352318', 'FI', 'Iowa', 'Port Tianna', '36704 Jerod Well Apt. 417', 10, 1, '2023-03-05 03:57:28', '2023-03-05 03:57:28', '59070'),
(12, 'Eladio O\'Kon', 'ada.glover@example.net', '+16101916776', 'AW', 'Kentucky', 'Lake Marianaborough', '1498 Velma Pass', 11, 1, '2023-03-05 03:57:28', '2023-03-05 03:57:28', '56009-5227');

-- --------------------------------------------------------

--
-- Table structure for table `ec_customer_password_resets`
--

CREATE TABLE `ec_customer_password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_discounts`
--

CREATE TABLE `ec_discounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(120) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_used` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `value` double DEFAULT NULL,
  `type` varchar(60) DEFAULT 'coupon',
  `can_use_with_promotion` tinyint(1) NOT NULL DEFAULT 0,
  `discount_on` varchar(20) DEFAULT NULL,
  `product_quantity` int(10) UNSIGNED DEFAULT NULL,
  `type_option` varchar(100) NOT NULL DEFAULT 'amount',
  `target` varchar(100) NOT NULL DEFAULT 'all-orders',
  `min_order_price` decimal(15,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_discount_customers`
--

CREATE TABLE `ec_discount_customers` (
  `discount_id` int(10) UNSIGNED NOT NULL,
  `customer_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_discount_products`
--

CREATE TABLE `ec_discount_products` (
  `discount_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_discount_product_collections`
--

CREATE TABLE `ec_discount_product_collections` (
  `discount_id` int(10) UNSIGNED NOT NULL,
  `product_collection_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_flash_sales`
--

CREATE TABLE `ec_flash_sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `end_date` datetime NOT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_flash_sales`
--

INSERT INTO `ec_flash_sales` (`id`, `name`, `end_date`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Winter Sale 1', '2023-04-24 00:00:00', 'published', '2023-03-05 03:59:23', '2023-03-05 03:59:23'),
(2, 'Winter Sale 2', '2023-03-29 00:00:00', 'published', '2023-03-05 03:59:23', '2023-03-05 03:59:23'),
(3, 'Winter Sale 3', '2023-03-21 00:00:00', 'published', '2023-03-05 03:59:24', '2023-03-05 03:59:24');

-- --------------------------------------------------------

--
-- Table structure for table `ec_flash_sales_translations`
--

CREATE TABLE `ec_flash_sales_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_flash_sales_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_flash_sale_products`
--

CREATE TABLE `ec_flash_sale_products` (
  `flash_sale_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double UNSIGNED DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `sold` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_flash_sale_products`
--

INSERT INTO `ec_flash_sale_products` (`flash_sale_id`, `product_id`, `price`, `quantity`, `sold`) VALUES
(1, 8, 86.346, 13, 5),
(2, 25, 51.36, 20, 5),
(3, 19, 45.36, 16, 4);

-- --------------------------------------------------------

--
-- Table structure for table `ec_grouped_products`
--

CREATE TABLE `ec_grouped_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_product_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `fixed_qty` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_orders`
--

CREATE TABLE `ec_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `shipping_option` varchar(60) DEFAULT NULL,
  `shipping_method` varchar(60) NOT NULL DEFAULT 'default',
  `status` varchar(120) NOT NULL DEFAULT 'pending',
  `amount` decimal(15,2) NOT NULL,
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `tax_amount` decimal(15,2) DEFAULT NULL,
  `shipping_amount` decimal(15,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `coupon_code` varchar(120) DEFAULT NULL,
  `discount_amount` decimal(15,2) DEFAULT NULL,
  `sub_total` decimal(15,2) NOT NULL,
  `is_confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `discount_description` varchar(255) DEFAULT NULL,
  `is_finished` tinyint(1) DEFAULT 1,
  `token` varchar(120) DEFAULT NULL,
  `payment_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_orders`
--

INSERT INTO `ec_orders` (`id`, `user_id`, `shipping_option`, `shipping_method`, `status`, `amount`, `currency_id`, `tax_amount`, `shipping_amount`, `description`, `coupon_code`, `discount_amount`, `sub_total`, `is_confirmed`, `discount_description`, `is_finished`, `token`, `payment_id`, `created_at`, `updated_at`) VALUES
(1, 3, '1', 'default', 'pending', '1149.60', 1, '47.60', '0.00', NULL, NULL, '0.00', '1102.00', 1, NULL, 1, '8tnNYCIF7NphvWsF8wXRsNhuLCKsy', 1, '2023-02-16 11:59:30', '2023-03-05 03:59:32'),
(2, 11, '1', 'default', 'pending', '942.60', 1, '34.60', '0.00', NULL, NULL, '0.00', '908.00', 1, NULL, 1, '8FrDxc1bwYOFfE9JMXGIatUzAaZ2r', 2, '2023-03-01 23:59:33', '2023-03-05 03:59:34'),
(3, 3, '1', 'default', 'completed', '415.70', 1, '14.70', '0.00', NULL, NULL, '0.00', '401.00', 1, NULL, 1, '3FS8808S65MTeT2GAOEhYHUw8zk8Z', 3, '2023-02-28 15:59:35', '2023-03-05 04:00:01'),
(4, 9, '1', 'default', 'pending', '1362.70', 1, '64.70', '0.00', NULL, NULL, '0.00', '1298.00', 1, NULL, 1, 'D7ZiZkBqHZ5mvWO3mVQyqbWVJSuJn', 4, '2023-02-27 11:59:36', '2023-03-05 03:59:37'),
(5, 5, '1', 'default', 'completed', '794.60', 1, '32.60', '0.00', NULL, NULL, '0.00', '762.00', 1, NULL, 1, 'Z64eQ43NVt5GXBRrOJgyp72BINrew', 5, '2023-02-22 11:59:38', '2023-03-05 04:00:01'),
(6, 5, '1', 'default', 'completed', '2144.10', 1, '83.10', '0.00', NULL, NULL, '0.00', '2061.00', 1, NULL, 1, 'l7AC59ZvFfoUSQiN94ChXv5dF4895', 6, '2023-02-25 15:59:39', '2023-03-05 04:00:01'),
(7, 8, '1', 'default', 'pending', '1086.50', 1, '46.50', '0.00', NULL, NULL, '0.00', '1040.00', 1, NULL, 1, 'a0M97lsF5dL7mhPxSEos38oUC3Ykl', 7, '2023-03-01 15:59:41', '2023-03-05 03:59:41'),
(8, 10, '1', 'default', 'completed', '532.50', 1, '25.50', '0.00', NULL, NULL, '0.00', '507.00', 1, NULL, 1, 'rlnSYm4ezMEFlFDY4I8oV8Mls2DZ4', 8, '2023-02-27 17:59:42', '2023-03-05 04:00:01'),
(9, 5, '1', 'default', 'completed', '887.10', 1, '45.10', '0.00', NULL, NULL, '0.00', '842.00', 1, NULL, 1, 'nxffJ9OLfNwj5xYdXkrH7uVR8YEPq', 9, '2023-02-23 03:59:43', '2023-03-05 04:00:01'),
(10, 7, '1', 'default', 'completed', '800.00', 1, '30.00', '0.00', NULL, NULL, '0.00', '770.00', 1, NULL, 1, 'RapYZ7jxO24miSZcc5vHzHp6SrMuj', 10, '2023-02-24 21:59:44', '2023-03-05 04:00:01'),
(11, 9, '1', 'default', 'pending', '530.60', 1, '24.60', '0.00', NULL, NULL, '0.00', '506.00', 1, NULL, 1, '3jUH7wezXYJ2a5iUIThweMFatUEdy', 11, '2023-03-04 07:59:46', '2023-03-05 03:59:47'),
(12, 3, '1', 'default', 'completed', '658.40', 1, '36.40', '0.00', NULL, NULL, '0.00', '622.00', 1, NULL, 1, 'd3YkTBU0vodj2VcZkMXquglgGlsBy', 12, '2023-03-04 09:59:47', '2023-03-05 04:00:01'),
(13, 11, '1', 'default', 'pending', '1273.20', 1, '80.20', '0.00', NULL, NULL, '0.00', '1193.00', 1, NULL, 1, 'GF7nPU4fes3wPv5Bos9Erxx5D1myC', 13, '2023-02-26 11:59:49', '2023-03-05 03:59:50'),
(14, 4, '1', 'default', 'pending', '1086.20', 1, '63.20', '0.00', NULL, NULL, '0.00', '1023.00', 1, NULL, 1, 'V2cSZL78w2y0HuF9HN3Cj9mFVhDmI', 14, '2023-03-02 19:59:51', '2023-03-05 03:59:51'),
(15, 2, '1', 'default', 'pending', '1114.20', 1, '58.20', '0.00', NULL, NULL, '0.00', '1056.00', 1, NULL, 1, 'aTJesXaG08rqusGpkAdEYmnhgAr1e', 15, '2023-03-04 15:59:52', '2023-03-05 03:59:53'),
(16, 8, '1', 'default', 'pending', '497.70', 1, '23.70', '0.00', NULL, NULL, '0.00', '474.00', 1, NULL, 1, 'geNFV8P43MELYS9NaPRpmggvcdic0', 16, '2023-03-02 15:59:53', '2023-03-05 03:59:54'),
(17, 1, '1', 'default', 'pending', '264.60', 1, '18.60', '0.00', NULL, NULL, '0.00', '246.00', 1, NULL, 1, 'xTjQIXD9gqVRuVWGWGI1LlueO4PJH', 17, '2023-03-02 19:59:54', '2023-03-05 03:59:55'),
(18, 2, '1', 'default', 'completed', '505.00', 1, '25.00', '0.00', NULL, NULL, '0.00', '480.00', 1, NULL, 1, 'kRcFjwwXn30uvGBNQzVduO0j8RITJ', 18, '2023-03-04 09:59:55', '2023-03-05 04:00:01'),
(19, 9, '1', 'default', 'pending', '589.20', 1, '31.20', '0.00', NULL, NULL, '0.00', '558.00', 1, NULL, 1, 'gnLvUyuptHFaxhFgZlpN2Zc5Rogs3', 19, '2023-03-03 11:59:57', '2023-03-05 03:59:57'),
(20, 11, '1', 'default', 'pending', '625.00', 1, '45.00', '0.00', NULL, NULL, '0.00', '580.00', 1, NULL, 1, 'H0okfvknr1UhMROJTBcdouuu0Dg12', 20, '2023-03-04 13:59:58', '2023-03-05 04:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ec_order_addresses`
--

CREATE TABLE `ec_order_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `country` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `zip_code` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_order_addresses`
--

INSERT INTO `ec_order_addresses` (`id`, `name`, `phone`, `email`, `country`, `state`, `city`, `address`, `order_id`, `zip_code`) VALUES
(1, 'Alayna Ritchie', '+14246248709', 'fabian.jones@example.com', 'SY', 'South Carolina', 'Lake Hassie', '176 Jerrell Haven', 1, '26859'),
(2, 'Eladio O\'Kon', '+16101916776', 'ada.glover@example.net', 'AW', 'Kentucky', 'Lake Marianaborough', '1498 Velma Pass', 2, '56009-5227'),
(3, 'Alayna Ritchie', '+14246248709', 'fabian.jones@example.com', 'SY', 'South Carolina', 'Lake Hassie', '176 Jerrell Haven', 3, '26859'),
(4, 'Dr. Mckenna Bernier II', '+14798049201', 'mollie05@example.com', 'IQ', 'Hawaii', 'Lake Garrison', '2668 Frami Rapid', 4, '28858'),
(5, 'Mrs. Nova Rodriguez I', '+12819147677', 'reichert.leonard@example.org', 'KH', 'Colorado', 'New Gabriel', '4637 Konopelski Hill Apt. 786', 5, '07761'),
(6, 'Mrs. Nova Rodriguez I', '+12819147677', 'reichert.leonard@example.org', 'KH', 'Colorado', 'New Gabriel', '4637 Konopelski Hill Apt. 786', 6, '07761'),
(7, 'Dr. Boris Wilderman', '+15405941200', 'maggie.champlin@example.net', 'BS', 'Illinois', 'East Olgastad', '5149 Padberg Groves Apt. 799', 7, '13771'),
(8, 'Joe Walker PhD', '+12298352318', 'laurianne44@example.net', 'FI', 'Iowa', 'Port Tianna', '36704 Jerod Well Apt. 417', 8, '59070'),
(9, 'Mrs. Nova Rodriguez I', '+12819147677', 'reichert.leonard@example.org', 'KH', 'Colorado', 'New Gabriel', '4637 Konopelski Hill Apt. 786', 9, '07761'),
(10, 'Dr. Kian Krajcik II', '+19048790827', 'daugherty.aaron@example.net', 'BA', 'Arkansas', 'East Kim', '861 Sanford Court Suite 230', 10, '78256-0609'),
(11, 'Dr. Mckenna Bernier II', '+14798049201', 'mollie05@example.com', 'IQ', 'Hawaii', 'Lake Garrison', '2668 Frami Rapid', 11, '28858'),
(12, 'Alayna Ritchie', '+14246248709', 'fabian.jones@example.com', 'SY', 'South Carolina', 'Lake Hassie', '176 Jerrell Haven', 12, '26859'),
(13, 'Eladio O\'Kon', '+16101916776', 'ada.glover@example.net', 'AW', 'Kentucky', 'Lake Marianaborough', '1498 Velma Pass', 13, '56009-5227'),
(14, 'Cassie Effertz I', '+16675695891', 'vemmerich@example.com', 'MD', 'Georgia', 'Port Scot', '6746 Paucek Stream Apt. 380', 14, '26225'),
(15, 'Jacques Monahan', '+13867688869', 'schimmel.jamie@example.net', 'MW', 'Ohio', 'Alejandrashire', '63379 Dach Fork Suite 581', 15, '12264-1952'),
(16, 'Dr. Boris Wilderman', '+15405941200', 'maggie.champlin@example.net', 'BS', 'Illinois', 'East Olgastad', '5149 Padberg Groves Apt. 799', 16, '13771'),
(17, 'John Smith', '+18591696769', 'john.smith@botble.com', 'EG', 'Indiana', 'New Pearline', '713 Kuhic Neck Apt. 151', 17, '04225'),
(18, 'Jacques Monahan', '+13867688869', 'schimmel.jamie@example.net', 'MW', 'Ohio', 'Alejandrashire', '63379 Dach Fork Suite 581', 18, '12264-1952'),
(19, 'Dr. Mckenna Bernier II', '+14798049201', 'mollie05@example.com', 'IQ', 'Hawaii', 'Lake Garrison', '2668 Frami Rapid', 19, '28858'),
(20, 'Eladio O\'Kon', '+16101916776', 'ada.glover@example.net', 'AW', 'Kentucky', 'Lake Marianaborough', '1498 Velma Pass', 20, '56009-5227');

-- --------------------------------------------------------

--
-- Table structure for table `ec_order_histories`
--

CREATE TABLE `ec_order_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `action` varchar(120) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `extras` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_order_histories`
--

INSERT INTO `ec_order_histories` (`id`, `action`, `description`, `user_id`, `order_id`, `extras`, `created_at`, `updated_at`) VALUES
(1, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 1, NULL, '2023-02-16 11:59:30', '2023-02-16 11:59:30'),
(2, 'confirm_order', 'Order was verified by %user_name%', 0, 1, NULL, '2023-02-16 11:59:30', '2023-02-16 11:59:30'),
(3, 'confirm_payment', 'Payment was confirmed (amount $1,149.60) by %user_name%', 0, 1, NULL, '2023-03-05 03:59:32', '2023-03-05 03:59:32'),
(4, 'create_shipment', 'Created shipment for order', 0, 1, NULL, '2023-03-05 03:59:33', '2023-03-05 03:59:33'),
(5, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 2, NULL, '2023-03-01 23:59:33', '2023-03-01 23:59:33'),
(6, 'confirm_order', 'Order was verified by %user_name%', 0, 2, NULL, '2023-03-01 23:59:33', '2023-03-01 23:59:33'),
(7, 'create_shipment', 'Created shipment for order', 0, 2, NULL, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(8, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 2, NULL, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(9, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 3, NULL, '2023-02-28 15:59:35', '2023-02-28 15:59:35'),
(10, 'confirm_order', 'Order was verified by %user_name%', 0, 3, NULL, '2023-02-28 15:59:35', '2023-02-28 15:59:35'),
(11, 'confirm_payment', 'Payment was confirmed (amount $415.70) by %user_name%', 0, 3, NULL, '2023-03-05 03:59:36', '2023-03-05 03:59:36'),
(12, 'create_shipment', 'Created shipment for order', 0, 3, NULL, '2023-03-05 03:59:36', '2023-03-05 03:59:36'),
(13, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 3, NULL, '2023-03-05 03:59:36', '2023-03-05 03:59:36'),
(14, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 4, NULL, '2023-02-27 11:59:36', '2023-02-27 11:59:36'),
(15, 'confirm_order', 'Order was verified by %user_name%', 0, 4, NULL, '2023-02-27 11:59:36', '2023-02-27 11:59:36'),
(16, 'create_shipment', 'Created shipment for order', 0, 4, NULL, '2023-03-05 03:59:37', '2023-03-05 03:59:37'),
(17, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 4, NULL, '2023-03-05 03:59:37', '2023-03-05 03:59:37'),
(18, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 5, NULL, '2023-02-22 11:59:38', '2023-02-22 11:59:38'),
(19, 'confirm_order', 'Order was verified by %user_name%', 0, 5, NULL, '2023-02-22 11:59:38', '2023-02-22 11:59:38'),
(20, 'confirm_payment', 'Payment was confirmed (amount $794.60) by %user_name%', 0, 5, NULL, '2023-03-05 03:59:38', '2023-03-05 03:59:38'),
(21, 'create_shipment', 'Created shipment for order', 0, 5, NULL, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(22, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 5, NULL, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(23, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 6, NULL, '2023-02-25 15:59:39', '2023-02-25 15:59:39'),
(24, 'confirm_order', 'Order was verified by %user_name%', 0, 6, NULL, '2023-02-25 15:59:39', '2023-02-25 15:59:39'),
(25, 'confirm_payment', 'Payment was confirmed (amount $2,144.10) by %user_name%', 0, 6, NULL, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(26, 'create_shipment', 'Created shipment for order', 0, 6, NULL, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(27, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 6, NULL, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(28, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 7, NULL, '2023-03-01 15:59:41', '2023-03-01 15:59:41'),
(29, 'confirm_order', 'Order was verified by %user_name%', 0, 7, NULL, '2023-03-01 15:59:41', '2023-03-01 15:59:41'),
(30, 'create_shipment', 'Created shipment for order', 0, 7, NULL, '2023-03-05 03:59:42', '2023-03-05 03:59:42'),
(31, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 8, NULL, '2023-02-27 17:59:42', '2023-02-27 17:59:42'),
(32, 'confirm_order', 'Order was verified by %user_name%', 0, 8, NULL, '2023-02-27 17:59:42', '2023-02-27 17:59:42'),
(33, 'confirm_payment', 'Payment was confirmed (amount $532.50) by %user_name%', 0, 8, NULL, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(34, 'create_shipment', 'Created shipment for order', 0, 8, NULL, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(35, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 8, NULL, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(36, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 9, NULL, '2023-02-23 03:59:43', '2023-02-23 03:59:43'),
(37, 'confirm_order', 'Order was verified by %user_name%', 0, 9, NULL, '2023-02-23 03:59:43', '2023-02-23 03:59:43'),
(38, 'confirm_payment', 'Payment was confirmed (amount $887.10) by %user_name%', 0, 9, NULL, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(39, 'create_shipment', 'Created shipment for order', 0, 9, NULL, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(40, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 9, NULL, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(41, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 10, NULL, '2023-02-24 21:59:44', '2023-02-24 21:59:44'),
(42, 'confirm_order', 'Order was verified by %user_name%', 0, 10, NULL, '2023-02-24 21:59:44', '2023-02-24 21:59:44'),
(43, 'confirm_payment', 'Payment was confirmed (amount $800.00) by %user_name%', 0, 10, NULL, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(44, 'create_shipment', 'Created shipment for order', 0, 10, NULL, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(45, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 10, NULL, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(46, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 11, NULL, '2023-03-04 07:59:46', '2023-03-04 07:59:46'),
(47, 'confirm_order', 'Order was verified by %user_name%', 0, 11, NULL, '2023-03-04 07:59:46', '2023-03-04 07:59:46'),
(48, 'create_shipment', 'Created shipment for order', 0, 11, NULL, '2023-03-05 03:59:47', '2023-03-05 03:59:47'),
(49, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 12, NULL, '2023-03-04 09:59:47', '2023-03-04 09:59:47'),
(50, 'confirm_order', 'Order was verified by %user_name%', 0, 12, NULL, '2023-03-04 09:59:47', '2023-03-04 09:59:47'),
(51, 'confirm_payment', 'Payment was confirmed (amount $658.40) by %user_name%', 0, 12, NULL, '2023-03-05 03:59:48', '2023-03-05 03:59:48'),
(52, 'create_shipment', 'Created shipment for order', 0, 12, NULL, '2023-03-05 03:59:48', '2023-03-05 03:59:48'),
(53, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 12, NULL, '2023-03-05 03:59:49', '2023-03-05 03:59:49'),
(54, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 13, NULL, '2023-02-26 11:59:49', '2023-02-26 11:59:49'),
(55, 'confirm_order', 'Order was verified by %user_name%', 0, 13, NULL, '2023-02-26 11:59:49', '2023-02-26 11:59:49'),
(56, 'create_shipment', 'Created shipment for order', 0, 13, NULL, '2023-03-05 03:59:50', '2023-03-05 03:59:50'),
(57, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 13, NULL, '2023-03-05 03:59:50', '2023-03-05 03:59:50'),
(58, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 14, NULL, '2023-03-02 19:59:51', '2023-03-02 19:59:51'),
(59, 'confirm_order', 'Order was verified by %user_name%', 0, 14, NULL, '2023-03-02 19:59:51', '2023-03-02 19:59:51'),
(60, 'create_shipment', 'Created shipment for order', 0, 14, NULL, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(61, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 15, NULL, '2023-03-04 15:59:52', '2023-03-04 15:59:52'),
(62, 'confirm_order', 'Order was verified by %user_name%', 0, 15, NULL, '2023-03-04 15:59:52', '2023-03-04 15:59:52'),
(63, 'create_shipment', 'Created shipment for order', 0, 15, NULL, '2023-03-05 03:59:53', '2023-03-05 03:59:53'),
(64, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 15, NULL, '2023-03-05 03:59:53', '2023-03-05 03:59:53'),
(65, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 16, NULL, '2023-03-02 15:59:53', '2023-03-02 15:59:53'),
(66, 'confirm_order', 'Order was verified by %user_name%', 0, 16, NULL, '2023-03-02 15:59:53', '2023-03-02 15:59:53'),
(67, 'confirm_payment', 'Payment was confirmed (amount $497.70) by %user_name%', 0, 16, NULL, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(68, 'create_shipment', 'Created shipment for order', 0, 16, NULL, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(69, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 17, NULL, '2023-03-02 19:59:54', '2023-03-02 19:59:54'),
(70, 'confirm_order', 'Order was verified by %user_name%', 0, 17, NULL, '2023-03-02 19:59:54', '2023-03-02 19:59:54'),
(71, 'create_shipment', 'Created shipment for order', 0, 17, NULL, '2023-03-05 03:59:55', '2023-03-05 03:59:55'),
(72, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 18, NULL, '2023-03-04 09:59:55', '2023-03-04 09:59:55'),
(73, 'confirm_order', 'Order was verified by %user_name%', 0, 18, NULL, '2023-03-04 09:59:55', '2023-03-04 09:59:55'),
(74, 'confirm_payment', 'Payment was confirmed (amount $505.00) by %user_name%', 0, 18, NULL, '2023-03-05 03:59:56', '2023-03-05 03:59:56'),
(75, 'create_shipment', 'Created shipment for order', 0, 18, NULL, '2023-03-05 03:59:56', '2023-03-05 03:59:56'),
(76, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 18, NULL, '2023-03-05 03:59:57', '2023-03-05 03:59:57'),
(77, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 19, NULL, '2023-03-03 11:59:57', '2023-03-03 11:59:57'),
(78, 'confirm_order', 'Order was verified by %user_name%', 0, 19, NULL, '2023-03-03 11:59:57', '2023-03-03 11:59:57'),
(79, 'create_shipment', 'Created shipment for order', 0, 19, NULL, '2023-03-05 03:59:58', '2023-03-05 03:59:58'),
(80, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 19, NULL, '2023-03-05 03:59:58', '2023-03-05 03:59:58'),
(81, 'create_order_from_seeder', 'Order is created from the checkout page', NULL, 20, NULL, '2023-03-04 13:59:58', '2023-03-04 13:59:58'),
(82, 'confirm_order', 'Order was verified by %user_name%', 0, 20, NULL, '2023-03-04 13:59:58', '2023-03-04 13:59:58'),
(83, 'create_shipment', 'Created shipment for order', 0, 20, NULL, '2023-03-05 04:00:00', '2023-03-05 04:00:00'),
(84, 'update_status', 'Order confirmed by %user_name%', 0, 3, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(85, 'update_status', 'Order confirmed by %user_name%', 0, 5, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(86, 'update_status', 'Order confirmed by %user_name%', 0, 6, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(87, 'update_status', 'Order confirmed by %user_name%', 0, 8, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(88, 'update_status', 'Order confirmed by %user_name%', 0, 9, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(89, 'update_status', 'Order confirmed by %user_name%', 0, 10, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(90, 'update_status', 'Order confirmed by %user_name%', 0, 12, NULL, '2023-03-05 04:00:01', '2023-03-05 04:00:01'),
(91, 'update_status', 'Order confirmed by %user_name%', 0, 18, NULL, '2023-03-05 04:00:02', '2023-03-05 04:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `ec_order_product`
--

CREATE TABLE `ec_order_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `tax_amount` decimal(15,2) NOT NULL,
  `options` text DEFAULT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `product_name` varchar(191) NOT NULL,
  `weight` double(8,2) DEFAULT 0.00,
  `restock_quantity` int(10) UNSIGNED DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_order_product`
--

INSERT INTO `ec_order_product` (`id`, `order_id`, `qty`, `price`, `tax_amount`, `options`, `product_id`, `product_name`, `weight`, `restock_quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '216.00', '21.60', '[]', 36, 'Boxed - Bluetooth Headphone', 1104.00, 0, '2023-03-05 03:59:31', '2023-03-05 03:59:31'),
(2, 1, 2, '110.00', '11.00', '[]', 45, 'Leather Watch Band', 1298.00, 0, '2023-03-05 03:59:31', '2023-03-05 03:59:31'),
(3, 1, 3, '130.00', '13.00', '[]', 60, 'Apple Watch Serial 7', 1869.00, 0, '2023-03-05 03:59:31', '2023-03-05 03:59:31'),
(4, 1, 3, '20.00', '2.00', '[]', 91, 'Beat Headphone', 2628.00, 0, '2023-03-05 03:59:31', '2023-03-05 03:59:31'),
(5, 2, 3, '216.00', '21.60', '[]', 35, 'Boxed - Bluetooth Headphone', 1656.00, 0, '2023-03-05 03:59:34', '2023-03-05 03:59:34'),
(6, 2, 2, '130.00', '13.00', '[]', 49, 'Apple iPhone 13 Plus', 1064.00, 0, '2023-03-05 03:59:34', '2023-03-05 03:59:34'),
(7, 3, 3, '127.00', '12.70', '[]', 81, 'Phillips Mouse', 2319.00, 0, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(8, 3, 1, '20.00', '2.00', '[]', 91, 'Beat Headphone', 876.00, 0, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(9, 4, 2, '391.00', '39.10', '[]', 56, 'Macbook Air 12 inch', 1680.00, 0, '2023-03-05 03:59:37', '2023-03-05 03:59:37'),
(10, 4, 3, '130.00', '13.00', '[]', 59, 'Apple Watch Serial 7', 1869.00, 0, '2023-03-05 03:59:37', '2023-03-05 03:59:37'),
(11, 4, 1, '126.00', '12.60', '[]', 96, 'Smart Televisions', 662.00, 0, '2023-03-05 03:59:37', '2023-03-05 03:59:37'),
(12, 5, 2, '216.00', '21.60', '[]', 38, 'Boxed - Bluetooth Headphone', 1104.00, 0, '2023-03-05 03:59:38', '2023-03-05 03:59:38'),
(13, 5, 3, '110.00', '11.00', '[]', 68, 'Hand playstation', 1803.00, 0, '2023-03-05 03:59:38', '2023-03-05 03:59:38'),
(14, 6, 3, '469.00', '46.90', '[]', 34, 'Headphone Ultra Bass', 2688.00, 0, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(15, 6, 1, '216.00', '21.60', '[]', 37, 'Boxed - Bluetooth Headphone', 552.00, 0, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(16, 6, 3, '73.00', '7.30', '[]', 40, 'Chikie - Bluetooth Speaker', 2355.00, 0, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(17, 6, 3, '73.00', '7.30', '[]', 41, 'Chikie - Bluetooth Speaker', 2355.00, 0, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(18, 7, 2, '110.00', '11.00', '[]', 45, 'Leather Watch Band', 1298.00, 0, '2023-03-05 03:59:41', '2023-03-05 03:59:41'),
(19, 7, 2, '130.00', '13.00', '[]', 57, 'Apple Watch Serial 7', 1246.00, 0, '2023-03-05 03:59:41', '2023-03-05 03:59:41'),
(20, 7, 3, '110.00', '11.00', '[]', 70, 'Hand playstation', 1803.00, 0, '2023-03-05 03:59:41', '2023-03-05 03:59:41'),
(21, 7, 2, '115.00', '11.50', '[]', 79, 'Historic Alarm Clock', 1722.00, 0, '2023-03-05 03:59:41', '2023-03-05 03:59:41'),
(22, 8, 1, '129.00', '12.90', '[]', 66, 'MacSafe 80W', 544.00, 0, '2023-03-05 03:59:42', '2023-03-05 03:59:42'),
(23, 8, 3, '126.00', '12.60', '[]', 96, 'Smart Televisions', 1986.00, 0, '2023-03-05 03:59:42', '2023-03-05 03:59:42'),
(24, 9, 2, '391.00', '39.10', '[]', 55, 'Macbook Air 12 inch', 1680.00, 0, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(25, 9, 1, '60.00', '6.00', '[]', 99, 'Samsung Smart TV', 712.00, 0, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(26, 10, 2, '130.00', '13.00', '[]', 58, 'Apple Watch Serial 7', 1246.00, 0, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(27, 10, 3, '110.00', '11.00', '[]', 70, 'Hand playstation', 1803.00, 0, '2023-03-05 03:59:45', '2023-03-05 03:59:45'),
(28, 10, 3, '60.00', '6.00', '[]', 100, 'Samsung Smart TV', 2136.00, 0, '2023-03-05 03:59:45', '2023-03-05 03:59:45'),
(29, 11, 3, '130.00', '13.00', '[]', 57, 'Apple Watch Serial 7', 1869.00, 0, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(30, 11, 1, '116.00', '11.60', '[]', 80, 'Black Glasses', 552.00, 0, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(31, 12, 1, '120.00', '12.00', '[]', 63, 'Apple Keyboard', 818.00, 0, '2023-03-05 03:59:47', '2023-03-05 03:59:47'),
(32, 12, 3, '129.00', '12.90', '[]', 66, 'MacSafe 80W', 1632.00, 0, '2023-03-05 03:59:47', '2023-03-05 03:59:47'),
(33, 12, 1, '115.00', '11.50', '[]', 79, 'Historic Alarm Clock', 861.00, 0, '2023-03-05 03:59:47', '2023-03-05 03:59:47'),
(34, 13, 2, '391.00', '39.10', '[]', 55, 'Macbook Air 12 inch', 1680.00, 0, '2023-03-05 03:59:49', '2023-03-05 03:59:49'),
(35, 13, 1, '391.00', '39.10', '[]', 56, 'Macbook Air 12 inch', 840.00, 0, '2023-03-05 03:59:49', '2023-03-05 03:59:49'),
(36, 13, 1, '20.00', '2.00', '[]', 91, 'Beat Headphone', 876.00, 0, '2023-03-05 03:59:49', '2023-03-05 03:59:49'),
(37, 14, 2, '391.00', '39.10', '[]', 55, 'Macbook Air 12 inch', 1680.00, 0, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(38, 14, 1, '115.00', '11.50', '[]', 79, 'Historic Alarm Clock', 861.00, 0, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(39, 14, 1, '126.00', '12.60', '[]', 98, 'Smart Televisions', 662.00, 0, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(40, 15, 1, '216.00', '21.60', '[]', 37, 'Boxed - Bluetooth Headphone', 552.00, 0, '2023-03-05 03:59:52', '2023-03-05 03:59:52'),
(41, 15, 1, '129.00', '12.90', '[]', 66, 'MacSafe 80W', 544.00, 0, '2023-03-05 03:59:52', '2023-03-05 03:59:52'),
(42, 15, 3, '110.00', '11.00', '[]', 70, 'Hand playstation', 1803.00, 0, '2023-03-05 03:59:52', '2023-03-05 03:59:52'),
(43, 15, 3, '127.00', '12.70', '[]', 82, 'Phillips Mouse', 2319.00, 0, '2023-03-05 03:59:52', '2023-03-05 03:59:52'),
(44, 16, 2, '110.00', '11.00', '[]', 45, 'Leather Watch Band', 1298.00, 0, '2023-03-05 03:59:53', '2023-03-05 03:59:53'),
(45, 16, 2, '127.00', '12.70', '[]', 81, 'Phillips Mouse', 1546.00, 0, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(46, 17, 1, '126.00', '12.60', '[]', 73, 'Cool Smart Watches', 517.00, 0, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(47, 17, 2, '60.00', '6.00', '[]', 99, 'Samsung Smart TV', 1424.00, 0, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(48, 18, 2, '120.00', '12.00', '[]', 63, 'Apple Keyboard', 1636.00, 0, '2023-03-05 03:59:55', '2023-03-05 03:59:55'),
(49, 18, 2, '110.00', '11.00', '[]', 74, 'Black Smart Watches', 1728.00, 0, '2023-03-05 03:59:55', '2023-03-05 03:59:55'),
(50, 18, 1, '20.00', '2.00', '[]', 91, 'Beat Headphone', 876.00, 0, '2023-03-05 03:59:55', '2023-03-05 03:59:55'),
(51, 19, 2, '126.00', '12.60', '[]', 72, 'Cool Smart Watches', 1034.00, 0, '2023-03-05 03:59:57', '2023-03-05 03:59:57'),
(52, 19, 1, '126.00', '12.60', '[]', 75, 'Leather Watch Band Serial 3', 727.00, 0, '2023-03-05 03:59:57', '2023-03-05 03:59:57'),
(53, 19, 3, '60.00', '6.00', '[]', 101, 'Samsung Smart TV', 2136.00, 0, '2023-03-05 03:59:57', '2023-03-05 03:59:57'),
(54, 20, 1, '300.00', '30.00', '[]', 32, 'Smart Home Speaker', 783.00, 0, '2023-03-05 03:59:59', '2023-03-05 03:59:59'),
(55, 20, 2, '130.00', '13.00', '[]', 59, 'Apple Watch Serial 7', 1246.00, 0, '2023-03-05 03:59:59', '2023-03-05 03:59:59'),
(56, 20, 1, '20.00', '2.00', '[]', 90, 'Beat Headphone', 876.00, 0, '2023-03-05 03:59:59', '2023-03-05 03:59:59');

-- --------------------------------------------------------

--
-- Table structure for table `ec_products`
--

CREATE TABLE `ec_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `images` text DEFAULT NULL,
  `sku` varchar(191) DEFAULT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `allow_checkout_when_out_of_stock` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `with_storehouse_management` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `is_featured` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `options` text DEFAULT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `brand_id` int(10) UNSIGNED DEFAULT NULL,
  `is_variation` tinyint(4) NOT NULL DEFAULT 0,
  `is_searchable` tinyint(4) NOT NULL DEFAULT 0,
  `is_show_on_list` tinyint(4) NOT NULL DEFAULT 0,
  `sale_type` tinyint(4) NOT NULL DEFAULT 0,
  `price` double UNSIGNED DEFAULT NULL,
  `sale_price` double UNSIGNED DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `length` double(8,2) DEFAULT NULL,
  `wide` double(8,2) DEFAULT NULL,
  `height` double(8,2) DEFAULT NULL,
  `weight` double(8,2) DEFAULT NULL,
  `barcode` varchar(191) DEFAULT NULL,
  `length_unit` varchar(20) DEFAULT NULL,
  `wide_unit` varchar(20) DEFAULT NULL,
  `height_unit` varchar(20) DEFAULT NULL,
  `weight_unit` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tax_id` int(10) UNSIGNED DEFAULT NULL,
  `views` bigint(20) NOT NULL DEFAULT 0,
  `stock_status` varchar(191) DEFAULT 'in_stock'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_products`
--

INSERT INTO `ec_products` (`id`, `name`, `description`, `content`, `status`, `images`, `sku`, `order`, `quantity`, `allow_checkout_when_out_of_stock`, `with_storehouse_management`, `is_featured`, `options`, `category_id`, `brand_id`, `is_variation`, `is_searchable`, `is_show_on_list`, `sale_type`, `price`, `sale_price`, `start_date`, `end_date`, `length`, `wide`, `height`, `weight`, `barcode`, `length_unit`, `wide_unit`, `height_unit`, `weight_unit`, `created_at`, `updated_at`, `tax_id`, `views`, `stock_status`) VALUES
(1, 'Smart Home Speaker', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/1.jpg\",\"products\\/1-1.jpg\",\"products\\/1-2.jpg\",\"products\\/1-3.jpg\"]', 'HS-194-A0', 0, 19, 0, 1, 1, NULL, NULL, 1, 0, 0, 0, 0, 300, NULL, NULL, NULL, 11.00, 15.00, 11.00, 783.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:15', '2023-03-05 03:58:36', 1, 119024, 'in_stock'),
(2, 'Headphone Ultra Bass', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/2.jpg\",\"products\\/2-1.jpg\",\"products\\/2-2.jpg\",\"products\\/2-3.jpg\"]', 'HS-101-A0', 0, 19, 0, 1, 1, NULL, NULL, 4, 0, 0, 0, 0, 469, NULL, NULL, NULL, 19.00, 18.00, 13.00, 896.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:16', '2023-03-05 03:58:38', 1, 127307, 'in_stock'),
(3, 'Boxed - Bluetooth Headphone', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/3.jpg\",\"products\\/3-1.jpg\",\"products\\/3-2.jpg\",\"products\\/3-3.jpg\"]', 'HS-123-A0', 0, 18, 0, 1, 1, NULL, NULL, 5, 0, 0, 0, 0, 216, NULL, NULL, NULL, 18.00, 18.00, 11.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:17', '2023-03-05 03:58:38', 1, 168531, 'in_stock'),
(4, 'Chikie - Bluetooth Speaker', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/4.jpg\",\"products\\/4-1.jpg\",\"products\\/4-2.jpg\",\"products\\/4-3.jpg\"]', 'HS-195-A0', 0, 18, 0, 1, 1, NULL, NULL, 2, 0, 0, 0, 0, 73, 56.94, NULL, NULL, 20.00, 18.00, 10.00, 785.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:18', '2023-03-05 03:58:40', 1, 147797, 'in_stock'),
(5, 'Camera Hikvision HK-35VS8', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/5.jpg\",\"products\\/5-1.jpg\",\"products\\/5-2.jpg\",\"products\\/5-3.jpg\"]', 'HS-177-A0', 0, 20, 0, 1, 1, NULL, NULL, 2, 0, 0, 0, 0, 44, NULL, NULL, NULL, 13.00, 13.00, 14.00, 643.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:19', '2023-03-05 03:58:42', 1, 130603, 'in_stock'),
(6, 'Camera Samsung SS-24', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/6.jpg\",\"products\\/6-1.jpg\"]', 'HS-171-A0', 0, 13, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 58, NULL, NULL, NULL, 20.00, 13.00, 10.00, 695.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:19', '2023-03-05 03:58:43', 1, 106796, 'in_stock'),
(7, 'Leather Watch Band', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/7.jpg\",\"products\\/7-1.jpg\"]', 'HS-119-A0', 0, 20, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 110, NULL, NULL, NULL, 18.00, 20.00, 15.00, 649.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:20', '2023-03-05 03:58:44', 1, 143683, 'in_stock'),
(8, 'Apple iPhone 13 Plus', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/8.jpg\",\"products\\/8-1.jpg\"]', 'HS-186-A0', 0, 19, 0, 1, 1, NULL, NULL, 5, 0, 0, 0, 0, 130, 106.6, NULL, NULL, 14.00, 17.00, 11.00, 532.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:20', '2023-03-05 09:56:47', 1, 78848, 'in_stock'),
(9, 'Macbook Pro 2015', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/9.jpg\",\"products\\/9-1.jpg\"]', 'HS-156-A0', 0, 15, 0, 1, 1, NULL, NULL, 5, 0, 0, 0, 0, 120, NULL, NULL, NULL, 14.00, 11.00, 15.00, 708.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:21', '2023-03-05 03:58:47', 1, 56301, 'in_stock'),
(10, 'Macbook Air 12 inch', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/10.jpg\",\"products\\/10-1.jpg\"]', 'HS-188-A0', 0, 14, 0, 1, 1, NULL, NULL, 1, 0, 0, 0, 0, 391, NULL, NULL, NULL, 12.00, 12.00, 14.00, 840.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:22', '2023-03-05 03:58:48', 1, 5863, 'in_stock'),
(11, 'Apple Watch Serial 7', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/11.jpg\",\"products\\/11-1.jpg\"]', 'HS-129-A0', 0, 16, 0, 1, 1, NULL, NULL, 2, 0, 0, 0, 0, 130, NULL, NULL, NULL, 11.00, 18.00, 11.00, 623.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:22', '2023-03-05 03:58:49', 1, 65119, 'in_stock'),
(12, 'Macbook Pro 13 inch', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/12.jpg\",\"products\\/12-1.jpg\"]', 'HS-143-A0', 0, 15, 0, 1, 1, NULL, NULL, 3, 0, 0, 0, 0, 111, 77.7, NULL, NULL, 17.00, 12.00, 14.00, 762.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:23', '2023-03-05 03:58:51', 1, 64176, 'in_stock'),
(13, 'Apple Keyboard', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/13.jpg\",\"products\\/13-1.jpg\"]', 'HS-118-A0', 0, 20, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 120, NULL, NULL, NULL, 19.00, 20.00, 19.00, 818.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:23', '2023-03-05 03:58:51', 1, 50097, 'in_stock'),
(14, 'MacSafe 80W', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/14.jpg\",\"products\\/14-1.jpg\"]', 'HS-153-A0', 0, 15, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 129, NULL, NULL, NULL, 10.00, 19.00, 19.00, 544.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:24', '2023-03-05 03:58:53', 1, 25680, 'in_stock'),
(15, 'Hand playstation', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/15.jpg\",\"products\\/15-1.jpg\"]', 'HS-148-A0', 0, 19, 0, 1, 1, NULL, NULL, 7, 0, 0, 0, 0, 110, NULL, NULL, NULL, 12.00, 16.00, 18.00, 601.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:24', '2023-03-05 03:58:55', 1, 134854, 'in_stock'),
(16, 'Apple Airpods Serial 3', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/16.jpg\"]', 'HS-124-A0', 0, 11, 0, 1, 1, NULL, NULL, 2, 0, 0, 0, 0, 113, 88.14, NULL, NULL, 16.00, 19.00, 10.00, 566.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:25', '2023-03-05 03:58:56', 1, 120154, 'in_stock'),
(17, 'Cool Smart Watches', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/17.jpg\"]', 'HS-157-A0', 0, 19, 0, 1, 1, NULL, NULL, 1, 0, 0, 0, 0, 126, NULL, NULL, NULL, 10.00, 10.00, 16.00, 517.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:26', '2023-03-05 03:58:57', 1, 100481, 'in_stock'),
(18, 'Black Smart Watches', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/18.jpg\",\"products\\/18-1.jpg\",\"products\\/18-2.jpg\"]', 'HS-166-A0', 0, 19, 0, 1, 1, NULL, NULL, 3, 0, 0, 0, 0, 110, NULL, NULL, NULL, 20.00, 20.00, 14.00, 864.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:26', '2023-03-05 03:58:58', 1, 199989, 'in_stock'),
(19, 'Leather Watch Band Serial 3', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/19.jpg\",\"products\\/19-1.jpg\"]', 'HS-114-A0', 0, 17, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 126, NULL, NULL, NULL, 10.00, 15.00, 11.00, 727.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:27', '2023-03-05 03:58:59', 1, 71103, 'in_stock'),
(20, 'Macbook Pro 2015 13 inch', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/20.jpg\",\"products\\/20-1.jpg\"]', 'HS-144-A0', 0, 20, 0, 1, 1, NULL, NULL, 5, 0, 0, 0, 0, 119, 96.39, NULL, NULL, 18.00, 10.00, 19.00, 711.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:28', '2023-03-05 03:59:00', 1, 167691, 'in_stock');
INSERT INTO `ec_products` (`id`, `name`, `description`, `content`, `status`, `images`, `sku`, `order`, `quantity`, `allow_checkout_when_out_of_stock`, `with_storehouse_management`, `is_featured`, `options`, `category_id`, `brand_id`, `is_variation`, `is_searchable`, `is_show_on_list`, `sale_type`, `price`, `sale_price`, `start_date`, `end_date`, `length`, `wide`, `height`, `weight`, `barcode`, `length_unit`, `wide_unit`, `height_unit`, `weight_unit`, `created_at`, `updated_at`, `tax_id`, `views`, `stock_status`) VALUES
(21, 'Historic Alarm Clock', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/21.jpg\",\"products\\/21-1.jpg\"]', 'HS-184-A0', 0, 11, 0, 1, 1, NULL, NULL, 6, 0, 0, 0, 0, 115, NULL, NULL, NULL, 17.00, 16.00, 19.00, 861.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:28', '2023-03-05 03:59:02', 1, 121680, 'in_stock'),
(22, 'Black Glasses', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/22.jpg\",\"products\\/22-1.jpg\"]', 'HS-141-A0', 0, 14, 0, 1, 1, NULL, NULL, 5, 0, 0, 0, 0, 116, NULL, NULL, NULL, 13.00, 15.00, 15.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:29', '2023-03-05 03:59:03', 1, 53107, 'in_stock'),
(23, 'Phillips Mouse', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/23.jpg\",\"products\\/23-1.jpg\"]', 'HS-171-A0', 0, 18, 0, 1, 1, NULL, NULL, 2, 0, 0, 0, 0, 127, NULL, NULL, NULL, 16.00, 18.00, 15.00, 773.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:29', '2023-03-05 03:59:04', 1, 102819, 'in_stock'),
(24, 'Gaming Keyboard', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/24.jpg\",\"products\\/24-1.jpg\"]', 'HS-149-A0', 0, 19, 0, 1, 1, NULL, NULL, 7, 0, 0, 0, 0, 117, 95.94, NULL, NULL, 10.00, 13.00, 12.00, 856.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:30', '2023-03-05 03:59:06', 1, 142799, 'in_stock'),
(25, 'Dual Camera 20MP', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/25.jpg\",\"products\\/25-1.jpg\"]', 'HS-117-A0', 0, 16, 0, 1, 0, NULL, NULL, 6, 0, 0, 0, 0, 80.25, NULL, NULL, NULL, 19.00, 20.00, 19.00, 633.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:31', '2023-03-05 03:59:08', 1, 117052, 'in_stock'),
(26, 'Smart Watches', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/26.jpg\",\"products\\/26-1.jpg\",\"products\\/26-2.jpg\"]', 'HS-129-A0', 0, 10, 0, 1, 0, NULL, NULL, 3, 0, 0, 0, 0, 40.5, NULL, NULL, NULL, 11.00, 14.00, 17.00, 542.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:32', '2023-03-05 03:59:08', 1, 104661, 'in_stock'),
(27, 'Beat Headphone', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/27.jpg\",\"products\\/27-1.jpg\"]', 'HS-172-A0', 0, 11, 0, 1, 0, NULL, NULL, 3, 0, 0, 0, 0, 20, NULL, NULL, NULL, 19.00, 17.00, 20.00, 876.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:32', '2023-03-05 03:59:09', 1, 92598, 'in_stock'),
(28, 'Red & Black Headphone', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/28.jpg\",\"products\\/28-1.jpg\"]', 'HS-121-A0', 0, 12, 0, 1, 0, NULL, NULL, 3, 0, 0, 0, 0, 52, 46.8, NULL, NULL, 16.00, 14.00, 10.00, 590.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:33', '2023-03-05 03:59:11', 1, 156658, 'in_stock'),
(29, 'Audio Equipment', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/29.jpg\",\"products\\/29-1.jpg\"]', 'HS-174-A0', 0, 10, 0, 1, 0, NULL, NULL, 1, 0, 0, 0, 0, 50, NULL, NULL, NULL, 15.00, 12.00, 10.00, 745.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:33', '2023-03-05 16:58:39', 1, 37400, 'in_stock'),
(30, 'Smart Televisions', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/30.jpg\",\"products\\/30-1.jpg\"]', 'HS-143-A0', 0, 14, 0, 1, 0, NULL, NULL, 3, 0, 0, 0, 0, 126, NULL, NULL, NULL, 20.00, 18.00, 20.00, 662.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:34', '2023-03-05 03:59:13', 1, 54517, 'in_stock'),
(31, 'Samsung Smart TV', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline.</p>', '<p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains&rsquo; signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.</p>\n                                <p>- Casual unisex fit</p>\n\n                                <p>- 64% polyester, 36% polyurethane</p>\n\n                                <p>- Water column pressure: 4000 mm</p>\n\n                                <p>- Model is 187cm tall and wearing a size S / M</p>\n\n                                <p>- Unisex fit</p>\n\n                                <p>- Drawstring hood with built-in cap</p>\n\n                                <p>- Front placket with snap buttons</p>\n\n                                <p>- Ventilation under armpit</p>\n\n                                <p>- Adjustable cuffs</p>\n\n                                <p>- Double welted front pockets</p>\n\n                                <p>- Adjustable elastic string at hempen</p>\n\n                                <p>- Ultrasonically welded seams</p>\n\n                                <p>This is a unisex item, please check our clothing &amp; footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>', 'published', '[\"products\\/31.jpg\",\"products\\/31-1.jpg\"]', 'HS-118-A0', 0, 19, 0, 1, 0, NULL, NULL, 4, 0, 0, 0, 0, 60, NULL, NULL, NULL, 16.00, 18.00, 18.00, 712.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:34', '2023-03-05 17:02:50', 1, 105216, 'in_stock'),
(32, 'Smart Home Speaker', NULL, NULL, 'published', '[\"products\\/1.jpg\"]', 'HS-194-A0', 0, 19, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 300, NULL, NULL, NULL, 11.00, 15.00, 11.00, 783.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:36', '2023-03-05 03:58:36', NULL, 0, 'in_stock'),
(33, 'Smart Home Speaker', NULL, NULL, 'published', '[\"products\\/1-1.jpg\"]', 'HS-194-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 300, NULL, NULL, NULL, 11.00, 15.00, 11.00, 783.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:36', '2023-03-05 03:58:36', NULL, 0, 'in_stock'),
(34, 'Headphone Ultra Bass', NULL, NULL, 'published', '[\"products\\/2.jpg\"]', 'HS-101-A0', 0, 19, 0, 1, 0, NULL, NULL, 4, 1, 0, 0, 0, 469, NULL, NULL, NULL, 19.00, 18.00, 13.00, 896.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:37', '2023-03-05 03:58:37', NULL, 0, 'in_stock'),
(35, 'Boxed - Bluetooth Headphone', NULL, NULL, 'published', '[\"products\\/3.jpg\"]', 'HS-123-A0', 0, 18, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 216, NULL, NULL, NULL, 18.00, 18.00, 11.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:38', '2023-03-05 03:58:38', NULL, 0, 'in_stock'),
(36, 'Boxed - Bluetooth Headphone', NULL, NULL, 'published', '[\"products\\/3-1.jpg\"]', 'HS-123-A0-A1', 0, 18, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 216, NULL, NULL, NULL, 18.00, 18.00, 11.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:38', '2023-03-05 03:58:38', NULL, 0, 'in_stock'),
(37, 'Boxed - Bluetooth Headphone', NULL, NULL, 'published', '[\"products\\/3-2.jpg\"]', 'HS-123-A0-A2', 0, 18, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 216, NULL, NULL, NULL, 18.00, 18.00, 11.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:39', '2023-03-05 03:58:39', NULL, 0, 'in_stock'),
(38, 'Boxed - Bluetooth Headphone', NULL, NULL, 'published', '[\"products\\/3-3.jpg\"]', 'HS-123-A0-A3', 0, 18, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 216, NULL, NULL, NULL, 18.00, 18.00, 11.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:39', '2023-03-05 03:58:39', NULL, 0, 'in_stock'),
(39, 'Chikie - Bluetooth Speaker', NULL, NULL, 'published', '[\"products\\/4.jpg\"]', 'HS-195-A0', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 73, 56.94, NULL, NULL, 20.00, 18.00, 10.00, 785.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:40', '2023-03-05 03:58:40', NULL, 0, 'in_stock'),
(40, 'Chikie - Bluetooth Speaker', NULL, NULL, 'published', '[\"products\\/4-1.jpg\"]', 'HS-195-A0-A1', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 73, 60.59, NULL, NULL, 20.00, 18.00, 10.00, 785.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:40', '2023-03-05 03:58:40', NULL, 0, 'in_stock'),
(41, 'Chikie - Bluetooth Speaker', NULL, NULL, 'published', '[\"products\\/4-2.jpg\"]', 'HS-195-A0-A2', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 73, 58.4, NULL, NULL, 20.00, 18.00, 10.00, 785.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:40', '2023-03-05 03:58:40', NULL, 0, 'in_stock'),
(42, 'Camera Hikvision HK-35VS8', NULL, NULL, 'published', '[\"products\\/5.jpg\"]', 'HS-177-A0', 0, 20, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 44, NULL, NULL, NULL, 13.00, 13.00, 14.00, 643.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:42', '2023-03-05 03:58:42', NULL, 0, 'in_stock'),
(43, 'Camera Hikvision HK-35VS8', NULL, NULL, 'published', '[\"products\\/5-1.jpg\"]', 'HS-177-A0-A1', 0, 20, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 44, NULL, NULL, NULL, 13.00, 13.00, 14.00, 643.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:42', '2023-03-05 03:58:42', NULL, 0, 'in_stock'),
(44, 'Camera Samsung SS-24', NULL, NULL, 'published', '[\"products\\/6.jpg\"]', 'HS-171-A0', 0, 13, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 58, NULL, NULL, NULL, 20.00, 13.00, 10.00, 695.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:42', '2023-03-05 03:58:42', NULL, 0, 'in_stock'),
(45, 'Leather Watch Band', NULL, NULL, 'published', '[\"products\\/7.jpg\"]', 'HS-119-A0', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 110, NULL, NULL, NULL, 18.00, 20.00, 15.00, 649.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:44', '2023-03-05 03:58:44', NULL, 0, 'in_stock'),
(46, 'Leather Watch Band', NULL, NULL, 'published', '[\"products\\/7-1.jpg\"]', 'HS-119-A0-A1', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 110, NULL, NULL, NULL, 18.00, 20.00, 15.00, 649.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:44', '2023-03-05 03:58:44', NULL, 0, 'in_stock'),
(47, 'Leather Watch Band', NULL, NULL, 'published', '[\"products\\/7.jpg\"]', 'HS-119-A0-A2', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 110, NULL, NULL, NULL, 18.00, 20.00, 15.00, 649.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:44', '2023-03-05 03:58:44', NULL, 0, 'in_stock'),
(48, 'Leather Watch Band', NULL, NULL, 'published', '[\"products\\/7.jpg\"]', 'HS-119-A0-A3', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 110, NULL, NULL, NULL, 18.00, 20.00, 15.00, 649.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:45', '2023-03-05 03:58:45', NULL, 0, 'in_stock'),
(49, 'Apple iPhone 13 Plus', NULL, NULL, 'published', '[\"products\\/8.jpg\"]', 'HS-186-A0', 0, 19, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 130, 106.6, NULL, NULL, 14.00, 17.00, 11.00, 532.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:46', '2023-03-05 03:58:46', NULL, 0, 'in_stock'),
(50, 'Apple iPhone 13 Plus', NULL, NULL, 'published', '[\"products\\/8-1.jpg\"]', 'HS-186-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 130, 115.7, NULL, NULL, 14.00, 17.00, 11.00, 532.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:46', '2023-03-05 03:58:46', NULL, 0, 'in_stock'),
(51, 'Apple iPhone 13 Plus', NULL, NULL, 'published', '[\"products\\/8.jpg\"]', 'HS-186-A0-A2', 0, 19, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 130, 113.1, NULL, NULL, 14.00, 17.00, 11.00, 532.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:46', '2023-03-05 03:58:46', NULL, 0, 'in_stock'),
(52, 'Apple iPhone 13 Plus', NULL, NULL, 'published', '[\"products\\/8.jpg\"]', 'HS-186-A0-A3', 0, 19, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 130, 98.8, NULL, NULL, 14.00, 17.00, 11.00, 532.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:46', '2023-03-05 03:58:46', NULL, 0, 'in_stock'),
(53, 'Macbook Pro 2015', NULL, NULL, 'published', '[\"products\\/9.jpg\"]', 'HS-156-A0', 0, 15, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 120, NULL, NULL, NULL, 14.00, 11.00, 15.00, 708.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:47', '2023-03-05 03:58:47', NULL, 0, 'in_stock'),
(54, 'Macbook Air 12 inch', NULL, NULL, 'published', '[\"products\\/10.jpg\"]', 'HS-188-A0', 0, 14, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 391, NULL, NULL, NULL, 12.00, 12.00, 14.00, 840.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:48', '2023-03-05 03:58:48', NULL, 0, 'in_stock'),
(55, 'Macbook Air 12 inch', NULL, NULL, 'published', '[\"products\\/10-1.jpg\"]', 'HS-188-A0-A1', 0, 14, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 391, NULL, NULL, NULL, 12.00, 12.00, 14.00, 840.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:48', '2023-03-05 03:58:48', NULL, 0, 'in_stock'),
(56, 'Macbook Air 12 inch', NULL, NULL, 'published', '[\"products\\/10.jpg\"]', 'HS-188-A0-A2', 0, 14, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 391, NULL, NULL, NULL, 12.00, 12.00, 14.00, 840.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:49', '2023-03-05 03:58:49', NULL, 0, 'in_stock'),
(57, 'Apple Watch Serial 7', NULL, NULL, 'published', '[\"products\\/11.jpg\"]', 'HS-129-A0', 0, 16, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 130, NULL, NULL, NULL, 11.00, 18.00, 11.00, 623.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:49', '2023-03-05 03:58:49', NULL, 0, 'in_stock'),
(58, 'Apple Watch Serial 7', NULL, NULL, 'published', '[\"products\\/11-1.jpg\"]', 'HS-129-A0-A1', 0, 16, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 130, NULL, NULL, NULL, 11.00, 18.00, 11.00, 623.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:50', '2023-03-05 03:58:50', NULL, 0, 'in_stock'),
(59, 'Apple Watch Serial 7', NULL, NULL, 'published', '[\"products\\/11.jpg\"]', 'HS-129-A0-A2', 0, 16, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 130, NULL, NULL, NULL, 11.00, 18.00, 11.00, 623.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:50', '2023-03-05 03:58:50', NULL, 0, 'in_stock'),
(60, 'Apple Watch Serial 7', NULL, NULL, 'published', '[\"products\\/11.jpg\"]', 'HS-129-A0-A3', 0, 16, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 130, NULL, NULL, NULL, 11.00, 18.00, 11.00, 623.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:50', '2023-03-05 03:58:50', NULL, 0, 'in_stock'),
(61, 'Macbook Pro 13 inch', NULL, NULL, 'published', '[\"products\\/12.jpg\"]', 'HS-143-A0', 0, 15, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 111, 77.7, NULL, NULL, 17.00, 12.00, 14.00, 762.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:51', '2023-03-05 03:58:51', NULL, 0, 'in_stock'),
(62, 'Apple Keyboard', NULL, NULL, 'published', '[\"products\\/13.jpg\"]', 'HS-118-A0', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 120, NULL, NULL, NULL, 19.00, 20.00, 19.00, 818.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:51', '2023-03-05 03:58:51', NULL, 0, 'in_stock'),
(63, 'Apple Keyboard', NULL, NULL, 'published', '[\"products\\/13-1.jpg\"]', 'HS-118-A0-A1', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 120, NULL, NULL, NULL, 19.00, 20.00, 19.00, 818.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:52', '2023-03-05 03:58:52', NULL, 0, 'in_stock'),
(64, 'Apple Keyboard', NULL, NULL, 'published', '[\"products\\/13.jpg\"]', 'HS-118-A0-A2', 0, 20, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 120, NULL, NULL, NULL, 19.00, 20.00, 19.00, 818.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:52', '2023-03-05 03:58:52', NULL, 0, 'in_stock'),
(65, 'MacSafe 80W', NULL, NULL, 'published', '[\"products\\/14.jpg\"]', 'HS-153-A0', 0, 15, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 129, NULL, NULL, NULL, 10.00, 19.00, 19.00, 544.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:53', '2023-03-05 03:58:53', NULL, 0, 'in_stock'),
(66, 'MacSafe 80W', NULL, NULL, 'published', '[\"products\\/14-1.jpg\"]', 'HS-153-A0-A1', 0, 15, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 129, NULL, NULL, NULL, 10.00, 19.00, 19.00, 544.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:54', '2023-03-05 03:58:54', NULL, 0, 'in_stock'),
(67, 'MacSafe 80W', NULL, NULL, 'published', '[\"products\\/14.jpg\"]', 'HS-153-A0-A2', 0, 15, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 129, NULL, NULL, NULL, 10.00, 19.00, 19.00, 544.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:54', '2023-03-05 03:58:54', NULL, 0, 'in_stock'),
(68, 'Hand playstation', NULL, NULL, 'published', '[\"products\\/15.jpg\"]', 'HS-148-A0', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 110, NULL, NULL, NULL, 12.00, 16.00, 18.00, 601.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:55', '2023-03-05 03:58:55', NULL, 0, 'in_stock'),
(69, 'Hand playstation', NULL, NULL, 'published', '[\"products\\/15-1.jpg\"]', 'HS-148-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 110, NULL, NULL, NULL, 12.00, 16.00, 18.00, 601.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:55', '2023-03-05 03:58:55', NULL, 0, 'in_stock'),
(70, 'Hand playstation', NULL, NULL, 'published', '[\"products\\/15.jpg\"]', 'HS-148-A0-A2', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 110, NULL, NULL, NULL, 12.00, 16.00, 18.00, 601.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:56', '2023-03-05 03:58:56', NULL, 0, 'in_stock'),
(71, 'Apple Airpods Serial 3', NULL, NULL, 'published', '[\"products\\/16.jpg\"]', 'HS-124-A0', 0, 11, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 113, 88.14, NULL, NULL, 16.00, 19.00, 10.00, 566.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:56', '2023-03-05 03:58:56', NULL, 0, 'in_stock'),
(72, 'Cool Smart Watches', NULL, NULL, 'published', '[\"products\\/17.jpg\"]', 'HS-157-A0', 0, 19, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 126, NULL, NULL, NULL, 10.00, 10.00, 16.00, 517.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:57', '2023-03-05 03:58:57', NULL, 0, 'in_stock'),
(73, 'Cool Smart Watches', NULL, NULL, 'published', '[\"products\\/17.jpg\"]', 'HS-157-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 126, NULL, NULL, NULL, 10.00, 10.00, 16.00, 517.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:58', '2023-03-05 03:58:58', NULL, 0, 'in_stock'),
(74, 'Black Smart Watches', NULL, NULL, 'published', '[\"products\\/18.jpg\"]', 'HS-166-A0', 0, 19, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 110, NULL, NULL, NULL, 20.00, 20.00, 14.00, 864.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:58', '2023-03-05 03:58:58', NULL, 0, 'in_stock'),
(75, 'Leather Watch Band Serial 3', NULL, NULL, 'published', '[\"products\\/19.jpg\"]', 'HS-114-A0', 0, 17, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 126, NULL, NULL, NULL, 10.00, 15.00, 11.00, 727.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:58:59', '2023-03-05 03:58:59', NULL, 0, 'in_stock'),
(76, 'Macbook Pro 2015 13 inch', NULL, NULL, 'published', '[\"products\\/20.jpg\"]', 'HS-144-A0', 0, 20, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 119, 96.39, NULL, NULL, 18.00, 10.00, 19.00, 711.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:00', '2023-03-05 03:59:00', NULL, 0, 'in_stock'),
(77, 'Macbook Pro 2015 13 inch', NULL, NULL, 'published', '[\"products\\/20-1.jpg\"]', 'HS-144-A0-A1', 0, 20, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 119, 92.82, NULL, NULL, 18.00, 10.00, 19.00, 711.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:00', '2023-03-05 03:59:00', NULL, 0, 'in_stock'),
(78, 'Historic Alarm Clock', NULL, NULL, 'published', '[\"products\\/21.jpg\"]', 'HS-184-A0', 0, 11, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 115, NULL, NULL, NULL, 17.00, 16.00, 19.00, 861.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:02', '2023-03-05 03:59:02', NULL, 0, 'in_stock'),
(79, 'Historic Alarm Clock', NULL, NULL, 'published', '[\"products\\/21-1.jpg\"]', 'HS-184-A0-A1', 0, 11, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 115, NULL, NULL, NULL, 17.00, 16.00, 19.00, 861.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:02', '2023-03-05 03:59:02', NULL, 0, 'in_stock'),
(80, 'Black Glasses', NULL, NULL, 'published', '[\"products\\/22.jpg\"]', 'HS-141-A0', 0, 14, 0, 1, 0, NULL, NULL, 5, 1, 0, 0, 0, 116, NULL, NULL, NULL, 13.00, 15.00, 15.00, 552.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:03', '2023-03-05 03:59:03', NULL, 0, 'in_stock'),
(81, 'Phillips Mouse', NULL, NULL, 'published', '[\"products\\/23.jpg\"]', 'HS-171-A0', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 127, NULL, NULL, NULL, 16.00, 18.00, 15.00, 773.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:04', '2023-03-05 03:59:04', NULL, 0, 'in_stock'),
(82, 'Phillips Mouse', NULL, NULL, 'published', '[\"products\\/23-1.jpg\"]', 'HS-171-A0-A1', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 127, NULL, NULL, NULL, 16.00, 18.00, 15.00, 773.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:05', '2023-03-05 03:59:05', NULL, 0, 'in_stock'),
(83, 'Phillips Mouse', NULL, NULL, 'published', '[\"products\\/23.jpg\"]', 'HS-171-A0-A2', 0, 18, 0, 1, 0, NULL, NULL, 2, 1, 0, 0, 0, 127, NULL, NULL, NULL, 16.00, 18.00, 15.00, 773.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:05', '2023-03-05 03:59:05', NULL, 0, 'in_stock'),
(84, 'Gaming Keyboard', NULL, NULL, 'published', '[\"products\\/24.jpg\"]', 'HS-149-A0', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 117, 95.94, NULL, NULL, 10.00, 13.00, 12.00, 856.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:06', '2023-03-05 03:59:06', NULL, 0, 'in_stock'),
(85, 'Gaming Keyboard', NULL, NULL, 'published', '[\"products\\/24-1.jpg\"]', 'HS-149-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 117, 90.09, NULL, NULL, 10.00, 13.00, 12.00, 856.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:06', '2023-03-05 03:59:06', NULL, 0, 'in_stock'),
(86, 'Gaming Keyboard', NULL, NULL, 'published', '[\"products\\/24.jpg\"]', 'HS-149-A0-A2', 0, 19, 0, 1, 0, NULL, NULL, 7, 1, 0, 0, 0, 117, 104.13, NULL, NULL, 10.00, 13.00, 12.00, 856.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:06', '2023-03-05 03:59:06', NULL, 0, 'in_stock'),
(87, 'Dual Camera 20MP', NULL, NULL, 'published', '[\"products\\/25.jpg\"]', 'HS-117-A0', 0, 16, 0, 1, 0, NULL, NULL, 6, 1, 0, 0, 0, 80.25, NULL, NULL, NULL, 19.00, 20.00, 19.00, 633.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:07', '2023-03-05 03:59:07', NULL, 0, 'in_stock'),
(88, 'Smart Watches', NULL, NULL, 'published', '[\"products\\/26.jpg\"]', 'HS-129-A0', 0, 10, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 40.5, NULL, NULL, NULL, 11.00, 14.00, 17.00, 542.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:08', '2023-03-05 03:59:08', NULL, 0, 'in_stock'),
(89, 'Smart Watches', NULL, NULL, 'published', '[\"products\\/26-1.jpg\"]', 'HS-129-A0-A1', 0, 10, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 40.5, NULL, NULL, NULL, 11.00, 14.00, 17.00, 542.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:09', '2023-03-05 03:59:09', NULL, 0, 'in_stock'),
(90, 'Beat Headphone', NULL, NULL, 'published', '[\"products\\/27.jpg\"]', 'HS-172-A0', 0, 11, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 20, NULL, NULL, NULL, 19.00, 17.00, 20.00, 876.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:09', '2023-03-05 03:59:09', NULL, 0, 'in_stock'),
(91, 'Beat Headphone', NULL, NULL, 'published', '[\"products\\/27-1.jpg\"]', 'HS-172-A0-A1', 0, 11, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 20, NULL, NULL, NULL, 19.00, 17.00, 20.00, 876.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:10', '2023-03-05 03:59:10', NULL, 0, 'in_stock'),
(92, 'Beat Headphone', NULL, NULL, 'published', '[\"products\\/27.jpg\"]', 'HS-172-A0-A2', 0, 11, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 20, NULL, NULL, NULL, 19.00, 17.00, 20.00, 876.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:10', '2023-03-05 03:59:10', NULL, 0, 'in_stock'),
(93, 'Beat Headphone', NULL, NULL, 'published', '[\"products\\/27.jpg\"]', 'HS-172-A0-A3', 0, 11, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 20, NULL, NULL, NULL, 19.00, 17.00, 20.00, 876.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:10', '2023-03-05 03:59:10', NULL, 0, 'in_stock'),
(94, 'Red & Black Headphone', NULL, NULL, 'published', '[\"products\\/28.jpg\"]', 'HS-121-A0', 0, 12, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 52, 46.8, NULL, NULL, 16.00, 14.00, 10.00, 590.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:11', '2023-03-05 03:59:11', NULL, 0, 'in_stock'),
(95, 'Audio Equipment', NULL, NULL, 'published', '[\"products\\/29.jpg\"]', 'HS-174-A0', 0, 10, 0, 1, 0, NULL, NULL, 1, 1, 0, 0, 0, 50, NULL, NULL, NULL, 15.00, 12.00, 10.00, 745.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:12', '2023-03-05 03:59:12', NULL, 0, 'in_stock'),
(96, 'Smart Televisions', NULL, NULL, 'published', '[\"products\\/30.jpg\"]', 'HS-143-A0', 0, 14, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 126, NULL, NULL, NULL, 20.00, 18.00, 20.00, 662.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:13', '2023-03-05 03:59:13', NULL, 0, 'in_stock'),
(97, 'Smart Televisions', NULL, NULL, 'published', '[\"products\\/30-1.jpg\"]', 'HS-143-A0-A1', 0, 14, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 126, NULL, NULL, NULL, 20.00, 18.00, 20.00, 662.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:13', '2023-03-05 03:59:13', NULL, 0, 'in_stock'),
(98, 'Smart Televisions', NULL, NULL, 'published', '[\"products\\/30.jpg\"]', 'HS-143-A0-A2', 0, 14, 0, 1, 0, NULL, NULL, 3, 1, 0, 0, 0, 126, NULL, NULL, NULL, 20.00, 18.00, 20.00, 662.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:13', '2023-03-05 03:59:13', NULL, 0, 'in_stock'),
(99, 'Samsung Smart TV', NULL, NULL, 'published', '[\"products\\/31.jpg\"]', 'HS-118-A0', 0, 19, 0, 1, 0, NULL, NULL, 4, 1, 0, 0, 0, 60, NULL, NULL, NULL, 16.00, 18.00, 18.00, 712.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:14', '2023-03-05 03:59:14', NULL, 0, 'in_stock'),
(100, 'Samsung Smart TV', NULL, NULL, 'published', '[\"products\\/31-1.jpg\"]', 'HS-118-A0-A1', 0, 19, 0, 1, 0, NULL, NULL, 4, 1, 0, 0, 0, 60, NULL, NULL, NULL, 16.00, 18.00, 18.00, 712.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:14', '2023-03-05 03:59:14', NULL, 0, 'in_stock'),
(101, 'Samsung Smart TV', NULL, NULL, 'published', '[\"products\\/31.jpg\"]', 'HS-118-A0-A2', 0, 19, 0, 1, 0, NULL, NULL, 4, 1, 0, 0, 0, 60, NULL, NULL, NULL, 16.00, 18.00, 18.00, 712.00, NULL, NULL, NULL, NULL, NULL, '2023-03-05 03:59:14', '2023-03-05 03:59:14', NULL, 0, 'in_stock');

-- --------------------------------------------------------

--
-- Table structure for table `ec_products_translations`
--

CREATE TABLE `ec_products_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_products_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_attributes`
--

CREATE TABLE `ec_product_attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_set_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(120) NOT NULL,
  `slug` varchar(120) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `is_default` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_attributes`
--

INSERT INTO `ec_product_attributes` (`id`, `attribute_set_id`, `title`, `slug`, `color`, `image`, `is_default`, `order`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Green', 'green', '#5FB7D4', NULL, 1, 1, 'published', '2023-03-05 03:57:16', '2023-03-05 03:57:16'),
(2, 1, 'Blue', 'blue', '#333333', NULL, 0, 2, 'published', '2023-03-05 03:57:16', '2023-03-05 03:57:16'),
(3, 1, 'Red', 'red', '#DA323F', NULL, 0, 3, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(4, 1, 'Black', 'back', '#2F366C', NULL, 0, 4, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(5, 1, 'Brown', 'brown', '#87554B', NULL, 0, 5, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(6, 2, 'S', 's', NULL, NULL, 1, 1, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(7, 2, 'M', 'm', NULL, NULL, 1, 2, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(8, 2, 'L', 'l', NULL, NULL, 1, 3, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(9, 2, 'XL', 'xl', NULL, NULL, 1, 4, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17'),
(10, 2, 'XXL', 'xxl', NULL, NULL, 1, 5, 'published', '2023-03-05 03:57:17', '2023-03-05 03:57:17');

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_attributes_translations`
--

CREATE TABLE `ec_product_attributes_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_product_attributes_id` int(11) NOT NULL,
  `title` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_attribute_sets`
--

CREATE TABLE `ec_product_attribute_sets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(120) NOT NULL,
  `slug` varchar(120) DEFAULT NULL,
  `display_layout` varchar(191) NOT NULL DEFAULT 'swatch_dropdown',
  `is_searchable` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `is_comparable` tinyint(3) UNSIGNED NOT NULL DEFAULT 1,
  `is_use_in_product_listing` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_attribute_sets`
--

INSERT INTO `ec_product_attribute_sets` (`id`, `title`, `slug`, `display_layout`, `is_searchable`, `is_comparable`, `is_use_in_product_listing`, `status`, `order`, `created_at`, `updated_at`) VALUES
(1, 'Color', 'color', 'visual', 1, 1, 1, 'published', 0, '2023-03-05 03:57:15', '2023-03-05 03:57:15'),
(2, 'Size', 'size', 'text', 1, 1, 1, 'published', 1, '2023-03-05 03:57:15', '2023-03-05 03:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_attribute_sets_translations`
--

CREATE TABLE `ec_product_attribute_sets_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_product_attribute_sets_id` int(11) NOT NULL,
  `title` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_categories`
--

CREATE TABLE `ec_product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT 0,
  `description` mediumtext DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `is_featured` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_categories`
--

INSERT INTO `ec_product_categories` (`id`, `name`, `parent_id`, `description`, `status`, `order`, `image`, `is_featured`, `created_at`, `updated_at`) VALUES
(1, 'Television', 0, NULL, 'published', 0, 'product-categories/p-1.png', 1, '2023-03-05 03:56:58', '2023-03-05 03:56:58'),
(2, 'Mobile', 0, NULL, 'published', 1, 'product-categories/p-2.png', 1, '2023-03-05 03:56:58', '2023-03-05 03:56:58'),
(3, 'Headphone', 0, NULL, 'published', 2, 'product-categories/p-3.png', 1, '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(4, 'Watches', 0, NULL, 'published', 3, 'product-categories/p-4.png', 1, '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(5, 'Game', 0, NULL, 'published', 4, 'product-categories/p-5.png', 1, '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(6, 'Camera', 0, NULL, 'published', 5, 'product-categories/p-6.png', 1, '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(7, 'Audio', 0, NULL, 'published', 6, 'product-categories/p-7.png', 1, '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(8, 'Mobile & Tablet', 0, NULL, 'published', 7, NULL, 0, '2023-03-05 03:57:01', '2023-03-05 03:57:01'),
(9, 'Accessories', 0, NULL, 'published', 8, NULL, 0, '2023-03-05 03:57:01', '2023-03-05 03:57:01'),
(10, 'Home Audio & Theater', 0, NULL, 'published', 9, NULL, 0, '2023-03-05 03:57:02', '2023-03-05 03:57:02'),
(11, 'Tv & Smart Box', 0, NULL, 'published', 10, NULL, 0, '2023-03-05 03:57:03', '2023-03-05 03:57:03'),
(12, 'Printer', 0, NULL, 'published', 11, NULL, 0, '2023-03-05 03:57:04', '2023-03-05 03:57:04'),
(13, 'Computer', 0, NULL, 'published', 12, NULL, 0, '2023-03-05 03:57:05', '2023-03-05 03:57:05'),
(14, 'Fax Machine', 0, NULL, 'published', 13, NULL, 0, '2023-03-05 03:57:05', '2023-03-05 03:57:05'),
(15, 'Mouse', 0, NULL, 'published', 14, NULL, 0, '2023-03-05 03:57:06', '2023-03-05 03:57:06'),
(16, 'Quia eos cum nam saepe.', 1, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:07', '2023-03-05 03:57:07'),
(17, 'Sed et est ipsum omnis.', 1, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:07', '2023-03-05 03:57:07'),
(18, 'Vero aut ut sed.', 1, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:08', '2023-03-05 03:57:08'),
(19, 'Est et dolores ut.', 1, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:08', '2023-03-05 03:57:08'),
(20, 'Saepe a non enim esse.', 1, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:08', '2023-03-05 03:57:08'),
(21, 'Minus qui at cupiditate.', 2, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:09', '2023-03-05 03:57:09'),
(22, 'Deserunt autem sed nam.', 2, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:09', '2023-03-05 03:57:09'),
(23, 'Expedita id aut rerum.', 2, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(24, 'Odit vero eos tempora.', 2, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(25, 'Molestiae non in harum.', 2, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(26, 'Eos consequatur id et.', 3, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(27, 'Quis ab eveniet vel hic.', 3, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(28, 'Qui iste dolor ex est.', 3, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(29, 'Nisi eos soluta id odio.', 3, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(30, 'Ipsum rerum natus in et.', 3, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(31, 'Sed aut provident ex.', 4, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(32, 'Est modi et esse.', 4, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(33, 'Ut et et et doloribus.', 4, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(34, 'Eum molestiae et aut.', 4, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(35, 'Ipsum neque officia ut.', 4, NULL, 'published', 0, NULL, 0, '2023-03-05 03:57:12', '2023-03-05 03:57:12');

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_categories_translations`
--

CREATE TABLE `ec_product_categories_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_product_categories_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_category_product`
--

CREATE TABLE `ec_product_category_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_category_product`
--

INSERT INTO `ec_product_category_product` (`id`, `category_id`, `product_id`) VALUES
(1, 2, 1),
(2, 10, 1),
(3, 11, 1),
(4, 1, 2),
(5, 13, 2),
(6, 12, 2),
(7, 1, 3),
(8, 6, 3),
(9, 3, 3),
(10, 8, 4),
(11, 9, 4),
(12, 13, 5),
(13, 14, 5),
(14, 9, 5),
(15, 10, 6),
(16, 4, 6),
(17, 3, 6),
(18, 7, 7),
(19, 11, 7),
(20, 6, 7),
(21, 9, 8),
(22, 5, 8),
(23, 4, 8),
(24, 8, 9),
(25, 7, 9),
(26, 5, 10),
(27, 11, 10),
(28, 8, 10),
(29, 4, 11),
(30, 7, 11),
(31, 14, 11),
(32, 9, 12),
(33, 1, 12),
(34, 10, 12),
(35, 14, 13),
(36, 5, 13),
(37, 13, 13),
(38, 7, 14),
(39, 1, 14),
(40, 13, 14),
(41, 13, 15),
(42, 9, 15),
(43, 1, 16),
(44, 6, 16),
(45, 12, 16),
(46, 13, 17),
(47, 3, 17),
(48, 5, 17),
(49, 10, 18),
(50, 7, 18),
(51, 12, 18),
(52, 1, 19),
(53, 3, 19),
(54, 4, 19),
(55, 5, 20),
(56, 4, 20),
(57, 8, 20),
(58, 9, 21),
(59, 5, 21),
(60, 14, 21),
(61, 2, 22),
(62, 9, 22),
(63, 7, 23),
(64, 1, 23),
(65, 10, 23),
(66, 8, 24),
(67, 1, 24),
(68, 9, 24),
(69, 8, 25),
(70, 5, 25),
(71, 4, 25),
(72, 9, 26),
(73, 6, 26),
(74, 10, 26),
(75, 7, 27),
(76, 1, 27),
(77, 10, 27),
(78, 11, 28),
(79, 1, 28),
(80, 3, 29),
(81, 1, 29),
(82, 6, 29),
(83, 6, 30),
(84, 13, 30),
(85, 14, 30),
(86, 7, 31),
(87, 12, 31),
(88, 13, 31);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_collections`
--

CREATE TABLE `ec_product_collections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `slug` varchar(191) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_featured` tinyint(3) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_collections`
--

INSERT INTO `ec_product_collections` (`id`, `name`, `slug`, `description`, `image`, `status`, `created_at`, `updated_at`, `is_featured`) VALUES
(1, 'New Arrival', 'new-arrival', NULL, NULL, 'published', '2023-03-05 03:57:13', '2023-03-05 03:57:13', 0),
(2, 'Best Sellers', 'best-sellers', NULL, NULL, 'published', '2023-03-05 03:57:14', '2023-03-05 03:57:14', 0),
(3, 'Special Offer', 'special-offer', NULL, NULL, 'published', '2023-03-05 03:57:14', '2023-03-05 03:57:14', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_collections_translations`
--

CREATE TABLE `ec_product_collections_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_product_collections_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_collection_products`
--

CREATE TABLE `ec_product_collection_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_collection_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_collection_products`
--

INSERT INTO `ec_product_collection_products` (`id`, `product_collection_id`, `product_id`) VALUES
(1, 2, 1),
(2, 3, 2),
(3, 2, 3),
(4, 2, 4),
(5, 2, 5),
(6, 1, 6),
(7, 1, 7),
(8, 2, 8),
(9, 2, 9),
(10, 3, 10),
(11, 1, 11),
(12, 2, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 3, 16),
(17, 3, 17),
(18, 1, 18),
(19, 2, 19),
(20, 2, 20),
(21, 3, 21),
(22, 1, 22),
(23, 2, 23),
(24, 2, 24),
(25, 2, 25),
(26, 1, 26),
(27, 3, 27),
(28, 3, 28),
(29, 1, 29),
(30, 2, 30),
(31, 3, 31);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_cross_sale_relations`
--

CREATE TABLE `ec_product_cross_sale_relations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_product_id` int(10) UNSIGNED NOT NULL,
  `to_product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_cross_sale_relations`
--

INSERT INTO `ec_product_cross_sale_relations` (`id`, `from_product_id`, `to_product_id`) VALUES
(1, 1, 3),
(2, 1, 21),
(3, 1, 10),
(4, 1, 13),
(5, 2, 22),
(6, 2, 18),
(7, 2, 30),
(8, 2, 4),
(9, 3, 5),
(10, 3, 17),
(11, 3, 16),
(12, 3, 18),
(13, 4, 6),
(14, 4, 5),
(15, 4, 31),
(16, 5, 24),
(17, 5, 7),
(18, 5, 21),
(19, 5, 13),
(20, 6, 24),
(21, 6, 5),
(22, 6, 9),
(23, 7, 21),
(24, 7, 25),
(25, 7, 22),
(26, 7, 20),
(27, 8, 24),
(28, 8, 23),
(29, 8, 7),
(30, 8, 2),
(31, 9, 10),
(32, 9, 31),
(33, 9, 20),
(34, 10, 16),
(35, 10, 3),
(36, 10, 8),
(37, 10, 29),
(38, 11, 5),
(39, 11, 23),
(40, 11, 22),
(41, 11, 10),
(42, 12, 16),
(43, 12, 4),
(44, 12, 25),
(45, 12, 2),
(46, 13, 25),
(47, 13, 11),
(48, 13, 30),
(49, 13, 12),
(50, 14, 16),
(51, 14, 8),
(52, 14, 12),
(53, 14, 6),
(54, 15, 16),
(55, 15, 31),
(56, 15, 8),
(57, 15, 9),
(58, 16, 19),
(59, 16, 11),
(60, 16, 8),
(61, 16, 12),
(62, 17, 21),
(63, 17, 5),
(64, 17, 27),
(65, 17, 31),
(66, 18, 15),
(67, 18, 22),
(68, 18, 25),
(69, 18, 28),
(70, 19, 1),
(71, 19, 15),
(72, 19, 28),
(73, 19, 11),
(74, 20, 26),
(75, 20, 19),
(76, 20, 27),
(77, 20, 8),
(78, 21, 17),
(79, 21, 8),
(80, 21, 30),
(81, 22, 16),
(82, 22, 20),
(83, 22, 23),
(84, 22, 4),
(85, 23, 31),
(86, 23, 30),
(87, 23, 15),
(88, 23, 14),
(89, 24, 1),
(90, 24, 23),
(91, 24, 16),
(92, 24, 11),
(93, 25, 2),
(94, 25, 13),
(95, 25, 9),
(96, 25, 5),
(97, 26, 28),
(98, 26, 1),
(99, 26, 9),
(100, 26, 31),
(101, 27, 26),
(102, 27, 6),
(103, 27, 9),
(104, 28, 21),
(105, 28, 1),
(106, 28, 19),
(107, 28, 16),
(108, 29, 26),
(109, 29, 2),
(110, 29, 8),
(111, 29, 1),
(112, 30, 16),
(113, 30, 15),
(114, 30, 28),
(115, 31, 24),
(116, 31, 12),
(117, 31, 26),
(118, 31, 4);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_labels`
--

CREATE TABLE `ec_product_labels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(120) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_labels`
--

INSERT INTO `ec_product_labels` (`id`, `name`, `color`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Hot', '#ec2434', 'published', '2023-03-05 03:57:14', '2023-03-05 03:57:14'),
(2, 'New', '#00c9a7', 'published', '2023-03-05 03:57:14', '2023-03-05 03:57:14'),
(3, 'Sale', '#fe9931', 'published', '2023-03-05 03:57:15', '2023-03-05 03:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_labels_translations`
--

CREATE TABLE `ec_product_labels_translations` (
  `lang_code` varchar(191) NOT NULL,
  `ec_product_labels_id` int(11) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `description` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_label_products`
--

CREATE TABLE `ec_product_label_products` (
  `product_label_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_label_products`
--

INSERT INTO `ec_product_label_products` (`product_label_id`, `product_id`) VALUES
(1, 9),
(1, 12),
(1, 15),
(1, 18),
(1, 21),
(2, 3),
(2, 27),
(3, 6),
(3, 24),
(3, 30);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_related_relations`
--

CREATE TABLE `ec_product_related_relations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_product_id` int(10) UNSIGNED NOT NULL,
  `to_product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_tags`
--

CREATE TABLE `ec_product_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_tags`
--

INSERT INTO `ec_product_tags` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Electronic', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(2, 'Mobile', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(3, 'Iphone', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(4, 'Printer', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(5, 'Office', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(6, 'IT', NULL, 'published', '2023-03-05 03:59:21', '2023-03-05 03:59:21');

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_tag_product`
--

CREATE TABLE `ec_product_tag_product` (
  `product_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_tag_product`
--

INSERT INTO `ec_product_tag_product` (`product_id`, `tag_id`) VALUES
(1, 3),
(1, 4),
(2, 2),
(2, 5),
(2, 6),
(3, 1),
(3, 2),
(3, 3),
(4, 2),
(4, 4),
(5, 1),
(5, 3),
(5, 6),
(6, 1),
(6, 3),
(7, 2),
(7, 6),
(8, 3),
(8, 5),
(9, 1),
(9, 2),
(9, 6),
(10, 3),
(11, 1),
(11, 2),
(12, 3),
(12, 5),
(13, 1),
(13, 2),
(13, 5),
(14, 2),
(14, 5),
(15, 2),
(15, 6),
(16, 1),
(16, 2),
(16, 5),
(17, 2),
(17, 5),
(17, 6),
(18, 1),
(19, 1),
(19, 2),
(19, 4),
(20, 1),
(20, 4),
(21, 1),
(21, 3),
(21, 6),
(22, 2),
(22, 3),
(22, 4),
(23, 2),
(23, 6),
(24, 1),
(24, 2),
(24, 4),
(25, 2),
(25, 4),
(25, 6),
(26, 1),
(26, 3),
(26, 4),
(27, 3),
(28, 4),
(28, 5),
(28, 6),
(29, 2),
(29, 4),
(30, 1),
(30, 3),
(30, 5),
(31, 3),
(31, 5);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_up_sale_relations`
--

CREATE TABLE `ec_product_up_sale_relations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_product_id` int(10) UNSIGNED NOT NULL,
  `to_product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_variations`
--

CREATE TABLE `ec_product_variations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `configurable_product_id` int(10) UNSIGNED NOT NULL,
  `is_default` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_variations`
--

INSERT INTO `ec_product_variations` (`id`, `product_id`, `configurable_product_id`, `is_default`) VALUES
(1, 32, 1, 1),
(2, 33, 1, 0),
(3, 34, 2, 1),
(4, 35, 3, 1),
(5, 36, 3, 0),
(6, 37, 3, 0),
(7, 38, 3, 0),
(8, 39, 4, 1),
(9, 40, 4, 0),
(10, 41, 4, 0),
(11, 42, 5, 1),
(12, 43, 5, 0),
(13, 44, 6, 1),
(14, 45, 7, 1),
(15, 46, 7, 0),
(16, 47, 7, 0),
(17, 48, 7, 0),
(18, 49, 8, 1),
(19, 50, 8, 0),
(20, 51, 8, 0),
(21, 52, 8, 0),
(22, 53, 9, 1),
(23, 54, 10, 1),
(24, 55, 10, 0),
(25, 56, 10, 0),
(26, 57, 11, 1),
(27, 58, 11, 0),
(28, 59, 11, 0),
(29, 60, 11, 0),
(30, 61, 12, 1),
(31, 62, 13, 1),
(32, 63, 13, 0),
(33, 64, 13, 0),
(34, 65, 14, 1),
(35, 66, 14, 0),
(36, 67, 14, 0),
(37, 68, 15, 1),
(38, 69, 15, 0),
(39, 70, 15, 0),
(40, 71, 16, 1),
(41, 72, 17, 1),
(42, 73, 17, 0),
(43, 74, 18, 1),
(44, 75, 19, 1),
(45, 76, 20, 1),
(46, 77, 20, 0),
(47, 78, 21, 1),
(48, 79, 21, 0),
(49, 80, 22, 1),
(50, 81, 23, 1),
(51, 82, 23, 0),
(52, 83, 23, 0),
(53, 84, 24, 1),
(54, 85, 24, 0),
(55, 86, 24, 0),
(56, 87, 25, 1),
(57, 88, 26, 1),
(58, 89, 26, 0),
(59, 90, 27, 1),
(60, 91, 27, 0),
(61, 92, 27, 0),
(62, 93, 27, 0),
(63, 94, 28, 1),
(64, 95, 29, 1),
(65, 96, 30, 1),
(66, 97, 30, 0),
(67, 98, 30, 0),
(68, 99, 31, 1),
(69, 100, 31, 0),
(70, 101, 31, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_variation_items`
--

CREATE TABLE `ec_product_variation_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` int(10) UNSIGNED NOT NULL,
  `variation_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_variation_items`
--

INSERT INTO `ec_product_variation_items` (`id`, `attribute_id`, `variation_id`) VALUES
(1, 5, 1),
(2, 8, 1),
(3, 3, 2),
(4, 8, 2),
(5, 3, 3),
(6, 10, 3),
(7, 1, 4),
(8, 8, 4),
(9, 5, 5),
(10, 8, 5),
(11, 1, 6),
(12, 10, 6),
(13, 4, 7),
(14, 10, 7),
(15, 5, 8),
(16, 9, 8),
(17, 4, 9),
(18, 8, 9),
(19, 1, 10),
(20, 9, 10),
(21, 2, 11),
(22, 6, 11),
(23, 3, 12),
(24, 9, 12),
(25, 3, 13),
(26, 7, 13),
(27, 2, 14),
(28, 10, 14),
(29, 4, 15),
(30, 6, 15),
(31, 1, 16),
(32, 9, 16),
(33, 5, 17),
(34, 7, 17),
(35, 2, 18),
(36, 10, 18),
(37, 5, 19),
(38, 8, 19),
(39, 1, 20),
(40, 8, 20),
(41, 3, 21),
(42, 7, 21),
(43, 4, 22),
(44, 8, 22),
(45, 5, 23),
(46, 7, 23),
(47, 2, 24),
(48, 10, 24),
(49, 1, 25),
(50, 9, 25),
(51, 4, 26),
(52, 9, 26),
(53, 3, 27),
(54, 9, 27),
(55, 4, 28),
(56, 8, 28),
(57, 1, 29),
(58, 9, 29),
(59, 2, 30),
(60, 8, 30),
(61, 3, 31),
(62, 7, 31),
(63, 4, 32),
(64, 9, 32),
(65, 5, 33),
(66, 6, 33),
(67, 5, 34),
(68, 10, 34),
(69, 2, 35),
(70, 8, 35),
(71, 2, 36),
(72, 6, 36),
(73, 4, 37),
(74, 10, 37),
(75, 4, 38),
(76, 6, 38),
(77, 2, 39),
(78, 7, 39),
(79, 2, 40),
(80, 10, 40),
(81, 1, 41),
(82, 8, 41),
(83, 2, 42),
(84, 10, 42),
(85, 2, 43),
(86, 8, 43),
(87, 3, 44),
(88, 6, 44),
(89, 3, 45),
(90, 7, 45),
(91, 2, 46),
(92, 6, 46),
(93, 4, 47),
(94, 6, 47),
(95, 3, 48),
(96, 9, 48),
(97, 2, 49),
(98, 6, 49),
(99, 4, 50),
(100, 7, 50),
(101, 2, 51),
(102, 10, 51),
(103, 5, 52),
(104, 10, 52),
(105, 1, 53),
(106, 10, 53),
(107, 1, 54),
(108, 8, 54),
(109, 4, 55),
(110, 6, 55),
(111, 5, 56),
(112, 6, 56),
(113, 4, 57),
(114, 9, 57),
(115, 2, 58),
(116, 7, 58),
(117, 1, 59),
(118, 8, 59),
(119, 5, 60),
(120, 9, 60),
(121, 2, 61),
(122, 9, 61),
(123, 4, 62),
(124, 10, 62),
(125, 4, 63),
(126, 8, 63),
(127, 2, 64),
(128, 10, 64),
(129, 1, 65),
(130, 8, 65),
(131, 1, 66),
(132, 10, 66),
(133, 5, 67),
(134, 6, 67),
(135, 2, 68),
(136, 9, 68),
(137, 4, 69),
(138, 8, 69),
(139, 1, 70),
(140, 10, 70);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_with_attribute`
--

CREATE TABLE `ec_product_with_attribute` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_with_attribute`
--

INSERT INTO `ec_product_with_attribute` (`id`, `attribute_id`, `product_id`) VALUES
(1, 5, 1),
(2, 7, 1),
(3, 2, 2),
(4, 6, 2),
(5, 2, 3),
(6, 9, 3),
(7, 2, 4),
(8, 7, 4),
(9, 5, 5),
(10, 7, 5),
(11, 1, 6),
(12, 6, 6),
(13, 3, 7),
(14, 9, 7),
(15, 5, 8),
(16, 7, 8),
(17, 5, 9),
(18, 10, 9),
(19, 3, 10),
(20, 8, 10),
(21, 4, 11),
(22, 9, 11),
(23, 3, 12),
(24, 10, 12),
(25, 2, 13),
(26, 6, 13),
(27, 4, 14),
(28, 9, 14),
(29, 3, 15),
(30, 9, 15),
(31, 3, 16),
(32, 9, 16),
(33, 4, 17),
(34, 9, 17),
(35, 5, 18),
(36, 9, 18),
(37, 5, 19),
(38, 8, 19),
(39, 2, 20),
(40, 9, 20),
(41, 1, 21),
(42, 8, 21),
(43, 1, 22),
(44, 7, 22),
(45, 2, 23),
(46, 6, 23),
(47, 4, 24),
(48, 6, 24),
(49, 4, 25),
(50, 9, 25),
(51, 1, 26),
(52, 6, 26),
(53, 5, 27),
(54, 6, 27),
(55, 2, 28),
(56, 6, 28),
(57, 1, 29),
(58, 8, 29),
(59, 5, 30),
(60, 9, 30),
(61, 5, 31),
(62, 7, 31);

-- --------------------------------------------------------

--
-- Table structure for table `ec_product_with_attribute_set`
--

CREATE TABLE `ec_product_with_attribute_set` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_set_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_product_with_attribute_set`
--

INSERT INTO `ec_product_with_attribute_set` (`id`, `attribute_set_id`, `product_id`, `order`) VALUES
(1, 1, 1, 0),
(2, 2, 1, 0),
(3, 1, 2, 0),
(4, 2, 2, 0),
(5, 1, 3, 0),
(6, 2, 3, 0),
(7, 1, 4, 0),
(8, 2, 4, 0),
(9, 1, 5, 0),
(10, 2, 5, 0),
(11, 1, 6, 0),
(12, 2, 6, 0),
(13, 1, 7, 0),
(14, 2, 7, 0),
(15, 1, 8, 0),
(16, 2, 8, 0),
(17, 1, 9, 0),
(18, 2, 9, 0),
(19, 1, 10, 0),
(20, 2, 10, 0),
(21, 1, 11, 0),
(22, 2, 11, 0),
(23, 1, 12, 0),
(24, 2, 12, 0),
(25, 1, 13, 0),
(26, 2, 13, 0),
(27, 1, 14, 0),
(28, 2, 14, 0),
(29, 1, 15, 0),
(30, 2, 15, 0),
(31, 1, 16, 0),
(32, 2, 16, 0),
(33, 1, 17, 0),
(34, 2, 17, 0),
(35, 1, 18, 0),
(36, 2, 18, 0),
(37, 1, 19, 0),
(38, 2, 19, 0),
(39, 1, 20, 0),
(40, 2, 20, 0),
(41, 1, 21, 0),
(42, 2, 21, 0),
(43, 1, 22, 0),
(44, 2, 22, 0),
(45, 1, 23, 0),
(46, 2, 23, 0),
(47, 1, 24, 0),
(48, 2, 24, 0),
(49, 1, 25, 0),
(50, 2, 25, 0),
(51, 1, 26, 0),
(52, 2, 26, 0),
(53, 1, 27, 0),
(54, 2, 27, 0),
(55, 1, 28, 0),
(56, 2, 28, 0),
(57, 1, 29, 0),
(58, 2, 29, 0),
(59, 1, 30, 0),
(60, 2, 30, 0),
(61, 1, 31, 0),
(62, 2, 31, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ec_reviews`
--

CREATE TABLE `ec_reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `star` double(8,2) NOT NULL,
  `comment` text NOT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_reviews`
--

INSERT INTO `ec_reviews` (`id`, `customer_id`, `product_id`, `star`, `comment`, `status`, `created_at`, `updated_at`) VALUES
(1, 11, 86, 5.00, 'Sit nihil fugiat distinctio ut est iusto. Omnis voluptas est in voluptatem enim. Consequuntur voluptate iusto nihil explicabo vel.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(2, 1, 20, 1.00, 'Iure ea voluptas eligendi rerum blanditiis officia. Deleniti ad hic nemo eveniet non quidem. Corrupti odio et ipsum omnis eaque.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(3, 8, 31, 1.00, 'Et molestiae autem temporibus tempore enim ut. Quo illo omnis ut inventore itaque. Ut sed quia nisi quibusdam eos velit itaque.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(4, 5, 36, 4.00, 'Aut quasi aspernatur odio veritatis sit dignissimos soluta. Harum qui ut sequi et. Aliquid quam et ratione nihil.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(5, 7, 67, 5.00, 'Aliquid qui aperiam non et amet quis. Repudiandae quo ut culpa veritatis. Aut minus accusantium ducimus sequi aut eius omnis.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(6, 8, 67, 3.00, 'Sequi id necessitatibus voluptatem et ratione. Ullam animi facilis cumque autem suscipit dolorem placeat.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(7, 5, 100, 1.00, 'Voluptas quia sit itaque debitis cumque qui. Rerum quia deleniti voluptatum molestiae cum consequatur et. Consequatur et quia rerum.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(8, 9, 92, 5.00, 'Placeat rerum aut fugiat assumenda omnis quis. Consequatur voluptate nam officiis atque blanditiis modi.', 'published', '2023-03-05 03:59:16', '2023-03-05 03:59:16'),
(9, 11, 36, 4.00, 'Deserunt a unde ab ipsum. Quia ad reprehenderit dolore velit. Quibusdam perferendis aliquam aspernatur assumenda laboriosam quia tempore.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(10, 6, 72, 1.00, 'Ratione et beatae repudiandae vitae. Optio itaque rerum sunt mollitia culpa. Ipsam quasi rerum labore quia eveniet qui.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(11, 2, 97, 3.00, 'Reprehenderit sit aut et aut autem. Placeat consequuntur excepturi illo rerum temporibus qui nemo.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(12, 8, 2, 1.00, 'Non quo magni et natus minus qui mollitia. Et consectetur facilis quia illum. Quia tempora est sed voluptatem et ipsum est deleniti.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(13, 5, 14, 3.00, 'Asperiores accusamus sit cum quod. Rem dolor ipsum et iure. Maiores voluptatem nihil beatae nesciunt.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(14, 6, 58, 1.00, 'In aut quidem totam saepe repudiandae. Tempore molestiae mollitia excepturi sit dolorem quaerat. Voluptatem aut natus totam eligendi.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(15, 6, 39, 4.00, 'Tempore laborum ut ipsam excepturi. Nemo quidem possimus sint error. Tempore earum enim placeat eos aspernatur sapiente animi.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(16, 4, 24, 2.00, 'Eaque sit ut maxime nesciunt beatae et consequatur. Nostrum qui ab vitae at adipisci rerum dolorem. Cum ea hic soluta architecto.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(17, 1, 13, 4.00, 'Aut voluptatibus ab corporis. Ut labore ad consectetur ab fugiat. Blanditiis in adipisci in. Optio voluptas cupiditate cumque id.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(18, 1, 83, 5.00, 'Nihil quis deserunt et tempora. Minus et et amet ipsa porro voluptatum. Id aperiam laboriosam dolor minus voluptates.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(19, 2, 81, 4.00, 'At fugit inventore quia aperiam. Omnis aut molestiae earum tempore distinctio et ab. Qui autem dolore deserunt rerum esse fugit.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(20, 6, 99, 5.00, 'Quos inventore autem voluptas animi doloribus. Repellat reiciendis natus maxime dolor. Similique voluptatem occaecati et quae fugiat nihil.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(21, 10, 53, 4.00, 'Ea excepturi dolorem minima qui. Occaecati illum sunt at.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(22, 2, 8, 2.00, 'Eos cum quisquam in est. Quisquam ut est at eius. Aspernatur saepe velit doloremque eaque suscipit. Unde et natus maxime ut est maxime cupiditate.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(23, 7, 92, 1.00, 'Alias unde nesciunt unde possimus explicabo. Corporis voluptatibus qui est laudantium voluptas excepturi. Dolorem quisquam veniam eum et voluptatem.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(24, 9, 65, 5.00, 'Aperiam quis harum sit ea. Voluptates optio eos doloremque accusamus. Officiis quia eius ut similique nemo. Ut aut qui dolorum aut cupiditate quam.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(25, 4, 32, 4.00, 'Aut excepturi dolores dolor odio corrupti. Ut perspiciatis sed qui. Et consequatur est ad assumenda ipsam.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(26, 9, 3, 5.00, 'Dolore fugiat aut eveniet reprehenderit quaerat. Unde nulla possimus illo deleniti harum atque.', 'published', '2023-03-05 03:59:17', '2023-03-05 03:59:17'),
(27, 8, 65, 5.00, 'Non esse non quam ratione voluptatem sapiente. Enim ut consectetur fuga debitis. Enim necessitatibus voluptate nam eius fugit adipisci.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(28, 6, 95, 1.00, 'Error magni vel natus rem ipsum. Cupiditate eius voluptas recusandae et voluptates. Consectetur animi placeat atque tempore eos esse facilis.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(29, 6, 47, 2.00, 'Sed qui nesciunt quis commodi. Cumque at numquam nobis quia. Eligendi aspernatur deserunt molestiae quasi.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(30, 10, 40, 4.00, 'Inventore facilis deserunt ducimus. Dolorem similique porro vero veritatis recusandae voluptatum omnis. Et eveniet ipsam sequi quae possimus quia.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(31, 7, 2, 5.00, 'Quia ea amet ut qui alias. Autem qui quo aspernatur velit rem et explicabo.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(32, 10, 60, 4.00, 'Placeat eos distinctio non pariatur consequuntur maxime placeat. Nulla facere accusamus reiciendis quasi autem aliquid similique.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(33, 1, 31, 3.00, 'Praesentium vel sit est culpa illum sit ut. Ipsam iusto vel tenetur. Atque beatae eos neque. Fugiat harum sit qui recusandae ad deserunt.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(34, 8, 61, 3.00, 'Id enim sunt ipsam assumenda quia itaque beatae. In non pariatur voluptate. Id vitae qui consectetur est. Alias dolores qui necessitatibus.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(35, 1, 84, 1.00, 'Dolor ex dolores voluptates dolorum aut reprehenderit. Sit doloribus assumenda tenetur. Alias aliquam ipsa ab modi.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(36, 3, 74, 3.00, 'Dolorem corporis vel aliquam sunt sed sint. Nesciunt saepe saepe dolore quos aliquam aut. Aliquam eos dolor dolores dolorum qui qui ut.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(37, 6, 37, 4.00, 'Enim voluptas dolor dicta voluptatum. Nam molestiae aliquid et qui. Aut iste aut id nesciunt hic vel.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(38, 10, 60, 5.00, 'Maiores corrupti ratione quis distinctio aut. Hic fugiat illo laborum pariatur iusto aperiam.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(39, 10, 32, 3.00, 'Dolor iste voluptates voluptate tempore praesentium aut. Minima corporis et consectetur explicabo veritatis eius. Odio sed in dolorum debitis.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(40, 3, 96, 4.00, 'Deserunt assumenda sunt accusantium. Est et fugiat dolores hic doloremque rerum dolorum.', 'published', '2023-03-05 03:59:18', '2023-03-05 03:59:18'),
(41, 6, 37, 5.00, 'Maiores ea sit distinctio nulla distinctio ea non. Aut similique consequatur id et et aut officiis dolores. Maxime dolorem soluta sint et.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(42, 3, 68, 4.00, 'Nulla sit reiciendis molestias ad quod. Sint et cumque qui. Natus fugiat voluptatum perspiciatis dolor molestias corrupti et.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(43, 6, 52, 1.00, 'Sit soluta quisquam non nihil. Molestiae optio officia aspernatur blanditiis beatae ullam ut. Nam corporis eum laudantium minima aut in maxime.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(44, 4, 37, 2.00, 'Beatae impedit aut vero error eius facilis. Id odit optio aut magnam et id veritatis provident. Dolorum ut id aut.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(45, 10, 59, 3.00, 'Sit tempore et odit non. Reiciendis rerum aut ut doloremque animi. Debitis inventore non id exercitationem.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(46, 3, 98, 4.00, 'Aut temporibus dolores doloremque blanditiis. Et autem ullam voluptatem quia inventore. Cupiditate praesentium et aut culpa sint.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(47, 4, 83, 5.00, 'Qui quo vel quaerat illo. Beatae deserunt eligendi delectus eius tempore commodi.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(48, 3, 63, 3.00, 'Sed ex aut hic. Qui debitis tempore quod et eum. Sint cumque labore accusantium.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(49, 3, 89, 3.00, 'Et deserunt ducimus eum. Rem et nesciunt in eum ut. Veniam velit nihil temporibus adipisci velit expedita.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19'),
(50, 5, 18, 2.00, 'Officiis quia sapiente cumque reprehenderit. Et vel doloribus sint illum. Eos et molestias et sit velit.', 'published', '2023-03-05 03:59:19', '2023-03-05 03:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `ec_shipments`
--

CREATE TABLE `ec_shipments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `weight` double(8,2) DEFAULT 0.00,
  `shipment_id` varchar(120) DEFAULT NULL,
  `note` varchar(120) DEFAULT NULL,
  `status` varchar(120) NOT NULL DEFAULT 'pending',
  `cod_amount` decimal(15,2) DEFAULT 0.00,
  `cod_status` varchar(60) NOT NULL DEFAULT 'pending',
  `cross_checking_status` varchar(60) NOT NULL DEFAULT 'pending',
  `price` decimal(15,2) DEFAULT 0.00,
  `store_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_shipments`
--

INSERT INTO `ec_shipments` (`id`, `order_id`, `user_id`, `weight`, `shipment_id`, `note`, `status`, `cod_amount`, `cod_status`, `cross_checking_status`, `price`, `store_id`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 6899.00, NULL, '', 'approved', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:32', '2023-03-05 03:59:32'),
(2, 2, NULL, 2720.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(3, 3, NULL, 3195.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:36', '2023-03-05 03:59:36'),
(4, 4, NULL, 4211.00, NULL, '', 'delivered', '1362.70', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:37', '2023-03-05 03:59:38'),
(5, 5, NULL, 2907.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(6, 6, NULL, 7950.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:40', '2023-03-05 03:59:40'),
(7, 7, NULL, 6069.00, NULL, '', 'approved', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:42', '2023-03-05 03:59:42'),
(8, 8, NULL, 2530.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(9, 9, NULL, 2392.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(10, 10, NULL, 5185.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(11, 11, NULL, 2421.00, NULL, '', 'approved', '530.60', 'pending', 'pending', '0.00', 0, '2023-03-05 03:59:47', '2023-03-05 03:59:47'),
(12, 12, NULL, 3311.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:48', '2023-03-05 03:59:48'),
(13, 13, NULL, 3396.00, NULL, '', 'delivered', '1273.20', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:50', '2023-03-05 03:59:50'),
(14, 14, NULL, 3203.00, NULL, '', 'approved', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(15, 15, NULL, 5218.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:53', '2023-03-05 03:59:53'),
(16, 16, NULL, 2844.00, NULL, '', 'approved', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:54', '2023-03-05 03:59:54'),
(17, 17, NULL, 1941.00, NULL, '', 'approved', '264.60', 'pending', 'pending', '0.00', 0, '2023-03-05 03:59:55', '2023-03-05 03:59:55'),
(18, 18, NULL, 4240.00, NULL, '', 'delivered', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:56', '2023-03-05 03:59:56'),
(19, 19, NULL, 3897.00, NULL, '', 'delivered', '589.20', 'completed', 'pending', '0.00', 0, '2023-03-05 03:59:58', '2023-03-05 03:59:58'),
(20, 20, NULL, 2905.00, NULL, '', 'approved', '0.00', 'completed', 'pending', '0.00', 0, '2023-03-05 04:00:00', '2023-03-05 04:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ec_shipment_histories`
--

CREATE TABLE `ec_shipment_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `action` varchar(120) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `shipment_id` int(10) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_shipment_histories`
--

INSERT INTO `ec_shipment_histories` (`id`, `action`, `description`, `user_id`, `shipment_id`, `order_id`, `created_at`, `updated_at`) VALUES
(1, 'create_from_order', 'Shipping was created from order %order_id%', 0, 1, 1, '2023-02-16 11:59:30', '2023-02-16 11:59:30'),
(2, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 1, 1, '2023-03-03 11:59:33', '2023-03-05 03:59:33'),
(3, 'create_from_order', 'Shipping was created from order %order_id%', 0, 2, 2, '2023-03-01 23:59:33', '2023-03-01 23:59:33'),
(4, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 2, 2, '2023-03-03 13:59:35', '2023-03-05 03:59:35'),
(5, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 2, 2, '2023-03-05 03:59:35', '2023-03-05 03:59:35'),
(6, 'create_from_order', 'Shipping was created from order %order_id%', 0, 3, 3, '2023-02-28 15:59:35', '2023-02-28 15:59:35'),
(7, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 3, 3, '2023-03-03 15:59:36', '2023-03-05 03:59:36'),
(8, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 3, 3, '2023-03-05 03:59:36', '2023-03-05 03:59:36'),
(9, 'create_from_order', 'Shipping was created from order %order_id%', 0, 4, 4, '2023-02-27 11:59:36', '2023-02-27 11:59:36'),
(10, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 4, 4, '2023-03-03 17:59:37', '2023-03-05 03:59:37'),
(11, 'update_cod_status', 'Updated COD status to Completed . Updated by: %user_name%', 0, 4, 4, '2023-03-05 03:59:38', '2023-03-05 03:59:38'),
(12, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 4, 4, '2023-03-05 03:59:38', '2023-03-05 03:59:38'),
(13, 'create_from_order', 'Shipping was created from order %order_id%', 0, 5, 5, '2023-02-22 11:59:38', '2023-02-22 11:59:38'),
(14, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 5, 5, '2023-03-03 19:59:39', '2023-03-05 03:59:39'),
(15, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 5, 5, '2023-03-05 03:59:39', '2023-03-05 03:59:39'),
(16, 'create_from_order', 'Shipping was created from order %order_id%', 0, 6, 6, '2023-02-25 15:59:39', '2023-02-25 15:59:39'),
(17, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 6, 6, '2023-03-03 21:59:40', '2023-03-05 03:59:40'),
(18, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 6, 6, '2023-03-05 03:59:41', '2023-03-05 03:59:41'),
(19, 'create_from_order', 'Shipping was created from order %order_id%', 0, 7, 7, '2023-03-01 15:59:41', '2023-03-01 15:59:41'),
(20, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 7, 7, '2023-03-03 23:59:42', '2023-03-05 03:59:42'),
(21, 'create_from_order', 'Shipping was created from order %order_id%', 0, 8, 8, '2023-02-27 17:59:42', '2023-02-27 17:59:42'),
(22, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 8, 8, '2023-03-04 01:59:43', '2023-03-05 03:59:43'),
(23, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 8, 8, '2023-03-05 03:59:43', '2023-03-05 03:59:43'),
(24, 'create_from_order', 'Shipping was created from order %order_id%', 0, 9, 9, '2023-02-23 03:59:43', '2023-02-23 03:59:43'),
(25, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 9, 9, '2023-03-04 03:59:44', '2023-03-05 03:59:44'),
(26, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 9, 9, '2023-03-05 03:59:44', '2023-03-05 03:59:44'),
(27, 'create_from_order', 'Shipping was created from order %order_id%', 0, 10, 10, '2023-02-24 21:59:44', '2023-02-24 21:59:44'),
(28, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 10, 10, '2023-03-04 05:59:46', '2023-03-05 03:59:46'),
(29, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 10, 10, '2023-03-05 03:59:46', '2023-03-05 03:59:46'),
(30, 'create_from_order', 'Shipping was created from order %order_id%', 0, 11, 11, '2023-03-04 07:59:46', '2023-03-04 07:59:46'),
(31, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 11, 11, '2023-03-04 07:59:47', '2023-03-05 03:59:47'),
(32, 'create_from_order', 'Shipping was created from order %order_id%', 0, 12, 12, '2023-03-04 09:59:47', '2023-03-04 09:59:47'),
(33, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 12, 12, '2023-03-04 09:59:49', '2023-03-05 03:59:49'),
(34, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 12, 12, '2023-03-05 03:59:49', '2023-03-05 03:59:49'),
(35, 'create_from_order', 'Shipping was created from order %order_id%', 0, 13, 13, '2023-02-26 11:59:49', '2023-02-26 11:59:49'),
(36, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 13, 13, '2023-03-04 11:59:50', '2023-03-05 03:59:50'),
(37, 'update_cod_status', 'Updated COD status to Completed . Updated by: %user_name%', 0, 13, 13, '2023-03-05 03:59:50', '2023-03-05 03:59:50'),
(38, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 13, 13, '2023-03-05 03:59:51', '2023-03-05 03:59:51'),
(39, 'create_from_order', 'Shipping was created from order %order_id%', 0, 14, 14, '2023-03-02 19:59:51', '2023-03-02 19:59:51'),
(40, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 14, 14, '2023-03-04 13:59:52', '2023-03-05 03:59:52'),
(41, 'create_from_order', 'Shipping was created from order %order_id%', 0, 15, 15, '2023-03-04 15:59:52', '2023-03-04 15:59:52'),
(42, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 15, 15, '2023-03-04 15:59:53', '2023-03-05 03:59:53'),
(43, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 15, 15, '2023-03-05 03:59:53', '2023-03-05 03:59:53'),
(44, 'create_from_order', 'Shipping was created from order %order_id%', 0, 16, 16, '2023-03-02 15:59:53', '2023-03-02 15:59:53'),
(45, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 16, 16, '2023-03-04 17:59:54', '2023-03-05 03:59:54'),
(46, 'create_from_order', 'Shipping was created from order %order_id%', 0, 17, 17, '2023-03-02 19:59:54', '2023-03-02 19:59:54'),
(47, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 17, 17, '2023-03-04 19:59:55', '2023-03-05 03:59:55'),
(48, 'create_from_order', 'Shipping was created from order %order_id%', 0, 18, 18, '2023-03-04 09:59:55', '2023-03-04 09:59:55'),
(49, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 18, 18, '2023-03-04 21:59:57', '2023-03-05 03:59:57'),
(50, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 18, 18, '2023-03-05 03:59:57', '2023-03-05 03:59:57'),
(51, 'create_from_order', 'Shipping was created from order %order_id%', 0, 19, 19, '2023-03-03 11:59:57', '2023-03-03 11:59:57'),
(52, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 19, 19, '2023-03-04 23:59:58', '2023-03-05 03:59:58'),
(53, 'update_cod_status', 'Updated COD status to Completed . Updated by: %user_name%', 0, 19, 19, '2023-03-05 03:59:58', '2023-03-05 03:59:58'),
(54, 'update_status', 'Changed status of shipping to : Delivered . Updated by: %user_name%', 0, 19, 19, '2023-03-05 03:59:58', '2023-03-05 03:59:58'),
(55, 'create_from_order', 'Shipping was created from order %order_id%', 0, 20, 20, '2023-03-04 13:59:58', '2023-03-04 13:59:58'),
(56, 'update_status', 'Changed status of shipping to : Approved . Updated by: %user_name%', 0, 20, 20, '2023-03-05 02:00:00', '2023-03-05 04:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ec_shipping`
--

CREATE TABLE `ec_shipping` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `country` varchar(120) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_shipping`
--

INSERT INTO `ec_shipping` (`id`, `title`, `country`, `created_at`, `updated_at`) VALUES
(1, 'All', NULL, '2023-03-05 03:59:26', '2023-03-05 03:59:26');

-- --------------------------------------------------------

--
-- Table structure for table `ec_shipping_rules`
--

CREATE TABLE `ec_shipping_rules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `shipping_id` int(10) UNSIGNED NOT NULL,
  `type` enum('base_on_price','base_on_weight') DEFAULT 'base_on_price',
  `currency_id` int(10) UNSIGNED DEFAULT NULL,
  `from` decimal(15,2) DEFAULT 0.00,
  `to` decimal(15,2) DEFAULT 0.00,
  `price` decimal(15,2) DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_shipping_rules`
--

INSERT INTO `ec_shipping_rules` (`id`, `name`, `shipping_id`, `type`, `currency_id`, `from`, `to`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Delivery', 1, 'base_on_price', NULL, '0.00', NULL, '0.00', '2023-03-05 03:59:26', '2023-03-05 03:59:26');

-- --------------------------------------------------------

--
-- Table structure for table `ec_shipping_rule_items`
--

CREATE TABLE `ec_shipping_rule_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shipping_rule_id` int(10) UNSIGNED NOT NULL,
  `country` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `adjustment_price` decimal(15,2) DEFAULT 0.00,
  `is_enabled` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ec_store_locators`
--

CREATE TABLE `ec_store_locators` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country` varchar(120) DEFAULT NULL,
  `state` varchar(120) DEFAULT NULL,
  `city` varchar(120) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT 0,
  `is_shipping_location` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_store_locators`
--

INSERT INTO `ec_store_locators` (`id`, `name`, `email`, `phone`, `address`, `country`, `state`, `city`, `is_primary`, `is_shipping_location`, `created_at`, `updated_at`) VALUES
(1, 'Shopwise', 'sales@botble.com', '123-456-7890', '123 Street, Old Trafford', 'US', 'New York', 'New York', 1, 1, '2023-03-05 04:00:31', '2023-03-05 04:00:31');

-- --------------------------------------------------------

--
-- Table structure for table `ec_taxes`
--

CREATE TABLE `ec_taxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `percentage` double(8,6) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ec_taxes`
--

INSERT INTO `ec_taxes` (`id`, `title`, `percentage`, `priority`, `status`, `created_at`, `updated_at`) VALUES
(1, 'VAT', 10.000000, 1, 'published', '2023-03-05 03:59:20', '2023-03-05 03:59:20'),
(2, 'None', 0.000000, 2, 'published', '2023-03-05 03:59:20', '2023-03-05 03:59:20');

-- --------------------------------------------------------

--
-- Table structure for table `ec_wish_lists`
--

CREATE TABLE `ec_wish_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(191) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media_files`
--

CREATE TABLE `media_files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `folder_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `mime_type` varchar(120) NOT NULL,
  `size` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `options` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media_files`
--

INSERT INTO `media_files` (`id`, `user_id`, `name`, `folder_id`, `mime_type`, `size`, `url`, `options`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, '1', 1, 'image/png', 2165, 'brands/1.png', '[]', '2023-03-05 03:56:45', '2023-03-05 03:56:45', NULL),
(2, 0, '2', 1, 'image/png', 2165, 'brands/2.png', '[]', '2023-03-05 03:56:46', '2023-03-05 03:56:46', NULL),
(3, 0, '3', 1, 'image/png', 2165, 'brands/3.png', '[]', '2023-03-05 03:56:46', '2023-03-05 03:56:46', NULL),
(4, 0, '4', 1, 'image/png', 2165, 'brands/4.png', '[]', '2023-03-05 03:56:47', '2023-03-05 03:56:47', NULL),
(5, 0, '5', 1, 'image/png', 2165, 'brands/5.png', '[]', '2023-03-05 03:56:47', '2023-03-05 03:56:47', NULL),
(6, 0, '6', 1, 'image/png', 2165, 'brands/6.png', '[]', '2023-03-05 03:56:48', '2023-03-05 03:56:48', NULL),
(7, 0, '7', 1, 'image/png', 2165, 'brands/7.png', '[]', '2023-03-05 03:56:48', '2023-03-05 03:56:48', NULL),
(8, 0, 'p-1', 2, 'image/png', 2165, 'product-categories/p-1.png', '[]', '2023-03-05 03:56:52', '2023-03-05 03:56:52', NULL),
(9, 0, 'p-2', 2, 'image/png', 2165, 'product-categories/p-2.png', '[]', '2023-03-05 03:56:52', '2023-03-05 03:56:52', NULL),
(10, 0, 'p-3', 2, 'image/png', 2165, 'product-categories/p-3.png', '[]', '2023-03-05 03:56:53', '2023-03-05 03:56:53', NULL),
(11, 0, 'p-4', 2, 'image/png', 2165, 'product-categories/p-4.png', '[]', '2023-03-05 03:56:54', '2023-03-05 03:56:54', NULL),
(12, 0, 'p-5', 2, 'image/png', 2165, 'product-categories/p-5.png', '[]', '2023-03-05 03:56:54', '2023-03-05 03:56:54', NULL),
(13, 0, 'p-6', 2, 'image/png', 2165, 'product-categories/p-6.png', '[]', '2023-03-05 03:56:55', '2023-03-05 03:56:55', NULL),
(14, 0, 'p-7', 2, 'image/png', 2165, 'product-categories/p-7.png', '[]', '2023-03-05 03:56:55', '2023-03-05 03:56:55', NULL),
(15, 0, '1', 3, 'image/jpeg', 2165, 'customers/1.jpg', '[]', '2023-03-05 03:57:19', '2023-03-05 03:57:19', NULL),
(16, 0, '10', 3, 'image/jpeg', 2165, 'customers/10.jpg', '[]', '2023-03-05 03:57:19', '2023-03-05 03:57:19', NULL),
(17, 0, '2', 3, 'image/jpeg', 2165, 'customers/2.jpg', '[]', '2023-03-05 03:57:20', '2023-03-05 03:57:20', NULL),
(18, 0, '3', 3, 'image/jpeg', 2165, 'customers/3.jpg', '[]', '2023-03-05 03:57:20', '2023-03-05 03:57:20', NULL),
(19, 0, '4', 3, 'image/jpeg', 2165, 'customers/4.jpg', '[]', '2023-03-05 03:57:20', '2023-03-05 03:57:20', NULL),
(20, 0, '5', 3, 'image/jpeg', 2165, 'customers/5.jpg', '[]', '2023-03-05 03:57:21', '2023-03-05 03:57:21', NULL),
(21, 0, '6', 3, 'image/jpeg', 2165, 'customers/6.jpg', '[]', '2023-03-05 03:57:21', '2023-03-05 03:57:21', NULL),
(22, 0, '7', 3, 'image/jpeg', 2165, 'customers/7.jpg', '[]', '2023-03-05 03:57:22', '2023-03-05 03:57:22', NULL),
(23, 0, '8', 3, 'image/jpeg', 2165, 'customers/8.jpg', '[]', '2023-03-05 03:57:22', '2023-03-05 03:57:22', NULL),
(24, 0, '9', 3, 'image/jpeg', 2165, 'customers/9.jpg', '[]', '2023-03-05 03:57:23', '2023-03-05 03:57:23', NULL),
(25, 0, '1-1', 4, 'image/jpeg', 2165, 'products/1-1.jpg', '[]', '2023-03-05 03:57:30', '2023-03-05 03:57:30', NULL),
(26, 0, '1-2', 4, 'image/jpeg', 2165, 'products/1-2.jpg', '[]', '2023-03-05 03:57:30', '2023-03-05 03:57:30', NULL),
(27, 0, '1-3', 4, 'image/jpeg', 2165, 'products/1-3.jpg', '[]', '2023-03-05 03:57:31', '2023-03-05 03:57:31', NULL),
(28, 0, '1', 4, 'image/jpeg', 2165, 'products/1.jpg', '[]', '2023-03-05 03:57:31', '2023-03-05 03:57:31', NULL),
(29, 0, '10-1', 4, 'image/jpeg', 2165, 'products/10-1.jpg', '[]', '2023-03-05 03:57:32', '2023-03-05 03:57:32', NULL),
(30, 0, '10', 4, 'image/jpeg', 2165, 'products/10.jpg', '[]', '2023-03-05 03:57:32', '2023-03-05 03:57:32', NULL),
(31, 0, '11-1', 4, 'image/jpeg', 2165, 'products/11-1.jpg', '[]', '2023-03-05 03:57:32', '2023-03-05 03:57:32', NULL),
(32, 0, '11', 4, 'image/jpeg', 2165, 'products/11.jpg', '[]', '2023-03-05 03:57:33', '2023-03-05 03:57:33', NULL),
(33, 0, '12-1', 4, 'image/jpeg', 2165, 'products/12-1.jpg', '[]', '2023-03-05 03:57:33', '2023-03-05 03:57:33', NULL),
(34, 0, '12', 4, 'image/jpeg', 2165, 'products/12.jpg', '[]', '2023-03-05 03:57:33', '2023-03-05 03:57:33', NULL),
(35, 0, '13-1', 4, 'image/jpeg', 2165, 'products/13-1.jpg', '[]', '2023-03-05 03:57:34', '2023-03-05 03:57:34', NULL),
(36, 0, '13', 4, 'image/jpeg', 2165, 'products/13.jpg', '[]', '2023-03-05 03:57:34', '2023-03-05 03:57:34', NULL),
(37, 0, '14-1', 4, 'image/jpeg', 2165, 'products/14-1.jpg', '[]', '2023-03-05 03:57:35', '2023-03-05 03:57:35', NULL),
(38, 0, '14', 4, 'image/jpeg', 2165, 'products/14.jpg', '[]', '2023-03-05 03:57:35', '2023-03-05 03:57:35', NULL),
(39, 0, '15-1', 4, 'image/jpeg', 2165, 'products/15-1.jpg', '[]', '2023-03-05 03:57:36', '2023-03-05 03:57:36', NULL),
(40, 0, '15', 4, 'image/jpeg', 2165, 'products/15.jpg', '[]', '2023-03-05 03:57:36', '2023-03-05 03:57:36', NULL),
(41, 0, '16', 4, 'image/jpeg', 2165, 'products/16.jpg', '[]', '2023-03-05 03:57:37', '2023-03-05 03:57:37', NULL),
(42, 0, '17', 4, 'image/jpeg', 2165, 'products/17.jpg', '[]', '2023-03-05 03:57:37', '2023-03-05 03:57:37', NULL),
(43, 0, '18-1', 4, 'image/jpeg', 2165, 'products/18-1.jpg', '[]', '2023-03-05 03:57:38', '2023-03-05 03:57:38', NULL),
(44, 0, '18-2', 4, 'image/jpeg', 2165, 'products/18-2.jpg', '[]', '2023-03-05 03:57:38', '2023-03-05 03:57:38', NULL),
(45, 0, '18', 4, 'image/jpeg', 2165, 'products/18.jpg', '[]', '2023-03-05 03:57:39', '2023-03-05 03:57:39', NULL),
(46, 0, '19-1', 4, 'image/jpeg', 2165, 'products/19-1.jpg', '[]', '2023-03-05 03:57:39', '2023-03-05 03:57:39', NULL),
(47, 0, '19', 4, 'image/jpeg', 2165, 'products/19.jpg', '[]', '2023-03-05 03:57:40', '2023-03-05 03:57:40', NULL),
(48, 0, '2-1', 4, 'image/jpeg', 2165, 'products/2-1.jpg', '[]', '2023-03-05 03:57:40', '2023-03-05 03:57:40', NULL),
(49, 0, '2-2', 4, 'image/jpeg', 2165, 'products/2-2.jpg', '[]', '2023-03-05 03:57:41', '2023-03-05 03:57:41', NULL),
(50, 0, '2-3', 4, 'image/jpeg', 2165, 'products/2-3.jpg', '[]', '2023-03-05 03:57:41', '2023-03-05 03:57:41', NULL),
(51, 0, '2', 4, 'image/jpeg', 2165, 'products/2.jpg', '[]', '2023-03-05 03:57:41', '2023-03-05 03:57:41', NULL),
(52, 0, '20-1', 4, 'image/jpeg', 2165, 'products/20-1.jpg', '[]', '2023-03-05 03:57:42', '2023-03-05 03:57:42', NULL),
(53, 0, '20', 4, 'image/jpeg', 2165, 'products/20.jpg', '[]', '2023-03-05 03:57:42', '2023-03-05 03:57:42', NULL),
(54, 0, '21-1', 4, 'image/jpeg', 2165, 'products/21-1.jpg', '[]', '2023-03-05 03:57:43', '2023-03-05 03:57:43', NULL),
(55, 0, '21', 4, 'image/jpeg', 2165, 'products/21.jpg', '[]', '2023-03-05 03:57:43', '2023-03-05 03:57:43', NULL),
(56, 0, '22-1', 4, 'image/jpeg', 2165, 'products/22-1.jpg', '[]', '2023-03-05 03:57:44', '2023-03-05 03:57:44', NULL),
(57, 0, '22', 4, 'image/jpeg', 2165, 'products/22.jpg', '[]', '2023-03-05 03:57:44', '2023-03-05 03:57:44', NULL),
(58, 0, '23-1', 4, 'image/jpeg', 2165, 'products/23-1.jpg', '[]', '2023-03-05 03:57:44', '2023-03-05 03:57:44', NULL),
(59, 0, '23', 4, 'image/jpeg', 2165, 'products/23.jpg', '[]', '2023-03-05 03:57:45', '2023-03-05 03:57:45', NULL),
(60, 0, '24-1', 4, 'image/jpeg', 2165, 'products/24-1.jpg', '[]', '2023-03-05 03:57:45', '2023-03-05 03:57:45', NULL),
(61, 0, '24', 4, 'image/jpeg', 2165, 'products/24.jpg', '[]', '2023-03-05 03:57:46', '2023-03-05 03:57:46', NULL),
(62, 0, '25-1', 4, 'image/jpeg', 2165, 'products/25-1.jpg', '[]', '2023-03-05 03:57:46', '2023-03-05 03:57:46', NULL),
(63, 0, '25', 4, 'image/jpeg', 2165, 'products/25.jpg', '[]', '2023-03-05 03:57:47', '2023-03-05 03:57:47', NULL),
(64, 0, '26-1', 4, 'image/jpeg', 2165, 'products/26-1.jpg', '[]', '2023-03-05 03:57:47', '2023-03-05 03:57:47', NULL),
(65, 0, '26-2', 4, 'image/jpeg', 2165, 'products/26-2.jpg', '[]', '2023-03-05 03:57:48', '2023-03-05 03:57:48', NULL),
(66, 0, '26', 4, 'image/jpeg', 2165, 'products/26.jpg', '[]', '2023-03-05 03:57:48', '2023-03-05 03:57:48', NULL),
(67, 0, '27-1', 4, 'image/jpeg', 2165, 'products/27-1.jpg', '[]', '2023-03-05 03:57:48', '2023-03-05 03:57:48', NULL),
(68, 0, '27', 4, 'image/jpeg', 2165, 'products/27.jpg', '[]', '2023-03-05 03:57:49', '2023-03-05 03:57:49', NULL),
(69, 0, '28-1', 4, 'image/jpeg', 2165, 'products/28-1.jpg', '[]', '2023-03-05 03:57:49', '2023-03-05 03:57:49', NULL),
(70, 0, '28', 4, 'image/jpeg', 2165, 'products/28.jpg', '[]', '2023-03-05 03:57:50', '2023-03-05 03:57:50', NULL),
(71, 0, '29-1', 4, 'image/jpeg', 2165, 'products/29-1.jpg', '[]', '2023-03-05 03:57:50', '2023-03-05 03:57:50', NULL),
(72, 0, '29', 4, 'image/jpeg', 2165, 'products/29.jpg', '[]', '2023-03-05 03:57:51', '2023-03-05 03:57:51', NULL),
(73, 0, '3-1', 4, 'image/jpeg', 2165, 'products/3-1.jpg', '[]', '2023-03-05 03:57:51', '2023-03-05 03:57:51', NULL),
(74, 0, '3-2', 4, 'image/jpeg', 2165, 'products/3-2.jpg', '[]', '2023-03-05 03:57:52', '2023-03-05 03:57:52', NULL),
(75, 0, '3-3', 4, 'image/jpeg', 2165, 'products/3-3.jpg', '[]', '2023-03-05 03:57:52', '2023-03-05 03:57:52', NULL),
(76, 0, '3', 4, 'image/jpeg', 2165, 'products/3.jpg', '[]', '2023-03-05 03:57:52', '2023-03-05 03:57:52', NULL),
(77, 0, '30-1', 4, 'image/jpeg', 2165, 'products/30-1.jpg', '[]', '2023-03-05 03:57:53', '2023-03-05 03:57:53', NULL),
(78, 0, '30', 4, 'image/jpeg', 2165, 'products/30.jpg', '[]', '2023-03-05 03:57:53', '2023-03-05 03:57:53', NULL),
(79, 0, '31-1', 4, 'image/jpeg', 2165, 'products/31-1.jpg', '[]', '2023-03-05 03:57:54', '2023-03-05 03:57:54', NULL),
(80, 0, '31', 4, 'image/jpeg', 2165, 'products/31.jpg', '[]', '2023-03-05 03:57:54', '2023-03-05 03:57:54', NULL),
(81, 0, '4-1', 4, 'image/jpeg', 2165, 'products/4-1.jpg', '[]', '2023-03-05 03:57:54', '2023-03-05 03:57:54', NULL),
(82, 0, '4-2', 4, 'image/jpeg', 2165, 'products/4-2.jpg', '[]', '2023-03-05 03:57:55', '2023-03-05 03:57:55', NULL),
(83, 0, '4-3', 4, 'image/jpeg', 2165, 'products/4-3.jpg', '[]', '2023-03-05 03:57:55', '2023-03-05 03:57:55', NULL),
(84, 0, '4', 4, 'image/jpeg', 2165, 'products/4.jpg', '[]', '2023-03-05 03:57:56', '2023-03-05 03:57:56', NULL),
(85, 0, '5-1', 4, 'image/jpeg', 2165, 'products/5-1.jpg', '[]', '2023-03-05 03:57:56', '2023-03-05 03:57:56', NULL),
(86, 0, '5-2', 4, 'image/jpeg', 2165, 'products/5-2.jpg', '[]', '2023-03-05 03:57:57', '2023-03-05 03:57:57', NULL),
(87, 0, '5-3', 4, 'image/jpeg', 2165, 'products/5-3.jpg', '[]', '2023-03-05 03:57:57', '2023-03-05 03:57:57', NULL),
(88, 0, '5', 4, 'image/jpeg', 2165, 'products/5.jpg', '[]', '2023-03-05 03:57:58', '2023-03-05 03:57:58', NULL),
(89, 0, '6-1', 4, 'image/jpeg', 2165, 'products/6-1.jpg', '[]', '2023-03-05 03:57:58', '2023-03-05 03:57:58', NULL),
(90, 0, '6', 4, 'image/jpeg', 2165, 'products/6.jpg', '[]', '2023-03-05 03:57:58', '2023-03-05 03:57:58', NULL),
(91, 0, '7-1', 4, 'image/jpeg', 2165, 'products/7-1.jpg', '[]', '2023-03-05 03:57:59', '2023-03-05 03:57:59', NULL),
(92, 0, '7', 4, 'image/jpeg', 2165, 'products/7.jpg', '[]', '2023-03-05 03:57:59', '2023-03-05 03:57:59', NULL),
(93, 0, '8-1', 4, 'image/jpeg', 2165, 'products/8-1.jpg', '[]', '2023-03-05 03:58:00', '2023-03-05 03:58:00', NULL),
(94, 0, '8', 4, 'image/jpeg', 2165, 'products/8.jpg', '[]', '2023-03-05 03:58:00', '2023-03-05 03:58:00', NULL),
(95, 0, '9-1', 4, 'image/jpeg', 2165, 'products/9-1.jpg', '[]', '2023-03-05 03:58:01', '2023-03-05 03:58:01', NULL),
(96, 0, '9', 4, 'image/jpeg', 2165, 'products/9.jpg', '[]', '2023-03-05 03:58:01', '2023-03-05 03:58:01', NULL),
(97, 0, '1', 5, 'image/jpeg', 2165, 'news/1.jpg', '[]', '2023-03-05 04:00:02', '2023-03-05 04:00:02', NULL),
(98, 0, '2', 5, 'image/jpeg', 2165, 'news/2.jpg', '[]', '2023-03-05 04:00:03', '2023-03-05 04:00:03', NULL),
(99, 0, '3', 5, 'image/jpeg', 2165, 'news/3.jpg', '[]', '2023-03-05 04:00:03', '2023-03-05 04:00:03', NULL),
(100, 0, '4', 5, 'image/jpeg', 2165, 'news/4.jpg', '[]', '2023-03-05 04:00:04', '2023-03-05 04:00:04', NULL),
(101, 0, '5', 5, 'image/jpeg', 2165, 'news/5.jpg', '[]', '2023-03-05 04:00:04', '2023-03-05 04:00:04', NULL),
(102, 0, '6', 5, 'image/jpeg', 2165, 'news/6.jpg', '[]', '2023-03-05 04:00:05', '2023-03-05 04:00:05', NULL),
(103, 0, '1', 6, 'image/jpeg', 2165, 'testimonials/1.jpg', '[]', '2023-03-05 04:00:16', '2023-03-05 04:00:16', NULL),
(104, 0, '2', 6, 'image/jpeg', 2165, 'testimonials/2.jpg', '[]', '2023-03-05 04:00:17', '2023-03-05 04:00:17', NULL),
(105, 0, '3', 6, 'image/jpeg', 2165, 'testimonials/3.jpg', '[]', '2023-03-05 04:00:17', '2023-03-05 04:00:17', NULL),
(106, 0, '4', 6, 'image/jpeg', 2165, 'testimonials/4.jpg', '[]', '2023-03-05 04:00:18', '2023-03-05 04:00:18', NULL),
(107, 0, '1', 7, 'image/jpeg', 3063, 'sliders/1.jpg', '[]', '2023-03-05 04:00:20', '2023-03-05 04:00:20', NULL),
(108, 0, '2', 7, 'image/jpeg', 3063, 'sliders/2.jpg', '[]', '2023-03-05 04:00:21', '2023-03-05 04:00:21', NULL),
(109, 0, '3', 7, 'image/jpeg', 3063, 'sliders/3.jpg', '[]', '2023-03-05 04:00:21', '2023-03-05 04:00:21', NULL),
(110, 0, 'american-express', 8, 'image/png', 3209, 'general/american-express.png', '[]', '2023-03-05 04:00:41', '2023-03-05 04:00:41', NULL),
(111, 0, 'b-1', 8, 'image/jpeg', 1955, 'general/b-1.jpg', '[]', '2023-03-05 04:00:42', '2023-03-05 04:00:42', NULL),
(112, 0, 'b-2', 8, 'image/jpeg', 1955, 'general/b-2.jpg', '[]', '2023-03-05 04:00:43', '2023-03-05 04:00:43', NULL),
(113, 0, 'b-3', 8, 'image/jpeg', 1955, 'general/b-3.jpg', '[]', '2023-03-05 04:00:44', '2023-03-05 04:00:44', NULL),
(114, 0, 'discover', 8, 'image/png', 2494, 'general/discover.png', '[]', '2023-03-05 04:00:45', '2023-03-05 04:00:45', NULL),
(115, 0, 'favicon', 8, 'image/png', 1803, 'general/favicon.png', '[]', '2023-03-05 04:00:46', '2023-03-05 04:00:46', NULL),
(116, 0, 'logo-light', 8, 'image/png', 3736, 'general/logo-light.png', '[]', '2023-03-05 04:00:46', '2023-03-05 04:00:46', NULL),
(117, 0, 'logo', 8, 'image/png', 3927, 'general/logo.png', '[]', '2023-03-05 04:00:47', '2023-03-05 04:00:47', NULL),
(118, 0, 'master-card', 8, 'image/png', 3407, 'general/master-card.png', '[]', '2023-03-05 04:00:48', '2023-03-05 04:00:48', NULL),
(119, 0, 'newsletter', 8, 'image/jpeg', 1248, 'general/newsletter.jpg', '[]', '2023-03-05 04:00:48', '2023-03-05 04:00:48', NULL),
(120, 0, 'paypal', 8, 'image/png', 2670, 'general/paypal.png', '[]', '2023-03-05 04:00:50', '2023-03-05 04:00:50', NULL),
(121, 0, 'visa', 8, 'image/png', 2841, 'general/visa.png', '[]', '2023-03-05 04:00:50', '2023-03-05 04:00:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `media_folders`
--

CREATE TABLE `media_folders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `slug` varchar(191) DEFAULT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media_folders`
--

INSERT INTO `media_folders` (`id`, `user_id`, `name`, `slug`, `parent_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 0, 'brands', 'brands', 0, '2023-03-05 03:56:44', '2023-03-05 03:56:44', NULL),
(2, 0, 'product-categories', 'product-categories', 0, '2023-03-05 03:56:52', '2023-03-05 03:56:52', NULL),
(3, 0, 'customers', 'customers', 0, '2023-03-05 03:57:18', '2023-03-05 03:57:18', NULL),
(4, 0, 'products', 'products', 0, '2023-03-05 03:57:29', '2023-03-05 03:57:29', NULL),
(5, 0, 'news', 'news', 0, '2023-03-05 04:00:02', '2023-03-05 04:00:02', NULL),
(6, 0, 'testimonials', 'testimonials', 0, '2023-03-05 04:00:16', '2023-03-05 04:00:16', NULL),
(7, 0, 'sliders', 'sliders', 0, '2023-03-05 04:00:20', '2023-03-05 04:00:20', NULL),
(8, 0, 'general', 'general', 0, '2023-03-05 04:00:41', '2023-03-05 04:00:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `media_settings`
--

CREATE TABLE `media_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(120) NOT NULL,
  `value` text DEFAULT NULL,
  `media_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `slug` varchar(120) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Main menu', 'main-menu', 'published', '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(2, 'Useful Links', 'useful-links', 'published', '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(3, 'Categories', 'categories', 'published', '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(4, 'My Account', 'my-account', 'published', '2023-03-05 04:00:36', '2023-03-05 04:00:36');

-- --------------------------------------------------------

--
-- Table structure for table `menu_locations`
--

CREATE TABLE `menu_locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED NOT NULL,
  `location` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_locations`
--

INSERT INTO `menu_locations` (`id`, `menu_id`, `location`, `created_at`, `updated_at`) VALUES
(1, 1, 'main-menu', '2023-03-05 04:00:33', '2023-03-05 04:00:33');

-- --------------------------------------------------------

--
-- Table structure for table `menu_nodes`
--

CREATE TABLE `menu_nodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `reference_id` int(10) UNSIGNED DEFAULT NULL,
  `reference_type` varchar(255) DEFAULT NULL,
  `url` varchar(120) DEFAULT NULL,
  `icon_font` varchar(50) DEFAULT NULL,
  `position` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `title` varchar(120) DEFAULT NULL,
  `css_class` varchar(120) DEFAULT NULL,
  `target` varchar(20) NOT NULL DEFAULT '_self',
  `has_child` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_nodes`
--

INSERT INTO `menu_nodes` (`id`, `menu_id`, `parent_id`, `reference_id`, `reference_type`, `url`, `icon_font`, `position`, `title`, `css_class`, `target`, `has_child`, `created_at`, `updated_at`) VALUES
(1, 1, 0, NULL, NULL, '/', NULL, 0, 'Home', NULL, '_self', 0, '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(2, 1, 0, NULL, NULL, '/products', NULL, 0, 'Products', NULL, '_self', 0, '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(3, 1, 0, NULL, NULL, '#', NULL, 0, 'Shop', NULL, '_self', 1, '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(4, 1, 3, 1, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Product Category', NULL, '_self', 0, '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(5, 1, 3, 1, 'Botble\\Ecommerce\\Models\\Brand', NULL, NULL, 0, 'Brand', NULL, '_self', 0, '2023-03-05 04:00:33', '2023-03-05 04:00:33'),
(6, 1, 3, 1, 'Botble\\Ecommerce\\Models\\ProductTag', NULL, NULL, 0, 'Product Tag', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(7, 1, 3, NULL, NULL, 'products/beat-headphone', NULL, 0, 'Product Single', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(8, 1, 0, 3, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Blog', NULL, '_self', 1, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(9, 1, 8, 3, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Blog Left Sidebar', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(10, 1, 8, 1, 'Botble\\Blog\\Models\\Category', NULL, NULL, 0, 'Blog Category', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(11, 1, 8, 1, 'Botble\\Blog\\Models\\Tag', NULL, NULL, 0, 'Blog Tag', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(12, 1, 8, NULL, NULL, 'news/4-expert-tips-on-how-to-choose-the-right-mens-wallet', NULL, 0, 'Blog Single', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(13, 1, 0, 2, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Contact us', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(14, 2, 0, 4, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'About Us', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(15, 2, 0, 5, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'FAQ', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(16, 2, 0, 6, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Location', NULL, '_self', 0, '2023-03-05 04:00:34', '2023-03-05 04:00:34'),
(17, 2, 0, 7, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Affiliates', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(18, 2, 0, 2, 'Botble\\Page\\Models\\Page', NULL, NULL, 0, 'Contact', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(19, 3, 0, 1, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Television', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(20, 3, 0, 2, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Mobile', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(21, 3, 0, 3, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Headphone', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(22, 3, 0, 4, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Watches', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(23, 3, 0, 5, 'Botble\\Ecommerce\\Models\\ProductCategory', NULL, NULL, 0, 'Game', NULL, '_self', 0, '2023-03-05 04:00:35', '2023-03-05 04:00:35'),
(24, 4, 0, NULL, NULL, '/customer/overview', NULL, 0, 'My profile', NULL, '_self', 0, '2023-03-05 04:00:36', '2023-03-05 04:00:36'),
(25, 4, 0, NULL, NULL, '/wishlist', NULL, 0, 'Wishlist', NULL, '_self', 0, '2023-03-05 04:00:36', '2023-03-05 04:00:36'),
(26, 4, 0, NULL, NULL, 'customer/orders', NULL, 0, 'Orders', NULL, '_self', 0, '2023-03-05 04:00:36', '2023-03-05 04:00:36'),
(27, 4, 0, NULL, NULL, '/orders/tracking', NULL, 0, 'Order tracking', NULL, '_self', 0, '2023-03-05 04:00:36', '2023-03-05 04:00:36');

-- --------------------------------------------------------

--
-- Table structure for table `meta_boxes`
--

CREATE TABLE `meta_boxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `meta_key` varchar(255) NOT NULL,
  `meta_value` text DEFAULT NULL,
  `reference_id` int(10) UNSIGNED NOT NULL,
  `reference_type` varchar(120) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meta_boxes`
--

INSERT INTO `meta_boxes` (`id`, `meta_key`, `meta_value`, `reference_id`, `reference_type`, `created_at`, `updated_at`) VALUES
(1, 'icon', '[\"flaticon-tv\"]', 1, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:56:58', '2023-03-05 03:56:58'),
(2, 'icon', '[\"flaticon-responsive\"]', 2, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:56:58', '2023-03-05 03:56:58'),
(3, 'icon', '[\"flaticon-headphones\"]', 3, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(4, 'icon', '[\"flaticon-watch\"]', 4, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(5, 'icon', '[\"flaticon-console\"]', 5, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(6, 'icon', '[\"flaticon-camera\"]', 6, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(7, 'icon', '[\"flaticon-music-system\"]', 7, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(8, 'icon', '[\"flaticon-responsive\"]', 8, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:01', '2023-03-05 03:57:01'),
(9, 'icon', '[\"flaticon-plugins\"]', 9, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:02', '2023-03-05 03:57:02'),
(10, 'icon', '[\"flaticon-music-system\"]', 10, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:02', '2023-03-05 03:57:02'),
(11, 'icon', '[\"flaticon-monitor\"]', 11, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:03', '2023-03-05 03:57:03'),
(12, 'icon', '[\"flaticon-printer\"]', 12, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:04', '2023-03-05 03:57:04'),
(13, 'icon', '[\"flaticon-tv\"]', 13, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:05', '2023-03-05 03:57:05'),
(14, 'icon', '[\"flaticon-fax\"]', 14, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:06', '2023-03-05 03:57:06'),
(15, 'icon', '[\"flaticon-mouse\"]', 15, 'Botble\\Ecommerce\\Models\\ProductCategory', '2023-03-05 03:57:06', '2023-03-05 03:57:06'),
(16, 'button_text', '[\"Shop now\"]', 1, 'Botble\\SimpleSlider\\Models\\SimpleSliderItem', '2023-03-05 04:00:24', '2023-03-05 04:00:24'),
(17, 'button_text', '[\"Discover now\"]', 2, 'Botble\\SimpleSlider\\Models\\SimpleSliderItem', '2023-03-05 04:00:25', '2023-03-05 04:00:25'),
(18, 'button_text', '[\"Shop now\"]', 3, 'Botble\\SimpleSlider\\Models\\SimpleSliderItem', '2023-03-05 04:00:25', '2023-03-05 04:00:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
(2, '2013_04_09_032329_create_base_tables', 1),
(3, '2013_04_09_062329_create_revisions_table', 1),
(4, '2014_10_12_000000_create_users_table', 1),
(5, '2014_10_12_100000_create_password_resets_table', 1),
(6, '2016_06_10_230148_create_acl_tables', 1),
(7, '2016_06_14_230857_create_menus_table', 1),
(8, '2016_06_28_221418_create_pages_table', 1),
(9, '2016_10_05_074239_create_setting_table', 1),
(10, '2016_11_28_032840_create_dashboard_widget_tables', 1),
(11, '2016_12_16_084601_create_widgets_table', 1),
(12, '2017_05_09_070343_create_media_tables', 1),
(13, '2017_11_03_070450_create_slug_table', 1),
(14, '2019_01_05_053554_create_jobs_table', 1),
(15, '2019_05_03_000001_create_customer_columns', 1),
(16, '2019_05_03_000002_create_subscriptions_table', 1),
(17, '2019_05_03_000003_create_subscription_items_table', 1),
(18, '2019_08_19_000000_create_failed_jobs_table', 1),
(19, '2021_07_18_101839_fix_old_theme_options', 1),
(20, '2015_06_29_025744_create_audit_history', 2),
(21, '2015_06_18_033822_create_blog_table', 3),
(22, '2021_02_16_092633_remove_default_value_for_author_type', 3),
(23, '2016_06_17_091537_create_contacts_table', 4),
(24, '2020_03_05_041139_create_ecommerce_tables', 5),
(25, '2020_09_22_135635_update_taxes_table', 5),
(26, '2020_09_29_101006_add_views_into_ec_products_table', 5),
(27, '2020_10_01_152311_make_column_image_in_product_attributes_table_nullable', 5),
(28, '2020_10_06_073439_improve_ecommerce_database', 5),
(29, '2020_11_01_040415_update_table_ec_order_addresses', 5),
(30, '2020_11_04_091510_make_column_phone_in_order_addresses_nullable', 5),
(31, '2020_11_30_015801_update_table_ec_product_categories', 5),
(32, '2021_01_01_044147_ecommerce_create_flash_sale_table', 5),
(33, '2021_01_17_082713_add_column_is_featured_to_product_collections_table', 5),
(34, '2021_01_18_024333_add_zip_code_into_table_customer_addresses', 5),
(35, '2021_02_18_073505_update_table_ec_reviews', 5),
(36, '2021_03_10_024419_add_column_confirmed_at_to_table_ec_customers', 5),
(37, '2021_03_10_025153_change_column_tax_amount', 5),
(38, '2021_03_20_033103_add_column_availability_to_table_ec_products', 5),
(39, '2021_04_28_074008_ecommerce_create_product_label_table', 5),
(40, '2021_05_31_173037_ecommerce_create_ec_products_translations', 5),
(41, '2021_06_28_153141_correct_slugs_data', 5),
(42, '2017_10_24_154832_create_newsletter_table', 6),
(43, '2017_05_18_080441_create_payment_tables', 7),
(44, '2021_03_27_144913_add_customer_type_into_table_payments', 7),
(45, '2021_05_24_034720_make_column_currency_nullable', 7),
(46, '2017_07_11_140018_create_simple_slider_table', 8),
(47, '2018_07_09_214610_create_testimonial_table', 9),
(48, '2016_10_07_193005_create_translations_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(120) NOT NULL,
  `name` varchar(120) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'subscribed',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `content` longtext DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `template` varchar(60) DEFAULT NULL,
  `is_featured` tinyint(4) NOT NULL DEFAULT 0,
  `description` varchar(400) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `content`, `user_id`, `image`, `template`, `is_featured`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Home', '<div>[simple-slider key=\"home-slider\"][/simple-slider]</div><div>[featured-product-categories title=\"Top Categories\" subtitle=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius.\"][/featured-product-categories]</div><div>[flash-sale title=\"Best deals for you\"][/flash-sale]</div><div>[product-collections title=\"Exclusive Products\"][/product-collections]</div><div>[banners image1=\"general/b-1.jpg\" url1=\"/product-categories/headphone\" image2=\"general/b-2.jpg\" url2=\"/product-categories/camera\" image3=\"general/b-3.jpg\" url3=\"/product-categories/watches\"][/banners]</div><div>[trending-products title=\"Trending Products\"][[/trending-products]</div><div>[product-blocks featured_product_title=\"Featured Products\" top_rated_product_title=\"Top Rated Products\" on_sale_product_title=\"On Sale Products\"][/product-blocks]</div><div>[featured-brands title=\"Our Brands\"][/featured-brands]</div><div>[featured-news title=\"Visit Our Blog\" subtitle=\"Our Blog updated the newest trend of the world regularly\"][/featured-news]</div><div>[testimonials title=\"Our Client Say!\"][/testimonials]</div><div>[our-features icon1=\"flaticon-shipped\" title1=\"Free Delivery\" subtitle1=\"Free shipping on all US order or order above $200\" icon2=\"flaticon-money-back\" title2=\"30 Day Returns Guarantee\" subtitle2=\"Simply return it within 30 days for an exchange\" icon3=\"flaticon-support\" title3=\"27/4 Online Support\" subtitle3=\"Contact us 24 hours a day, 7 days a week\"][/our-features]</div><div>[newsletter-form title=\"Join Our Newsletter Now\" subtitle=\"Register now to get updates on promotions.\"][/newsletter-form]</div>', 1, NULL, 'homepage', 0, NULL, 'published', '2023-03-05 04:00:26', '2023-03-05 04:00:26'),
(2, 'Contact us', '<p>[contact-form][/contact-form]</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:26', '2023-03-05 04:00:26'),
(3, 'Blog', '<p>---</p>', 1, NULL, 'blog-sidebar', 0, NULL, 'published', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(4, 'About us', '<p>Alice noticed with some surprise that the way out of breath, and till the puppy\'s bark sounded quite faint in the lap of her age knew the name again!\' \'I won\'t indeed!\' said the Cat. \'--so long as there seemed to follow, except a tiny little thing!\' It did so indeed, and much sooner than she had asked it aloud; and in another moment down went Alice after it, never once considering how in the window, I only wish they WOULD go with Edgar Atheling to meet William and offer him the crown.</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(5, 'FAQ', '<p>I grow at a reasonable pace,\' said the Caterpillar; and it was in managing her flamingo: she succeeded in getting its body tucked away, comfortably enough, under her arm, that it was neither more nor less than a real Turtle.\' These words were followed by a very pretty dance,\' said Alice to herself. Imagine her surprise, when the Rabbit came near her, she began, in a tone of the trees upon her face. \'Very,\' said Alice: \'--where\'s the Duchess?\' \'Hush! Hush!\' said the King. \'Then it doesn\'t.</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(6, 'Location', '<p>White Rabbit read out, at the moment, \'My dear! I shall ever see such a curious feeling!\' said Alice; \'but a grin without a grin,\' thought Alice; \'I daresay it\'s a very interesting dance to watch,\' said Alice, timidly; \'some of the wood--(she considered him to you, Though they were nice grand words to say.) Presently she began thinking over all the rest of the words \'DRINK ME\' beautifully printed on it except a tiny golden key, and when she noticed a curious dream!\' said Alice, feeling very.</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(7, 'Affiliates', '<p>They had a head could be NO mistake about it: it was very hot, she kept tossing the baby at her hands, wondering if anything would EVER happen in a low trembling voice, \'--and I hadn\'t begun my tea--not above a week or so--and what with the other: the only difficulty was, that she ought not to her, so she waited. The Gryphon sat up and ran the faster, while more and more faintly came, carried on the spot.\' This did not notice this last remark that had slipped in like herself. \'Would it be of.</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:28', '2023-03-05 04:00:28'),
(8, 'Brands', '<p>[all-brands][/all-brands]</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:28', '2023-03-05 04:00:28'),
(9, 'Cookie Policy', '<h3>EU Cookie Consent</h3><p>To use this Website we are using Cookies and collecting some Data. To be compliant with the EU GDPR we give you to choose if you allow us to use certain Cookies and to collect some Data.</p><h4>Essential Data</h4><p>The Essential Data is needed to run the Site you are visiting technically. You can not deactivate them.</p><p>- Session Cookie: PHP uses a Cookie to identify user sessions. Without this Cookie the Website is not working.</p><p>- XSRF-Token Cookie: Laravel automatically generates a CSRF \"token\" for each active user session managed by the application. This token is used to verify that the authenticated user is the one actually making the requests to the application.</p>', 1, NULL, 'default', 0, NULL, 'published', '2023-03-05 04:00:28', '2023-03-05 04:00:28');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `currency` varchar(120) DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `charge_id` varchar(60) DEFAULT NULL,
  `payment_channel` varchar(60) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `amount` decimal(15,2) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED DEFAULT NULL,
  `status` varchar(60) DEFAULT 'pending',
  `payment_type` varchar(191) DEFAULT 'confirm',
  `customer_id` int(10) UNSIGNED DEFAULT NULL,
  `refunded_amount` decimal(15,2) UNSIGNED DEFAULT NULL,
  `refund_note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `customer_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `currency`, `user_id`, `charge_id`, `payment_channel`, `description`, `amount`, `order_id`, `status`, `payment_type`, `customer_id`, `refunded_amount`, `refund_note`, `created_at`, `updated_at`, `customer_type`) VALUES
(1, 'USD', 0, '0AI4YCF0C5', 'stripe', NULL, '1149.60', 1, 'completed', 'confirm', 3, NULL, NULL, '2023-03-05 03:59:32', '2023-03-05 03:59:32', 'Botble\\Ecommerce\\Models\\Customer'),
(2, 'USD', 0, 'AFJMVSHNUC', 'bank_transfer', NULL, '942.60', 2, 'pending', 'confirm', 11, NULL, NULL, '2023-03-05 03:59:34', '2023-03-05 03:59:34', 'Botble\\Ecommerce\\Models\\Customer'),
(3, 'USD', 0, 'DGX9FGTFQV', 'razorpay', NULL, '415.70', 3, 'completed', 'confirm', 3, NULL, NULL, '2023-03-05 03:59:36', '2023-03-05 03:59:36', 'Botble\\Ecommerce\\Models\\Customer'),
(4, 'USD', 0, 'RK1OCEMMN4', 'cod', NULL, '1362.70', 4, 'pending', 'confirm', 9, NULL, NULL, '2023-03-05 03:59:37', '2023-03-05 03:59:37', 'Botble\\Ecommerce\\Models\\Customer'),
(5, 'USD', 0, 'XX1KZZEZ8K', 'paystack', NULL, '794.60', 5, 'completed', 'confirm', 5, NULL, NULL, '2023-03-05 03:59:38', '2023-03-05 03:59:38', 'Botble\\Ecommerce\\Models\\Customer'),
(6, 'USD', 0, 'QHXTKEAYGR', 'paypal', NULL, '2144.10', 6, 'completed', 'confirm', 5, NULL, NULL, '2023-03-05 03:59:40', '2023-03-05 03:59:40', 'Botble\\Ecommerce\\Models\\Customer'),
(7, 'USD', 0, '39BOXSAQCD', 'bank_transfer', NULL, '1086.50', 7, 'pending', 'confirm', 8, NULL, NULL, '2023-03-05 03:59:41', '2023-03-05 03:59:41', 'Botble\\Ecommerce\\Models\\Customer'),
(8, 'USD', 0, 'LI9GPPWFBR', 'paystack', NULL, '532.50', 8, 'completed', 'confirm', 10, NULL, NULL, '2023-03-05 03:59:42', '2023-03-05 03:59:42', 'Botble\\Ecommerce\\Models\\Customer'),
(9, 'USD', 0, 'RWAL2OEC23', 'paypal', NULL, '887.10', 9, 'completed', 'confirm', 5, NULL, NULL, '2023-03-05 03:59:43', '2023-03-05 03:59:43', 'Botble\\Ecommerce\\Models\\Customer'),
(10, 'USD', 0, 'KMEK8FRTO7', 'paystack', NULL, '800.00', 10, 'completed', 'confirm', 7, NULL, NULL, '2023-03-05 03:59:45', '2023-03-05 03:59:45', 'Botble\\Ecommerce\\Models\\Customer'),
(11, 'USD', 0, '0UVEFTYTHR', 'cod', NULL, '530.60', 11, 'pending', 'confirm', 9, NULL, NULL, '2023-03-05 03:59:47', '2023-03-05 03:59:47', 'Botble\\Ecommerce\\Models\\Customer'),
(12, 'USD', 0, '3MPYG3AYE0', 'paypal', NULL, '658.40', 12, 'completed', 'confirm', 3, NULL, NULL, '2023-03-05 03:59:48', '2023-03-05 03:59:48', 'Botble\\Ecommerce\\Models\\Customer'),
(13, 'USD', 0, 'YHPYGGKK3Q', 'cod', NULL, '1273.20', 13, 'pending', 'confirm', 11, NULL, NULL, '2023-03-05 03:59:49', '2023-03-05 03:59:49', 'Botble\\Ecommerce\\Models\\Customer'),
(14, 'USD', 0, 'TS00VCA9WK', 'bank_transfer', NULL, '1086.20', 14, 'pending', 'confirm', 4, NULL, NULL, '2023-03-05 03:59:51', '2023-03-05 03:59:51', 'Botble\\Ecommerce\\Models\\Customer'),
(15, 'USD', 0, 'BJ3ARO7I5Z', 'bank_transfer', NULL, '1114.20', 15, 'pending', 'confirm', 2, NULL, NULL, '2023-03-05 03:59:53', '2023-03-05 03:59:53', 'Botble\\Ecommerce\\Models\\Customer'),
(16, 'USD', 0, 'FNSW0LDIP3', 'paypal', NULL, '497.70', 16, 'completed', 'confirm', 8, NULL, NULL, '2023-03-05 03:59:54', '2023-03-05 03:59:54', 'Botble\\Ecommerce\\Models\\Customer'),
(17, 'USD', 0, 'CJJQBRHOCG', 'cod', NULL, '264.60', 17, 'pending', 'confirm', 1, NULL, NULL, '2023-03-05 03:59:55', '2023-03-05 03:59:55', 'Botble\\Ecommerce\\Models\\Customer'),
(18, 'USD', 0, 'ZIP1ZJRHDB', 'sslcommerz', NULL, '505.00', 18, 'completed', 'confirm', 2, NULL, NULL, '2023-03-05 03:59:56', '2023-03-05 03:59:56', 'Botble\\Ecommerce\\Models\\Customer'),
(19, 'USD', 0, 'U1TEXSPOAG', 'cod', NULL, '589.20', 19, 'pending', 'confirm', 9, NULL, NULL, '2023-03-05 03:59:57', '2023-03-05 03:59:57', 'Botble\\Ecommerce\\Models\\Customer'),
(20, 'USD', 0, 'ZJL8ABW1UX', 'bank_transfer', NULL, '625.00', 20, 'pending', 'confirm', 11, NULL, NULL, '2023-03-05 04:00:00', '2023-03-05 04:00:00', 'Botble\\Ecommerce\\Models\\Customer');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(400) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `author_id` int(11) NOT NULL,
  `author_type` varchar(255) NOT NULL DEFAULT 'Botble\\ACL\\Models\\User',
  `is_featured` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `views` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `format_type` varchar(30) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `description`, `content`, `status`, `author_id`, `author_type`, `is_featured`, `image`, `views`, `format_type`, `created_at`, `updated_at`) VALUES
(1, '4 Expert Tips On How To Choose The Right Men’s Wallet', 'You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/1.jpg', 612, NULL, '2023-03-05 04:00:12', '2023-03-05 04:00:12'),
(2, 'Sexy Clutches: How to Buy & Wear a Designer Clutch Bag', 'There isn’t much a girl can’t handle with the right accessories. That’s why the perfect women’s clutch bag is a wardrobe essential for first dates and spring weddings.', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/2.jpg', 1903, NULL, '2023-03-05 04:00:12', '2023-03-05 04:00:12'),
(3, 'The Top 2020 Handbag Trends to Know', 'For the handbag obsessives, let\'s dive into the latter a little more. This year will bring a fresh array of bag designs, and already we\'ve gotten a sneak peek of what both spring and fall 2020 collections have to offer/', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/3.jpg', 888, NULL, '2023-03-05 04:00:13', '2023-03-05 04:00:13'),
(4, 'How to Match the Color of Your Handbag With an Outfit', 'To match your multi-colored purses with your favorite outfits, simply select a complementary handbag hue that will make your outfit pop for work or the weekend.', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/4.jpg', 363, NULL, '2023-03-05 04:00:14', '2023-03-05 04:00:14'),
(5, 'How to Care for Leather Bags', 'A leather bag is a special, near-universally beloved object, appreciated in equal measure by bon-vivants of both sexes, who cherish the supple hand, understated burnish and heady smell that can only emanate from premium quality skin.', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/5.jpg', 309, NULL, '2023-03-05 04:00:15', '2023-03-05 04:00:15'),
(6, 'We\'re Crushing Hard on Summer\'s 10 Biggest Bag Trends', 'Summer is just around the corner, and there\'s no easier way to amp up your new-season look than with a chic, new handbag. Whether you\'re wearing basic sweat shorts and a tank top or a pretty floral maxi dress, a bag is an effortless way to add interest to all your summer ensembles.', '<p>I have seen many people underestimating the power of their wallets. To them, they are just a functional item they use to carry. As a result, they often end up with the wallets which are not really suitable for them.</p>\n\n<p>You should pay more attention when you choose your wallets. There are a lot of them on the market with the different designs and styles. When you choose carefully, you would be able to buy a wallet that is catered to your needs. Not to mention that it will help to enhance your style significantly.</p>\n\n<p style=\"text-align:center\"><img alt=\"f4\" src=\"/storage/news/1.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<p><strong><em>For all of the reason above, here are 7 expert tips to help you pick up the right men&rsquo;s wallet for you:</em></strong></p>\n\n<h4><strong>Number 1: Choose A Neat Wallet</strong></h4>\n\n<p>The wallet is an essential accessory that you should go simple. Simplicity is the best in this case. A simple and neat wallet with the plain color and even&nbsp;<strong>minimalist style</strong>&nbsp;is versatile. It can be used for both formal and casual events. In addition, that wallet will go well with most of the clothes in your wardrobe.</p>\n\n<p>Keep in mind that a wallet will tell other people about your personality and your fashion sense as much as other clothes you put on. Hence, don&rsquo;t go cheesy on your wallet or else people will think that you have a funny and particular style.</p>\n\n<p style=\"text-align:center\"><img alt=\"f5\" src=\"/storage/news/2.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 2: Choose The Right Size For Your Wallet</strong></h4>\n\n<p>You should avoid having an over-sized wallet. Don&rsquo;t think that you need to buy a big wallet because you have a lot to carry with you. In addition, a fat wallet is very ugly. It will make it harder for you to slide the wallet into your trousers&rsquo; pocket. In addition, it will create a bulge and ruin your look.</p>\n\n<p>Before you go on to buy a new wallet, clean out your wallet and place all of the items from your wallet on a table. Throw away things that you would never need any more such as the old bills or the expired gift cards. Remember to check your wallet on a frequent basis to get rid of all of the old stuff that you don&rsquo;t need anymore.</p>\n\n<p style=\"text-align:center\"><img alt=\"f1\" src=\"/storage/news/3.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 3: Don&rsquo;t Limit Your Options Of Materials</strong></h4>\n\n<p>The types and designs of wallets are not the only things that you should consider when you go out searching for your best wallet. You have more than 1 option of material rather than leather to choose from as well.</p>\n\n<p>You can experiment with other available options such as cotton, polyester and canvas. They all have their own pros and cons. As a result, they will be suitable for different needs and requirements. You should think about them all in order to choose the material which you would like the most.</p>\n\n<p style=\"text-align:center\"><img alt=\"f6\" src=\"/storage/news/4.jpg\" /></p>\n\n<p><br />\n&nbsp;</p>\n\n<hr />\n<h4><strong>Number 4: Consider A Wallet As A Long Term Investment</strong></h4>\n\n<p>Your wallet is indeed an investment that you should consider spending a decent amount of time and effort on it. Another factor that you need to consider is how much you want to spend on your wallet. The price ranges of wallets on the market vary a great deal. You can find a wallet which is as cheap as about 5 to 7 dollars. On the other hand, you should expect to pay around 250 to 300 dollars for a high-quality wallet.</p>\n\n<p>In case you need a wallet to use for a long time, it is a good idea that you should invest a decent amount of money on a wallet. A high quality wallet from a reputational brand with the premium quality such as cowhide leather will last for a long time. In addition, it is an accessory to show off your fashion sense and your social status.</p>\n\n<p style=\"text-align:center\"><img alt=\"f2\" src=\"/storage/news/5.jpg\" /></p>\n\n<p>&nbsp;</p>\n', 'published', 1, 'Botble\\ACL\\Models\\User', 1, 'news/6.jpg', 221, NULL, '2023-03-05 04:00:16', '2023-03-05 04:00:16');

-- --------------------------------------------------------

--
-- Table structure for table `post_categories`
--

CREATE TABLE `post_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_categories`
--

INSERT INTO `post_categories` (`id`, `category_id`, `post_id`) VALUES
(1, 4, 1),
(2, 3, 2),
(3, 4, 3),
(4, 2, 4),
(5, 1, 5),
(6, 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `post_tags`
--

CREATE TABLE `post_tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_tags`
--

INSERT INTO `post_tags` (`id`, `tag_id`, `post_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 1, 2),
(7, 2, 2),
(8, 3, 2),
(9, 4, 2),
(10, 5, 2),
(11, 1, 3),
(12, 2, 3),
(13, 3, 3),
(14, 4, 3),
(15, 5, 3),
(16, 1, 4),
(17, 2, 4),
(18, 3, 4),
(19, 4, 4),
(20, 5, 4),
(21, 1, 5),
(22, 2, 5),
(23, 3, 5),
(24, 4, 5),
(25, 5, 5),
(26, 1, 6),
(27, 2, 6),
(28, 3, 6),
(29, 4, 6),
(30, 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `revisions`
--

CREATE TABLE `revisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `revisionable_type` varchar(191) NOT NULL,
  `revisionable_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `key` varchar(191) NOT NULL,
  `old_value` text DEFAULT NULL,
  `new_value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(120) NOT NULL,
  `name` varchar(120) NOT NULL,
  `permissions` text DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_default` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_users`
--

CREATE TABLE `role_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(191) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'theme', 'shopwise', NULL, NULL),
(2, 'activated_plugins', '[\"analytics\",\"audit-log\",\"backup\",\"blog\",\"captcha\",\"contact\",\"cookie-consent\",\"ecommerce\",\"mollie\",\"newsletter\",\"payment\",\"paystack\",\"razorpay\",\"simple-slider\",\"social-login\",\"sslcommerz\",\"testimonial\",\"translation\"]', NULL, NULL),
(5, 'permalink-botble-blog-models-post', 'news', NULL, NULL),
(6, 'permalink-botble-blog-models-category', 'news', NULL, NULL),
(7, 'permalink-botble-blog-models-tag', 'tags', NULL, NULL),
(8, 'payment_cod_status', '1', NULL, NULL),
(9, 'payment_cod_description', 'Please pay money directly to the postman, if you choose cash on delivery method (COD).', NULL, NULL),
(10, 'payment_bank_transfer_status', '1', NULL, NULL),
(11, 'payment_bank_transfer_description', 'Please send money to our bank account: ACB - 1990 404 19.', NULL, NULL),
(12, 'plugins_ecommerce_customer_new_order_status', '0', NULL, NULL),
(13, 'plugins_ecommerce_admin_new_order_status', '0', NULL, NULL),
(14, 'ecommerce_store_name', 'Shopwise', NULL, NULL),
(15, 'ecommerce_store_phone', '123-456-7890', NULL, NULL),
(16, 'ecommerce_store_address', '123 Street, Old Trafford', NULL, NULL),
(17, 'New York', 'Singapore', NULL, NULL),
(18, 'ecommerce_store_country', 'US', NULL, NULL),
(20, 'theme-shopwise-site_title', 'Shopwise - Laravel Ecommerce system', NULL, NULL),
(21, 'theme-shopwise-copyright', '© 2023 Botble Technologies. All Rights Reserved.', NULL, NULL),
(22, 'theme-shopwise-favicon', 'general/favicon.png', NULL, NULL),
(23, 'theme-shopwise-logo', 'general/logo.png', NULL, NULL),
(24, 'theme-shopwise-logo_footer', 'general/logo-light.png', NULL, NULL),
(25, 'theme-shopwise-address', '123 Street, Old Trafford, NewYork, USA', NULL, NULL),
(26, 'theme-shopwise-hotline', '123-456-7890', NULL, NULL),
(27, 'theme-shopwise-email', 'info@sitename.com', NULL, NULL),
(28, 'theme-shopwise-facebook', 'https://facebook.com', NULL, NULL),
(29, 'theme-shopwise-twitter', 'https://twitter.com', NULL, NULL),
(30, 'theme-shopwise-youtube', 'https://youtube.com', NULL, NULL),
(31, 'theme-shopwise-instagram', 'https://instagram.com', NULL, NULL),
(32, 'theme-shopwise-payment_methods', '[\"general\\/visa.png\",\"general\\/paypal.png\",\"general\\/master-card.png\",\"general\\/discover.png\",\"general\\/american-express.png\"]', NULL, NULL),
(33, 'theme-shopwise-newsletter_image', 'general/newsletter.jpg', NULL, NULL),
(34, 'theme-shopwise-homepage_id', '1', NULL, NULL),
(35, 'theme-shopwise-blog_page_id', '3', NULL, NULL),
(36, 'theme-shopwise-cookie_consent_message', 'Your experience on this site will be improved by allowing cookies ', NULL, NULL),
(37, 'theme-shopwise-cookie_consent_learn_more_url', 'http://localhost/realdriss/cookie-policy', NULL, NULL),
(38, 'theme-shopwise-cookie_consent_learn_more_text', 'Cookie Policy', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `simple_sliders`
--

CREATE TABLE `simple_sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `key` varchar(120) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `simple_sliders`
--

INSERT INTO `simple_sliders` (`id`, `name`, `key`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Home slider', 'home-slider', 'The main slider on homepage', 'published', '2023-03-05 04:00:24', '2023-03-05 04:00:24');

-- --------------------------------------------------------

--
-- Table structure for table `simple_slider_items`
--

CREATE TABLE `simple_slider_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `simple_slider_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `simple_slider_items`
--

INSERT INTO `simple_slider_items` (`id`, `simple_slider_id`, `title`, `image`, `link`, `description`, `order`, `created_at`, `updated_at`) VALUES
(1, 1, 'Woman Fashion', 'sliders/1.jpg', '/products', 'Get up to 50% off Today Only!', 1, '2023-03-05 04:00:24', '2023-03-05 04:00:24'),
(2, 1, 'Man Fashion', 'sliders/2.jpg', '/products', '50% off in all products', 2, '2023-03-05 04:00:24', '2023-03-05 04:00:24'),
(3, 1, 'Summer Sale', 'sliders/3.jpg', '/products', 'Taking your Viewing Experience to Next Level', 3, '2023-03-05 04:00:25', '2023-03-05 04:00:25');

-- --------------------------------------------------------

--
-- Table structure for table `slugs`
--

CREATE TABLE `slugs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(255) NOT NULL,
  `reference_id` int(10) UNSIGNED NOT NULL,
  `reference_type` varchar(255) NOT NULL,
  `prefix` varchar(120) DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slugs`
--

INSERT INTO `slugs` (`id`, `key`, `reference_id`, `reference_type`, `prefix`, `created_at`, `updated_at`) VALUES
(1, 'fashion-live', 1, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:49', '2023-03-05 03:56:49'),
(2, 'hand-crafted', 2, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(3, 'mestonix', 3, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(4, 'sunshine', 4, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(5, 'pure', 5, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(6, 'anfold', 6, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(7, 'automotive', 7, 'Botble\\Ecommerce\\Models\\Brand', 'brands', '2023-03-05 03:56:50', '2023-03-05 03:56:50'),
(8, 'television', 1, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:56:58', '2023-03-05 03:56:58'),
(9, 'mobile', 2, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(10, 'headphone', 3, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(11, 'watches', 4, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:56:59', '2023-03-05 03:56:59'),
(12, 'game', 5, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(13, 'camera', 6, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(14, 'audio', 7, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:00', '2023-03-05 03:57:00'),
(15, 'mobile-tablet', 8, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:01', '2023-03-05 03:57:01'),
(16, 'accessories', 9, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:02', '2023-03-05 03:57:02'),
(17, 'home-audio-theater', 10, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:02', '2023-03-05 03:57:02'),
(18, 'tv-smart-box', 11, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:03', '2023-03-05 03:57:03'),
(19, 'printer', 12, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:04', '2023-03-05 03:57:04'),
(20, 'computer', 13, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:05', '2023-03-05 03:57:05'),
(21, 'fax-machine', 14, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:06', '2023-03-05 03:57:06'),
(22, 'mouse', 15, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:07', '2023-03-05 03:57:07'),
(23, 'quia-eos-cum-nam-saepe', 16, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:07', '2023-03-05 03:57:07'),
(24, 'sed-et-est-ipsum-omnis', 17, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:07', '2023-03-05 03:57:07'),
(25, 'vero-aut-ut-sed', 18, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:08', '2023-03-05 03:57:08'),
(26, 'est-et-dolores-ut', 19, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:08', '2023-03-05 03:57:08'),
(27, 'saepe-a-non-enim-esse', 20, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:09', '2023-03-05 03:57:09'),
(28, 'minus-qui-at-cupiditate', 21, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:09', '2023-03-05 03:57:09'),
(29, 'deserunt-autem-sed-nam', 22, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:09', '2023-03-05 03:57:09'),
(30, 'expedita-id-aut-rerum', 23, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(31, 'odit-vero-eos-tempora', 24, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(32, 'molestiae-non-in-harum', 25, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:10', '2023-03-05 03:57:10'),
(33, 'eos-consequatur-id-et', 26, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(34, 'quis-ab-eveniet-vel-hic', 27, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(35, 'qui-iste-dolor-ex-est', 28, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(36, 'nisi-eos-soluta-id-odio', 29, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(37, 'ipsum-rerum-natus-in-et', 30, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:11', '2023-03-05 03:57:11'),
(38, 'sed-aut-provident-ex', 31, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(39, 'est-modi-et-esse', 32, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(40, 'ut-et-et-et-doloribus', 33, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(41, 'eum-molestiae-et-aut', 34, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(42, 'ipsum-neque-officia-ut', 35, 'Botble\\Ecommerce\\Models\\ProductCategory', 'product-categories', '2023-03-05 03:57:12', '2023-03-05 03:57:12'),
(43, 'smart-home-speaker', 1, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:15', '2023-03-05 03:58:15'),
(44, 'headphone-ultra-bass', 2, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:17', '2023-03-05 03:58:17'),
(45, 'boxed-bluetooth-headphone', 3, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:18', '2023-03-05 03:58:18'),
(46, 'chikie-bluetooth-speaker', 4, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:18', '2023-03-05 03:58:18'),
(47, 'camera-hikvision-hk-35vs8', 5, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:19', '2023-03-05 03:58:19'),
(48, 'camera-samsung-ss-24', 6, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:19', '2023-03-05 03:58:19'),
(49, 'leather-watch-band', 7, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:20', '2023-03-05 03:58:20'),
(50, 'apple-iphone-13-plus', 8, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:20', '2023-03-05 03:58:20'),
(51, 'macbook-pro-2015', 9, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:21', '2023-03-05 03:58:21'),
(52, 'macbook-air-12-inch', 10, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:22', '2023-03-05 03:58:22'),
(53, 'apple-watch-serial-7', 11, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:22', '2023-03-05 03:58:22'),
(54, 'macbook-pro-13-inch', 12, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:23', '2023-03-05 03:58:23'),
(55, 'apple-keyboard', 13, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:23', '2023-03-05 03:58:23'),
(56, 'macsafe-80w', 14, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:24', '2023-03-05 03:58:24'),
(57, 'hand-playstation', 15, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:25', '2023-03-05 03:58:25'),
(58, 'apple-airpods-serial-3', 16, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:25', '2023-03-05 03:58:25'),
(59, 'cool-smart-watches', 17, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:26', '2023-03-05 03:58:26'),
(60, 'black-smart-watches', 18, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:27', '2023-03-05 03:58:27'),
(61, 'leather-watch-band-serial-3', 19, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:27', '2023-03-05 03:58:27'),
(62, 'macbook-pro-2015-13-inch', 20, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:28', '2023-03-05 03:58:28'),
(63, 'historic-alarm-clock', 21, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:28', '2023-03-05 03:58:28'),
(64, 'black-glasses', 22, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:29', '2023-03-05 03:58:29'),
(65, 'phillips-mouse', 23, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:29', '2023-03-05 03:58:29'),
(66, 'gaming-keyboard', 24, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:30', '2023-03-05 03:58:30'),
(67, 'dual-camera-20mp', 25, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:31', '2023-03-05 03:58:31'),
(68, 'smart-watches', 26, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:32', '2023-03-05 03:58:32'),
(69, 'beat-headphone', 27, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:32', '2023-03-05 03:58:32'),
(70, 'red-black-headphone', 28, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:33', '2023-03-05 03:58:33'),
(71, 'audio-equipment', 29, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:33', '2023-03-05 03:58:33'),
(72, 'smart-televisions', 30, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:34', '2023-03-05 03:58:34'),
(73, 'samsung-smart-tv', 31, 'Botble\\Ecommerce\\Models\\Product', 'products', '2023-03-05 03:58:34', '2023-03-05 03:58:34'),
(74, 'electronic', 1, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(75, 'mobile', 2, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(76, 'iphone', 3, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(77, 'printer', 4, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(78, 'office', 5, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(79, 'it', 6, 'Botble\\Ecommerce\\Models\\ProductTag', 'product-tags', '2023-03-05 03:59:21', '2023-03-05 03:59:21'),
(80, 'general', 1, 'Botble\\Blog\\Models\\Tag', 'tags', '2023-03-05 04:00:09', '2023-03-05 04:00:30'),
(81, 'design', 2, 'Botble\\Blog\\Models\\Tag', 'tags', '2023-03-05 04:00:10', '2023-03-05 04:00:30'),
(82, 'jquery', 3, 'Botble\\Blog\\Models\\Tag', 'tags', '2023-03-05 04:00:10', '2023-03-05 04:00:30'),
(83, 'branding', 4, 'Botble\\Blog\\Models\\Tag', 'tags', '2023-03-05 04:00:11', '2023-03-05 04:00:30'),
(84, 'modern', 5, 'Botble\\Blog\\Models\\Tag', 'tags', '2023-03-05 04:00:11', '2023-03-05 04:00:30'),
(85, 'ecommerce', 1, 'Botble\\Blog\\Models\\Category', 'news', '2023-03-05 04:00:11', '2023-03-05 04:00:30'),
(86, 'fashion', 2, 'Botble\\Blog\\Models\\Category', 'news', '2023-03-05 04:00:11', '2023-03-05 04:00:30'),
(87, 'electronic', 3, 'Botble\\Blog\\Models\\Category', 'news', '2023-03-05 04:00:11', '2023-03-05 04:00:30'),
(88, 'commercial', 4, 'Botble\\Blog\\Models\\Category', 'news', '2023-03-05 04:00:12', '2023-03-05 04:00:30'),
(89, '4-expert-tips-on-how-to-choose-the-right-mens-wallet', 1, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:12', '2023-03-05 04:00:30'),
(90, 'sexy-clutches-how-to-buy-wear-a-designer-clutch-bag', 2, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:13', '2023-03-05 04:00:30'),
(91, 'the-top-2020-handbag-trends-to-know', 3, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:14', '2023-03-05 04:00:30'),
(92, 'how-to-match-the-color-of-your-handbag-with-an-outfit', 4, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:15', '2023-03-05 04:00:30'),
(93, 'how-to-care-for-leather-bags', 5, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:16', '2023-03-05 04:00:30'),
(94, 'were-crushing-hard-on-summers-10-biggest-bag-trends', 6, 'Botble\\Blog\\Models\\Post', 'news', '2023-03-05 04:00:16', '2023-03-05 04:00:30'),
(95, 'home', 1, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:26', '2023-03-05 04:00:26'),
(96, 'contact-us', 2, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:26', '2023-03-05 04:00:26'),
(97, 'blog', 3, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(98, 'about-us', 4, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(99, 'faq', 5, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:27', '2023-03-05 04:00:27'),
(100, 'location', 6, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:28', '2023-03-05 04:00:28'),
(101, 'affiliates', 7, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:28', '2023-03-05 04:00:28'),
(102, 'brands', 8, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:28', '2023-03-05 04:00:28'),
(103, 'cookie-policy', 9, 'Botble\\Page\\Models\\Page', '', '2023-03-05 04:00:28', '2023-03-05 04:00:28');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `stripe_id` varchar(191) NOT NULL,
  `stripe_status` varchar(191) NOT NULL,
  `stripe_price` varchar(191) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscription_items`
--

CREATE TABLE `subscription_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subscription_id` bigint(20) UNSIGNED NOT NULL,
  `stripe_id` varchar(191) NOT NULL,
  `stripe_product` varchar(191) NOT NULL,
  `stripe_price` varchar(191) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `author_id` int(11) NOT NULL,
  `author_type` varchar(255) NOT NULL DEFAULT 'Botble\\ACL\\Models\\User',
  `description` varchar(400) DEFAULT '',
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `author_id`, `author_type`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'General', 1, 'Botble\\ACL\\Models\\User', '', 'published', '2023-03-05 04:00:09', '2023-03-05 04:00:09'),
(2, 'Design', 1, 'Botble\\ACL\\Models\\User', '', 'published', '2023-03-05 04:00:10', '2023-03-05 04:00:10'),
(3, 'Jquery', 1, 'Botble\\ACL\\Models\\User', '', 'published', '2023-03-05 04:00:10', '2023-03-05 04:00:10'),
(4, 'Branding', 1, 'Botble\\ACL\\Models\\User', '', 'published', '2023-03-05 04:00:11', '2023-03-05 04:00:11'),
(5, 'Modern', 1, 'Botble\\ACL\\Models\\User', '', 'published', '2023-03-05 04:00:11', '2023-03-05 04:00:11');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `company` varchar(120) DEFAULT NULL,
  `status` varchar(60) NOT NULL DEFAULT 'published',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `content`, `image`, `company`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Donald H. Hilixer', 'Alice was more and more faintly came, carried on.', 'testimonials/1.jpg', 'Founder, Hilix', 'published', '2023-03-05 04:00:19', '2023-03-05 04:00:19'),
(2, 'Rosalina D. William', 'Alice very politely; but she did not like to be.', 'testimonials/2.jpg', 'Founder, qux co.', 'published', '2023-03-05 04:00:19', '2023-03-05 04:00:19'),
(3, 'John Becker', 'Beautiful, beautiful Soup! Beau--ootiful.', 'testimonials/3.jpg', 'CEO, Highlands coffee', 'published', '2023-03-05 04:00:20', '2023-03-05 04:00:20'),
(4, 'Browfish Dumble', 'After a while she remembered that she did so.', 'testimonials/4.jpg', 'Founder, Condo', 'published', '2023-03-05 04:00:20', '2023-03-05 04:00:20');

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `locale` varchar(191) NOT NULL,
  `group` varchar(191) NOT NULL,
  `key` varchar(191) NOT NULL,
  `value` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `first_name` varchar(191) DEFAULT NULL,
  `last_name` varchar(191) DEFAULT NULL,
  `username` varchar(60) DEFAULT NULL,
  `avatar_id` int(10) UNSIGNED DEFAULT NULL,
  `super_user` tinyint(1) NOT NULL DEFAULT 0,
  `manage_supers` tinyint(1) NOT NULL DEFAULT 0,
  `permissions` text DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `stripe_id` varchar(191) DEFAULT NULL,
  `pm_type` varchar(191) DEFAULT NULL,
  `pm_last_four` varchar(4) DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `first_name`, `last_name`, `username`, `avatar_id`, `super_user`, `manage_supers`, `permissions`, `last_login`, `stripe_id`, `pm_type`, `pm_last_four`, `trial_ends_at`) VALUES
(1, 'admin@realdriss.com', NULL, '$2y$10$7siwwX8a3JlWo7TnGJ6fMOR0HKrgW3R9iPdwGqBJIVH9rqjYhyoZq', 'j5AdwAHtvCPeSJ75n87fslQ2GqPqvW2vBznCQugMPJ5lXeyiyxufFZbx0mqG', '2023-03-05 04:00:29', '2023-03-05 04:08:43', 'System', 'Admin', 'admin', NULL, 1, 1, NULL, '2023-03-05 04:08:43', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_meta`
--

CREATE TABLE `user_meta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(191) DEFAULT NULL,
  `value` varchar(191) DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(191) NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `widgets`
--

CREATE TABLE `widgets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `widget_id` varchar(120) NOT NULL,
  `sidebar_id` varchar(120) NOT NULL,
  `theme` varchar(120) NOT NULL,
  `position` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `data` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `widgets`
--

INSERT INTO `widgets` (`id`, `widget_id`, `sidebar_id`, `theme`, `position`, `data`, `created_at`, `updated_at`) VALUES
(1, 'CustomMenuWidget', 'footer_sidebar', 'shopwise', 1, '{\"id\":\"CustomMenuWidget\",\"name\":\"Useful Links\",\"menu_id\":\"useful-links\"}', '2023-03-05 04:00:38', '2023-03-05 04:00:38'),
(2, 'CustomMenuWidget', 'footer_sidebar', 'shopwise', 2, '{\"id\":\"CustomMenuWidget\",\"name\":\"Categories\",\"menu_id\":\"categories\"}', '2023-03-05 04:00:38', '2023-03-05 04:00:38'),
(3, 'CustomMenuWidget', 'footer_sidebar', 'shopwise', 3, '{\"id\":\"CustomMenuWidget\",\"name\":\"My Account\",\"menu_id\":\"my-account\"}', '2023-03-05 04:00:38', '2023-03-05 04:00:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activations`
--
ALTER TABLE `activations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activations_user_id_index` (`user_id`);

--
-- Indexes for table `audit_histories`
--
ALTER TABLE `audit_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audit_histories_user_id_index` (`user_id`),
  ADD KEY `audit_histories_module_index` (`module`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_replies`
--
ALTER TABLE `contact_replies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dashboard_widgets`
--
ALTER TABLE `dashboard_widgets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dashboard_widget_settings`
--
ALTER TABLE `dashboard_widget_settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dashboard_widget_settings_user_id_index` (`user_id`),
  ADD KEY `dashboard_widget_settings_widget_id_index` (`widget_id`);

--
-- Indexes for table `ec_brands`
--
ALTER TABLE `ec_brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_brands_translations`
--
ALTER TABLE `ec_brands_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_brands_id`);

--
-- Indexes for table `ec_cart`
--
ALTER TABLE `ec_cart`
  ADD PRIMARY KEY (`identifier`,`instance`);

--
-- Indexes for table `ec_currencies`
--
ALTER TABLE `ec_currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_customers`
--
ALTER TABLE `ec_customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ec_customers_email_unique` (`email`);

--
-- Indexes for table `ec_customer_addresses`
--
ALTER TABLE `ec_customer_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_customer_password_resets`
--
ALTER TABLE `ec_customer_password_resets`
  ADD KEY `ec_customer_password_resets_email_index` (`email`),
  ADD KEY `ec_customer_password_resets_token_index` (`token`);

--
-- Indexes for table `ec_discounts`
--
ALTER TABLE `ec_discounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ec_discounts_code_unique` (`code`);

--
-- Indexes for table `ec_discount_customers`
--
ALTER TABLE `ec_discount_customers`
  ADD PRIMARY KEY (`discount_id`,`customer_id`);

--
-- Indexes for table `ec_discount_products`
--
ALTER TABLE `ec_discount_products`
  ADD PRIMARY KEY (`discount_id`,`product_id`);

--
-- Indexes for table `ec_discount_product_collections`
--
ALTER TABLE `ec_discount_product_collections`
  ADD PRIMARY KEY (`discount_id`,`product_collection_id`);

--
-- Indexes for table `ec_flash_sales`
--
ALTER TABLE `ec_flash_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_flash_sales_translations`
--
ALTER TABLE `ec_flash_sales_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_flash_sales_id`);

--
-- Indexes for table `ec_grouped_products`
--
ALTER TABLE `ec_grouped_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_orders`
--
ALTER TABLE `ec_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_order_addresses`
--
ALTER TABLE `ec_order_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_order_histories`
--
ALTER TABLE `ec_order_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_order_product`
--
ALTER TABLE `ec_order_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_products`
--
ALTER TABLE `ec_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_products_translations`
--
ALTER TABLE `ec_products_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_products_id`);

--
-- Indexes for table `ec_product_attributes`
--
ALTER TABLE `ec_product_attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_attributes_translations`
--
ALTER TABLE `ec_product_attributes_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_product_attributes_id`);

--
-- Indexes for table `ec_product_attribute_sets`
--
ALTER TABLE `ec_product_attribute_sets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_attribute_sets_translations`
--
ALTER TABLE `ec_product_attribute_sets_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_product_attribute_sets_id`);

--
-- Indexes for table `ec_product_categories`
--
ALTER TABLE `ec_product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_categories_translations`
--
ALTER TABLE `ec_product_categories_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_product_categories_id`);

--
-- Indexes for table `ec_product_category_product`
--
ALTER TABLE `ec_product_category_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ec_product_category_product_category_id_index` (`category_id`),
  ADD KEY `ec_product_category_product_product_id_index` (`product_id`);

--
-- Indexes for table `ec_product_collections`
--
ALTER TABLE `ec_product_collections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_collections_translations`
--
ALTER TABLE `ec_product_collections_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_product_collections_id`);

--
-- Indexes for table `ec_product_collection_products`
--
ALTER TABLE `ec_product_collection_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ec_product_collection_products_product_collection_id_index` (`product_collection_id`),
  ADD KEY `ec_product_collection_products_product_id_index` (`product_id`);

--
-- Indexes for table `ec_product_cross_sale_relations`
--
ALTER TABLE `ec_product_cross_sale_relations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ec_product_cross_sale_relations_from_product_id_index` (`from_product_id`),
  ADD KEY `ec_product_cross_sale_relations_to_product_id_index` (`to_product_id`);

--
-- Indexes for table `ec_product_labels`
--
ALTER TABLE `ec_product_labels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_labels_translations`
--
ALTER TABLE `ec_product_labels_translations`
  ADD PRIMARY KEY (`lang_code`,`ec_product_labels_id`);

--
-- Indexes for table `ec_product_label_products`
--
ALTER TABLE `ec_product_label_products`
  ADD PRIMARY KEY (`product_label_id`,`product_id`),
  ADD KEY `ec_product_label_products_product_label_id_index` (`product_label_id`),
  ADD KEY `ec_product_label_products_product_id_index` (`product_id`);

--
-- Indexes for table `ec_product_related_relations`
--
ALTER TABLE `ec_product_related_relations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ec_product_related_relations_from_product_id_index` (`from_product_id`),
  ADD KEY `ec_product_related_relations_to_product_id_index` (`to_product_id`);

--
-- Indexes for table `ec_product_tags`
--
ALTER TABLE `ec_product_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_tag_product`
--
ALTER TABLE `ec_product_tag_product`
  ADD PRIMARY KEY (`product_id`,`tag_id`),
  ADD KEY `ec_product_tag_product_product_id_index` (`product_id`),
  ADD KEY `ec_product_tag_product_tag_id_index` (`tag_id`);

--
-- Indexes for table `ec_product_up_sale_relations`
--
ALTER TABLE `ec_product_up_sale_relations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ec_product_up_sale_relations_from_product_id_index` (`from_product_id`),
  ADD KEY `ec_product_up_sale_relations_to_product_id_index` (`to_product_id`);

--
-- Indexes for table `ec_product_variations`
--
ALTER TABLE `ec_product_variations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_variation_items`
--
ALTER TABLE `ec_product_variation_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_with_attribute`
--
ALTER TABLE `ec_product_with_attribute`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_product_with_attribute_set`
--
ALTER TABLE `ec_product_with_attribute_set`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_reviews`
--
ALTER TABLE `ec_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_shipments`
--
ALTER TABLE `ec_shipments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_shipment_histories`
--
ALTER TABLE `ec_shipment_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_shipping`
--
ALTER TABLE `ec_shipping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_shipping_rules`
--
ALTER TABLE `ec_shipping_rules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_shipping_rule_items`
--
ALTER TABLE `ec_shipping_rule_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_store_locators`
--
ALTER TABLE `ec_store_locators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_taxes`
--
ALTER TABLE `ec_taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ec_wish_lists`
--
ALTER TABLE `ec_wish_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `media_files`
--
ALTER TABLE `media_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `media_files_user_id_index` (`user_id`);

--
-- Indexes for table `media_folders`
--
ALTER TABLE `media_folders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `media_folders_user_id_index` (`user_id`);

--
-- Indexes for table `media_settings`
--
ALTER TABLE `media_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_slug_unique` (`slug`);

--
-- Indexes for table `menu_locations`
--
ALTER TABLE `menu_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_nodes`
--
ALTER TABLE `menu_nodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_nodes_menu_id_index` (`menu_id`),
  ADD KEY `menu_nodes_parent_id_index` (`parent_id`);

--
-- Indexes for table `meta_boxes`
--
ALTER TABLE `meta_boxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meta_boxes_reference_id_index` (`reference_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_categories`
--
ALTER TABLE `post_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `revisions`
--
ALTER TABLE `revisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `revisions_revisionable_id_revisionable_type_index` (`revisionable_id`,`revisionable_type`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_slug_unique` (`slug`),
  ADD KEY `roles_created_by_index` (`created_by`),
  ADD KEY `roles_updated_by_index` (`updated_by`);

--
-- Indexes for table `role_users`
--
ALTER TABLE `role_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_users_user_id_index` (`user_id`),
  ADD KEY `role_users_role_id_index` (`role_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Indexes for table `simple_sliders`
--
ALTER TABLE `simple_sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `simple_slider_items`
--
ALTER TABLE `simple_slider_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slugs`
--
ALTER TABLE `slugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscriptions_user_id_stripe_status_index` (`user_id`,`stripe_status`);

--
-- Indexes for table `subscription_items`
--
ALTER TABLE `subscription_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subscription_items_subscription_id_stripe_price_unique` (`subscription_id`,`stripe_price`),
  ADD KEY `subscription_items_stripe_id_index` (`stripe_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD KEY `users_stripe_id_index` (`stripe_id`);

--
-- Indexes for table `user_meta`
--
ALTER TABLE `user_meta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_meta_user_id_index` (`user_id`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `widgets`
--
ALTER TABLE `widgets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activations`
--
ALTER TABLE `activations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `audit_histories`
--
ALTER TABLE `audit_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_replies`
--
ALTER TABLE `contact_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dashboard_widgets`
--
ALTER TABLE `dashboard_widgets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `dashboard_widget_settings`
--
ALTER TABLE `dashboard_widget_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_brands`
--
ALTER TABLE `ec_brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ec_currencies`
--
ALTER TABLE `ec_currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ec_customers`
--
ALTER TABLE `ec_customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ec_customer_addresses`
--
ALTER TABLE `ec_customer_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `ec_discounts`
--
ALTER TABLE `ec_discounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_flash_sales`
--
ALTER TABLE `ec_flash_sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ec_grouped_products`
--
ALTER TABLE `ec_grouped_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_orders`
--
ALTER TABLE `ec_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `ec_order_addresses`
--
ALTER TABLE `ec_order_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `ec_order_histories`
--
ALTER TABLE `ec_order_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `ec_order_product`
--
ALTER TABLE `ec_order_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `ec_products`
--
ALTER TABLE `ec_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `ec_product_attributes`
--
ALTER TABLE `ec_product_attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ec_product_attribute_sets`
--
ALTER TABLE `ec_product_attribute_sets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ec_product_categories`
--
ALTER TABLE `ec_product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `ec_product_category_product`
--
ALTER TABLE `ec_product_category_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `ec_product_collections`
--
ALTER TABLE `ec_product_collections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ec_product_collection_products`
--
ALTER TABLE `ec_product_collection_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `ec_product_cross_sale_relations`
--
ALTER TABLE `ec_product_cross_sale_relations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `ec_product_labels`
--
ALTER TABLE `ec_product_labels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ec_product_related_relations`
--
ALTER TABLE `ec_product_related_relations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_product_tags`
--
ALTER TABLE `ec_product_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ec_product_up_sale_relations`
--
ALTER TABLE `ec_product_up_sale_relations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_product_variations`
--
ALTER TABLE `ec_product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `ec_product_variation_items`
--
ALTER TABLE `ec_product_variation_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `ec_product_with_attribute`
--
ALTER TABLE `ec_product_with_attribute`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `ec_product_with_attribute_set`
--
ALTER TABLE `ec_product_with_attribute_set`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `ec_reviews`
--
ALTER TABLE `ec_reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `ec_shipments`
--
ALTER TABLE `ec_shipments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `ec_shipment_histories`
--
ALTER TABLE `ec_shipment_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `ec_shipping`
--
ALTER TABLE `ec_shipping`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ec_shipping_rules`
--
ALTER TABLE `ec_shipping_rules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ec_shipping_rule_items`
--
ALTER TABLE `ec_shipping_rule_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ec_store_locators`
--
ALTER TABLE `ec_store_locators`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ec_taxes`
--
ALTER TABLE `ec_taxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ec_wish_lists`
--
ALTER TABLE `ec_wish_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media_files`
--
ALTER TABLE `media_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `media_folders`
--
ALTER TABLE `media_folders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `media_settings`
--
ALTER TABLE `media_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu_locations`
--
ALTER TABLE `menu_locations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menu_nodes`
--
ALTER TABLE `menu_nodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `meta_boxes`
--
ALTER TABLE `meta_boxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post_categories`
--
ALTER TABLE `post_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post_tags`
--
ALTER TABLE `post_tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `revisions`
--
ALTER TABLE `revisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role_users`
--
ALTER TABLE `role_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `simple_sliders`
--
ALTER TABLE `simple_sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `simple_slider_items`
--
ALTER TABLE `simple_slider_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `slugs`
--
ALTER TABLE `slugs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscription_items`
--
ALTER TABLE `subscription_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_meta`
--
ALTER TABLE `user_meta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `widgets`
--
ALTER TABLE `widgets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
