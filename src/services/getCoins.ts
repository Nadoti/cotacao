import { api } from "./axios";




export async function getCoins(coin: string, period: string) {
  try {
    const response = await api.get(`/json/daily/${coin}/${period}`) 
    return response.data;
  } catch (error) {
    return error
  }
}