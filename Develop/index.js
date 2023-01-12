// Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')



// Creates an array of questions to gather user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (answer) => {
            if (answer === '') {
                return 'Please enter a title for the project'
            } else {
                return true
            }}
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
            validate: (answer) => {
                if(answer === '') {
                    return 'Please enter a description of your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'input',
            name: 'installation',
            message: 'If applicable, please enter in a description on necessary installation steps for your application',
            validate: (answer) => {
                if(answer === '') {
                    return 'Please enter installation steps for your project'
                } else {
                    return true
                }
            }

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide any instructions and examples for usage for your project',
            validate: (answer) => {
                if(answer === '') {
                    return 'Provide any instructions and examples for usage for your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'If applicable, please provide instructions for how other developers can contribute to your project',
            validate: (answer) => {
                if(answer === '') {
                    return 'Please provide any instructions for how other developers can contribute to your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'input',
            name: 'tests',
            message: "If applicable, please provide any necessary instructions/examples on how to test your application",
            validate: (answer) => {
                if(answer === '') {
                    return 'Please enter a description of your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username',
            validate: (answer) => {
                if(answer === '') {
                    return 'Please enter a description of your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: (answer) => {
                if(answer === '') {
                    return 'Please enter a description of your project'
                } else {
                    return true
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project',
            choices: ['ISC License', 'MIT License', 'Eclipse', 'Apache 2.0 License', 'Boost', 'N/A']
        }

    
];



// Creates a function to write a README file

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}



// Function to initialize app

function init() {
    return inquirer.prompt(questions).then(data => {
        writeToFile('README.md', data)
    })
}



// Function call to initialize app
init();
