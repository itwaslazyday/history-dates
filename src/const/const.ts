import { Offcut, Theme, EventTheme } from 'types/types';

const themes: Theme[] = [
  {
    id: 1,
    prefix: 'literature',
    description: 'Литература',
    angle: 30,
    transform: '50%, -50%'
  },
  {
    id: 2,
    prefix: 'cinema',
    description: 'Кино',
    angle: -30,
    transform: '50%, -50%'
  },
  {
    id: 3,
    prefix: 'science',
    description: 'Наука',
    angle: 270,
    transform: '50%, 50%'
  },
  {
    id: 4,
    prefix: 'persons',
    description: 'Личности',
    angle: 210,
    transform: '50%, 50%'
  },
  {
    id: 5,
    prefix: 'music',
    description: 'Музыка',
    angle: 150,
    transform: '-50%, 50%'
  },
  {
    id: 6,
    prefix: 'sport',
    description: 'Спорт',
    angle: 90,
    transform: '-50%, -50%'
  }
];

const offcuts: Offcut[] = [
  {
    id: 1,
    start: 1905,
    end: 1917

  },
  {
    id: 2,
    start: 1945,
    end: 1955
  },
  {
    id: 3,
    start: 1960,
    end: 1975
  },
  {
    id: 4,
    start: 1980,
    end: 1991
  },
  {
    id: 5,
    start: 1994,
    end: 2005
  },
  {
    id: 6,
    start: 2015,
    end: 2022
  }
];

const events: EventTheme[] = [
  {
    theme: 'cinema',
    description: 'Кино',
    eventList: [
      {
        year: 1905,
        description: 'А'
      },
      {
        year: 1910,
        description: 'Б'
      },
      {
        year: 1915,
        description: 'В'
      }
    ]
  },
  {
    theme: 'literature',
    description: 'Литература',
    eventList: [
      {
        year: 1905,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      }
    ]
  },
  {
    theme: 'persons',
    description: 'Личности',
    eventList: [
      {
        year: 1905,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      }
    ]
  },
  {
    theme: 'science',
    description: 'Наука',
    eventList: [
      {
        year: 1905,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 1960,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 1991,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 2015,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 2022,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 2020,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      },
      {
        year: 2017,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      }
    ]
  },
  {
    theme: 'sport',
    description: 'Спорт',
    eventList: [
      {
        year: 1905,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      }
    ]
  },
  {
    theme: 'music',
    description: 'Музыка',
    eventList: [
      {
        year: 1905,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae consequat massa, nec scelerisque ligula.'
      }
    ]
  }
];

export {themes, offcuts, events};
