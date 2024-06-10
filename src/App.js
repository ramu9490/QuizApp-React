import { useState } from "react";
import Homepage from "./Homepage";
import Questions from "./Questions";
import Result from "./Result";
import css from "./App.css"

function App() {
  const [data, setData] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div>
      {data === "home" && <Homepage setData={setData} />}
      {data === "quest" && <Questions setData={setData} score={score} setScore={setScore} />}
      {data === "rest" && <Result score={score} />}
    </div>
  );
}

export default App;
