import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../services/getCoins";




export function useGetCoins(coin: string, period: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchData', coin, period],
    queryFn: () => getCoins(coin, period),
    staleTime: 30000
  });
  

  return { data, error, isLoading };
}
