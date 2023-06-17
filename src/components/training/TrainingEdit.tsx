import { SubmitHandler, useForm } from "react-hook-form";
import useSaveEvent from "../../hooks/useSaveEvent";

const TrainingEdit = ({ trainer }: { trainer: string | undefined }) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm<BasicEvent>();

  const { mutate } = useSaveEvent();

  const onSubmit: SubmitHandler<BasicEvent> = (data) => {
    // mutate({ ...data, doosId: Number(data.doosId), id: bestellingId });
    // reset({ ...data, doosId: Number(data.doosId) });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-6 gap-4 py-6'
    >
      <div className='col-span-6 sm:col-span-4'>
        <label>Trainer</label>
        <input
          type='text'
          placeholder='Trainer'
          {...register("trainer", {
            required: "Trainer is verplicht",
          })}
          aria-invalid={errors?.trainer ? "true" : "false"}
        />
        <p className='h-5 text-sm text-gray-400 empty:invisible'>
          {errors?.trainer?.message}
        </p>
      </div>
      <button
        type='submit'
        className='btn-primary col-span-full mt-2 self-center lg:col-start-5'
        disabled={!isDirty}
      >
        Training aanpassen
      </button>
    </form>
  );
};

export default TrainingEdit;
