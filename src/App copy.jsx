import React, { useEffect } from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import TipCard from "./Components/TipCard";
import InputBox from "./Components/InputBox";
import TipDisplayInfo from "./Components/TipDisplayInfo";
import { useState } from "react";

function App() {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [enteredTipPercentage, setEnteredTipPercentage] = useState(0);
  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumberOfPeople] = useState(0);

  // if (tipPercentage || enteredTipPercentage) {
  //   const tip = enteredTipPercentage
  //     ? bill * (enteredTipPercentage / 100)
  //     : bill * (tipPercentage / 100);
  //   console.log(tip);
  // }
  return (
    <Main>
      <Header />
      <TipCard>
        <InputBox
          setTipPercentage={setTipPercentage}
          enteredTipPercentage={enteredTipPercentage}
          setEnteredTipPercentage={setEnteredTipPercentage}
          bill={bill}
          setBill={setBill}
          numOfPeople={numOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
        <TipDisplayInfo />
      </TipCard>
    </Main>
  );
}

export default App;
