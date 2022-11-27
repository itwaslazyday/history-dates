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

export type {Theme, CircleState};
