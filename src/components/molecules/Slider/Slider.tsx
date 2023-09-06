import * as React from 'react'
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Badge } from '../../atoms'

const Slider = () => {
  return (
    <Swiper
      effect={'fade'}
      parallax={true}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      modules={[Parallax, EffectFade, Pagination, Navigation]}
      threshold={2}
      navigation={true}
      centeredSlides={true}
      // mousewheel={{ forceToAxis: true, sensitivity: 0.1, releaseOnEdges: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 1
        }
      }}
    >
      <SwiperSlide>
        <img
          src='https://via.placeholder.com/1200x450'
          className='block w-full h-full object-cover'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://via.placeholder.com/1200x450'
          className='block w-full h-full object-cover'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://via.placeholder.com/1200x450'
          className='block w-full h-full object-cover'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://via.placeholder.com/1200x450'
          className='block w-full h-full object-cover'
          alt=''
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://via.placeholder.com/1200x450'
          className='block w-full h-full object-cover'
          alt=''
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
