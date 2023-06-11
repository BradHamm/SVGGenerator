//shape parent class - includes error for calling the render() function directly to shape, without selecting a subclass
class Shape {
    constructor(shapeColorVal) {
        this.shapeColorVal = shapeColorVal; //for all shapes, shapeColorVal property will set color of the shapes.
      }
    
      setShapeColor(shapeColorVal) {
        this.shapeColorVal = shapeColorVal; //function to set the shapeColorVal property
      }

    render() {
        throw new error('Render cannot be called directly from shape class, must select subclass (triangle, circle or square)')
    }
}
//triange sub-class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColorVal}"/>` //this.color can intake a name or hexidec. value.
    }
}
//square sub-class
class Square extends Shape {
    render () {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColorVal}"/>`
    }
}
//circle sub-class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColorVal}" />`
    }
}

//exports the classes
module.exports = {
    Shape,
    Triangle,
    Square,
    Circle,
};

