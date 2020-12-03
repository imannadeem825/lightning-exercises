// Exercise 1
// Functions can return a value that we can capture:
// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// Execute the function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets," plus the returned value of the function.

// My attempt:
// let pet = "border collie"


// const favoritePets = (pet) => {
//     if (pet = "border collie") {
//         return `My favorite dog breed is ${pet}`
//     }
//     else {
//     return "I like cats"}
// }

// const whichPetIsBest = favoritePets(pet)

// console.log("When it comes to pets," + `${whichPetIsBest}`)

// Solution:
// const petPreference = (dog) => {
//     if (dog) {
//         return `My favorite dog breed is ${dog}`
//     }
//     return "I like cats"
// }

// const correctPetStatement = petPreference("border collie")
// const wrongPetStatement = petPreference()

// console.log("When it comes to pets,", correctPetStatement)
// console.log("When it comes to pets,", wrongPetStatement)


// Exercise 2
// Add an action that the painter can perform ( a property whose value is a function ).
// Have her take that action by execucting the method you created.


let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}

painter.paint = function () {
    return "brush stroke"
}

console.log(painter.paint())



// Exercise on events

const button = document.querySelector(".btn--message");
const messageBox = document.querySelector(".message");
button.addEventListener("click", () => messageBox.innerHTML = "The button has been pressed!");