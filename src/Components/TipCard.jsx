import React from "react";
import styles from "./TipCard.module.css";

function TipCard({ children }) {
  return <div className={styles.tipCard}>{children}</div>;
}

export default TipCard;
