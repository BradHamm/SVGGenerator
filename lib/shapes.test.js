const {Triangle, Square, Circle} = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('Render functions - Triangle', () => {
        it('should return SVG polygon info and black color for triange', () => {
            const triTest = new Triangle();
            triTest.setShapeColor("black")
            expect(triTest.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="black"/>`);
        });
    });


    describe('Render function - Square', () => {
        it('should return SVG rect info and orange color for square', () => {
            const sqTest = new Square();
            sqTest.setShapeColor("orange")
            expect(sqTest.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="orange"/>`)
        });
    });


    describe('Render function - Cirlce', () => {
        it('should return SVG cirlce info and red color for cirle', () => {
            const circTest = new Circle();
            circTest.setShapeColor("red")
            expect(circTest.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`)
        });
    });
});
