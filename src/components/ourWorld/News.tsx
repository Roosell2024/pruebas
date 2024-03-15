import { useTranslation } from "react-i18next";
import { NewSlider } from "./NewsSlider";
import { LeafsIconC } from "../../assets/imgs/shared";


export const News = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:justify-start justify-center md:items-start items-center md:mt-56 mt-10">
      <div className="sm:w-1/4 sm:h-md:ml-40">
        <h1 className="uppercase text-5xl w-52 mt-16 font-extrabold text-green-300">{t('our_world.news')}</h1>
        <img
          src={LeafsIconC}
          alt="leaf icon"
          className="mix-blend-darken -scale-x-90 rotate-[90deg] absolute -left-[10rem] top-[92%] md:block hidden"
        />
      </div>
      <div className="w-full sm:h-md:ml-96 md:ml-56 md:transform md:scale-110">
        <NewSlider />
      </div>
    </div>
  );
};
