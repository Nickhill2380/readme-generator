// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }   
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to provide a description for your project?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project.',
            when: ({confirmDescription}) => confirmDescription
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Do you need to provide any information in regards to installation of the project?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide information regarding installation of the project.',
            when:({confirmInstallation}) => confirmInstallation
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of use.'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please provide your guidelines for contributing to this project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide instructions and how to run tests for your projects.'
        },
        {
            type: 'list',
            name: 'license',
            message: "Which license would you like for your project?",
            choices: ['Mozilla Public License 2.0', 'MIT License', 'GNU General Public License v3.0' ]
        }
        
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
