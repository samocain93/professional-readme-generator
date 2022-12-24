// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
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
            message: 'Please enter a description of your project'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'If applicable, please enter in a description on necessary installation steps for your application'

        },

        {
            type: 'input',
            name: 'usage',
            message: 'Provide any instructions and examples for usage'
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'If applicable, please provide instructions for how other developers can contribute to your project'
        },

        {
            type: 'input',
            name: 'tests',
            message: "If applicable, please provide any necessary instructions/examples on how to test your application"
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project',
            choices: ['ISC License', 'MIT License', 'Eclipse', 'Apache 2.0 License', 'Boost']
        }

    
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}



// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(data => {
        writeToFile('README.md', data)
    })
}



// Function call to initialize app
init();
