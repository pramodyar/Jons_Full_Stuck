// Selecting DOM Elements

const btn = document.querySelector(".fact-btn");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//// This is how to find correspoinding color value of each category

//// const colorArray = CATEGORIES.find((cat) => cat.name == "technology").color;
//// console.log(colorArray);

// Show/Hide Fact Form

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

factsList.innerHTML = ""; // Initialy hide fact list elements

//Load Data From supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://aewaonvbgazfbpdmgftm.supabase.co/rest/v1/facts ",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFld2FvbnZiZ2F6ZmJwZG1nZnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwOTc1MjYsImV4cCI6MjA0NTY3MzUyNn0.Zwy56Hx_S4yuyI5jHA08rWKisLHvuaONCTBMiNQ7_dA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFld2FvbnZiZ2F6ZmJwZG1nZnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwOTc1MjYsImV4cCI6MjA0NTY3MzUyNn0.Zwy56Hx_S4yuyI5jHA08rWKisLHvuaONCTBMiNQ7_dA",
      },
    }
  );
  const data = await res.json(); // make 'res' to JSON format

  // const fillData = data.filter((el) => el.category == "history"); //sort data
  dataArray(data);
}

// Function for data manipulation

function dataArray(datasource) {
  const html = datasource.map(
    (element) => `<li class="fact">
                <p>
                  ${element.text}
                  <a
                    class="source"
                    href=${element.source}
                    target="_blank"
                    >(Source)</a
                  >
                </p>
                <span class="tag" style="background-color:${
                  CATEGORIES.find((cat) => cat.name == element.category).color
                }"
                  >${element.category}</span
                >`
  );
  html.forEach((el) => factsList.insertAdjacentHTML("beforeend", el)); // Method 01

  //Mothod 02: using join() method
  // const allHtml = html.join("");
  // factsList.insertAdjacentHTML("beforeend", allHtml);
}

// //THIS IS TESTING AND NOTES/////////////////////////////////////////////

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
// console.log(personObj["name"]); //Output: Pramodya // This method idial for calculation

// const { name, isPass } = personObj; //Object decontructing, the variable names shoud same as properrty name
// console.log(name, isPass); //Output: Pramodya false
// console.log(personObj.summary()); //Output: Name is Pramodya and Age is 24 yeras old.

///////LOOPING OVER ARRAYS: FOREACH AND MAP METHODS /////////////////////

// // loop using forEach function - 'el' is the standard name for that variable
// [1, 2, 3, 4, 5, 6, 7].forEach(function (el) {
//   console.log(el);
// });

// [1, 2, 3, 4, 5, 6, 7].forEach((el) => console.log(el)); //use Arrow functions inted of regular

// //// Loop using MAP  function
// //map function return an array of looping values
// // we can create a new array
// const times10 = [2, 5, 6].map(function (el) {
//   return el * 10;
// });
// console.log(times10); //Output: [2, 5, 6]

// // using arrow function

// const times20 = [2, 5, 6].map((el) => el * 20);
// console.log(times20);

// //extract values from some arrays and create a new array

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const myCategories = CATEGORIES.map((el) => el.name);
// console.log(myCategories);
// // Output: ['technology', 'science', 'finance', 'society', 'entertainment', 'health', 'history', 'news']
// myCategories.forEach((el) => console.log(el)); // Furtur exctrat 'myCategoris values

// const myColors = CATEGORIES.map((el) => el.color);
// console.log(myColors);
// //Output: ['#3b82f6', '#16a34a', '#ef4444', '#eab308', '#db2777', '#14b8a6', '#f97316', '#8b5cf6']

//.join(seperator)

///////// DATA filer using filter() function ///////////////////////

// console.log([1, 89, -6, 5, 52, 10, 0].filter((el) => el > 10));
//OutPut:  [89,52]

// // find() function  - sama as fileter function ,  insted of return array,  it returns only first value of array
// console.log([1, 89, -6, 5, 52, 10, 0].find((el) => el > 10));
// //Output: 89
