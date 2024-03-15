import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo } from '../components';
import { Events } from '../components/ourWorld/Events';
import { MapaMundi } from '../components/ourWorld/MapaMundi';
import { News } from '../components/ourWorld/News';
import { WorldOfMedals } from '../components/ourWorld/WorldOfMedals';

export const OurWorld = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:px-20 relative">
      <div className="absolute md:left-0 md:right-0 md:-top-60 top-10 md:transform-50 md:ml-0 ml-4 mx-auto text-center">
        <AgedByNatureLogo className="sm:w-80 sm:h-80 w-52 inline-block" />
      </div>
      <div className="sm:px-36 pt-48 md:pt-28 md:px-5 px-16  sm:mb-44 md:text-left text-right md:mt-64">
        <h1 className="uppercase font-bold md:text-6xl text-5xl md:w-96 w-80 text-gold inline-block">{t('menu.our_world')}</h1>
      </div>

      {/* Medals */}
      <WorldOfMedals />
      <MapaMundi />
      <Events />
      <News />
    </section>
  );
};
