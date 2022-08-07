import "./styles.css";
import text from "./data";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(input);
    const totalCount = text.length - 1;
    if (input <= 0) {
      amount = 1;
    }
    if (input > text.length - 1) {
      amount = totalCount;
    }
    setData(text.slice(0, amount));
    console.log(totalCount);
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <div className="App">
      <h1 className="heading">
        Paragraph <span>Generator</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="enterValue"
          type="number"
          contentEditable
          placeholder="Enter Paragraph Numbers"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Generate
        </button>
      </form>

      {data.map((item, index) => {
        return (
          <p key={index} className="content">
            {item}
          </p>
        );
      })}
    </div>
  );
}
