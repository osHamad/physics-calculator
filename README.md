# Physics Calculator

I had a physics course during the first semester of grade 11. I enjoyed the course and I personally thought it was much easier than what people made it out to be. My only problem was finding all the correct physics formulas. I did not find one website with all the formulas we learned about in class; and if there was, they were not solved for the variable I wanted. I made this program to make it easier to find physics formulas for high school physics and to save time calculating answers.

## Table of Content

* [Introduction](#introduction)
* [Requirements](#requirements)
  * [Dependencies](#dependencies)
* [Install](#install)
* [Usage](#usage)
* [License](#license)

## Introduction

Physics Calculator is a web application that aims to make high school physics easier. The application is split into several units, each unit with its own variable solvers. For example, if someone wishes to calculate acceleration, they must go to the Kenimatics unit, select acceleration and plug in their given values. The website will then return the answer, with the formula used to get such an answer. The website is a full stack application, created with JavaScript, ejs (embedded JavaScript), css and Node.js.

## Requirements

`Node.js` is required for this application. To install Node.js, visit their [website](https://nodejs.org/en/)

### Dependencies

* `express` ^4.17.1
* `nodemon` ^2.0.14 (if you wish to run with [nodemon](https://nodemon.io/)

## Install

Using command line, do the following:

Run `git clone https://github.com/osHamad/physics-calculator.git`

Run `npm install express nodemon` or `npm install express` if you do not want nodemon

## Usage

To run the website locally, do the following:

For running with nodemon: Run `npm run start` in command line

For running without nodemon: Run `node server.js`

On your browser, search `http://localhost:8000`

you should be able to view the website

## License

This program is under the [MIT Liscense](/../master/LICENSE)
