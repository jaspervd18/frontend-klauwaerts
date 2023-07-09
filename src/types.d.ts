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
  referee?: Trainer;
  coach?: Trainer;
  title: string;
  type?: string;
  start: Date;
  end: Date;
};

type SaveEvent = {
  id?: number;
  title: string;
  type?: string;
  start: Date;
  end: Date;
  trainerId?: trainerId;
  refereeId?: refereeId;
  coachId?: coachId;
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

/**************
 * Misc Types *
 **************/

type TFormInput = BasicEvent & {
  trainerId: number;
  refereeId?: number;
  coachId?: number;
  startTime: string;
  endTime: string;
};

type LimitOffset = {
  limit?: number;
  offset?: number;
};

type ModalProps = {
  closeModal: () => void;
  mutateAsync: UseMutateAsyncFunction<BasicEvent, unknown, SaveEvent, unknown>;
  day: Date;
};
