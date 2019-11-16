-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-11-04 03:37:29
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music`
--

-- --------------------------------------------------------

--
-- 表的结构 `music_user`
--

CREATE TABLE `music_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `music_user`
--

INSERT INTO `music_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `user_name`, `gender`) VALUES
(1, 'hanxu', '123456', 'hanxu@qq.com', '13501234567', '韩旭', 0),
(2, 'hanyang', '123456', 'hanyang@qq.com', '13501234568', '韩阳', 0),
(3, 'jinmozhu', '123456', 'jinmozhu@qq.com', '13501234569', '金墨竹', 0),
(4, 'liubei', '123456', 'liubei@qq.com', '13501234560', '刘备', 1),
(5, 'guanyu', '123456', 'guanyu@qq.com', '23501234567', '关羽', 1),
(6, 'zhangfei', '123456', 'zhangfei@qq.com', '23501234568', '张飞', 1),
(7, 'lvbu', '123456', 'lvbu@qq.com', '23501234569', '吕布', 1),
(8, 'zhaoyun', '123456', 'zhaoyun@qq.com', '23501234560', '赵云', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `music_user`
--
ALTER TABLE `music_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `music_user`
--
ALTER TABLE `music_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
