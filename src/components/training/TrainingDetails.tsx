import { formatDate, formatTime } from "../../utils/format";
import TrainingEdit from "./TrainingEdit";

const TrainingDetails = ({ title, start, end, trainer }: BasicEvent) => (
  <section>
    <div className='mb-4 rounded-lg bg-gray-100 px-4 py-6 lg:px-12'>
      <dl className='gap-y-6 divide-y divide-gray-200 lg:flex lg:flex-none lg:justify-between lg:gap-x-4 lg:gap-y-0 lg:divide-y-0 xl:gap-x-8'>
        <div className='flex justify-between gap-1 pb-4 lg:block lg:py-4'>
          <dt>Dag</dt>
          <dd>{formatDate(start)}</dd>
        </div>
        <div className='flex justify-between gap-1 py-4 lg:block'>
          <dt>Type</dt>
          <dd>{title}</dd>
        </div>
        <div className='flex justify-between gap-1 py-4 lg:block'>
          <dt>Uren</dt>
          <dd>
            <time dateTime={end.toString()}>
              {formatTime(start)} - {formatTime(end)}
            </time>
          </dd>
        </div>
        <div className='flex justify-between gap-1 py-4 lg:block'>
          <dt>Trainer</dt>
          {trainer ? <dd>{trainer.name}</dd> : <dd>-</dd>}
        </div>
      </dl>
    </div>
    {/* <TrainingEdit trainer={trainer} /> */}
  </section>
);

export default TrainingDetails;
