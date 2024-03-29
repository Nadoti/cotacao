import { useQuery } from "@tanstack/react-query";
import { getAllCoins } from "../services/getAllCoins";


export function useGetAllCoins() {
  const { data } = useQuery({
    queryKey: ['allCoins'],
    queryFn: () => getAllCoins(),
    staleTime: 30000
  });
  
  const dolar = data?.USDBRL.high
  const euro = data?.EURBRL.high
  const bitcoin = data?.BTCBRL.high

  return { dolar, euro, bitcoin };
}
