import { ComponentType } from "react";
import styles from "./card.module.css"
interface CardProps  {
  title: string;
  money: string;
  icon: ComponentType<{ size: number, color: string }>; 
}

export function Card({ icon: Icon, title, money }: CardProps) {
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Icon size={30} color="#21518B" />
        <span className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p>{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(parseFloat(money))}</p>
        </span>
      </div>
      <p className={styles.today}>Hoje</p>
    </div>
  )
}