import { themes } from 'const/const';
import React, { useEffect, useRef, useState } from 'react';
import {CircleState} from 'types/types';
import './circle.css';

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
    <div className='dates__circle'>
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
    </div>
  );
}

export default Circle;

