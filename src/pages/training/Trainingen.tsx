import { useState } from "react";
import {
  QueueListIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import useAll from "../../hooks/useAll";
import TrainingCard from "../../components/training/TrainingCard";
import { formatMonthYear } from "../../utils/format";

const Trainingen = () => {
  const [maand, setMaand] = useState(new Date().getMonth() + 1);
  const [jaar, setJaar] = useState(new Date().getFullYear());

  const { isLoading, error, data: events } = useAll<BasicEvent>("events");

  const vorigeMaand = () => {
    if (maand === 1) {
      setMaand(12);
      setJaar(jaar - 1);
    } else {
      setMaand(maand - 1);
    }
  };

  const volgendeMaand = () => {
    if (maand === 12) {
      setMaand(1);
      setJaar(jaar + 1);
    } else {
      setMaand(maand + 1);
    }
  };

  //   const { mutateAsync, data: newEvent } = useSaveEvent();

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={QueueListIcon} text='Trainingen' />
      <div className='mx-auto flex w-60 items-center justify-between gap-2'>
        <button onClick={vorigeMaand}>
          <BackwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
        </button>
        <div className='text-xl font-semibold'>
          {formatMonthYear(maand, jaar)}
        </div>
        <button onClick={volgendeMaand}>
          <ForwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
        </button>
      </div>
      <section className='mt-4 flex flex-col gap-2'>
        {events
          ?.sort(
            (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
          )
          .map((event) => (
            <TrainingCard key={event.id} {...event} />
          ))}
      </section>
    </>
  );
};

export default Trainingen;
