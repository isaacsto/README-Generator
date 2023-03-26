let inquirer = require ("inquirer")

inquirer.prompt(
    [
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
          message: 'Are there any contributers?',
        },
        {
          type: 'input',
          name: 'Questions',
          message: 'If the user have any questions where can we reach you?',
        },
      ]
).then (doritos => {
    console.table(doritos)
})