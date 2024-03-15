import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo, ScotlandMap, Timeline } from '../components';

export const OurHistory = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:px-20 relative">
      <div className="absolute sm:top-0 -top-5 left-0 right-0 mx-auto text-center">
        <AgedByNatureLogo className="sm:w-80 sm:h-80 w-40 inline-block" />
      </div>
      <div className="sm:pt-32 pt-28 sm:px-36 px-16 sm:mb-44 mb-20">
        <h1 className="uppercase font-bold sm:text-6xl text-5xl sm:w-52 text-gold sm:text-left text-center">
          {t('menu.our_history')}
        </h1>
      </div>
      <Timeline />
      <ScotlandMap />
    </section>
  );
};
