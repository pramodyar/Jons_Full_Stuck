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

// THIS IS FOR THE TESTING...................................................

let votesInteresting = 20;
let votesMindBlowing = 5;
let votesFalse = 16;

let totalUpVotes = votesInteresting + votesMindBlowing;

const message =
  totalUpVotes > votesFalse
    ? "The Fact is True"
    : "The Fact is most likley falsy, check more sources!";

console.log(message);

const str = "Lisbon is the capitol of the portugal";
const temp_str = `Current fact is "${str.toUpperCase()}"`;
console.log(temp_str);

//Arrow functions

function calcAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age > 0) {
    return age;
  } else {
    return "Impposible Birth Year ";
  }
}

const myAge = calcAge(2024);
console.log(myAge);

const arrowAge = (year) =>
  new Date().getFullYear() >= year
    ? new Date().getFullYear() - year
    : `The year ${year} not posisble, pls chek the year!`;

console.log(arrowAge(2027));
