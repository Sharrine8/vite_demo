import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
