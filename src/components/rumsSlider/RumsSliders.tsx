import Slider, { Settings } from 'react-slick';
import { LeafIcon } from '../../assets/imgs/shared';
import { RumItemSlider } from './RumItemSlider';
import { RumItem } from '../../interfaces';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  name?: string;
  rums: RumItem[];
  background: string;
}

const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  className: 'sliders-rums',
  responsive: [
    {
      breakpoint: 500,
      settings: {
        dots: true,
      },
    },
  ],
};

export const RumsSliders = ({ name, rums, background }: Props) => {
  return (
    <div
      className="relative"
      style={{
        background: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      {name && (
        <div className="flex justify-center sm:mb-0 mb-10">
          <h2 className="text-center text-gold font-bold uppercase sm:text-7xl text-5xl sm:w-96 z-10">{name}</h2>
        </div>
      )}
      <img
        src={LeafIcon}
        alt="leaf icon"
        className=" mix-blend-darken -scale-x-90 -rotate-12 absolute left-[15%] top-6 sm:block hidden"
      />
      <img
        src={LeafIcon}
        alt="leaf icon"
        className="w-24 mix-blend-darken absolute right-[20%] top-36 sm:block hidden"
      />

      <Slider {...settings}>
        {rums.map((rum, i) => (
          <RumItemSlider rum={rum} key={i} />
        ))}
      </Slider>
    </div>
  );
};
