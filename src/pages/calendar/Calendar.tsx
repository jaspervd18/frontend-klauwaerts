import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../../components/misc/Title";
import BasicCalendar from "../../components/calendar/BasicCalendar";
import ErrorIsLoading from "../../components/misc/ErrorIsLoading";
import { Modal } from "../../components/calendar/Modal";
import { useState } from "react";
import useEvents from "../../hooks/useEvents";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const { isLoading, error, data: events } = useEvents(month, year);

  const openModal = async (day: Date) => {
    setModalOpen(true);
    setSelectedDay(day);
  };

  const closeModal = async () => {
    setModalOpen(false);
  };

  if (isLoading || error)
    return <ErrorIsLoading text='kalender' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={CalendarDaysIcon} text='Kalender' />
      <div className='mt-8'>
        <BasicCalendar
          events={events.events}
          openModal={openModal}
          setMonth={setMonth}
          setYear={setYear}
        />
      </div>
      {modalOpen && <Modal closeModal={closeModal} day={selectedDay} />}
    </>
  );
};

export default Calendar;
