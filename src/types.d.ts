/******************
 * Endpoint types *
 ******************/

type EndpointAll = "events";

type EndpointById = "events";

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
};

type SaveEvent = {
  id?: number;
  title: string;
  start: Date;
  end: Date;
};

/**************
 * Misc Types *
 **************/

type LimitOffset = {
  limit?: number;
  offset?: number;
};
