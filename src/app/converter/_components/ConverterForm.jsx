import InputFile from "../../_components/ui/InputFile";
import Select from "../../_components/ui/Select";
import InputDate from "../../_components/ui/InputDate";
import Image from "next/image";

export default function ConverterForm() {
  return (
    <form className="flex">
      <div>
        <div>В мене є:</div>
        <InputFile />
        <Select />
        <InputDate />
      </div>
      <Image
        src="/images/icons/icon-arrows.svg"
        alt="icon arrows"
        width={22}
        height={22}
      />
      <div>
        <div>Хочу придбати:</div>

      </div>
    </form>
  );
}
