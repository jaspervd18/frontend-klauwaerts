/******************
 * Endpoint types *
 ******************/

type EndpointAll = "events";

type EndpointById = "events";

/*************
 * API Types *
 *************/

type Event = {
  id: number;
  title: string;
  start: dateFns;
  end: dateFns;
};

type SaveEvent = {
  id?: number;
  title: string;
  start: dateFns;
  end: dateFns;
};

/**************
 * Misc Types *
 **************/

type LimitOffset = {
  limit?: number;
  offset?: number;
};
