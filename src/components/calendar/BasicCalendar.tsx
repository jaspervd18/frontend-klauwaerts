import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface BasicCalendarProps {
  events: BasicEvent[];
  competitions: Competition[];
  openModal: (day: Date) => void;
  setMonth: (month: number) => void;
  setYear: (month: number) => void;
}

const BasicCalendar = ({
  events,
  competitions,
  openModal,
  setMonth,
  setYear,
}: BasicCalendarProps) => {
  console.log(competitions);

  return (
    <Calendar
      defaultView='month'
      // events={competitions
      //   .map((comp) => {
      //     return {
      //       ...comp,
      //       start: new Date(comp.date),
      //       end: new Date(comp.date),
      //     };
      // })
      // .concat(events)}
      events={events}
      localizer={localizer}
      style={{ height: "100vh", width: "100%" }}
      messages={{
        next: "Volgende",
        previous: "Vorige",
        today: "Vandaag",
        month: "Maand",
      }}
      onSelectSlot={(slotDetails) => {
        openModal(slotDetails.start);
      }}
      onNavigate={(date) => {
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());
      }}
      selectable
      popup
      views={["month"]}
    />
  );
};

moment.locale("nl-BE", {
  week: {
    dow: 1,
  },
});
const localizer = momentLocalizer(moment);

export default BasicCalendar;
