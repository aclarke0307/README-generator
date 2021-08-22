// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path =require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github",
    message: "What is your github name?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "title",
    message: "What is the name of project?"
},
{
    type: "input",
    name: "description",
    message: "Describe project",
},
{
    type:"input",
    name: "installation",
    message: "directions for installation"
},
{
   type: "input",
   name: "usage",
   message: "provide examples, include screenshots"
},
{
    type: "list",
    name: "license",
    message:"Would you like to include a license?",
    choices:["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "none"]
},
{
    type: "input",
    name: "contributing",
    message: "list github username"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writefilesyne(path.join(process.cwd(), fileName), date);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
