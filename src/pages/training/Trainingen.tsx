import { QueueListIcon } from "@heroicons/react/24/outline";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import Title from "../../components/misc/Title";
import useAll from "../../hooks/useAll";
import TrainingCard from "../../components/training/TrainingCard";

const Trainingen = () => {
  const { isLoading, error, data: events } = useAll<BasicEvent>("events");

  console.log(events);

  //   const { mutateAsync, data: newEvent } = useSaveEvent();

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={QueueListIcon} text='Trainingen' />
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
