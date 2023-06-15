import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Title from "../components/misc/Title";

const Calendar = () => {
  return (
    <>
      <Title Icon={CalendarDaysIcon} text='Kalender' />
      <div>
        <section className='grid min-h-[952px] grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {/* {filteredProducten.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))} */}
        </section>
      </div>
    </>
  );
};

export default Calendar;
