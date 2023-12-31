import { useForm, SubmitHandler } from "react-hook-form";

interface EventInput {
  title: string;
  start: string;
  end: string;
}

const TrainingModal = ({ closeModal, mutateAsync, day }: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventInput>();

  const options = [
    { value: "Schermschool", label: "Schermschool" },
    { value: "Volwassenen & Beloften", label: "Volwassenen & Beloften" },
    { value: "Clubbeker", label: "Clubbeker" },
  ];

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
      <div className='mb-1 text-lg font-medium text-gray-900'>
        Nieuwe training inplannen
      </div>
      <div className='mb-4 text-sm text-gray-500'>
        Vul onderstaande velden correct in.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Titel</label>
          <select
            placeholder='Titel'
            {...register("title", {
              required: "Titel is verplicht",
            })}
            aria-invalid={errors?.title ? "true" : "false"}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
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
    </>
  );
};

export default TrainingModal;
