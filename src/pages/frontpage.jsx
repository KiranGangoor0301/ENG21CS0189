import React, { useState } from "react";
import axios from "axios";
import "./frontpage.css";

function FrontPage() {
  const [numberId, setNumberId] = useState("e");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [average, setAverage] = useState(null);

  const fetchNumbers = async () => {
    try {
      setError(null);
      const res = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      const numbers = res.data;
      setResponse(numbers);
      // Calculate average
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      const avg = sum / numbers.length;
      setAverage(avg);
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Average Calculator</h1>
        <div>
          <label>
            Select Number Type:
            <select
              value={numberId}
              onChange={(e) => setNumberId(e.target.value)}
            >
              <option value="p">Prime</option>
              <option value="f">Fibonacci</option>
              <option value="e">Even</option>
              <option value="r">Random</option>
            </select>
          </label>
          <button onClick={fetchNumbers}>Fetch Numbers</button>
        </div>
        {error && <p className="error">{error}</p>}
        {response && (
          <div className="response">
            <h2>Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {average !== null && (
          <div className="average">
            <h2>Average</h2>
            <p>{average}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default FrontPage;
