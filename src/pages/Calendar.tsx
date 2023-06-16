import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../components/misc/Title";
import BasicCalendar from "../components/calendar/BasicCalendar";
import ErrorIsLoading from "../components/misc/ErrorIsLoading";
import useAll from "../hooks/useAll";

const Calendar = () => {
  const { isLoading, error, data } = useAll<Event>("events");

  console.log(data);

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={CalendarDaysIcon} text='Kalender' />
      <div className='mt-8'>
        <BasicCalendar />
      </div>
    </>
  );
};

export default Calendar;
