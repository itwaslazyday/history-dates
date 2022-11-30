type Theme = {
  id: number;
  prefix: string;
  description: string;
  angle: number;
  transform: string;
};

type CircleState = {
  angle: number;
  item: number;
};

type Offcut = {
  id: number;
  start: number;
  end: number;
};

type EventTheme = {
  theme: string;
  description: string;
  eventList: {year: number; description: string;}[];
};

type MainState = {
  offcutId: number;
  theme: string;
  startYear: number;
  endYear: number;
  prevStartYear: number;
  prevEndYear: number;
};

export type {Theme, CircleState, Offcut, EventTheme, MainState};
