// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        //validate uses ternary operator if statement to see if input is true
        validate: (nameInput) =>
          nameInput ? true : (console.log("Please enter a value"), false),
      },
      {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'projectTitle',
        validate: (nameInput) =>
          nameInput ? true : (console.log("Please enter a value"), false),
      },
      {
        type: 'input',
        message: 'What was your motivation?',
        name: 'description1',
        validate: (nameInput) =>
          nameInput ? true : (console.log("Please enter a value"), false),
      },
      {
          type: 'input',
          message: 'Why did you build this project?',
          name: 'description2',
          validate: (nameInput) =>
          nameInput ? true : (console.log("Please enter a value"), false),
      },
      {
          type: 'input',
          message: 'What problem does it solve?',
          name: 'description3',
          validate: (nameInput) =>
          nameInput ? true : (console.log("Please enter a value"), false),
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {/////keep editing here
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
        validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
        type: 'input',
        message: 'List any collaborators, third-party assets that require attribution, or tutorials that you followed.',
        name: 'credits',
        validate: (nameInput) =>
        nameInput ? true : (console.log("Please enter a value"), false),
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
      validate: (nameInput) =>
      nameInput ? true : (console.log("Please enter a value"), false),
  },
  {
      type: 'list',
      message: 'Choose a software license for this project',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL v3', 'ISC', 'None'],
      validate: (nameInput) =>
      nameInput ? true : (console.log("Please enter a value"), false),
  },

];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

//console logs input
    .then((data) => {
        console.log(data)
    });
    
}

// Function call to initialize app
init();
