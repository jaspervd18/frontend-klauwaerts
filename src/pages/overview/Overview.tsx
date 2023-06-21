import { useState } from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import Pagination from "../../components/misc/Pagination";
import useAll from "../../hooks/useAll";
import OverviewCard from "../../components/overview/OverviewCard";

const Overview = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data } = useAll<Trainer>("trainers");

  if (error || isLoading)
    return <ErrorIsLoading text='overzicht' isLoading={isLoading} />;

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
        {data?.map((trainer: Trainer) => (
          <OverviewCard key={trainer.id} {...trainer} />
        ))}
      </section>
    </>
  );
};

export default Overview;
