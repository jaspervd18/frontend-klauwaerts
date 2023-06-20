import { FieldError, UseFormRegister } from "react-hook-form";
import useAll from "../../hooks/useAll";

type TrainerSelectProps = {
  register: UseFormRegister<TFormInput>;
  error?: FieldError;
};

const TrainerSelect = ({ register, error }: TrainerSelectProps) => {
  const { data: trainers, isError, isLoading } = useAll<Trainer>("trainers");
  return (
    <>
      <label>Trainer</label>
      <select {...register("trainerId")} aria-invalid={!!error}>
        <option value='0' disabled>
          -------
        </option>
        {!(isError || isLoading) &&
          trainers.map(({ id, name }) => {
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
      </select>
      <p className='h-5 text-sm text-gray-400 empty:invisible'>
        {error?.message}
      </p>
    </>
  );
};

export default TrainerSelect;
