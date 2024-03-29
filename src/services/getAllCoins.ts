import { api } from "./axios";


export async function getAllCoins() {
  try {
    const response = await api.get(`/last/USD-BRL,EUR-BRL,BTC-BRL`) 
    return response.data;
  } catch (error) {
    return error
  }
}