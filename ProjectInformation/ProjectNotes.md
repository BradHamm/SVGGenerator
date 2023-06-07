For the svg maker, inquirer will need to intake the following information:

- Color (Text and Shape)
- Shape
- Text to be overlayed

From there, the logo wil be generated and saved as an svg file.

This project will include a vido demonstrating its functionality and a generated svg will be uploaded to the README of the project.

Here is the criterium and limitations of the user inputs as well as the expected outputs given the user input:

- Text values can be up to three characters (UTF-8?)
- Text Color can be inputted as a hexidemical value or a color keyword (like CSS)
- Shapes can be one of three values (List-type): 
    - Square, Circle and Triangle
- Shape color can be inputted as a hexidecimal value or a color keyword
- Outputted file will be logo.svg, and upon completion of the svg generation, the program will console log('Generated logo.svg')
- The logo.svg will be 300x200 pixels

Jest should be used for test in the program.

All package extensions to be used in the project:
inquirer, fs, jest, 