// switch(operation) {
//   case 'sum':
//       console.log(maths.sum(numOne, numTwo));
//       break;
//   case 'difference':
//       console.log(maths.difference(numOne, numTwo));
//       break;
//   case 'product':
//       console.log(maths.product(numOne, numTwo));
//       break;
//   case 'quotient':
//       console.log(maths.quotient(numOne, numTwo));
//       break;
//   default:
//       console.log("Check your math!");
// }

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      badge = '![badge](https://img.shields.io/badge/License-MIT-yellow)\n';
      break;
      case 'Apache 2.0':
      badge = '![badge](https://img.shields.io/badge/License-Apache_2.0-red)\n';
      break;
      case 'GPL v3':
      badge = '![badge](https://img.shields.io/badge/License-GPLv3-green)\n';
      break;
      case 'ISC':
      badge = '![badge](https://img.shields.io/badge/License-ISC-lightgreen)\n';
      break;
      case 'None':
      badge = ' ';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.projectTitle}

## Description
${data.description1}
${data.description2}
${data.description3}


## Installation
${data.installation}

          

## Usage
${data.usage}


## Credits
${data.credits}


## License
${data.license} 
renderLicenseBadge(data.license);


## made by ${data.username}

`;
}

module.exports = generateMarkdown;
