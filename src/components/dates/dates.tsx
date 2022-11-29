import Circle from 'components/circle/circle';
import { MainState, Offcut } from 'types/types';
import { offcuts} from 'const/const';
import './dates.css';

const OFFCUT_LENGTH = 6;

type DatesProps = {
  mainState: MainState;
  setMainState: (state: MainState) => void;
};

function Dates ({setMainState, mainState}: DatesProps): JSX.Element {
  const activeOffcut = offcuts.find((offcut) => offcut.id === mainState.offcutId) as Offcut;

  const handleOffCutChange = (id: number) => {
    const newOffcut = offcuts.find((offcut) => offcut.id === id) as Offcut;
    setMainState({...mainState, offcutId: id,
      startYear: newOffcut.start, endYear: newOffcut.end});
  };

  return (
    <div className='history__dates dates'>
      <h1 className='dates__title'>Исторические даты</h1>
      <div className='dates__time-offcut'>
        <p className='dates__time-offcut-start'>{activeOffcut.start}</p>
        <p className='dates__time-offcut-end'>{activeOffcut.end}</p>
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
