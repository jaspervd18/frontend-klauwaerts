import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

interface EventInput {
  title: string;
  start: string;
  end: string;
}

export const Modal = ({
  closeModal,
  mutateAsync,
  day,
}: {
  closeModal: () => void;
  mutateAsync: UseMutateAsyncFunction<BasicEvent, unknown, SaveEvent, unknown>;
  day: Date;
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventInput>();

  const onSubmit: SubmitHandler<EventInput> = (data) => {
    const start = new Date(day);

    start.setHours(Number(data.start.split(":")[0]));
    start.setMinutes(Number(data.start.split(":")[1]));
    console.log(start);

    const end = new Date(day);
    end.setHours(Number(data.end.split(":")[0]));
    end.setMinutes(Number(data.end.split(":")[1]));

    console.log(end);

    mutateAsync({
      ...data,
      id: undefined,
      start: start,
      end: end,
    });
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
                    type='text'
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
                <div className='flex w-full justify-between gap-4'>
                  <div className='w-full'>
                    <label>Start</label>
                    <input
                      type='time'
                      placeholder='Start'
                      {...register("start", {
                        required: "Start is verplicht",
                      })}
                      aria-invalid={errors?.start ? "true" : "false"}
                    />
                    <p className='h-5 text-sm text-gray-400 empty:invisible'>
                      {errors?.start?.message}
                    </p>
                  </div>
                  <div className='w-full'>
                    <label>Einde</label>
                    <input
                      type='time'
                      placeholder='Einde'
                      {...register("end", {
                        required: "Einde is verplicht",
                      })}
                      aria-invalid={errors?.end ? "true" : "false"}
                    />
                    <p className='h-5 text-sm text-gray-400 empty:invisible'>
                      {errors?.end?.message}
                    </p>
                  </div>
                </div>

                <div className='mt-4 flex justify-end gap-6'>
                  <button
                    onClick={closeModal}
                    className='inline-flex w-full rounded-md py-2 text-base font-medium text-gray-400 hover:text-gray-600 sm:ml-0 sm:w-auto sm:text-sm'
                  >
                    Annuleer
                  </button>
                  <button className='btn-primary' type='submit'>
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
