import { Header } from "../Header"
import styles from "./home.module.css"
import { VictoryChart, VictoryLabel, VictoryLine, VictoryTheme} from "victory"

import { useGetCoins } from "../../hooks/useGetCoins";
import { ChangeEvent, useState } from "react";
import LoadingSpinner from "../Loading";
import { WrapperCoins } from "../WrapperCoins";
import { PeriodCoins } from "../PeriodCoins";

function converMoney(money: string) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(parseFloat(money))
}

export function Home() {
  const [coin, setCoin] = useState("USD-BRL")
  const [period, setPeriod] = useState("7")

  const {data, isLoading} = useGetCoins(coin, period)
  
  function handleCoinsChange({ target}: ChangeEvent<HTMLSelectElement>) {
    setCoin(target.value)
  }

  function handlePeriodChange({ target }: ChangeEvent<HTMLInputElement>) {
    setPeriod(target.value);
  }

  const formattedData = data?.map((item: any) => ({
    x: new Date(parseInt(item.timestamp) * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    y: parseFloat(item.high)
  }));

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <WrapperCoins />
          
          {isLoading 
              ? (
                <LoadingSpinner />
              ) 
              : (
                <div className={styles.containerGraph}>
                  <PeriodCoins handleCoinsChange={handleCoinsChange} handlePeriodChange={handlePeriodChange} period={period} coin={coin}/>
                  
                  <VictoryChart
                    theme={VictoryTheme.material}
                    width={1200}
                    height={600}
                  >
                    <VictoryLabel style={{fontSize: "30px"}} text={data[0]?.name} x={50} y={10} textAnchor="start" />
                    <VictoryLine
                      labels={({ datum }) => converMoney(datum.y)}

                      style={{
                        data: { stroke: "#bf1f2c", width: "100%" },
                        parent: { border: "1px solid #ccc"}
                      }}
                      animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }} 

                      data={formattedData}
                    />
                  </VictoryChart>
                  
                </div>
              )}
        </div>
      </div>
    </div>
  )
}
