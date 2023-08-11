import * as React from 'react'

import Slider, { Settings as CarouselSettings } from 'react-slick'

const Carousel = () => {
  return (
    <>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
      >
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%]'>
            1
          </h3>
        </div>
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%]'>
            2
          </h3>
        </div>
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%]'>
            3
          </h3>
        </div>
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%]'>
            4
          </h3>
        </div>
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%]'>
            5
          </h3>
        </div>
        <div>
          <h3 className='text-black text-4xl leading-[300px] relative text-center m-2.5 p-[2%] z-[-1]'>
            6
          </h3>
        </div>
      </Slider>
    </>
  )
}

export default Carousel
