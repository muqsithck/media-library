import React from "react";
import Button from "./components/button";

function App() {
  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1>React App with Tailwind css</h1>
      <Button onClick={() => console.log("I was clicked")}>
       This is a button
      </Button>
    </div>
  );
}

export default App;