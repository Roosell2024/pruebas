import { ScotlandMapSVG } from './ScotlandMapSVG';
import { BarrilSideMap } from '../../assets/imgs/ourHistory';
import { useTranslation } from 'react-i18next';

export const ScotlandMap = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex justify-center">
      <h1 className="font-bold uppercase sm:h-md:text-6xl sm:h-sm:text-5xl text-4xl sm:w-96 absolute 2xl:right-20 right-0 text-gold sm:text-left text-center">{t('our_history.origin_barrels')}</h1>
      <img src={BarrilSideMap} alt="" className='absolute sm:-left-20 sm:right-0 left-0 opacity-15 sm:top-auto -top-72 w-64' />
      <ScotlandMapSVG />
    </div>
  );
};
