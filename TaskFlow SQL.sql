CREATE DATABASE TaskFlow;

USE TaskFlow;

CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `role` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`role` varchar(255) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `Tasks` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`title` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`user_id` int,
	`due_date` date NOT NULL,
	`priority_id` int NOT NULL,
	`status_id` int NOT NULL,
	`quadro_id` int NOT NULL,
	`created_at` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `status` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`status` varchar(255) NOT NULL,
	`quadro_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `priority` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`priority` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `quadro` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`title` varchar(255) NOT NULL,
	`create_at` datetime NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users_quadro` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`user_id` int NOT NULL,
	`role_id` int NOT NULL,
	`quadro_id` int NOT NULL,
	PRIMARY KEY (`id`)
);



ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk3` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk5` FOREIGN KEY (`priority_id`) REFERENCES `priority`(`id`);

ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk6` FOREIGN KEY (`status_id`) REFERENCES `status`(`id`);

ALTER TABLE `Tasks` ADD CONSTRAINT `Tasks_fk7` FOREIGN KEY (`quadro_id`) REFERENCES `quadro`(`id`);
ALTER TABLE `status` ADD CONSTRAINT `status_fk2` FOREIGN KEY (`quadro_id`) REFERENCES `quadro`(`id`);


ALTER TABLE `users_quadro` ADD CONSTRAINT `users_quadro_fk1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `users_quadro` ADD CONSTRAINT `users_quadro_fk2` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`);

ALTER TABLE `users_quadro` ADD CONSTRAINT `users_quadro_fk3` FOREIGN KEY (`quadro_id`) REFERENCES `quadro`(`id`);