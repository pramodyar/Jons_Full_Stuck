import "./style.css";

function APP() {
  return (
    <>
      {/*  HEADER */}
      <Header />
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

// HEADER
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large fact-btn">Share a fact</button>
    </header>
  );
}

//FACT FORM
function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

// FILETER BUTTONS
function CategoryFilter() {
  return <aside>Category Buttons</aside>;
}

//FACT LIST
function FactList() {
  return <section>Facts</section>;
}

export default APP;
