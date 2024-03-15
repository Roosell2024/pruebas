import { useTranslation } from "react-i18next";
import { LeafIcon, OrangeIcon } from "../../assets/imgs/shared";
import { MapaItem } from "./MapaItem";


export const MapaMundi = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-start md:mt-56 mt-1">
      <div className="flex flex-col md:w-1/4 w-full sm:h-md:ml-40 md:text-left text-center justify-center items-center">
        <h1 className="uppercase md:text-7xl text-4xl w-80 mt-16 font-extrabold text-green-300">
          {t('our_world.where_to_find_us')}
        </h1>
        <img
          src={LeafIcon}
          alt="leaf icon"
          className="mix-blend-darken -scale-x-90 rotate-[85deg] absolute md:left-[55rem] md:block md:w-44 w-20 md:top-[85rem] top-[78rem]"
        />
      </div>
      <div className="w-full sm:h-md:ml-40 transform mt-10">
        <MapaItem />
        <img
          src={OrangeIcon}
          alt="Orange icon"
          className="w-52 h-52 rotate-[30deg] absolute top-[43rem] left-[55rem] md:block hidden object-contain"
        />
      </div>
    </div>
  );
};
