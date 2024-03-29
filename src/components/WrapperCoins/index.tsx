import { Card } from "../Card";
import { FaEuroSign } from "react-icons/fa";
import { MdCurrencyBitcoin } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import styles from "./wrapper-coins.module.css"
import { useGetAllCoins } from "../../hooks/useGetAllCoins";

export function WrapperCoins() {

  const {dolar, euro, bitcoin} = useGetAllCoins()

  return (
    <div className={styles.containerCard}>
      <Card icon={FaDollarSign } title="Dolar" money={dolar} />
      <Card icon={FaEuroSign} title="Euro" money={euro} />
      <Card icon={MdCurrencyBitcoin } title="Bitcoin" money={bitcoin} />
    </div>
  )
}