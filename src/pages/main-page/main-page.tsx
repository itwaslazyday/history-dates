import Dates from '../../components/dates/dates';
import './main-page.css';

function Main (): JSX.Element {

  return (
    <section className='history'>
      <div className='history__wrapper container'>
        <Dates/>
      </div>
    </section>
  );
}

export default Main;
