import Shape from "../js/Shape.js";

export default class Square extends Shape {
    constructor(sideX, sideY, bgColor, side) {
        super('Square', sideX, sideY, bgColor);
        this.side = side;
    }
    calArea() {
        this.area = Math.pow(this.side, 2);
    }
    draw() {
        const content = `
        <div class = "text-center" style = "width: ${this.sideX}; height:${this.sideY}; background-color: ${this.bgColor}" >
            <p>
                Name: ${this.name};
                <br>
                Area: ${this.area};
            </p>
        </div>
        `
            // console.log(content);
        document.getElementById('main').innerHTML = content;
    }
}