import React, { useState, useRef } from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const items = [
  {
    id: '1',
    desc: 'On the windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. of believed or diverted no.',
    image: 'jack-ward-rknrvCrfS1k-unsplash.jpg',
    author: 'Mike taylor',
    role: 'Lahore, Pakistan',
  },
  {
    id: '2',
    desc: 'On he window talking painted pasture yet its express parties us. Sure last upon he same as knew next',
    image: 'fredy-martinez-frd7WNzipdU-unsplash.jpg',
    author: 'Yein Narayana',
    role: 'Nganu, Buleleng',
  },
  {
    id: '3',
    desc: 'On he window talking painted pasture yet its express parties us. Sure last upon he same as knew next',
    image: 'marcin-nowak-iXqTqC-f6jI-unsplash.jpg',
    author: 'Nguyen Chong',
    role: 'Sumenep, East Java',
  },
];

export default function Testimonial() {
  const [realSlide, setRealSlide] = useState(0);
  const swiper = useRef();

  const fnPrev = React.useCallback(() => {
    if (realSlide > 0) swiper?.current.slidePrev();
  }, [swiper, realSlide]);

  const fnNext = React.useCallback(() => {
    if (realSlide < items.length) swiper?.current?.slideNext();
  }, [swiper, realSlide]);

  return (
    <section className="mb-28">
      <div className="max-w-7xl mx-auto relative px-4">
        <div className="flex">
          {/* TESTIMONIAL AWAL kiri */}
          <div className="w-6/12 pl-8 pr-20">
            <div className="flex flex-col mb-16">
              <h3 className="uppercase text-lg mb-2 text-gray-500">
                Testimonials
              </h3>
              <h3 className="font-sans text-5xl text-gray-900 leading-snug mb-10">
                What people say about Us.
              </h3>
              <ul className="flex gap-x-6">
                {items.map((_, i) => {
                return (
                <li
                key={i}
                className={[
                    'w-2 h-2 rounded-full',
                    i === realSlide ? 'bg-gray-800' : 'bg-gray-300',
                ].join("")}
                onClick={() =>
                i !== realSlide && swiper?.current?.slideTo(i)
                }
                ></li>
                );
                })}
              </ul>
            </div>
          </div>
          {/* TESTIMONIAL AKHIR kiri*/}

          {/* slider awal */}
          <div className="w-6/12 flex items-center justify-center relative">
            <div className="absolute -inset-10 -top-20">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCreative,
                ]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ['-100%', '-100%', 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(s) => setRealSlide(s.realIndex)}
                onSwiper={(s) => {
                  swiper.current = s;
                }}
              >
                {items.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className=" relative px-32 pt-20 pb-48">
                        <div className="relative">
                          <div className="bg-white shadow-great rounded-xl p-6 relative z-20">
                            <span className="w-12 h-12 absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full flex-none mr-3">
                              {/* Masalah pada images jadi tidak tampil */}
                              <Image
                                className="object-cover"
                                layout="responsive"
                                width={500}
                                height={500}
                                src={`/images/${item.image}`}
                                alt="Unsplash"
                              />
                              {/* Masalah pada images jadi tidak tampil */}
                            </span>

                            <p className="text-gray-500 mb-8">{item.desc}</p>

                            <h6 className="text-gray-900 text-lg">
                              {item.author}
                            </h6>
                            <h6 className="text-gray-500 text-sm">
                              {item.role}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* slider akhir */}

          {/* Navigasi slider awal */}
          <div className="w-1/12 items-center justify-center flex">
            <div className="flex flex-col">
              <button
                onClick={fnPrev}
                className={[
                  realSlide === 0 ? 'text-gray-300' : 'text-gray-800',
                ].join('')}
              >
                <span className="material-icons mr-2">keyboard_arrow_up</span>
              </button>
              <button
                onClick={fnNext}
                className={[
                  realSlide === items.length - 1
                    ? 'text-gray-300'
                    : 'text-gray-800',
                ].join('')}
              >
                <span className="material-icons mr-2">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
          {/* Navigasi slider akhir */}
        </div>
      </div>
    </section>
  );
}
