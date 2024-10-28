const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

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

//Selectting the DOM elements
const btn = document.querySelector(".share-a-fact");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

// Create DOM Elements: Rnedr Facts in List

factList.innerHTML = "";

// Loard Data from backend

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://hzyfcgchsadlrhgfocao.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eWZjZ2Noc2FkbHJoZ2ZvY2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNDYwMjksImV4cCI6MjAyOTgyMjAyOX0.rpNTijBByT2VFBSEDkHbTps1pC3jbAELcGPw_cIGRds",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6eWZjZ2Noc2FkbHJoZ2ZvY2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyNDYwMjksImV4cCI6MjAyOTgyMjAyOX0.rpNTijBByT2VFBSEDkHbTps1pC3jbAELcGPw_cIGRds",
      },
    }
  );
  const data = await res.json();
  //const filteredData = data.filter((el) => el.category === "science");
  makeHTML(data);
}

// Manupulate a List Item using JS

// makeHTML(initialFacts);

function makeHTML(dataSource) {
  const htmlElements = dataSource.map(
    (el) => `<li class="fact">
    <p>
      ${el.fact}
      <a class="source" href="${el.source}" target="_blank">(source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === el.category).color // used the find() method to get relavet color
    }">${el.category}</span>
    <div class="vote-buttons">
                <button>👍 24</button>
                <button>🤯 9</button>
                <button>⛔️ 2</button>
              </div>
  </li>`
  );

  //Joining each HTML elements
  const textToHTML = htmlElements.join("");

  // Add to the DOM
  factList.insertAdjacentHTML("afterbegin", textToHTML);
}

//Toggle form visibillity

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// function calcFcatAge(year) {
//   const currentYear = new Date().getFullYear();
//   if (currentYear < year) {
//     console.log(
//       `Pls enter valid year,the year should be less than current year ${currentYear}`
//     );
//   } else {
//     const age = currentYear - year;
//     return age;
//   }
// }

// console.log(calcFcatAge(2014));
// console.log(calcFcatAge(2032));

// let likes = 10;
// let mindblowers = 5;
// let diskikes = 21;

// const totalUpVotes = likes + mindblowers;

// const message =
//   totalUpVotes > diskikes
//     ? "The fact is true"
//     : "The fact might be false, check tha validity!!!";

// console.log(message);

// const currentFact = "Lisbon is the capitol  of Portugal";

// const str = `This is a template string,  that can be get values of variables also, current fact is "${currentFact}" `;
// console.log(str);

// // Arrow functions

// const calcFcatAge2 = (year) => new Date().getFullYear() - year;
// console.log(calcFcatAge2(2016));
// console.log(calcFcatAge2(2026));

// // advance function
// const calcFcatAge3 = (year) =>
//   new Date().getFullYear() > year
//     ? new Date().getFullYear() - year
//     : `Enter valid yers the less than ${new Date().getFullYear()}`;

// console.log(calcFcatAge3(2016));
// console.log(calcFcatAge3(2026));

// const details = ["saman", 25, true];
// console.log(details);
// console.log(details[0]);
// console.log(details.length);

// // Array decontruct

// const [name, age, isPass] = details;
// console.log(name);
// console.log(age);
// console.log(isPass);

// const newArray = [details, "Health"];
// console.log(newArray);

// const spredArray = [...details, "health"];
// console.log(spredArray);

// JavaScript Objects
/*
const factObject = {
  name: "John",
  age: 25,
  isPass: false,
  category: "Science",
  summary: function () {
    return `The Name is "${this.name}" and Age is ${this.age} years old `;
  },
};

console.log(factObject);
console.log(factObject.name);
console.log(factObject.isPass);

const { name, age } = factObject;
console.log(name, age);
console.log(factObject.summary());

[1, 5, 7, 9].forEach(function (el) {
  console.log(el);
});

const mapArray = [1, 2, 5, 6].map(function (el) {
  return el * 10;
});
console.log(mapArray);

// Arrow fucntion method:

const mapArray1 = [1, 5, 6, 9].map((el) => el * 20);
console.log(mapArray1);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308#" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const names = CATEGORIES.map((el) => el.name);
const colors = CATEGORIES.map((el) => el.color);
console.log(names);
console.log(colors);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (currentYear > year) return age;
  else "Year is Invalid";
}

const agesOfTheFacts = initialFacts.map((el) => calcAge(el.createdIn));
console.log(agesOfTheFacts);*/

// //filter fucntions - return a new array

// console.log([1, 25, -64, 4, 75].filter((el) => el < 10));

// //find fucntion - Onlye return a first value that match with the fileter condition

// console.log([1, 25, -64, 4, 75].find((el) => el > 10));

console.log(CATEGORIES.find((cat) => cat.name === "science").color);
