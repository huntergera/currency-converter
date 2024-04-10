import Button from "../../_components/ui/Button";
import HistoryItem from "./HistoryItem";

export default function HistoryFile() {
  return (
    <section className="py-20">
      <div className="container max-w-4xl py-14 px-12 bg-blue-light">
        <div className="flex justify-between items-center">
          <h3 className="text-h3">Історія конвертації</h3>
          <Button className="bg-blue text-blue-light hover:bg-blue/90 transition-colors">
            Очистити історію
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4 mt-8">
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
          <HistoryItem/>
        </div>
      </div>
    </section>
  );
};
