
let ammount = 777


let numberOfTwenties = Math.floor(ammount/20)
ammount = ammount- numberOfTwenties*20
let numberOfTens = Math.floor(ammount/10)
ammount = ammount- numberOfTens*10
let numberOfFives = Math.floor(ammount/5)
ammount = ammount- numberOfFives*5
let numberOfOnes = Math.floor(ammount/1)

let finalResult = [numberOfTwenties, numberOfTens, numberOfFives, numberOfOnes]


console.log (numberOfTwenties)
console.log (numberOfTens)
console.log (numberOfFives)
console.log (numberOfOnes)
console.log (finalResult)

