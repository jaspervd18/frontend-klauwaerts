/******************
 * Endpoint types *
 ******************/

type EndpointAll = "events" | "trainers" | "competitions";

type EndpointById = "events" | "trainers";

/*************
 * API Types *
 *************/

type BasicEvent = {
  id: number;
  trainer?: Trainer;
  title: string;
  start: Date;
  end: Date;
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
  degree?: Degree;
};

type Degree = {
  id: number;
  name: string;
  payment: number;
};

type Competition = {
  id: number;
  type: string;
  title: string;
  date: Date;
};

type SaveCompetition = {
  id?: number;
  type: string;
  title: string;
  date: Date;
  refereeId?: refereeId;
  coachId?: coachId;
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
