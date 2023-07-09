import { useForm, SubmitHandler } from "react-hook-form";

interface EventInput {
  title: string;
  type: string;
  start: string;
  end: string;
}

const CompetitionModal = ({ closeModal, mutateAsync, day }: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventInput>();

  const options = [
    { value: "Regionaal", label: "Regionaal" },
    { value: "Nationaal", label: "Nationaal" },
    { value: "Internationaal", label: "Internationaal" },
  ];

  const onSubmit: SubmitHandler<EventInput> = (data) => {
    const start = new Date(day);
    const end = new Date(day);
    mutateAsync({
      ...data,
      id: undefined,
      start: start,
      end: end,
      type: data.type,
    });
    closeModal();
  };

  return (
    <>
      <div className='mb-1 text-lg font-medium text-gray-900'>
        Nieuwe wedstrijd inplannen
      </div>
      <div className='mb-4 text-sm text-gray-500'>
        Vul onderstaande velden correct in.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Type</label>
          <select
            placeholder='Type'
            {...register("type", {
              required: "Type is verplicht",
            })}
            aria-invalid={errors?.type ? "true" : "false"}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <p className='h-5 text-sm text-gray-400 empty:invisible'>
            {errors?.type?.message}
          </p>
        </div>

        <div>
          <label>Naam</label>
          <input
            type='text'
            placeholder='Naam'
            {...register("title", {
              required: "Naam is verplicht",
            })}
            aria-invalid={errors?.title ? "true" : "false"}
          />
          <p className='h-5 text-sm text-gray-400 empty:invisible'>
            {errors?.title?.message}
          </p>
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

export default CompetitionModal;
