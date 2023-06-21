import { formatCurrency } from "../../utils/format";

const OverviewCard = ({ name, degree }: Trainer) => {
  return (
    <div className='rounded-lg bg-gray-100 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-6'>
      <dl className='flex-auto space-y-6 divide-y divide-gray-200 sm:grid sm:grid-cols-4 sm:gap-x-4 sm:space-y-0 sm:divide-y-0 lg:w-10/12 lg:flex-none lg:gap-x-8'>
        <div className='flex flex-shrink justify-between sm:block sm:gap-1'>
          <dt>Naam</dt>
          <dd>{name}</dd>
        </div>
        <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
          <dt>Gepresteerde uren</dt>
          <dd>
            {/* <time dateTime={end.toString()}>
              {formatTime(start)} - {formatTime(end)}
            </time> */}
            -
          </dd>
        </div>
        <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
          <dt>Verloning</dt>
          {degree ? <dd>{formatCurrency(degree.payment)}</dd> : <dd>-</dd>}
        </div>
      </dl>
    </div>
  );
};

export default OverviewCard;
