import { useState } from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import Pagination from "../../components/misc/Pagination";
import useAll from "../../hooks/useAll";
import OverviewCard from "../../components/overview/OverviewCard";
import useEvents from "../../hooks/useEvents";

const Overview = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const {
    isLoading: loadingTrainers,
    error: errorTrainers,
    data: trainers,
  } = useAll<Trainer>("trainers");
  const {
    isLoading: loadingEvents,
    error: errorEvents,
    data,
  } = useEvents(month, year);

  if (errorTrainers || loadingTrainers)
    return <ErrorIsLoading text='overzicht' isLoading={loadingTrainers} />;

  if (errorEvents || loadingEvents)
    return <ErrorIsLoading text='overzicht' isLoading={loadingEvents} />;

  return (
    <>
      <Title Icon={BanknotesIcon} text='Uitbetalingen' />
      <div className='mx-auto flex w-60 items-center justify-between gap-2'>
        <Pagination
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
        />
      </div>
      <section className='mt-4 flex flex-col gap-2'>
        {trainers?.map((trainer: Trainer) => (
          <OverviewCard
            key={trainer.id}
            name={trainer.name}
            degree={trainer.degree}
            events={data.events.filter(
              (event) => event.trainer?.id === trainer.id
            )}
          />
        ))}
      </section>
    </>
  );
};

export default Overview;
