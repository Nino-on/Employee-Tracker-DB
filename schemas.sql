--CREATE DATABASE
CREATE DATABASE EMPLOYEE_TRACKER_DB;

--CREATE TABLES FOR EMPLOYEE
CREATE TABLE IF NOT EXISTS `EMPLOYEE` (
  `ID` INT  AUTO_INCREMENT,
  `FIRST_NAME` VARCHAR(30) NULL,
  `LAST_NAME` VARCHAR(30) NULL,
  `ROLE_ID` INT NULL,
  `MANAGER_ID` INT NOT NULL,
  PRIMARY KEY (`ID`))

--CREATE TABLES FOR ROLE
CREATE TABLE IF NOT EXISTS `ROLE` (
  `ID` INT  AUTO_INCREMENT,
  `TITLE` VARCHAR(30) NOT NULL,
  `SALARY` DECIMAL(10,4) NULL,
  `DEPARTMENT_ID` INT NULL,
  `EMPLOYEE_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_ROLE_EMPLOYEE1_idx` (`EMPLOYEE_ID` ASC),
  CONSTRAINT `fk_ROLE_EMPLOYEE1`
    FOREIGN KEY (`EMPLOYEE_ID`)
    REFERENCES `EMPLOYEE_TRACKER_DB`.`EMPLOYEE` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

--CREATE TABLES FOR DEPARTMENT
CREATE TABLE IF NOT EXISTS `DEPARTMENT` (
  `ID` INT  AUTO_INCREMENT,
  `NAME` VARCHAR(30) NULL,
  `ROLE_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_DEPARTMENT_ROLE_idx` (`ROLE_ID` ASC),
  CONSTRAINT `fk_DEPARTMENT_ROLE`
    FOREIGN KEY (`ROLE_ID`)
    REFERENCES `EMPLOYEE_TRACKER_DB`.`ROLE` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

