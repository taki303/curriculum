class Taiyaki {

    constructor(inside) {
        this.inside = inside;
    }
    
    nakami() {
        console.log(`中身は${this.inside}です`)
    }
}

let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.nakami();
cream.nakami();
cheese.nakami();