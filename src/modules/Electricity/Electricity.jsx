import { Element } from "react-scroll";
import styles from "./electricity.module.scss";
import { useState, useEffect } from "react";

const Electricity = () => {
  const [seconds, setSeconds] = useState(1134147814);

  const formattedNumber = seconds
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  return (
    <Element name="electricity" className={styles.electricitySection}>
      <h2>Electricity we produced for all time</h2>
      <div className={styles.electricitySection_timer}>
        <span>{formattedNumber}</span>
        <p>kWh</p>
      </div>
    </Element>
  );
};

export default Electricity;
