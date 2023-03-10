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
    licenseSection = `Copyright ${new Date().getFullYear()} ${username}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal 
    in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
    ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH 
    THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n";
  `}
  if (license === "Apache") {

    // username shows undefined  ${new Date} shows current year
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
    licenseSection = `Copyright ${new Date().getFullYear()} ${username}

    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.
    
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.\n";`
  }
  if (license === "ISC") {
    licenseSection = `Copyright ${new Date().getFullYear()} ${username}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice 
    and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF 
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY 
    DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, 
    ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n";`
  }
    else {
    "";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

let content = ' '

content += `# ${data.projectTitle}

## Description
${data.description1}
${data.description2}
${data.description3}

## Table of Contents
-[Installation](#Installation)\n
-[Usage](#Usage)\n
-[Credits](#Credits)\n
-[License](#License)\n
-[Test](#Tests)\n
-[Contributions](#Contributions)\n
-[Questions](#Questions)\n

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


## Tests
To run tests, run the following command:
npm test


## Contributions
Is this project open to contributions? : ${data.contribtuion} 
` 



content += `## Questions
This was made by ${data.username}. Any questions can be sent to ${data.email}.
You can find more at (https://github.com/${data.username}
`;


return content;
}

module.exports = generateMarkdown;

