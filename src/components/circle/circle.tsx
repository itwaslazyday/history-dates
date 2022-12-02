import { themes } from 'const/const';
import React, { memo, useState } from 'react';
import {CircleState, MainState, Theme} from 'types/types';
import './circle.css';

type CircleProps = {
  mainState: MainState;
  setMainState: (state: MainState) => void;
};

function Circle ({mainState, setMainState}: CircleProps): JSX.Element {
  const currentTheme = themes.find((theme) => theme.prefix === mainState.theme) as Theme;

  const [circleState, setCircleState] = useState<CircleState>({angle: 30, item: currentTheme.id});

  const getCircleAngle = (item: number): void => {
    const tappedTheme = themes.find((theme) => theme.id === item) as Theme;
    setCircleState({...circleState, angle: tappedTheme.angle, item: item});
    setMainState({...mainState,
      theme: tappedTheme.prefix,
      prevStartYear: mainState.startYear,
      prevEndYear: mainState.endYear
    });
  };

  return (
    <React.Fragment>
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
      <select
        className="dates__select"
        onChange={(evt) => setMainState({...mainState,
          theme: evt.target.value,
          prevStartYear: mainState.startYear,
          prevEndYear: mainState.endYear
        })}
        value={mainState.theme}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.prefix}>
            {theme.description}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}

export default memo(Circle);

