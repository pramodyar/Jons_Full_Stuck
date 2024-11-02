import "./style.css";
import { useState } from "react";

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

function APP() {
  // 1. Define state variable
  const [visible, setVisibility] = useState(true);

  return (
    <>
      <Header visible={visible} setVisibility={setVisibility} />
      {/* 2. use state variable */}
      {visible ? <NewFactForm /> : null}
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>

      {/*  //////////This is for  the testing perpose: /////////////////////// */}
      {/* 
      <Counter /> 
      <Hide /> 
      */}
      {/*  //////////////////////////////////////////// /////////////////////// */}
    </>
  );
}

function Header({ visible, setVisibility }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned" />
        <h1>Fact Finder</h1>
      </div>
      <button
        className="btn btn-large fact-btn"
        //3. update state variable (This part is really necessary to re-render the react compononts, thsis a functin definition and not a function call )
        onClick={() => setVisibility((cur) => !cur)}
      >
        {visible ? "Close" : "Sahre a Fact"}
      </button>
    </header>
  );
}

//FACT FORM
function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

// FILETER BUTTONS
function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-all-categories">ALL</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li className="Category" key={cat.name}>
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

//FACT LIST
function FactList() {
  //temp veriable
  const fact = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {/*//   {} <--- This enabled Java script mode in JSX , 
        if you want to write JS code inside in JSX, should use: {your_JS_code }*/}

        {fact.map((el) => (
          <Fact fact={el} key={el.id} /> //passing values via props
        ))}
      </ul>
      <p>Thre are {fact.length} facts in the Databse, add your-own!</p>
    </section>
  );
}

function Fact({ fact }) {
  //////////// //☝this is equivilent to:  const {fact} = props
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default APP;

/////// simple count function for learn Ract 'State' concept

// function Counter() {
//   const [state, setCount] = useState(0); // useState() returns an array: [state_value, function]

//   return (
//     <div>
//       <span style={{ fontSize: "24px" }}>Count:{state} </span>
//       <button
//         className="btn btn-large"
//         onClick={() => setCount((current) => current + 1)}
//       >
//         Click ME!
//       </button>
//     </div>
//   );
// }

// function Hide() {
//   const [state, setVisibility] = useState(false); // useState() returns an array: [state_value, function]
//   return (
//     <div>
//       {state ? (
//         <span style={{ fontSize: "24px" }}>THIS IS SIMPE FORM FIELD</span>
//       ) : null}

//       <button
//         className="btn btn-large"
//         onClick={() => setVisibility((cur) => !cur)}
//       >
//         Click ME!
//       </button>
//     </div>
//   );
// }
