import { z } from "zod";
import { format } from "date-fns";

export const ukrOption = {
  cc: "UAH",
  rate: 1,
  txt: "UAH",
};

export const validationSchema = z.object({
  sumFrom: z.number().min(0.01),
  sumTo: z.number().positive(),
  currencyFrom: z.string(),
  currencyTo: z.string(),
  date: z.string(),
});

export const defaultValues = {
  sumFrom: "",
  sumTo: "",
  currencyFrom: "UAH",
  currencyTo: "USD",
  date: format(new Date(), "yyyy-MM-dd"),
};
