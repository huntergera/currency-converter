import MainBanner from "../_components/MainBanner";
import ConverterForm from "./_components/ConverterForm/ConverterForm";
import HistoryFile from "./_components/HistoryFile";

export default function Home() {
  return (
    <>
      <MainBanner />
      <section className="py-20 bg-blue-light">
        <div className="container max-w-4xl py-14 px-12 bg-white">
          <h2 className="text-h2">Конвертер валют</h2>
          <ConverterForm />
        </div>
      </section>
      <HistoryFile />
    </>
  );
}
