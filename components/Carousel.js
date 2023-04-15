import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay, Navigation]);

export default function MainCarousel () {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      className='mySwiper'
    >
      <SwiperSlide>
        <div
          className='bg-cover bg-center h-auto text-white py-24 px-10 object-fill'
          style={{
            backgroundImage:
              'url(https://png.pngtree.com/thumb_back/fh260/background/20211014/pngtree-television-news-background-image_909008.png)',
          }}
        >
          <div className='md:w-1/2'>
            <p className='font-bold text-sm uppercase'>Live</p>
            <p className='text-3xl font-bold'>News</p>
            <p className='text-2xl mb-10 leading-none'>
            ALL OVER THE WORLD
            </p>
          
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className='bg-cover bg-center h-auto text-white py-24 px-10 object-fill'
          style={{
            backgroundImage:
              'url(https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg)',
          }}
        >
          <div className='md:w-1/2'>
            <p className='font-bold text-sm uppercase'>News</p>
            <p className='text-3xl font-bold'>Buddy</p>
            <p className='text-2xl mb-10 leading-none'>
                Stay Updated !!
            </p>
           
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

