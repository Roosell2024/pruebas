import { useTranslation } from 'react-i18next';
import { MedalsSlider } from './MedalsSlider';
import { OrangeIcon } from '../../assets/imgs/shared';

export const WorldOfMedals = () => {
  const { t } = useTranslation();
  return (
    <div className="sm:flex flex-row justify-start md:mt-56 mt-24">
      <div className="flex md:w-1/4 md:h-md:ml-40 md:text-left text-center">
        <h1 className="uppercase text-5xl md:w-52 w-44 md:mt-16 font-extrabold text-green-300 md:ml-0 ml-7 ">
          {t('our_world.world_medals')}
        </h1>
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="md:w-52 md:h-52 w-52 h-52 object-contain md:rotate-[50deg] rotate-[55deg] absolute md:top-[40rem] md:left-36 left-48 top-[18rem] md:block "
        />
      </div>
      <div className="w-full xs:ml-0 -ml-5">
        <MedalsSlider />
      </div>
    </div>
  );
};
