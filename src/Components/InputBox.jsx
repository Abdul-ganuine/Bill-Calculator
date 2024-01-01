import React, { useContext, useState } from "react";
import styles from "./InputBox.module.css";
import { useTip } from "../Context/TipContext";

function InputBox() {
  const {
    setBill,
    bill,
    enteredTipPercentage,
    setEnteredTipPercentage,
    numOfPeople,
    setTipPercentage,
    setNumberOfPeople,
    handleSubmit,
  } = useTip();
  return (
    <form className={styles.box} onSubmit={handleSubmit}>
      <div className={styles.billBox}>
        <p>Bill</p>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div className={styles.tipSelectionBox}>
        <p>Select Tip %</p>
        <div className={styles.tipBtnBox}>
          <button
            value={5}
            onClick={(e) => setTipPercentage(Number(e.target.value))}
          >
            5%
          </button>
          <button
            value={10}
            onClick={(e) => setTipPercentage(Number(e.target.value))}
          >
            10%
          </button>
          <button
            value={15}
            onClick={(e) => setTipPercentage(Number(e.target.value))}
          >
            15%
          </button>
          <button
            value={25}
            onClick={(e) => setTipPercentage(Number(e.target.value))}
          >
            25%
          </button>
          <button
            value={50}
            onClick={(e) => setTipPercentage(Number(e.target.value))}
          >
            50%
          </button>
          <input
            type="number"
            value={enteredTipPercentage}
            onChange={(e) => setEnteredTipPercentage(Number(e.target.value))}
          />
        </div>
      </div>
      <div className={styles.noOfPeopleBox}>
        <p>Number of People</p>
        <input
          type="text"
          value={numOfPeople}
          onChange={(e) => setNumberOfPeople(Number(e.target.value))}
        />
      </div>
    </form>
  );
}

export default InputBox;
