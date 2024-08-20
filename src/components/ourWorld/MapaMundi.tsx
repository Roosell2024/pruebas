import { useTranslation } from 'react-i18next';
import { LeafIcon, OrangeIcon } from '../../assets/imgs/shared';
import { MapaItem } from './MapaItem';

export const MapaMundi = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-1 flex flex-col justify-start md:mt-56">
      <div className="flex w-full flex-col items-center justify-center text-center md:w-1/4 md:text-left sm:h-md:ml-40">
        <h1 className="mt-16 w-80 text-4xl font-extrabold uppercase text-green-300 md:text-7xl">
          {t('our_world.where_to_find_us')}
        </h1>
        <img
          src={LeafIcon}
          alt="leaf icon"
          className="absolute sm:top-[100rem] top-[120rem] -z-10 w-20 rotate-[85deg] -scale-x-90 mix-blend-darken md:right-20 right-5 md:block md:w-44"
        />
      </div>
      <div className="mt-10 w-full transform sm:h-md:ml-40">
        <MapaItem />
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="absolute left-[55rem] top-[43rem] hidden h-52 w-52 rotate-[30deg] object-contain md:block"
        />
      </div>
    </div>
  );
};
