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


// let painter = {
//   tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
//   uniform: "white overalls",
//   cost_per_hour: 25.00,
//   insured: true
// }

// painter.paint = function () {
//     return "brush stroke"
// }

// console.log(painter.paint())



// Exercise 3
// const button = document.querySelector(".btn--message");
// const messageBox = document.querySelector(".message");
// button.addEventListener("click", () => messageBox.innerHTML = "The button has been pressed!");




// Exercise 4
// Add a <section> element with an id of family to your index.html
// Use a good old for loop to iterate over this array of objects to
// pull out the names of the family members and represent them as HTML
// by wrapping each in an <h3> tag. Append them to the DOM.
// Achieve the same result using .map()

let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]


const familyEl = document.querySelector("#family")
const familyNames = []
for (let i=0; i < family.length; i++) {
  familyNames.push(`<h3>${family[i].name}</h3>`)
}
familyEl.innerHTML += familyNames.join("")


// .map solution: shorthand of above
familyEl.innerHTML = family.map( (famMember) => `<h3>${famMember.name}</h3>`).join("")

// extra: filter method
const adults = family.filter( (familyMember) => {
  if (familyMember.age >= 18) {
    return true
  }
})
console.log("grownups?", adults)

// shorthand for filter
const adults = family.filter ( (familyMember) => familyMember.age >= 18)
console.log("grownups?", adults)

// find method--returns one object from the family array, the first time the condition is met, and then stops
const parent = family.find( (familyMember) => familyMember.title === "parent")