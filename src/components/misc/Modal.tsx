import { useForm, SubmitHandler } from "react-hook-form";

interface EventInput {
  title: string;
  start: Date;
  end: Date;
}

export const Modal = ({ closeModal }: { closeModal: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventInput>();

  const onSubmit: SubmitHandler<EventInput> = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <>
      <div className='fixed inset-0 z-10 overflow-y-auto bg-black/30'>
        <div className='flex min-h-screen items-center justify-center'>
          <div className='transform overflow-hidden rounded-lg bg-white transition-all sm:w-full sm:max-w-lg'>
            <div className='p-6'>
              <div className='mb-1 text-lg font-medium text-gray-900'>
                Nieuwe training inplannen
              </div>
              <div className='mb-4 text-sm text-gray-500'>
                Vul onderstaande velden correct in.
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Titel</label>
                  <input
                    type='number'
                    placeholder='Titel'
                    {...register("title", {
                      required: "Titel is verplicht",
                    })}
                    aria-invalid={errors?.title ? "true" : "false"}
                  />
                  <p className='h-5 text-sm text-gray-400 empty:invisible'>
                    {errors?.title?.message}
                  </p>
                </div>
                <div>
                  <label>Start</label>
                  <input
                    type='date'
                    placeholder='start'
                    {...register("start", {
                      required: "Start is verplicht",
                    })}
                    aria-invalid={errors?.start ? "true" : "false"}
                  />
                  <p className='h-5 text-sm text-gray-400 empty:invisible'>
                    {errors?.start?.message}
                  </p>
                </div>
                <div>
                  <label>End</label>
                  <input
                    type='date'
                    placeholder='End'
                    {...register("end", {
                      required: "Einde is verplicht",
                    })}
                    aria-invalid={errors?.end ? "true" : "false"}
                  />
                  <p className='h-5 text-sm text-gray-400 empty:invisible'>
                    {errors?.end?.message}
                  </p>
                </div>
                <div className='mt-4 flex justify-end gap-6'>
                  <button
                    onClick={closeModal}
                    className='inline-flex w-full rounded-md py-2 text-base font-medium text-gray-400 hover:text-gray-600 sm:ml-0 sm:w-auto sm:text-sm'
                  >
                    Annuleer
                  </button>
                  <button
                    className='inline-flex w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-0 sm:w-auto sm:text-sm'
                    type='submit'
                  >
                    Verifieer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
