import { SubmitHandler, useForm } from "react-hook-form";
import useSaveEvent from "../../hooks/useSaveEvent";
import TrainerSelect from "../misc/TrainerSelect";
import Input from "../misc/Input";

type TrainingWijzigenProps = {
  defaultValues: TFormInput;
};

const TrainingEdit = ({ defaultValues }: TrainingWijzigenProps) => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm<TFormInput>({
    defaultValues,
  });

  const { mutate } = useSaveEvent();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    const start = new Date();
    start.setHours(Number(data.start.split(":")[0]));
    start.setMinutes(Number(data.start.split(":")[1]));
    const end = new Date();
    end.setHours(Number(data.end.split(":")[0]));
    end.setMinutes(Number(data.end.split(":")[1]));
    mutate({
      ...data,
      trainerId: Number(data.trainerId),
      id: defaultValues.id,
    });
    reset({ ...data, trainerId: Number(data.trainerId) });
  };

  console.log(defaultValues);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-6 gap-4 py-6'
    >
      <div className='col-span-6 sm:col-span-4'>
        <Input
          label='Titel'
          type='text'
          register={register}
          registerName='title'
          error={errors.title}
          autoComplete='title'
        />
      </div>
      <div className='col-span-3 sm:col-span-2'>
        <Input
          label='Start'
          type='time'
          register={register}
          registerName='start'
          error={errors.start}
          autoComplete='start'
        />
      </div>
      <div className='col-span-3 sm:col-span-2'>
        <Input
          label='Einde'
          type='time'
          register={register}
          registerName='end'
          error={errors.end}
          autoComplete='end'
        />
      </div>
      <div className='col-span-3 sm:col-span-2'>
        <TrainerSelect register={register} error={errors.trainerId} />
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
