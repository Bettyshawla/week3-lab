//1.
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
//2.
for (let j = 0; j <= 200; j += 2) {
    console.log(j)
}
//3.
for (let k = 1; k <= 100; k++) {
    if (k % 3 === 0 && k % 5 === 0) {
        console.log("FizzBuzz")
    } else if (k % 3 === 0) {
        console.log("Fizz")
    } else if (k % 5 === 0) {
        console.log("Buzz")
    }
    console.log(k)
}
//4.
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2, 1, 5001)
console.log(plantee)

wolfy.splice(3, 1, "Gotham City")
console.log(wolfy)

dart.push("Hawkins")
console.log(dart)

wolfy[0] = "Gameboy"
console.log(wolfy)

//5.
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let i of ninjaTurtles) {
    console.log(i.toUpperCase())
}

//6.
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'))

favMovies.sort()
console.log(favMovies)

favMovies.pop()
console.log(favMovies)

favMovies.push("Guardians of the Galaxy")
console.log(favMovies)

favMovies.reverse()
console.log(favMovies)

favMovies.shift()
console.log(favMovies)

favMovies.unshift("Minions")
console.log(favMovies)
//It will add a new element in to the array 

//console.log(favMovies.indexOf('Django Unchained'))

favMovies.splice(15, 0, "Avatar")
console.log(favMovies)

let arrayMid = favMovies.length/2
console.log(arrayMid)
// to find the middle of the array

let newArray = favMovies.slice(10,20)
console.log(newArray)

console.log(favMovies)

console.log(favMovies.indexOf("Fast and Furious"))

//6.
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

//console.log(whereIsWaldo[1])

whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)

// "neff" to " no one"
//"waldo"

//7.

for(let i = 1; i <=20; i++){
    //console.log( "Love me, pet me! HSSSSSS!")
    if(i % 2 ===  0){
        console.log("...human...why you taking pictures of me?..."|| "...the catnip made me do it..." || "...why does the red dot always get away..." )
    } else{
           console.log( "Love me, pet me! HSSSSSS!")
    }
}