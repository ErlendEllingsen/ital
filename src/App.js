import React, { useState, useEffect } from "react";
import './App.css';

const ItalianNumbersLearning = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const italianNumbers = {
    // Italian numbers from 1 to 100
    // Complete this list with the correct spellings
    1: "uno",
    2: "due",
    3: "tre",
    4: "quattro",
    5: "cinque",
    6: "sei",
    7: "sette",
    8: "otto",
    9: "nove",
    10: "dieci",
    11: "undici",
    12: "dodici",
    13: "tredici",
    14: "quattordici",
    15: "quindici",
    16: "sedici",
    17: "diciassette",
    18: "diciotto",
    19: "diciannove",
    20: "venti",
    21: "ventuno",
    22: "ventidue",
    23: "ventitré",
    24: "ventiquattro",
    25: "venticinque",
    26: "ventisei",
    27: "ventisette",
    28: "ventotto",
    29: "ventinove",
    30: "trenta",
    31: "trentuno",
    32: "trentadue",
    33: "trentatré",
    34: "trentaquattro",
    35: "trentacinque",
    36: "trentasei",
    37: "trentasette",
    38: "trentotto",
    39: "trentanove",
    40: "quaranta",
    41: "quarantuno",
    42: "quarantadue",
    43: "quarantatré",
    44: "quarantaquattro",
    45: "quarantacinque",
    46: "quarantasei",
    47: "quarantasette",
    48: "quarantotto",
    49: "quarantanove",
    50: "cinquanta",
    51: "cinquantuno",
    52: "cinquantadue",
    53: "cinquantatré",
    54: "cinquantaquattro",
    55: "cinquantacinque",
    56: "cinquantasei",
    57: "cinquantasette",
    58: "cinquantotto",
    59: "cinquantanove",
    60: "sessanta",
    61: "sessantuno",
    62: "sessantadue",
    63: "sessantatré",
    64: "sessantaquattro",
    65: "sessantacinque",
    66: "sessantasei",
    67: "sessantasette",
    68: "sessantotto",
    69: "sessantanove",
    70: "settanta",
    71: "settantuno",
    72: "settantadue",
    73: "settantatré",
    74: "settantiquattro",
    75: "settantacinque",
    76: "settantasei",
    77: "settantasette",
    78: "settantotto",
    79: "settantanove",
    80: "ottanta",
    81: "ottantuno",
    82: "ottantadue",
    83: "ottantatré",
    84: "ottantaquattro",
    85: "ottantacinque",
    86: "ottantasei",
    87: "ottantasette",
    88: "ottantotto",
    89: "ottantanove",
    90: "novanta",
    91: "novantuno",
    92: "novantadue",
    93: "novantatré",
    94: "novantaquattro",
    95: "novantacinque",
    96: "novantasei",
    97: "novantasette",
    98: "novantotto",
    99: "novantanove",
    100: "cento"
  };

  // Build the todoNumbers based on italianNumbers
  const [todoNumbers, setTodoNumbers] = useState(Object.keys(italianNumbers));

  useEffect(() => {
    // Initialize the first number (pick random)
    const randomIndex = Math.floor(Math.random() * todoNumbers.length);
    setCurrentNumber(todoNumbers[randomIndex]);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (
      italianNumbers[currentNumber]?.toLowerCase() === inputValue.toLowerCase()
    ) {
      const newTodoNrs = todoNumbers.filter((num) => num !== currentNumber);
      setTodoNumbers(newTodoNrs);
      if (newTodoNrs.length === 0) {
        setCurrentNumber(null);
      } else {
        const randomIndex = Math.floor(Math.random() * newTodoNrs.length);
        setCurrentNumber(newTodoNrs[randomIndex]);
      }
    } else {
      alert("Wrong answer! - Correct is " + italianNumbers[currentNumber]);
      const randomIndex = Math.floor(Math.random() * todoNumbers.length);
      setCurrentNumber(todoNumbers[randomIndex]);
    }
    setInputValue("");
  };

  const setMax = (limit) => {
    return () => {
      const newTodoNrs = Object.keys(italianNumbers).filter(
        (num) => num <= limit
      );
      setTodoNumbers(newTodoNrs);
      const randomIndex = Math.floor(Math.random() * newTodoNrs.length);
      setCurrentNumber(newTodoNrs[randomIndex]);
    };
  };

  return (
    <div className="app-container">
      <h2>Learn Italian Numbers</h2>
      <div className="number-display">
        {currentNumber !== null && <p>Current Number: {currentNumber}</p>}
        <p>Remaining Numbers: {todoNumbers.length}</p>
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Type the Italian number"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(event) => event.key === "Enter" && handleSubmit()}
        />
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
      <hr />
      <div className="control-buttons">
        <p>Change difficulty:</p>
        <button onClick={setMax(20)}>Max 20</button>
        <button onClick={setMax(50)}>Max 50</button>
        <button onClick={setMax(100)}>Max 100</button>
      </div>
    </div>
  );
};

export default ItalianNumbersLearning;
