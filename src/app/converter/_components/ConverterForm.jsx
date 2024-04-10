"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import { useForm, useController } from "react-hook-form";

import InputFile from "../../_components/ui/InputFile";
import Select from "../../_components/ui/Select";
import InputDate from "../../_components/ui/InputDate";
import Button from "../../_components/ui/Button";

// import {options} from "../../../constants";
import {getAllCurrencies} from "../../../actions/currency";

export default function ConverterForm() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const data = await getAllCurrencies();
        setCurrencies(data);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    }
    fetchCurrencies();
  }, []);

  const {register,control, handleSubmit,} = useForm();

  const { field } = useController({name: 'currency', control })
  const onSubmit = (data) => console.log(data)

  console.log(currencies)

  const handleSelectChange =(option) => {
    field.onChange(option.value)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-x-9 mt-16 justify-between items-start"
    >
      <div className="w-6/12">
        <div className="text-gray font-medium text-20">В мене є:</div>
        <div className="mt-7 flex flex-wrap gap-x-4 gap-y-6">
          <InputFile
            {...register("sum1")}
            className="w-full max-w-56 h-14"
            placeholder="100"
          />
          <Select
            className="w-full max-w-28 h-14"
            options={currencies}
            onChange={handleSelectChange}
          />
          <InputDate
            {...register("date")}
            className="w-full max-w-56 h-14"
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
          <InputFile
            {...register("sum2")}
            className="w-full max-w-56"
            placeholder="100"
          />
          <Select
            value={field.value}
            className="w-full max-w-28"
            onChange={handleSelectChange}
            options={currencies}
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
