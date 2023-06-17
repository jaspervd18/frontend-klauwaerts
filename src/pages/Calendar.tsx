import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../components/misc/Title";
import BasicCalendar from "../components/calendar/BasicCalendar";
import ErrorIsLoading from "../components/misc/ErrorIsLoading";
import useAll from "../hooks/useAll";
import { Modal } from "../components/misc/Modal";
import { useState } from "react";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { isLoading, error, data: events } = useAll<BasicEvent>("events");

  const openModal = async () => {
    setModalOpen(true);
  };

  const closeModal = async () => {
    setModalOpen(false);
  };

  if (error || isLoading)
    return <ErrorIsLoading text='events' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={CalendarDaysIcon} text='Kalender' />
      <div className='mt-8'>
        <BasicCalendar events={events} openModal={openModal} />
      </div>
      {modalOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default Calendar;
