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
  const [day, setDay] = useState<Date>(new Date());

  const { isLoading, error, data } = useAll<any>("events");

  const { mutateAsync, data: newEvent } = useSaveEvent();

  const openModal = async (day: Date) => {
    setModalOpen(true);
    setDay(day);
  };

  const closeModal = async () => {
    setModalOpen(false);
  };

  if (error || isLoading)
    return <ErrorIsLoading text='kalender' isLoading={isLoading} />;

  return (
    <>
      <Title Icon={CalendarDaysIcon} text='Kalender' />
      <div className='mt-8'>
        <BasicCalendar events={data} openModal={openModal} />
      </div>
      {modalOpen && (
        <Modal closeModal={closeModal} mutateAsync={mutateAsync} day={day} />
      )}
    </>
  );
};

export default Calendar;
