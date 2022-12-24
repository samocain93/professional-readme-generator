// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "ISC License"){
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `
  } else if (license === `MIT License`){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Eclipse'){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } else if (license === 'Apache 2.0 License'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // if else for the sections if matches license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)

## Installation

${data.installation}

## Usage

${data.usage}


## License

${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Contributions

${data.contributions}

## Questions

- GitHub Username: <a href="https://github.com/${data.github}">${data.github}</a>

- Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;
