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
        year: 1906,
        description: 'В Российской империи был издан первый том Европейской энциклопедии «Брокгауза и Ефрона»'
      },
      {
        year: 1909,
        description: 'Первое издание легендарного романа Джека Лондона «Мартин Иден»'
      },
      {
        year: 1911,
        description: 'В Санкт-Петербурге увидел свет первый том «Военной энциклопедии»'
      },
      {
        year: 1912,
        description: 'Опубликован роман Эдуарда Берроуза «Тарзан, приёмыш обезьян»'
      },
      {
        year: 1916,
        description: 'Карл Густав Вернен Фон Хейденстам получает Нобелевскую премию мира «как виднейший представитель новой эпохи в мировой литературе»'
      },
      {
        year: 1917,
        description: 'Корней Чуковский написал первую поэму «Крокодил» из серии сборников для детей'
      },
      {
        year: 1945,
        description: 'Впервые опубликован роман Эриха Мария Ремарк «Триумфальная арка»'
      },
      {
        year: 1947,
        description: 'Пулитцеровскую премию получает Роберт Пенн Уоррен за роман «Вся королевская рать»'
      },
      {
        year: 1949,
        description: 'Написан «1984» - культовая утопия Джорджа Оруэлла, ставшая зеркалом для многих стран с их политическим режимом'
      },
      {
        year: 1951,
        description: 'Мир встречает "Над пропастью во ржи" Сэллинджера, получивший в последствие Пулитцеровскую премию за данную работу'
      },
      {
        year: 1952,
        description: 'Эрнест Хемингуэй создает повесть «Старик и море»'
      },
      {
        year: 1953,
        description: 'Учреждение премии «Хьюго» в области научной фантастики'
      },
      {
        year: 1954,
        description: 'Первая публикация романа-эпопеи Дж.Толкина «Властелин колец». Можете поверить в это?'
      },
      {
        year: 1955,
        description: 'В СССР начинают выходить в печать журналы «Юность» и «Иностранная литература»'
      },
      {
        year: 1960,
        description: 'Выходит роман Харпера Ли «Убить пересмешника». Число его переизданий достигнет более 7 млн. копий'
      },
      {
        year: 1962,
        description: 'Выходит роман Кена Кизи «Пролетая над гнездом кукушки». Считается одним из главных литературных произведений движений битников и хиппи.'
      },
      {
        year: 1963,
        description: 'Написан первый том романа Джона Фаулза «Коллекционер». Он входит в британскую версию «100 лучших детективных романов всех времён».'
      },
      {
        year: 1965,
        description: 'Учреждение премии «Небьюла». Наградами Nebula ежегодно отмечают лучшие произведения научной фантастики или фэнтези, опубликованные в Соединённых Штатах.'
      },
      {
        year: 1966,
        description: 'Первая публикация мистического романа Михаила Булгакова «Мастер и Маргарита». Примечательно, писать роман Булгаков начала в декабре 1928 года и продолжал вплоть до своей смерти.'
      },
      {
        year: 1967,
        description: 'В свет вышло художественно-историческое приведение Александра Солженицына «Архипелаг ГУЛАГ»'
      },
      {
        year: 1969,
        description: 'В ФРГ впервые опубликована на русском языке пьеса Николая Эрдмана «Самоубийца». Одна из первых «чёрных комедий» в литературе.'
      },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },
      // {
      //   year: 1951,
      //   description: ''
      // },

    ]
  },
  {
    theme: 'persons',
    description: 'Личности',
    eventList: [
      {
        year: 1962,
        description: '21 февраля 1962 года родился американский писатель Чак Паланик. Через 34 года он шокирует литературный мир своим "Бойцовским клубом"'
      },
      {
        year: 1962,
        description: '22 ноября родился Виктор Пелевин. Заявил себя как автор романов в 1990-х годах такими работами как «Омон Ра», «Чапаев и Пустота» и «Generation „П“».'
      },
      // {
      //   year: 1962,
      //   description: ''
      // },
      // {
      //   year: 1962,
      //   description: ''
      // },
      // {
      //   year: 1962,
      //   description: ''
      // },
      // {
      //   year: 1962,
      //   description: ''
      // },
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
