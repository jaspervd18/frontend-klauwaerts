import { useState } from "react";
import {
  QueueListIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import TrainingCard from "../../components/training/TrainingCard";
import { formatMonthYear } from "../../utils/format";
import useEvents from "../../hooks/useEvents";

const Trainingen = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data } = useEvents(month, year);

  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  //   const { mutateAsync, data: newEvent } = useSaveEvent();

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={QueueListIcon} text='Trainingen' />
      <div className='mx-auto flex w-60 items-center justify-between gap-2'>
        <button onClick={prevMonth}>
          <BackwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
        </button>
        <div className='text-xl font-semibold'>
          {formatMonthYear(month, year)}
        </div>
        <button onClick={nextMonth}>
          <ForwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
        </button>
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
