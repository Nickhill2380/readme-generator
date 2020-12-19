// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license =>{
  if (license === 'Apache') {
      return `
![Apache](https://img.shields.io/aur/license/android-studio.png)
      `;
  } else if(license === 'MIT'){
      return `
![MIT](https://img.shields.io/npm/l/express.png)
      `;
  } else if (license === 'GPL'){
      return `
![GPL](https://img.shields.io/eclipse-marketplace/l/notepad4e.png)
      `;
  } else {
      return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license =>{
  if (license === 'Apache') {
      return `
[Apache](https://www.apache.org/licenses/LICENSE-2.0)
      `;
  } else if(license === 'MIT'){
      return `
[MIT](https://www.opensource.org/licenses/mit-license.php)
      `;
  } else if (license === 'GPL'){
      return `
[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)
      `;
  } else {
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license =>{
  if (license === '') {
      return ``;
  } else {
      return `
## License

This project is covered by the ${license} license.Found at the link below:
      `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const{ name, github, email, title, description, installation, usage, contributions, test, license } = data;
  return `
  
# ${title}  
${renderLicenseBadge(license)}
                
                
## Description

${description}
    
## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)

## Installation

${installation}

## Usage

${usage}

## Questions

${name}  
GitHub: ${github} [https://github.com/${github}]
Please feel free to email me if you have additional questions about this project.
Email: <${email}>

${renderLicenseSection(license)}
${renderLicenseLink(license)}


## Contributing

${contributions}

## Tests
${test}


`;
}

module.exports = generateMarkdown;
