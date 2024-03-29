import { ChangeEvent } from "react";
import styles from "./period-coins.module.css"

interface PeriodCoinsProps {
  handleCoinsChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handlePeriodChange: (e: ChangeEvent<HTMLInputElement>) => void;
  period: string;
  coin: string;
}

export function PeriodCoins({ handleCoinsChange, handlePeriodChange, period, coin }: PeriodCoinsProps) {
  return (
    <div className={styles.containerPeriod}>
      <select className={styles.select} value={coin} onChange={handleCoinsChange}>
        <option value="USD-BRL">Dolar</option>
        <option value="EUR-BRL">Euro</option>
        <option value="BTC-BRL">Bitcoin</option>
      </select>
      <label className={`${period === "4" ? `${styles.label} ${styles.labelActive}` : styles.label}`}>
        <input
          className={styles.btnPeriod}
          type="radio"
          value="4"
          checked={period === '4'}
          onChange={handlePeriodChange}
        />
        3D
      </label>
      <label className={`${period === "7" ? `${styles.label} ${styles.labelActive}` : styles.label}`}>
        <input
          className={styles.btnPeriod}
          type="radio"
          value="7"
          checked={period === '7'}
          onChange={handlePeriodChange}
        />
        5D
      </label>
      <label className={`${period === "17" ? `${styles.label} ${styles.labelActive}` : styles.label}`}>
        <input
          className={styles.btnPeriod}
          type="radio"
          value="17"
          checked={period === '17'}
          onChange={handlePeriodChange}
        />
        15D
      </label>
      <label className={`${period === "30" ? `${styles.label} ${styles.labelActive}` : styles.label}`}>
        <input
          className={styles.btnPeriod}
          type="radio"
          value="30"
          checked={period === '30'}
          onChange={handlePeriodChange}
        />
        1M
      </label>
    </div>
  )
}