import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";

interface CompetitionInput {
  type: string;
  title: string;
  date: string;
}

interface CompetitionModalProps {
  closeModal: () => void;
  mutateAsync: UseMutateAsyncFunction<
    Competition,
    unknown,
    SaveCompetition,
    unknown
  >;
  day: Date;
}

const CompetitionModal = ({
  closeModal,
  mutateAsync,
  day,
}: CompetitionModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CompetitionInput>();

  const options = [
    { value: "Regionaal", label: "Regionaal" },
    { value: "Nationaal", label: "Nationaal" },
    { value: "Internationaal", label: "Internationaal" },
  ];

  const onSubmit: SubmitHandler<CompetitionInput> = (data) => {
    const date = new Date(day);
    mutateAsync({
      ...data,
      id: undefined,
      date: date,
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
