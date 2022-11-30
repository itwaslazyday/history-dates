import Circle from 'components/circle/circle';
import { MainState, Offcut } from 'types/types';
import { offcuts} from 'const/const';
import {useSpring, animated} from 'react-spring';
import './dates.css';

const OFFCUT_LENGTH = 6;

type DatesProps = {
  mainState: MainState;
  setMainState: (state: MainState) => void;
};

type AnimatedYearProps = {
  newYear: number;
  prefix: string;
  prevYear: number;
};

function Dates ({setMainState, mainState}: DatesProps): JSX.Element {
  const activeOffcut = offcuts.find((offcut) => offcut.id === mainState.offcutId) as Offcut;

  const handleOffCutChange = (id: number) => {
    const newOffcut = offcuts.find((offcut) => offcut.id === id) as Offcut;
    setMainState({...mainState, offcutId: id,
      startYear: newOffcut.start, endYear: newOffcut.end, prevStartYear: mainState.startYear, prevEndYear: mainState.endYear,});
  };

  const AnimatedYear = ({newYear, prefix, prevYear}: AnimatedYearProps) => {
    const {number} = useSpring({
      from: {number: prevYear},
      number: newYear,
      delay: 200,
      config: {mass: 1, tension: 20, friction: 10},
    });
    return <animated.p className={prefix}>{number.to((n) => n.toFixed(0))}</animated.p>;
  };

  return (
    <div className='history__dates dates'>
      <h1 className='dates__title'>Исторические даты</h1>
      <div className='dates__time-offcut'>
        <AnimatedYear newYear={activeOffcut.start} prevYear={mainState.prevStartYear} prefix={'dates__time-offcut-start'}/>
        <AnimatedYear newYear={activeOffcut.end} prevYear={mainState.prevEndYear} prefix={'dates__time-offcut-end'}/>
      </div>
      <Circle mainState={mainState} setMainState={setMainState}/>
      <div className='dates__controls-wrapper'>
        <span className='dates__offcut-counter'>{`0${mainState.offcutId}/06`}</span>
        <div className='dates__offcut-controls'>
          <button
            className='dates__offcut-back slider-button'
            disabled={mainState.offcutId === 1}
            onClick={() => handleOffCutChange(mainState.offcutId - 1)}
          >
          </button>
          <button
            className='dates__offcut-forward slider-button'
            disabled={mainState.offcutId === OFFCUT_LENGTH}
            onClick={() => handleOffCutChange(mainState.offcutId + 1)}
          >
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dates;
