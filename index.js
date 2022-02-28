const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
        type: 'input',
        message: 'What is the Project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your Project description.',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Provide a Table of Contents.',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'How do I test this project?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Choose a licensing option',
        name: 'licensing',
        choices: ['MIT', 'Apache', 'GNU', 'ISC'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
    ])
    .then((response) => {
        const filename = 'README.md';
        const generateHTML = function ({ title, desc, contents, install, contributors, testing, licensing, github, email }) {
            return //insert ReadMe Layout here
        };


        fs.writeFile(filename, generateHTML(response), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });