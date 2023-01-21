// const licenseAll= {
  
//    MIT : {
//       badge : '![badge](https://img.shields.io/badge/License-MIT-yellow)\n'
//    },
//    Apache : {
//       badge : '![badge](https://img.shields.io/badge/License-Apache_2.0-red)\n'
//    },
//   GPL : {
//       badge : '![badge](https://img.shields.io/badge/License-GPLv3-green)\n'
//   },
//   ISC : {
//       badge : '![badge](https://img.shields.io/badge/License-ISC-lightgreen)\n'
//   },
//   None :{
//       badge : ' '
// },
// };
  

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    licenseBadge = "![badge](https://img.shields.io/badge/License-MIT-yellow)\n";
  }
  if (license === "Apache") {
    licenseBadge = "![badge](https://img.shields.io/badge/License-Apache_2.0-red)\n";
  }
  if (license === "GPL") {
    licenseBadge = "![badge](https://img.shields.io/badge/License-GPLv3-green)\n";
  }
  if (license === "ISC") {
    licenseBadge = "![badge](https://img.shields.io/badge/License-ISC-lightgreen)\n";
  }
    else {
    "";
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
// let userLicense = data.license;
// let badge = renderLicenseBadge(userLicense);  
// let badge = renderLicenseBadge(data.license);
let content = ' '

content += `# ${data.projectTitle}

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
${renderLicenseBadge(data.license)}` 



content += `## made by ${data.username}`;

return content;
}

module.exports = generateMarkdown;

