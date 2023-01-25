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
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)\n";
  }
  if (license === "Apache") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)\n";
  }
  if (license === "GPL") {
    licenseLink = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n";
  }
  if (license === "ISC") {
    licenseLink = "(https://opensource.org/licenses/ISC)\n";
  }
    else {
    "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  if (license === "MIT") {
    licenseSection = "(https://opensource.org/licenses/MIT)\n";
  }
  if (license === "Apache") {
    licenseSection = `Copyright ${new Date().getFullYear()} ${username}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.\n`;
  }
  if (license === "GPL") {
    licenseSection = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n";
  }
  if (license === "ISC") {
    licenseSection = "(https://opensource.org/licenses/ISC)\n";
  }
    else {
    "";
  }
  return licenseSection;
}

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
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
` 



content += `## made by ${data.username}`;

return content;
}

module.exports = generateMarkdown;

