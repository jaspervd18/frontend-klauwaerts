import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../../utils/format";

const EventCard = ({
  id,
  title,
  type,
  start,
  end,
  trainer,
  coach,
  referee,
}: BasicEvent) => {
  return (
    <div className='rounded-lg bg-gray-100 px-4 py-6 sm:flex sm:items-center sm:justify-between sm:px-6'>
      <dl className='flex-auto space-y-6 divide-y divide-gray-200 sm:grid sm:grid-cols-4 sm:gap-x-4 sm:space-y-0 sm:divide-y-0 lg:w-10/12 lg:flex-none lg:gap-x-8'>
        <div className='flex flex-shrink justify-between sm:block sm:gap-1'>
          <dt>Dag</dt>
          <dd>{formatDate(start)}</dd>
        </div>
        <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
          <dt>{type ? "Naam" : "Type"}</dt>
          <dd>{title}</dd>
        </div>
        {!type && (
          <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
            <dt>Uren</dt>
            <dd>
              <time dateTime={end.toString()}>
                {formatTime(start)} - {formatTime(end)}
              </time>
            </dd>
          </div>
        )}
        {type ? (
          <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
            <dt>Coach</dt>
            {coach ? <dd>{coach?.name}</dd> : <dd>-</dd>}
          </div>
        ) : (
          <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
            <dt>Trainer</dt>
            {trainer ? <dd>{trainer?.name}</dd> : <dd>-</dd>}
          </div>
        )}
        {type && (
          <div className='flex justify-between pt-6 sm:block sm:gap-1 sm:pt-0'>
            <dt>Scheidsrechter</dt>
            {referee ? <dd>{referee?.name}</dd> : <dd>-</dd>}
          </div>
        )}
      </dl>
      <Link
        to={`/trainingen/${id}`}
        className='mt-6 flex w-full shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-6 sm:mt-0 sm:w-auto lg:ml-8'
      >
        Bekijk {type ? "wedstrijd" : "training"}
        <span className='sr-only'>{id}</span>
      </Link>
    </div>
  );
};

export default EventCard;
