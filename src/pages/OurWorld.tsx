import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo } from '../components';
import { Events } from '../components/ourWorld/Events';
import { MapaMundi } from '../components/ourWorld/MapaMundi';
import { News } from '../components/ourWorld/News';
import { WorldOfMedals } from '../components/ourWorld/WorldOfMedals';
import { CurveImg } from '../assets/imgs/shared';
import { BGOWorld } from '../assets/imgs/ourWorld';

export const OurWorld = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top md:h-[900px] 2xl:h-[1000px]"
        style={{ backgroundImage: `url('${BGOWorld}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5" />
      </div>
      <section className="relative -mt-[320px] sm:px-10 md:-mt-[calc(900px-100px)] lg:px-20 xl:px-32 2xl:-mt-[calc(1000px-150px)]">
        <div className="md:transform-50 absolute top-10 mx-auto ml-4 text-center md:-top-60 md:left-0 md:right-0 md:ml-0">
          <AgedByNatureLogo className="inline-block w-52 sm:h-80 sm:w-80" />
        </div>
        <div className="pt-48 text-center sm:mb-44 sm:px-36 md:mt-64 md:px-5 md:text-left xs:px-12 h-sm:md:pt-28">
          <h1 className="inline-block w-80 text-5xl font-bold uppercase text-gold md:w-96 md:text-6xl">
            {t('menu.our_world')}
          </h1>
        </div>

        {/* Medals */}
        <WorldOfMedals />
        <MapaMundi />
        <Events />
        <News />
      </section>
    </>
  );
};
