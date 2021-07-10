export default class Shape {
    constructor(name, sideX, sideY, bgColor) {
        this.name = name;
        this.sideX = sideX;
        this.sideY = sideY;
        this.bgColor = bgColor;
    }

    draw() {
        const content = `<div class ="alert alert-primary"> Chưa vẽ </div>`;
        document.getElementById('main').innerHTML = content;
    }
}