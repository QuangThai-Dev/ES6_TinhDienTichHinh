import Shape from "./Shape.js";
export default class Circle extends Shape {
    constructor(sideX, sideY, bgColor, radius) {
        super('Circle', sideX, sideY, bgColor);
        this.radius = radius;
    }
    calArea() {
        this.area = 3.14 * Math.pow(this.radius, 2);
    }

    draw() {
        const content = `
        <div class = "text-center" style = "width: ${this.sideX}; height:${this.sideY}; background-color: ${this.bgColor}; border-radius: 50% " >
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