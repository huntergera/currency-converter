import { useEffect, useState } from 'react';

import { getAllCurrencies } from "@/actions/currency";
import { ukrOption } from '../form';

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [pending, setPending] = useState(false);

  const compareByProp = (prop) => (a, b) => a[prop].localeCompare(b[prop]);

  const fetchCurrencies = async date => {
    try {
      setPending(true);
      const data = await getAllCurrencies(date?.replace(/-/g, ""));
      setCurrencies(() => [ukrOption, ...data].sort(compareByProp('cc')));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return { currencies, pending, fetchCurrencies };
};
