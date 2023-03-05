const inquirer =require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generatHTML.js");

const questions = [

{
    type: "input",
    name: "name",
    message: "What is your name?",
},
{
    type: "input",
    name: "id",
    message: "What is your ID?",
},
{
    type: "input",
    name: "email",
    message: "What is your email?",
},


];

