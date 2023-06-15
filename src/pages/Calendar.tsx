import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../components/misc/Title";
import BasicCalendar from "../components/calendar/BasicCalendar";

const Calendar = () => {
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
