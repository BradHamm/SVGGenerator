const shapeLib = require('shapes.js');
const indexLib = require('./index.js');

describe('Shapes', () => {
    describe('Render functions - Triangle', () => {
        it('should return SVG polygon info for triange', () => {
            const triTest = new Triangle();
            expect(triTest.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColorVal}"/>`);
        });
    });


    describe('Render function - Square', () => {
        it('should return SVG rect info for square', () => {
            const sqTest = new Square();
            expect(sqTest.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${this.shapeColorVal}"/>`)
        });
    });


    describe('Render function - Cirlce', () => {
        it('should return SVG cirlce info for cirle', () => {
            const circTest = new Circle();
            expect(circTest.render().toEqual(`<circle cx="150" cy="100" r="80" fill="${this.shapeColorVal}" />`))
        });
    });
});

//test ideas:
//color inputs from the user correctly map on to how they render in the SVG string.
//setShapeColor correctly applies to the parent shape class and applies to the shapes when they render using the this.shapeColorVal.
