const fs = require('fs'); //imports fs for write/read.
const inquirer = require('inquirer'); //imports inquirer for prompts
const {Triangle, Square, Circle} = require('./lib/shapes'); //imports class information from shapes.js

const collectValues = async () => {
    const UserInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'textVal',
            message: "Enter the text values you'd like to add to the SVG - Maximum of three letters: ",
            validate: (input) => {
                if (input.length <= 3) {
                    return true; //statement is validated? Continue with the prompts. 
                }
                    return 'Three letters maximum, please re-enter three or less characters: ';
            },
        },
        {
            type: 'input',
            name: 'textColorVal',
            message: 'Enter the text color in either hexidecimal values or via keyword: '
        },
        {
            type: 'list',
            name: 'shapeVal',
            message: 'Select a shape: ',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'shapeColorVal',
            message: 'Enter the shape color in either hexidecimal values or via keyword: '
        },
    ]);
    return UserInput; //returns the UserInput object with inquirer-submitted user information.
};

const logoGeneration = async () => {
    try {
        const userInput = await collectValues();

        let shape;
        switch(userInput.shapeVal) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            case 'Circle':
                shape = new Circle();
                break;
            default:
                throw new Error('Shape not found');
        }

        shape.setShapeColor(userInput.shapeColorVal);

        const SVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <g>
          ${shape.render()}
          <text x="250" y="180" text-anchor="middle" alignment-baseline="middle" fill="${userInput.textColorVal} font-size="40"">
            ${userInput.textVal}
          </text>
        </g>
      </svg>
      `;

      fs.writeFileSync('logo.svg', SVG);
      console.log('Generated logo.svg');
    } catch (error) {
        throw new Error('Logo not generated: ', error.message);
    }
};

logoGeneration();