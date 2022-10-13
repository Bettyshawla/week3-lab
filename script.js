//1.
for(let i = 1; i<=20; i++){
    console.log(i)
}
//2.
for(let j = 0; j <= 200; j+=2){
    console.log(j)
}
//3.
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
//4.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2, 1, 5001)
console.log(plantee)

wolfy.splice(3,1, "Gotham City")
console.log(wolfy)

dart.push("Hawkins")
console.log(dart)

wolfy[0] = "Gameboy"
console.log(wolfy)

//5.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for(let i of ninjaTurtles){
    console.log(i.toUpperCase())
}
