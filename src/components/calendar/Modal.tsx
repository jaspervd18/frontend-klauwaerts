import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import TrainingModal from "./TrainingModal";
import { useState } from "react";
import CompetitionModal from "./CompetitionModal";
import useSaveEvent from "../../hooks/useSaveEvent";

interface ModalProps {
  closeModal: () => void;
  day: Date;
}

export const Modal = ({ closeModal, day }: ModalProps) => {
  const [event, setEvent] = useState("Training");

  const { mutateAsync } = useSaveEvent();

  return (
    <>
      <div className='fixed inset-0 z-10 overflow-y-auto bg-black/30'>
        <div className='flex min-h-screen items-center justify-center'>
          <div className='transform overflow-hidden rounded-lg bg-white transition-all sm:w-full sm:max-w-lg'>
            <div className='p-6'>
              <button
                className='0 absolute right-10 z-10 flex items-center gap-2 rounded-md border bg-gray-200 px-3 py-2 text-black shadow-md hover:bg-gray-300'
                onClick={() =>
                  event === "Training"
                    ? setEvent("Wedstrijd")
                    : setEvent("Training")
                }
              >
                <ArrowsRightLeftIcon className='h-4 w-4 object-contain' />
                <span>{event === "Training" ? "Wedstrijd" : "Training"}</span>
              </button>
              {event === "Training" ? (
                <TrainingModal
                  closeModal={closeModal}
                  mutateAsync={mutateAsync}
                  day={day}
                />
              ) : (
                <CompetitionModal
                  closeModal={closeModal}
                  mutateAsync={mutateAsync}
                  day={day}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
