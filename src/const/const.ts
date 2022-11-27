import { Theme } from 'types/types';

const themes: Theme[] = [
  {
    id: 1,
    prefix: 'literature',
    description: 'Литература',
    angle: 60,
    transform: '50%, -50%'
  },
  {
    id: 2,
    prefix: 'cinema',
    description: 'Кино',
    angle: 0,
    transform: '50%, -50%'
  },
  {
    id: 3,
    prefix: 'science',
    description: 'Наука',
    angle: 300,
    transform: '50%, 50%'
  },
  {
    id: 4,
    prefix: 'persons',
    description: 'Личности',
    angle: 240,
    transform: '50%, 50%'
  },
  {
    id: 5,
    prefix: 'music',
    description: 'Музыка',
    angle: 180,
    transform: '-50%, 50%'
  },
  {
    id: 6,
    prefix: 'world',
    description: 'Мир',
    angle: 120,
    transform: '-50%, -50%'
  }
];

export {themes};
