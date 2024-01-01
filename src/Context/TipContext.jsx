import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const TipContext = createContext();

function TipProvider({ children }) {
  const [tipPercentage, setTipPercentage] = useState(0);
  const [enteredTipPercentage, setEnteredTipPercentage] = useState(0);
  const [bill, setBill] = useState(0);
  const [numOfPeople, setNumberOfPeople] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState("");
  const [totalPerPerson, setTotalPerPerson] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const tipPP = enteredTipPercentage
      ? ((enteredTipPercentage / 100) * bill) / 2
      : ((tipPercentage / 100) * bill) / 2;
    const totalPP = (tipPP + bill) / numOfPeople;
    setTipPerPerson(tipPP);
    setTotalPerPerson(totalPP);
  }

  function handleReset() {
    setBill("");
    setEnteredTipPercentage("");
    setTipPercentage("");
    setTotalPerPerson("");
    setTipPerPerson("");
    setNumberOfPeople(1);
  }
  return (
    <TipContext.Provider
      value={{
        tipPercentage,
        setTipPercentage,
        enteredTipPercentage,
        setEnteredTipPercentage,
        bill,
        setBill,
        numOfPeople,
        setNumberOfPeople,
        handleSubmit,
        tipPerPerson,
        totalPerPerson,
        handleReset,
      }}
    >
      {children}
    </TipContext.Provider>
  );
}

function useTip() {
  const context = useContext(TipContext);
  return context;
}
export { TipProvider, useTip };
