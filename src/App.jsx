
import { useState } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Students from "./Components/Students";
import Contact from "./Components/Contacts";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <h1>My Class Website</h1>

      <nav>
        <button onClick={() => setPage("Home")}>
          Home
        </button>{" "}

        <button onClick={() => setPage("About")}>
          About
        </button>{" "}

        <button onClick={() => setPage("Students")}>
          Students
        </button>{" "}

        <button onClick={() => setPage("Contact")}>
          Contact
        </button>
      </nav>

      <hr />

      {page === "Home" && <Home className="Software Development" />}

      {page === "About" && <About schoolName="EAV Kivumu TSS" />}

      {page === "Students" && <Students />}

      {page === "Contact" && <Contact />}

      <hr />

      <footer>
        <p>Copyright 2026 My Class Website</p>
      </footer>
    </div>
  );
}

export default App;
