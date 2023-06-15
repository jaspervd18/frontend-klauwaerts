import { useState } from "react";
import { Calendar, Event, momentLocalizer } from "react-big-calendar";
import withDragAndDrop, {
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";
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
  ]);

  const onEventResize: withDragAndDropProps["onEventResize"] = (data) => {
    const { start, end } = data;

    setEvents((currentEvents) => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      };
      return [...currentEvents, firstEvent];
    });
  };

  const onEventDrop: withDragAndDropProps["onEventDrop"] = (data) => {
    console.log(data);
  };

  return (
    <DnDCalendar
      defaultView='month'
      events={events}
      localizer={localizer}
      onEventDrop={onEventDrop}
      onEventResize={onEventResize}
      resizable
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

const DnDCalendar = withDragAndDrop(Calendar);

export default BasicCalendar;
