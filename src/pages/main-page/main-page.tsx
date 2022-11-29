import { offcuts } from 'const/const';
import { useState } from 'react';
import { MainState } from 'types/types';
import Dates from '../../components/dates/dates';
import Events from '../../components/events/events';
import './main-page.css';

function Main (): JSX.Element {
  const [mainState, setMainState] = useState<MainState>({offcutId: offcuts[0].id, theme: 'literature', startYear: offcuts[0].start, endYear: offcuts[0].end});

  console.log('mainState', mainState);

  return (
    <section className='history'>
      <div className='history__wrapper container'>
        <Dates setMainState={setMainState} mainState={mainState}/>
        <Events mainState={mainState}/>
      </div>
    </section>
  );
}

export default Main;
