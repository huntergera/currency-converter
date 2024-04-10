const API_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export async function getAllCurrencies() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.log(error)
  }
  throw new Error("Logic error, this will never be reached")
}
