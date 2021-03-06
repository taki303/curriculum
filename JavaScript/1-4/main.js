for(let i = 1; i <= 100; ++i){ 

    //3と5の両方で割り切れるときはFizzBuzzを表示 
    if(i % 3 == 0 && i % 5 == 0){ 
       console.log("FizzBuzz"); 

    //3で割り切れるときはFizzを表示 
    } else if(i % 3 == 0){ 
       console.log("Fizz"); 

    //5で割り切れるときはBuzzを表示 
    } else if(i % 5 == 0){ 
       console.log("Buzz"); 

    //それ以外の時は変数 i を表示 
    } else{ 
       console.log(i); 
    }
}