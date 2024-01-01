import React from "react";
import styles from "./TipDisplayInfo.module.css";
import { useTip } from "../Context/TipContext";

function TipDisplayInfo() {
  const { tipPerPerson, totalPerPerson, handleReset } = useTip();
  return (
    <div className={styles.box}>
      <div className={styles.amountDisplay}>
        <div className={styles.row}>
          <p className={styles.rowText}>
            Tip Amount <br /> <span className={styles.person}>/ person</span>
          </p>
          <p className={styles.num}>${tipPerPerson ? tipPerPerson : "0.00"}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.rowText}>
            Total <br /> <span className={styles.person}>/ person</span>
          </p>
          <p className={styles.num}>
            ${totalPerPerson ? totalPerPerson : "0.00"}
          </p>
        </div>
      </div>
      <button className={styles.reset} onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}

export default TipDisplayInfo;
