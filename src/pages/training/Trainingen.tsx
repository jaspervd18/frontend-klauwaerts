import { useState } from "react";
import { QueueListIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import TrainingCard from "../../components/training/TrainingCard";
import useEvents from "../../hooks/useEvents";
import Pagination from "../../components/misc/Pagination";

const Trainingen = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data } = useEvents(month, year);

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={QueueListIcon} text='Trainingen' />
      <div className='mx-auto flex w-60 items-center justify-between gap-2'>
        <Pagination
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
      </div>
      <section className='mt-4 flex flex-col gap-2'>
        {data.events
          ?.sort(
            (a: BasicEvent, b: BasicEvent) =>
              new Date(a.start).getTime() - new Date(b.start).getTime()
          )
          .map((event: BasicEvent) => (
            <TrainingCard key={event.id} {...event} />
          ))}
      </section>
    </>
  );
};

export default Trainingen;
