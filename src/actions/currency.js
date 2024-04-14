import { EXCHANGE_API_URL } from "../helpers/constants/api";

export async function getAllCurrencies(date) {
  const params = new URLSearchParams();
  if (date) {
    params.append("date", date);
  }
  const url = `${EXCHANGE_API_URL}&${params.toString()}`;

  try {
    const response = await fetch(url);
    return await response.json();
  
  } catch (error) {
    console.log(error);
  }
}
