// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//arrow function to validate response
const validateInput = (nameInput) => nameInput ? true : (console.log("Please enter a value"), false);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: validateInput,
      },
      {
        type: 'input',
        message: 'What is the name of your Project?',
        name: 'projectTitle',
        validate: validateInput,
      },
      {
        type: 'input',
        message: 'What was your motivation?',
        name: 'description1',
        validate: validateInput,
      },
      {
          type: 'input',
          message: 'Why did you build this project?',
          name: 'description2',
          validate: validateInput,
      },
      {
          type: 'input',
          message: 'What problem does it solve?',
          name: 'description3',
          validate: validateInput,
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        validate: validateInput,
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
        validate: validateInput,
    },
    {
        type: 'input',
        message: 'List any collaborators, third-party assets that require attribution, or tutorials that you followed.',
        name: 'credits',
        validate: validateInput,
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
      validate: validateInput,
  },
  {
      type: 'list',
      message: 'Choose a software license for this project',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL v3', 'ISC', 'None'],
      validate: validateInput,
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => 
    err ? console.error(err) : console.log('You made a README!')
)};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

//console logs input
    .then((data) => {
        writeToFile('yourREADME.md', data);
        console.log(data);
    });
    
}

// Function call to initialize app
init();
