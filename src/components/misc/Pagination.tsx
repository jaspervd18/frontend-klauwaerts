import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";
import { formatMonthYear } from "../../utils/format";

interface PaginationProps {
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  month: number;
  year: number;
}

const Pagination = ({ setMonth, setYear, month, year }: PaginationProps) => {
  const prevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className='mx-auto flex w-60 items-center justify-between gap-2'>
      <button onClick={prevMonth}>
        <BackwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
      </button>
      <div className='text-xl font-semibold'>
        {formatMonthYear(month, year)}
      </div>
      <button onClick={nextMonth}>
        <ForwardIcon className='h-5 w-5 shrink-0 stroke-1 hover:text-gray-500' />
      </button>
    </div>
  );
};

export default Pagination;
