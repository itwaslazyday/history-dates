import Circle from 'components/circle/circle';
import { useState } from 'react';
import './dates.css';

function Dates (): JSX.Element {

  return (
    <div className='history__dates dates'>
      <h1 className='dates__title'>Исторические даты</h1>
      <p className='dates__time-offcut'>2015 2022</p>
      <Circle/>
    </div>
  );
}

export default Dates;
