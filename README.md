# Homework Assignment - 10 Object-Oriented Programming: Team Profile Generator
![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

## Table of Contents
[Description](#description)

[Key Features](#key-features)

[License](#license)

[Walkthrough Video](#walkthrough-video)

[Screenshots](#screenshots)

## Description
The focus of this homework assignment for the University of Toronto SCS Coding Boot Camp was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Unit tests were written for the code.

## Key Features
- Inquirer package available from [npm](https://www.npmjs.com/) allows for the command line prompts and user responses to be captured.
- Built in file system module from Node.js is used to create and write to a file, i.e. index.html.
- Jest was used for running unit tests and there is a test for each class (Employee, Manager, Engineer and Intern).
- Classes, subclasses and constructors were used to establish staff directory.
- Bootstrap is used to help create a responsive website that includes the employee cards, styling, etc.
- The HTML file created is based on user input from the command line prompts (e.g., the number of employee cards generated and content within each of them)
- Cards include clickable links to send an email to each employee and visit GitHub profile pages of engineers based on their GitHub profile name entered at the command-line

## Walkthrough Video
The following video demonstrates the application's functionality.
- [Video](https://drive.google.com/file/d/1JCvYMxQTvYCziFAN49bMik9SZs_j8stu/view?usp=sharing)

## License
This product is under the MIT License.

## Screenshots
The images below show aspects of the application including the jest test results, prompts at the command line for the user and a sample HTML file.

![Screenshot of individual jest test results.](./assets/images/team-profile-generator-screenshot-01.png)

![Screenshot of jest test results when all run at once.](./assets/images/team-profile-generator-screenshot-02.png)

![Screenshot of the command line where user is responding to prompts provided.](./assets/images/team-profile-generator-screenshot-03.png)

![Screenshot of a sample HTML file generate by the application with cards for employees.](./assets/images/team-profile-generator-screenshot-04.png)

![Screenshot of a sample HTML file generate by the application with cards for employees demostrating responsive website.](./assets/images/team-profile-generator-screenshot-05.png)
