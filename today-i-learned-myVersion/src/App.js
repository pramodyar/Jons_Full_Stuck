import { useState } from "react";
import "./style.css";

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

function APP() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header visible={visible} setVisible={setVisible} />
      {/* <Counter /> */}
      {visible ? <FactForm /> : null}
      <main className="main">
        <CategoryList />
        <FactList />
      </main>
    </>
  );
}

// function Counter() {
//   const [count, setCount] = useState(10); //useState() itself a funtion  and it returns and array

//   return (
//     <div>
//       <span style={{ fontSize: "40px" }}>{count}</span>
//       <button
//         className="btn btn-large"
//         onClick={() => setCount((currentCount) => currentCount + 1)}
//       >
//         +
//       </button>
//       <button
//         className="btn btn-large"
//         onClick={() => setCount((currentCount) => currentCount - 1)}
//       >
//         -
//       </button>
//       <button className="btn btn-large" onClick={() => setCount(0)}>
//         reset
//       </button>
//     </div>
//   );
// }

function Header({ visible, setVisible }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="" />
          <h1>The Fact Checker</h1>
        </div>
        <button
          className="btn btn-large"
          id="form-button"
          onClick={() => setVisible(!visible)} // setVisible((show) => !show)) 'show' represent the current status
        >
          {visible ? "Close" : "share a fact"}
        </button>
      </header>
    </>
  );
}

function FactForm() {
  return (
    <form className="fact-form">
      <input
        type="text"
        name=""
        id=""
        placeholder="Share a fact with world..."
      />
      <span className="word-counter">200</span>
      <input type="text" name="" id="" placeholder="Trustworthy Source..." />
      <select name="" id="">
        <option value="">Choose Category:</option>
        <option value="">Technology</option>
        <option value="">Science</option>
        <option value="">Finance</option>
      </select>
      <button className="btn btn-large" type="submit">
        Submit
      </button>
    </form>
  );
}

function CategoryList() {
  const categoryList = CATEGORIES;
  return (
    <aside>
      <ul className="Category-list">
        <li className="category-items">
          <button className="btn btn-category-all category-button">ALL</button>
        </li>
        {categoryList.map((cat) => (
          <CategoryButton key={cat.name} cat={cat} />
        ))}
      </ul>
    </aside>
  );
}

function CategoryButton({ cat }) {
  return (
    <li className="category-items">
      <button
        className="btn btn-category"
        style={{ backgroundColor: cat.color }}
      >
        {cat.name}
      </button>
    </li>
  );
}

function FactList() {
  const factItems = initialFacts;

  return (
    <section>
      <ul className="Category-list">
        {factItems.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>There are {factItems.length} Facts in the Database.</p>
    </section>
  );
}

function Fact({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}{" "}
        <a
          className="source"
          target="_blank"
          rel="noreferrer"
          href={fact.source}
        >
          (Source){" "}
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cl) => fact.category === cl.name)
            .color,
        }}
      >
        {fact.category}
      </span>
    </li>
  );
}

export default APP;
