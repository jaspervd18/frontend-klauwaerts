import { useState } from "react";
import { QueueListIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import TrainingCard from "../../components/training/TrainingCard";
import useEvents from "../../hooks/useEvents";
import Pagination from "../../components/misc/Pagination";
import { useNavigate } from "react-router-dom";

const Trainingen = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data } = useEvents(month, year);
  const navigate = useNavigate();

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={QueueListIcon} text='Trainingen' />
      <Pagination
        setMonth={setMonth}
        setYear={setYear}
        month={month}
        year={year}
      />
      {data.events.length === 0 ? (
        <EmptyTrainingen />
      ) : (
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
      )}
    </>
  );
};

const EmptyTrainingen = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-8'>
      <h2 className='mb-4 text-xl'>
        Er zijn geen trainingen voor deze maand...
      </h2>
      <button className='btn-primary' onClick={() => navigate("/")}>
        Training toevoegen
      </button>
    </div>
  );
};

export default Trainingen;
