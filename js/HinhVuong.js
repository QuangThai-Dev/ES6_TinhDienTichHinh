import HinhHoc from "./HinhHoc.js";
class HinhVuong extends HinhHoc {
    constructor(sideX, sideY, backgroud, side) {
        super(sideX, sideY, backgroud)
        this.side = side;
    }
    tinhdientich() {
        this.dienTich = this.side * this.side;
    }
    draw() {

    }
}
export { HinhVuong }