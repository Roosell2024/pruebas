import { useTranslation } from 'react-i18next';
import { MedalsSlider } from './MedalsSlider';
import { OrangeIcon } from '../../assets/imgs/shared';

export const WorldOfMedals = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-24 flex-row justify-start sm:flex md:mt-56">
      <div className="flex text-center md:w-1/4 md:text-left md:h-md:ml-40">
        <h1 className="ml-7 w-44 text-5xl font-extrabold uppercase text-green-300 md:ml-0 md:mt-16 md:w-52 ">
          {t('our_world.world_medals')}
        </h1>
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="absolute left-48 top-[18rem] h-52 w-52 rotate-[55deg] object-contain md:left-36 md:top-[40rem] md:block md:h-52 md:w-52 md:rotate-[50deg]"
        />
      </div>
      <div className="-ml-5 w-full xs:ml-0">
        <MedalsSlider />
      </div>
    </div>
  );
};
