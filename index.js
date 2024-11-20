// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


/* 
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
*/

// TODO: Create an array of questions for user input
const questions = [
      
    {
        type: 'input',
        message: 'What is your Readme Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Name of the readme file (No .md is necessary)',
        name: 'read',
    },
    {
        type: 'input',
        message: 'Give a description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Insert Contribution',
        name: 'contribuiting',
    },
    {
        type: 'input',
        message: 'Insert Tests',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', ''],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Insert Github user:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Insert email:',
        name: 'email',
    },
    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) :  console.log("Success");
    })
}

// TODO: Create a function to initialize app
function init() {  
    inquirer
        .prompt( 
            questions
        ).then( (data) => {
            writeToFile( `${ data.read }.md`, generateMarkdown( data ) );
        });

}

// Function call to initialize app
init();
