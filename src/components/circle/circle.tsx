import { useEffect, useRef, useState } from 'react';
import { Theme } from 'types/types';
import './circle.css';

const themes: Theme[] = [
  {
    id: 1,
    prefix: 'literature',
    description: 'Литература',
    angle: 60
  },
  {
    id: 2,
    prefix: 'cinema',
    description: 'Кино',
    angle: 0
  },
  {
    id: 3,
    prefix: 'science',
    description: 'Наука',
    angle: 300
  },
  {
    id: 4,
    prefix: 'persons',
    description: 'Личности',
    angle: 240
  },
  {
    id: 5,
    prefix: 'music',
    description: 'Музыка',
    angle: 180
  },
  {
    id: 6,
    prefix: 'world',
    description: 'Мир',
    angle: 120
  }
];

function Circle (): JSX.Element {
  const [currentAngle, setCurrentAngle] = useState<number>(0);

  const prevAngle = useRef(currentAngle);
  useEffect(() => {
    prevAngle.current = currentAngle;
  }, [currentAngle]);

  const getCircleAngle = (item: number): void => {
    const angle = themes.find((theme) => theme.id === item)?.angle as number;
    const a = angle - currentAngle;
    const b = a - 360;
    const minAngle = Math.abs(a) >= Math.abs(b) ? Math.min(a, b) : Math.max(a, b);
    setCurrentAngle(minAngle + prevAngle.current);
  };

  console.log(currentAngle);

  return (
    <ul
      className='dates__themes-list list-reset'
      style={{transform: `rotate(${currentAngle}deg)`}}
    >
      {themes.map((theme) => (
        <li
          key={theme.id}
          className={`dates__themes-item dates__themes-item--${theme.prefix}`}
          onClick={(evt) => getCircleAngle(Number(evt.currentTarget.innerText))}
          style={{transform: `rotate(${-currentAngle}deg)`}}
        >
          {theme.id}
        </li>
      ))}
    </ul>
  );
}

export default Circle;

