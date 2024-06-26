'use client';
import Button from "@/app/_components/ui/Button";
import HistoryItem from "./HistoryItem";
import Loading from "@/app/loading";

import { useHistoryStore } from "@/store/store"

export default function HistoryFile() {
  const { historyList, clearHistoryList, isLoading } = useHistoryStore();

  return (
    <section className="py-20">
      <div className="container max-w-4xl py-14 px-12 bg-blue-light">
        <div className="flex justify-between items-center">
          <h3 className="text-h3">Історія конвертації</h3>
          {!!historyList.length && (
            <Button 
            onClick={clearHistoryList}
            className="bg-blue text-blue-light hover:bg-blue/90 transition-colors">
            Очистити історію
          </Button>
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          !historyList.length ? (
            <p className="font-medium text-20 text-center mt-3">Here will be your conversion history</p>
          ) : (
            <div className="flex flex-wrap gap-x-12 gap-y-4 mt-8">
              {historyList.map(item => 
                <HistoryItem item={item} key={item.id}/>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};
