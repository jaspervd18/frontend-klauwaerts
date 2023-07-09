import { SubmitHandler, useForm } from "react-hook-form";
import useSaveEvent from "../../hooks/useSaveEvent";
import TrainerSelect from "../misc/TrainerSelect";
import Input from "../misc/Input";
import { formatTime } from "../../utils/format";
import useDeleteById from "../../hooks/useDeleteById";

type TrainingWijzigenProps = {
  defaultValues: TFormInput;
};

const EventEdit = ({ defaultValues }: TrainingWijzigenProps) => {
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
    const start = new Date(defaultValues.start);
    const end = new Date(defaultValues.end);
    start.setHours(Number(data.startTime.split(":")[0]));
    start.setMinutes(Number(data.startTime.split(":")[1]));
    end.setHours(Number(data.endTime.split(":")[0]));
    end.setMinutes(Number(data.endTime.split(":")[1]));
    mutate({
      ...data,
      trainerId: Number(data.trainerId),
      id: defaultValues.id,
      start,
      end,
    });
    reset({ ...data, trainerId: Number(data.trainerId) });
  };

  const { mutateAsync } = useDeleteById(
    "events",
    defaultValues.id,
    new Date(defaultValues.start).getMonth() + 1,
    new Date(defaultValues.end).getFullYear()
  );

  const deleteEvent = () => {
    mutateAsync();
  };

  return (
    <>
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
            autoComplete={defaultValues.title}
          />
        </div>
        <div className='col-span-6 sm:col-span-2'>
          <TrainerSelect register={register} error={errors.trainerId} />
        </div>
        <div className='col-span-3 sm:col-span-2'>
          <Input
            label='Start'
            type='time'
            register={register}
            registerName='startTime'
            error={errors.start}
            autoComplete={formatTime(defaultValues.start)}
          />
        </div>
        <div className='col-span-3 sm:col-span-2'>
          <Input
            label='Einde'
            type='time'
            register={register}
            registerName='endTime'
            error={errors.end}
            autoComplete={formatTime(defaultValues.end)}
          />
        </div>
        <button
          type='submit'
          className='btn-primary  col-span-full mt-2 self-center md:col-span-1 '
          disabled={!isDirty}
        >
          Training aanpassen
        </button>
      </form>
      <button
        onClick={deleteEvent}
        className='col-span-full mt-2 h-fit w-fit self-center rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 md:col-span-1 '
      >
        Training verwijderen
      </button>
    </>
  );
};

export default EventEdit;
