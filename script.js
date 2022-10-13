//2.
for(let i = 1; i<=20; i++){
    console.log(i)
}
for(let j = 0; j <= 200; j+=2){
    console.log(j)
}

for(let k = 1; k <=100; k++){
    if(k % 3 === 0 && k % 5 === 0){
        console.log("FizzBuzz")
    } else if( k % 3 === 0){
        console.log("Fizz")
    } else if( k % 5 === 0){
        console.log("Buzz")
    }
    console.log(k)
}