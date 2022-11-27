import Circle from 'components/circle/circle';
import './dates.css';

function Dates (): JSX.Element {

  return (
    <div className='history__dates dates'>
      <h1 className='dates__title'>Исторические даты</h1>
      <div className='dates__time-offcut'>
        <p className='dates__time-offcut-start'>2015</p>
        <p className='dates__time-offcut-end'>2022</p>
      </div>
      <Circle/>
    </div>
  );
}

export default Dates;
