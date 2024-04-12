"use client";
import Image from "next/image";
import {useEffect} from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import Input from "../../../_components/ui/Input";
import Select from "../../../_components/ui/Select";
import InputDate from "../../../_components/ui/InputDate";
import Button from "../../../_components/ui/Button";
import LoadingComponent from "../../../_components/LoadingComponent";

import { useCurrencies } from "./hooks/useCurrencies";
import { validationSchema, defaultValues } from "./form";

export default function ConverterForm() {
  const { currencies, pending, fetchCurrencies } = useCurrencies();

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

  const onSubmit = (data) => console.log(data);

  const handleDateChange = () => {
    const valueDate = getValues('date');
    fetchCurrencies(valueDate);
  };

  const recalculateTo = () => {
    const valueSumFrom = getValues('sumFrom');
    const currencyNameFrom = getValues('currencyFrom');
    const currencyNameTo = getValues('currencyTo');
    const currencyRateFrom = currencies.find(x => x.cc === currencyNameFrom).rate;
    const currencyRateTo = currencies.find(x => x.cc === currencyNameTo).rate;
    const result = valueSumFrom * currencyRateFrom / currencyRateTo;
    setValue('sumTo', Math.round(result * 10000) / 10000);
  };

  const recalculateFrom = () => {
    const valueSumTo = getValues('sumTo');
    const currencyNameFrom = getValues('currencyFrom');
    const currencyNameTo = getValues('currencyTo');
    const currencyRateFrom = currencies.find(x => x.cc === currencyNameFrom).rate;
    const currencyRateTo = currencies.find(x => x.cc === currencyNameTo).rate;
    const result = valueSumTo * currencyRateTo / currencyRateFrom;
    setValue('sumFrom', Math.round(result * 10000) / 10000);
  };

  useEffect(() => {
    if (currencies.length) recalculateTo();
  }, [currencies]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-x-9 mt-16 justify-between items-start relative"
    >
      {pending && <LoadingComponent />}

      <div className="w-6/12">
        <div className="text-gray font-medium text-20">В мене є:</div>
        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-6">
          <Input
            className="w-full max-w-56 h-14"
            name="sumFrom"
            register={register}
            placeholder="100"
            error={errors.sumFrom}
            valueAsNumber
            onChange={recalculateTo}
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
        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-6 justify-end">
          <Input
            className="w-full max-w-56"
            name="sumTo"
            register={register}
            placeholder="100"
            error={errors.sumTo}
            onChange={recalculateFrom}
            valueAsNumber
          />
          <Select
            className="w-full max-w-28"
            name="currencyTo"
            displayField="cc"
            valueField="cc"
            register={register}
            // value={field.value}
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
  );
}
