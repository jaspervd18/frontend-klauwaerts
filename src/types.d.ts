/******************
 * Endpoint types *
 ******************/

type EndpointAll = "events" | "trainers";

type EndpointById = "events" | "trainers";

/*************
 * API Types *
 *************/

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
};

type BasicEvent = CalendarEvent & {
  id: number;
  trainer?: Trainer;
};

type SaveEvent = {
  id?: number;
  title: string;
  start: Date;
  end: Date;
  trainerId?: trainerId;
};

type Trainer = {
  id: number;
  name: string;
};

/**************
 * Misc Types *
 **************/

type TFormInput = BasicEvent & {
  trainerId: number;
  startTime: string;
  endTime: string;
};

type LimitOffset = {
  limit?: number;
  offset?: number;
};
