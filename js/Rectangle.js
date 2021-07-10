import Shape from "./Shape.js";
export default class Rectangle extends Shape {
    constructor(sideX, sideY, bgColor, height, width) {
        super('Rectangle', sideX, sideY, bgColor);
        this.height = height;
        this.width = width;
    }
    calArea() {
        this.area = this.height * this.width;
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