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
        const generateREAD = function ({ title, desc, install, contributors, testing, licensing, github, email }) {
            return `# ${title}

## Description
${desc}

## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

## Installation
${install}

## Usage & Testing

Provide instructions and examples for use.Include screenshots as needed.
${install}

${testing}

<!--- Dont forget to add your Screenshots! --->

## Credits
${contributors}

## License
${licensing}

## Questions
If you have any question please email me at ${email}
or you can check out my GitHub at ${github}

## How to Contribute

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)`
        };

        fs.writeFile(filename, generateREAD(response), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });