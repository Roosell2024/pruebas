import { animated, useSpring } from '@react-spring/web';
import { LeafsIcon } from '../assets/imgs/shared';
import { useTranslation } from 'react-i18next';
import { Bottle20Anniversary, Bottle25Anniversary, Bottle30Anniversary } from '../assets/imgs/ourRums/bottleRums';

export const HomePage = () => {
  const { t } = useTranslation();
  const bottle20Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -35%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 1750,
    config: { duration: 500 },
  });

  const bottle30Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -50%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 100,
    config: { duration: 1500 },
  });

  const bottle25Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -35%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 2100,
    config: { duration: 500 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="relative">
      <img
        src={LeafsIcon}
        alt="leafs"
        className="absolute top-52 w-96 opacity-20 sm:right-1/2 sm:top-114 2xl:right-[40%]"
      />

      <div className="flex grid-cols-2 flex-col-reverse gap-4 px-5 pt-12 text-lg font-light md:px-10 lg:px-32 2xl:px-40 h-sm:md:grid">
        <animated.div
          className="mb-16 text-justify text-green-300 h-sm:sm:mb-0 h-sm:md:text-white-50"
          style={textAnimation}
        >
          <p className="mb-5">{t('home.paragraph1')}</p>
          <p className="mb-5">{t('home.paragraph2')}</p>
          <p>{t('home.paragraph3')}</p>
        </animated.div>
        <div className="flex flex-row justify-center">
          <animated.img
            style={bottle20Animation}
            src={Bottle20Anniversary}
            className="-mr-10 h-full w-40 h-sm:sm:ml-auto h-sm:sm:h-fit h-sm:sm:w-96 h-sm:md:-mr-28 h-sm:lg:ml-28 h-sm:lg:w-60 h-sm:2xl:ml-40"
            alt="Botella 30"
          />
          <animated.img
            style={{
              ...bottle30Animation,
              transform: bottle30Animation.opacity.to({
                range: [0, 0.5, 0.7, 1],
                output: ['translate(200%, -25%)', 'translate(-75%, -15%)', 'translate(-65%, -5%)', 'translate(0, 0)'],
              }),
            }}
            src={Bottle30Anniversary}
            className="z-10 -mr-10 mt-28 h-full w-40 h-sm:sm:h-fit h-sm:sm:w-96 h-sm:md:-mr-28 h-sm:lg:w-60"
            alt="Botella 30"
          />
          <animated.img
            style={bottle25Animation}
            src={Bottle25Anniversary}
            className="h-full w-36 h-sm:sm:h-fit h-sm:sm:w-96 h-sm:lg:w-52"
            alt="Botella 30"
          />
        </div>
      </div>
    </div>
  );
};
