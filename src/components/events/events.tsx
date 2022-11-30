import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {events} from '../../const/const';
import './events.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { MainState } from 'types/types';

type EventsProps = {
  mainState: MainState;
};

const compareYears = (a: {year: number; description: string}, b: {year: number; description: string}) => a.year - b.year;

function Events ({mainState}: EventsProps): JSX.Element {
  const filteredByTheme = events.filter((event) => mainState.theme === event.theme)[0].eventList;
  const filteredByOffCut = filteredByTheme.filter((event) =>
    event.year >= mainState.startYear && event.year <= mainState.endYear).sort(compareYears);

  return (
    <div className='history__events events'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={
          {
            'el': '.events__pagination-wrapper',
            'clickable': true,
            'bulletClass': 'custom-bullet dot swiper-pagination-bullet',
            'bulletActiveClass': 'custom-bullet-active swiper-pagination-bullet-active'
          }
        }
        slidesPerView={'auto'}
        slidesOffsetAfter={80}
        breakpoints={{
          320: {
            slidesOffsetAfter: 80,
          },
          768: {
            slidesOffsetAfter: 700,
          },
        }}
        speed={500}
        grabCursor
      >
        {filteredByOffCut.map((event) => (
          <SwiperSlide
            className='events__slide'
            key={event.description}
          >
            <span className='events__slide-year'>{event.year}</span>
            <p className='events__slide-text'>{event.description}</p>
          </SwiperSlide>
        ))}
        <div className='events__pagination-wrapper'></div>
      </Swiper>
    </div>
  );
}

export default Events;
