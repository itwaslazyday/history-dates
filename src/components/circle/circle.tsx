import React, { useEffect, useRef, useState } from 'react';
import { CircleState, Theme } from 'types/types';
import './circle.css';

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

function Circle (): JSX.Element {
  const [circleState, setCircleState] = useState<CircleState>({angle: 0, item: 2});

  const prevAngle = useRef(circleState.angle);
  useEffect(() => {
    prevAngle.current = circleState.angle;
  }, [circleState.angle]);

  const getCircleAngle = (item: number): void => {
    const angle = themes.find((theme) => theme.id === item)?.angle as number;
    const a = angle - circleState.angle;
    const b = a - 360;
    const minAngle = Math.abs(a) >= Math.abs(b) ? Math.min(a, b) : Math.max(a, b);
    setCircleState({...circleState, angle: minAngle + prevAngle.current, item: item});
  };

  return (
    <React.Fragment>
      <ul
        className='dates__themes-list list-reset'
        style={{transform: `rotate(${circleState.angle}deg)`}}
      >
        {themes.map((theme) => (
          <li
            key={theme.id}
            className={`dates__themes-item dates__themes-item--${theme.prefix}
              ${theme.id === circleState.item ? 'dates__themes-item--tapped' : ''}`}
            onClick={(evt) => getCircleAngle(Number(evt.currentTarget.innerText))}
            style={{transform: `translate(${theme.transform}) rotate(${-circleState.angle}deg)`}}
          >
            {theme.id}
          </li>
        ))}
      </ul>
      <span className='dates__output'>{themes.find((theme) => circleState.item === theme.id)?.description}</span>
    </React.Fragment>
  );
}

export default Circle;

