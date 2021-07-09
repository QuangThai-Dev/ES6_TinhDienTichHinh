import HinhHoc from "./HinhHoc.js";
const Pi = 3.14;
class HinhTron extends HinhHoc {
    constructor(sideX, sideY, backgroud, radius) {
        super(sideX, sideY, backgroud)
        this.radius = radius;
    }
    tinhdientich() {
        this.dienTich = Pi * Math.pow(radius, 2);
    }
    draw() {

    }
}
export {
    HinhTron
}