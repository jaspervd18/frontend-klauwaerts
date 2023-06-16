import { useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import addHours from "date-fns/addHours";
import startOfHour from "date-fns/startOfHour";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BasicCalendar = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Training",
      start,
      end,
    },
    {
      title: "Training",
      start,
      end,
    },
    {
      title: "Training",
      start,
      end,
    },
    {
      title: "Training",
      start,
      end,
    },
  ]);

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

const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1);
const now = new Date();
const start = endOfHour(now);
const end = addHours(start, 2);

moment.locale("nl-BE", {
  week: {
    dow: 1,
  },
});
const localizer = momentLocalizer(moment);

export default BasicCalendar;
