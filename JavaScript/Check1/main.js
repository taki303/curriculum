let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    if(num % 2 === 0) {
    console.log(num + 'は偶数です');
    }
}
for(i = 0; i < numbers.length; i ++){
    isEven(numbers[i]);
}


class car {
    constructor(guss, number){
        this.guss = guss;
        this.number = number;
    }
    getNumGas(){
        console.log(`ガソリンは${this.guss}です。ナンバーは${this.number}です。`);
    }
}

let rentCar = new car(0.2, 1234);
rentCar.getNumGas();