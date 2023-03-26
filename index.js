/* // TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
 */

const inquirer = require('inquirer');
const fs = require('fs');
const markdownToc = require('markdown-toc');

//add table of contents
const readmeContents = fs.readFileSync('README.md').toString();

const toc = markdownToc(readmeContents).content;

const updatedReadmeContents = `${toc}\n${readmeContents}`

fs.writeFileSync('README.md', updatedReadmeContents);

const markDown = ({title, description, installation, usage, license, contributing, tests, contact }) =>
  `# ${title} 

  ## Table of Contents
- [Introduction](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  ${license}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests} 
  
  ## Contact
  ${contact} `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your application',
    },

    {
      type: 'input',
      name: 'installation',
      message: 'How would you install your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your application used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want for your application?',
      choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any contributers? If so who?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Where can I see a test of the application?'
    },
    {
      type: 'input',
      name: 'contact',
      message: 'If the user have any questions where can we reach you?',
    },
  ])

  .then((answers) => {
    console.table(answers)
    if (answers.license )
    var pageContent = markDown(answers);
    console.log(pageContent)
    fs.writeFile('readme.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created a README!')
    );
  });

  
