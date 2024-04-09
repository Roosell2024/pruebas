import { animated, useSpring } from '@react-spring/web';
import { LeafsIcon } from '../assets/imgs/shared';
import { useTranslation } from 'react-i18next';
import { Bottle20Anniversary, Bottle25Anniversary, Bottle30Anniversary } from '../assets/imgs/ourRums/bottleRums';

export const HomePage = () => {
  const { t } = useTranslation();
  const bottle20Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -70%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 550,
  });

  const bottle30Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -50%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 700,
  });

  const bottle25Animation = useSpring({
    from: { opacity: 0, transform: 'translate(200%, -35%)' },
    to: { opacity: 1, transform: 'translate(0, 0)' },
    delay: 900,
  });

  const textAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 900,
  });

  return (
    <div className="relative">
      <img
        src={LeafsIcon}
        alt="leafs"
        className="absolute w-96 opacity-20 2xl:right-[40%] sm:right-1/2 sm:top-114 top-52"
      />

      <div className="md:grid grid-cols-2 flex flex-col-reverse gap-4 xl:px-40 lg:px-32 md:px-10 px-5 py-20 font-light text-lg">
        <animated.div className="md:text-white-50 text-green-300 text-justify mb-16 sm:mb-0" style={textAnimation}>
          <p className="mb-5">{t('home.paragraph1')}</p>
          <p className="mb-5">{t('home.paragraph2')}</p>
          <p>{t('home.paragraph3')}</p>
        </animated.div>
        <div className="flex flex-row">
          <animated.img
            style={bottle20Animation}
            src={Bottle20Anniversary}
            className="w-40 sm:w-96 lg:w-60 h-fit -mr-10 md:-mr-28 lg:ml-28 -ml-8 h-md:ml-auto sm:ml-auto h-md:2xl:ml-40"
            alt="Botella 30"
          />
          <animated.img
            style={bottle30Animation}
            src={Bottle30Anniversary}
            className="w-40 sm:w-96 lg:w-60 h-fit -mr-10 md:-mr-28 mt-28 z-10"
            alt="Botella 30"
          />
          <animated.img
            style={bottle25Animation}
            src={Bottle25Anniversary}
            className="w-36 sm:w-96 lg:w-52 h-fit"
            alt="Botella 30"
          />
        </div>
      </div>
    </div>
  );
};
