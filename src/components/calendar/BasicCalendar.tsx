import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BasicCalendar = ({ events }: { events: Event[] }) => {
  return (
    <Calendar
      defaultView='month'
      culture='nl'
      events={events}
      localizer={localizer}
      style={{ height: "100vh", width: "100%" }}
      messages={{
        next: "Volgende",
        previous: "Vorige",
        today: "Vandaag",
        month: "Maand",
        week: "Week",
        day: "Dag",
        agenda: "Agenda",
        date: "Datum",
        time: "Tijd",
      }}
      popup
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
