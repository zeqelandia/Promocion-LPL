-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2018 a las 02:33:21
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `promocion`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id_compra` int(10) NOT NULL,
  `id_viaje` bigint(20) NOT NULL,
  `dni_usuario` int(8) NOT NULL,
  `tipo_tarifa` int(1) NOT NULL,
  `valor_pagado` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id_compra`, `id_viaje`, `dni_usuario`, `tipo_tarifa`, `valor_pagado`) VALUES
(71, 22, 38517186, 4, 3000),
(72, 23, 38517186, 4, 3000),
(73, 24, 38517186, 4, 1750),
(74, 24, 38517186, 4, 1750),
(75, 25, 38517186, 1, 700),
(76, 26, 38517186, 4, 1750),
(77, 26, 38517186, 4, 1750),
(78, 26, 38517186, 4, 1750),
(79, 26, 38517186, 1, 700),
(80, 25, 38517186, 4, 1750),
(81, 27, 38517186, 4, 3000),
(82, 27, 38517186, 4, 3000),
(83, 23, 38517186, 4, 3000),
(84, 23, 38517186, 4, 3000),
(85, 28, 38517186, 4, 1500),
(86, 29, 38517186, 4, 625),
(87, 29, 38517186, 4, 625),
(88, 30, 38517186, 4, 1750),
(89, 25, 38517186, 4, 1750),
(90, 25, 38517186, 4, 1750),
(91, 31, 38517186, 4, 1750),
(92, 31, 38517186, 4, 1750),
(93, 31, 38517186, 4, 1750),
(94, 31, 38517186, 1, 700),
(95, 25, 38517186, 1, 700),
(96, 32, 38517186, 1, 700),
(97, 23, 38517186, 1, 1200),
(98, 32, 38517186, 1, 700),
(99, 24, 38517186, 1, 700),
(100, 32, 58547856, 1, 700),
(101, 25, 58547856, 1, 700),
(102, 25, 54145875, 1, 700),
(103, 23, 38517186, 1, 1200),
(104, 24, 38517186, 1, 700),
(105, 33, 38517186, 2, 75);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `disponibilidad`
--

CREATE TABLE `disponibilidad` (
  `id_disponibilidad` bigint(20) UNSIGNED NOT NULL,
  `id_viaje` bigint(20) NOT NULL,
  `nro_asiento` int(2) NOT NULL,
  `disponible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_tarifa`
--

CREATE TABLE `tipo_tarifa` (
  `id_tarifa` int(1) NOT NULL,
  `tipo_tarifa` varchar(12) COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_tarifa`
--

INSERT INTO `tipo_tarifa` (`id_tarifa`, `tipo_tarifa`) VALUES
(1, 'normal'),
(2, 'promocional'),
(3, 'ejecutiva'),
(4, 'frecuente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `dni` int(8) NOT NULL,
  `apellidos` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `nombres` varchar(70) COLLATE latin1_spanish_ci NOT NULL,
  `telefono` varchar(10) COLLATE latin1_spanish_ci NOT NULL,
  `mail` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `pasajero_frecuente` tinyint(1) NOT NULL,
  `nombre_usuario` varchar(16) COLLATE latin1_spanish_ci NOT NULL,
  `contrasenia` varchar(64) COLLATE latin1_spanish_ci NOT NULL,
  `puntos` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`dni`, `apellidos`, `nombres`, `telefono`, `mail`, `pasajero_frecuente`, `nombre_usuario`, `contrasenia`, `puntos`) VALUES
(38517186, 'SILVESTRE', 'EZEQUIEL MAXIMILIANO', '555', 'ZEQE@GMAIL.COM', 1, 'ZEQELANDIA', 'gnzLDuqKcGxMNKFokfhOew', 179),
(39203612, 'URIGO', 'BRANDON', '2974920467', 'BRANDONURIGO@GMAIL.COM', 0, 'ADMIN', 'ISMvKXpXpadDiUoOSoAfww', 175),
(54145875, 'COCOCHO', 'DRUGSTORE', '2975487595', 'COCOCHO@DRUGSTORE.COM', 1, 'COCOCHO', 'gnzLDuqKcGxMNKFokfhOew', 175),
(58547856, 'JOTA JOTA', 'LOPEZ', '2975418574', 'JOTAJOTA@LOPEZ.COM', 1, 'JOTA', 'xaGphkmnh03g3vCT6xNiYg', 175);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `id_viaje` bigint(20) UNSIGNED NOT NULL,
  `origen` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `destino` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `asientos_normales_disponibles` int(2) NOT NULL DEFAULT '28',
  `asientos_vip_disponibles` int(2) NOT NULL DEFAULT '12',
  `asientos_promocionales_disponibles` int(11) DEFAULT '20'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`id_viaje`, `origen`, `destino`, `fecha`, `hora`, `asientos_normales_disponibles`, `asientos_vip_disponibles`, `asientos_promocionales_disponibles`) VALUES
(22, 'Cordoba', 'Buenos Aires', '2018-07-25', '21:00:00', 28, 12, 20),
(23, 'Buenos Aires', 'Cordoba', '2018-07-31', '22:00:00', 26, 12, 20),
(24, 'Buenos Aires', 'Rosario', '2018-07-31', '20:30:00', 26, 12, 20),
(25, 'Rosario', 'Buenos Aires', '2018-07-31', '07:30:00', 25, 12, 20),
(26, 'Rosario', 'Buenos Aires', '2018-07-30', '07:30:00', 27, 12, 20),
(27, 'Buenos Aires', 'Cordoba', '2018-07-24', '22:00:00', 28, 12, 20),
(28, 'Mar Del Plata', 'Buenos Aires', '2018-07-25', '11:00:00', 28, 12, 20),
(29, 'Cordoba', 'Rio Cuarto', '2018-07-31', '07:00:00', 28, 12, 20),
(30, 'Rosario', 'Buenos Aires', '0000-00-00', '16:00:00', 28, 12, 20),
(31, 'Rosario', 'Buenos Aires', '2018-07-31', '16:00:00', 27, 12, 20),
(32, 'Buenos Aires', 'Rosario', '2018-07-31', '06:00:00', 26, 12, 20),
(33, 'Cordoba', 'Rio Cuarto', '2018-07-30', '13:00:00', 28, 12, 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_compra`);

--
-- Indices de la tabla `disponibilidad`
--
ALTER TABLE `disponibilidad`
  ADD PRIMARY KEY (`id_disponibilidad`),
  ADD UNIQUE KEY `id_disponibilidad` (`id_disponibilidad`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD PRIMARY KEY (`id_viaje`),
  ADD UNIQUE KEY `id_viaje` (`id_viaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
--
-- AUTO_INCREMENT de la tabla `disponibilidad`
--
ALTER TABLE `disponibilidad`
  MODIFY `id_disponibilidad` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `viajes`
--
ALTER TABLE `viajes`
  MODIFY `id_viaje` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
