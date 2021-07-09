import HinhHoc from "./HinhHoc.js";
class HinhChuNhat extends HinhHoc {
    constructor(sideX, sideY, backgroud, height, width) {
        super(sideX, sideY, backgroud);
        this.height = height;
        this.width = width;
    }
    tinhdientich() {
        this.dienTich = this.height * this.width;
    }
    draw() {

    }
}
export { HinhChuNhat }