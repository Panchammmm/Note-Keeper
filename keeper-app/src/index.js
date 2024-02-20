import React from "react";
import ReactDOM from "react-dom";

const year = new Date().getFullYear();

ReactDOM.render(
  <html>
    <body>
      <header>
        <h1> Keeper </h1>
      </header>

      <div className="note">
        <h1> This is the note tittle </h1>
        <p> this is the note content</p>
      </div>

      <footer>
        <p> Copyright {year} </p>
      </footer>
    </body>
  </html>,
  document.getElementById('root')
);
