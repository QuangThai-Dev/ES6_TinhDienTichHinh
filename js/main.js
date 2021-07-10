import Shape from '../js/Shape.js';
import Square from '../js/Square.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';

const shape = new Shape();

const getEle = id => document.getElementById(id);


const handleSquare = () => {
    const side = +getEle('side').value;
    const squareX = getEle('squareX').value + 'px';
    const squareY = getEle('squareY').value + 'px';
    const squareColor = getEle('squareColor').value;

    const square = new Square(squareX, squareY, squareColor, side);
    square.calArea();
    square.draw();
}

getEle('areaSquare').addEventListener('click', handleSquare);

const handlCircle = () => {
    const radius = +getEle('radius').value;
    const squareX = getEle('cirX').value + 'px';
    const squareY = getEle('cirY').value + 'px';
    const squareColor = getEle('cirColor').value;
    const circle = new Circle(squareX, squareY, squareColor, radius);
    circle.calArea();
    circle.draw();
}

getEle('areaCircle').addEventListener('click', handlCircle);

const handlRectangle = () => {
    const height = +getEle('recL').value;
    const width = +getEle('recW').value;
    const squareX = getEle('recX').value + 'px';
    const squareY = getEle('recY').value + 'px';
    const squareColor = getEle('recColor').value;
    const rectangle = new Rectangle(squareX, squareY, squareColor, height, width);
    rectangle.calArea();
    rectangle.draw();
}

getEle('areaRec').addEventListener('click', handlRectangle);