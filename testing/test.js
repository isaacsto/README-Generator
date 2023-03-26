const inquirer = require("inquirer")
const fs = require("fs")

fs.writeFile("shampoo.js", "console.log('drive in a fast car')", (err) => {
    if(err) {
        throw err
    } else {
        return console.log("SUCCESS")
    }
})

inquirer.prompt([

    {
        name: "frogToes",
        type: "input",
        message: "what is the meaning of life?"
    },
    {
        name: "bearHairs",
        type: "number",
        message: "what is the meaning of juice?"
    },
    {
        name: "beesKnees",
        type: "checkbox",
        message: "what is the meaning of leaves?",
        choices: ["this", "that", "the other"]
    },
    {
        name: "catsHats",
        type: "list",
        message: "what is the meaning of cups?",
        choices: ["beets", "bears", "battlestar galactica"]
    }
]
).then(beeAnswers => {
    console.table(beeAnswers)
})