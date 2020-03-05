import React from "react";
import Button from "./components/button";

function App() {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>React Js with Tailwind Css</h1>
      <Button onClick={() => console.log("I was clicked")}>
        <a href="https://tailwindcss.com/docs" target='_blank'> Tailwind Css </a>
      </Button>
      <Button onClick={() => console.log("I was clicked")}>
        <a href="https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/" target='_blank'>Setting Up</a>
      </Button>
    </div>
  );
}

export default App;