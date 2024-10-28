const btn = document.querySelector(".fact-btn");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

// //THIS IS FOR THE TESTING AND NOTES/////////////////////////////////////////////

// let votesInteresting = 20;
// let votesMindBlowing = 5;
// let votesFalse = 16;

// let totalUpVotes = votesInteresting + votesMindBlowing;

/////////TERNARY OPERATOR///////////////////////////////////////////////////////////

// const message =
//   totalUpVotes > votesFalse
//     ? "The Fact is True"
//     : "The Fact is most likley falsy, check more sources!";

// console.log(message);

// const str = "Lisbon is the capitol of the portugal";
// const temp_str = `Current fact is "${str.toUpperCase()}"`;
// console.log(temp_str);

////////////// ARROW FUNCTIONS //////////////////////////////////////////////////////

// function calcAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age > 0) {
//     return age;
//   } else {
//     return "Impposible Birth Year ";
//   }
// }

// const myAge = calcAge(2024);
// console.log(myAge);

// const arrowAge = (year) =>
//   new Date().getFullYear() >= year
//     ? new Date().getFullYear() - year
//     : `The year ${year} not posisble, pls chek the year!`;

// console.log(arrowAge(2027));

// ARRAY OPERATIONS/////////////////////////////////////////////////////////////////////////////////////

// const details = ["Pramodya", 24, false]; //simple array creation
// console.log(details[0]); //fetch data from array
// console.log(details[details.length - 1]); //fetch data from array

// const [names, age, isSelected] = details; //array decontruction
// console.log(names);
// console.log(age);
// console.log(isSelected);

// const newArray = [details, "Colombo"];
// console.log(newArray); // output:  [Array(3), 'Colombo']
// console.log(newArray.length); // Output: 2

// const newSpreadArray = [...details, "Colombo"]; //use ... operator for extract the old array
// console.log(newSpreadArray); //Output: ['Pramodya', 24, false, 'Colombo']

//// JAVASCRIPT OBJECTS ///////////////////////////////////////////////////////////////////////////////////

// //create an object
// const personObj = {
//   name: "Pramodya",
//   age: 24,
//   isPass: false,
//   //create a method
//   summary() {
//     return `Name is ${this.name} and Age is ${this.age} yeras old.`; // 'this' keyword reffer to current object
//   },
// };

// console.log(personObj); //fetch value from the object
// console.log(personObj.name); //Output: Pramodya
// console.log(personObj["name"]); //Output: Pramodya - This method idial for calculation

// const { name, isPass } = personObj; //Object decontructing, the variable names shoud same as properrty name
// console.log(name, isPass); //Output: Pramodya false
// console.log(personObj.summary()); //Output: Name is Pramodya and Age is 24 yeras old.
