const formButton = document.querySelector("#form-button");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

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

factList.innerHTML = "";

// Control visibilty of the Form section

formButton.addEventListener("click", function () {
  const isHidden = form.classList.contains("hidden");
  if (isHidden) {
    form.classList.remove("hidden");
    formButton.innerHTML = "Close";
  } else {
    form.classList.add("hidden");
    formButton.innerHTML = "Share a fact";
  }
});

// Get Data form server

loadFacts();

/// This is must be an Async Function
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
  //covert data to readable JSON format
  const data = await res.json();

  dataArray(data);
}

// Process the fetching data

function dataArray(data) {
  const html = data.map(
    (e) => `<li class="fact">
            <p>
              ${e.text}<a
                class="source"
                href=${e.source}
                target="_blank"
                >(Source)</a
              >
            </p>
            <span class="tag " style="background-color:${
              CATEGORIES.find((cl) => cl.name == e.category).color
            }" >${e.category}</span>
            <div class="vote-buttons">
              <button class="vote-button">👍&nbsp;${e.votesInteresting}</button>
              <button class="vote-button">🤯&nbsp;${e.votesMindblowing}</button>
              <button class="vote-button">⛔️&nbsp;${e.votesFalse}</button>
            </div>
          </li>`
  );

  // Putting Element array to one element
  // Method 01
  html.forEach((el) => factList.insertAdjacentHTML("beforeend", el));

  // Method 2
  //   const allHtml = html.join("");
  //   factList.insertAdjacentHTML("beforeend", allHtml);
}

// This is what is want from thos ecoleres and this is simpe an raaa
