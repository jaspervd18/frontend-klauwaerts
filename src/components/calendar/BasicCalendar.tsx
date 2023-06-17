import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BasicCalendar = ({
  events,
  openModal,
}: {
  events: BasicEvent[];
  openModal: (day: Date) => void;
}) => {
  const calendarEvents: CalendarEvent[] = events.map(({ id, ...rest }) => rest);

  return (
    <Calendar
      defaultView='month'
      events={calendarEvents}
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
