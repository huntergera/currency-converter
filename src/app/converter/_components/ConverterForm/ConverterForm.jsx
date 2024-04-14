"use client";
import Image from "next/image";
import {useEffect} from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";

import Input from "@/app/_components/ui/Input";
import Select from "@/app/_components/ui/Select";
import InputDate from "@/app/_components/ui/InputDate";
import Button from "@/app/_components/ui/Button";
import LoadingComponent from "@/app/_components/LoadingComponent";

import { useCurrencies } from "./hooks/useCurrencies";
import { validationSchema, defaultValues } from "./form";
import { useHistoryStore } from "@/store/store"

export default function ConverterForm() {
  const { currencies, pending, fetchCurrencies } = useCurrencies();
  const setToHistoryList = useHistoryStore(state => state.setToHistoryList)

  const {
    formState: { errors },
    setValue,
    getValues,
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    setToHistoryList({
      id: uuidv4(),
      date: format(new Date(), "dd.MM.yyyy"),
      amountFrom: `${data.sumFrom} ${data.currencyFrom}`,
      amountTo: `${data.sumTo} ${data.currencyTo}`
    })
  };

  const handleDateChange = () => {
    const valueDate = getValues('date');
    fetchCurrencies(valueDate);
  };

  const recalculateTo = () => {
    const valueSumFrom = getValues('sumFrom');
    const currencyNameFrom = getValues('currencyFrom');
    const currencyNameTo = getValues('currencyTo');
    const currencyRateFrom = currencies.find(currency => currency.cc === currencyNameFrom).rate;
    const currencyRateTo = currencies.find(currency => currency.cc === currencyNameTo).rate;
    const result = valueSumFrom * currencyRateFrom / currencyRateTo;
    setValue('sumTo', Math.round(result * 100) / 100);
  };

  const recalculateFrom = () => {
    const valueSumTo = getValues('sumTo');
    const currencyNameFrom = getValues('currencyFrom');
    const currencyNameTo = getValues('currencyTo');
    const currencyRateFrom = currencies.find(currency => currency.cc === currencyNameFrom).rate;
    const currencyRateTo = currencies.find(currency => currency.cc === currencyNameTo).rate;
    const result = valueSumTo * currencyRateTo / currencyRateFrom;
    setValue('sumFrom', Math.round(result * 100) / 100);
  };

  // const getTo = () => {
  //   return valueSumFrom * currencyRateFrom / currencyRateTo;
  // }

  // const getFrom = () => {
  //   return valueSumTo * currencyRateTo / currencyRateFrom;
  // }

  // const recalculate = (cb) => {
  //   const valueSumTo = getValues('sumTo');
  //   const currencyNameFrom = getValues('currencyFrom');
  //   const currencyNameTo = getValues('currencyTo');
  //   const currencyRateFrom = currencies.find(x => x.cc === currencyNameFrom).rate;
  //   const currencyRateTo = currencies.find(x => x.cc === currencyNameTo).rate;
  //   const result = cb()
  //   setValue('sumFrom', Math.round(result * 10000) / 10000);
  // };

  useEffect(() => {
    if (currencies.length) recalculateTo();
  }, [currencies]);

  if(pending) {
    return <LoadingComponent />
  }

  return (
    <div className="mt-16 relative">
       {/* {pending && <LoadingComponent />} */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-x-9 justify-between items-start"
      >
        <div className="w-6/12">
          <div className="text-gray font-medium text-20">В мене є:</div>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-6 items-start">
            <Input
              className="w-full max-w-56 h-14"
              name="sumFrom"
              register={register}
              placeholder="100"
              error={errors.sumFrom?.message}
              type="number"
              onChange={recalculateTo}
              step="0.01"
            />
            <Select
              className="w-full max-w-28 h-14"
              name="currencyFrom"
              displayField="cc"
              valueField="cc"
              register={register}
              options={currencies}
              onChange={recalculateTo}
              error={errors.currencyFrom}
            />
            <InputDate
              name="date"
              register={register}
              className="w-full max-w-56 h-14"
              error={errors.date}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <Image
          src="/images/icons/icon-arrows.svg"
          alt="icon arrows"
          width={22}
          height={22}
          className="mt-[70px]"
        />
        <div className="w-6/12">
          <div className="text-gray font-medium text-20">Хочу придбати:</div>
          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-6 justify-end items-start">
            <Input
              className="w-full max-w-56"
              name="sumTo"
              register={register}
              placeholder="100"
              error={errors.sumTo}
              onChange={recalculateFrom}
              type="number"
              step="0.01"
            />
            <Select
              className="w-full max-w-28"
              name="currencyTo"
              displayField="cc"
              valueField="cc"
              register={register}
              onChange={recalculateFrom}
              options={currencies}
              error={errors.currencyTo}
            />
            <Button
              type="submit"
              className="bg-blue text-blue-light hover:bg-blue/90 transition-colors w-full max-w-56 self-end"
            >
              Зберегти результат
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
