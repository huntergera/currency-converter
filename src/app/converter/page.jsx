import MainBanner from "../_components/MainBanner";
import ConverterForm from "./_components/ConverterForm";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <div className="py-20 bg-blue-light">
        <div className="container max-w-4xl py-14 px-12">
          <h2 className="text-h2">Конвертер валют</h2>
          <ConverterForm />
        </div>
      </div>
    </div>
  );
}
