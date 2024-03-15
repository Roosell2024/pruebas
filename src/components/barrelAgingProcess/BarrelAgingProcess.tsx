import { useTranslation } from 'react-i18next';
import { BarrelProcessImg } from '../../assets/imgs/ourRums';

export const BarrelAgingProcess = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-gold text-5xl font-bold sm:text-left text-center">{t('continuos_aging_system.title')}</h2>
      <div className="relative text-center mt-10">
        <p className="font-bold uppercase absolute sm:top-1/3 -top-8 left-0 sm:right-auto right-0 text-xl text-green-300">
          Criaderas
        </p>
        <p className="absolute 2xl:-left-24 sm:-left-36 left-0 right-0 sm:right-auto 2xl:bottom-32 sm:bottom-16 -bottom-10 sm:w-56 sm:text-left text-center text-xl font-bold text-green-300 sm:border-b-2 border-green-300 border-dashed sm:pb-3 after:h-5 after:w-5 after:bg-green-300 sm:after:absolute after:right-0 after:-bottom-[10px] after:rounded-full">
          {t('our_rums.extracted_from_base')}
        </p>
        <img src={BarrelProcessImg} alt="barrels icon" className="inline-block sm:w-3/4" />
      </div>
    </>
  );
};
