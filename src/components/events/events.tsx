import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, EffectFade} from 'swiper';
import {events} from '../../const/const';
import './events.css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';
import { MainState } from 'types/types';

type EventsProps = {
  mainState: MainState;
};

function Events ({mainState}: EventsProps): JSX.Element {
  const filteredByTheme = events.filter((event) => mainState.theme === event.theme)[0].eventList;
  const filteredByOffCut = filteredByTheme.filter((event) => event.year >= mainState.startYear && event.year <= mainState.endYear);

  console.log('filteredTheme', filteredByTheme);

  return (
    <div className='history__events events'>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        // effect={'fade'}
        // spaceBetween={50}
        slidesPerView={3}
        speed={500}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {filteredByOffCut.map((event) => (
          <SwiperSlide
            className='events__slide'
            key={event.year}
          >
            <span className='events__slide-year'>{event.year}</span>
            <p className='events__slide-text'>{event.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Events;
