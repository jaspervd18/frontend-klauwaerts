import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../components/misc/Title";
import BasicCalendar from "../components/calendar/BasicCalendar";
import ErrorIsLoading from "../components/misc/ErrorIsLoading";
import useAll from "../hooks/useAll";
import { Modal } from "../components/misc/Modal";
import { useState } from "react";
import useSaveEvent from "../hooks/useSaveEvent";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [day, setDay] = useState<Date | undefined>(undefined);

  const { isLoading, error, data: events } = useAll<BasicEvent>("events");

  const { mutateAsync, data: newEvent } = useSaveEvent();

  const openModal = async (day: Date) => {
    setModalOpen(true);
    setDay(day);
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
      {modalOpen && (
        <Modal closeModal={closeModal} mutateAsync={mutateAsync} day={day} />
      )}
    </>
  );
};

export default Calendar;
