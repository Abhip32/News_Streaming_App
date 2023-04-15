import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
async function handleClick(name,link) {
  console.log({name})
  const router = await import('next/router');

  router.push({link});
}

const ChannelReel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{width:"95vw",marginLeft:"2vw"}}>
      {items.map((item) => (
        <Link key={item.id} className='p-2 items-center'  href="[src]" as={`${item.link}`}>
          <img className='rounded-full' src={item.image} alt={item.title} style={{ width: '155px', height: '150px' }}/>
          <h1 className='text-white'>{item.name}</h1>
        </Link>
      ))}
    </Slider>
  );
};

export default ChannelReel;
