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
        choices: [{
            name: "MIT",
            value: "[MIT](https://choosealicense.com/licenses/mit/)"
         },
         {
            name: "BSD",
            value: "[BSD](https://choosealicense.com/licenses/isc/)"
         },
         {
            name: "Apache",
            value: "[Apache](https://choosealicense.com/licenses/apache-2.0/)"
         },
         {
            name: "GNU",
            value: "[GNU](https://choosealicense.com/licenses/gpl-3.0/)"
         }],
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

## Description:
${desc}

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation:
${install}

## Usage & Testing:
${install}

${testing}

<!--- Don't forget to add your Screenshots! --->

## Credits:
${contributors}

## Questions:
If you have any question please email me at ${email} or you can check out my GitHub at ${github}

## How to Contribute:
<!--- Replace contributions to your own if you like --->
[Contributor Covenant](https://contributor-covenant.org/)

## License:
${licensing}`
        };

        fs.writeFile(filename, generateREAD(response), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });