import { useState } from "react";
import { QueueListIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import useEvents from "../../hooks/useEvents";
import Pagination from "../../components/misc/Pagination";
import { useNavigate } from "react-router-dom";
import EventCard from "../../components/training/EventCard";

const Events = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data } = useEvents(month, year);

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
        <EmptyEvents />
      ) : (
        <section className='mt-4 flex flex-col gap-2'>
          {data.events
            ?.sort(
              (a: BasicEvent, b: BasicEvent) =>
                new Date(a.start).getTime() - new Date(b.start).getTime()
            )
            .map((event: BasicEvent) => (
              <EventCard key={event.id} {...event} />
            ))}
        </section>
      )}
    </>
  );
};

const EmptyEvents = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-8'>
      <h2 className='mb-4 text-xl'>
        Er zijn geen trainingen/wedstrijden voor deze maand...
      </h2>
      <button className='btn-primary' onClick={() => navigate("/")}>
        Training/Wedstrijd toevoegen
      </button>
    </div>
  );
};

export default Events;
