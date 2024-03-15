import { useTranslation } from "react-i18next";
import { EventSlider } from "./EventSlider";

export const Events = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:justify-start justify-center md:items-start items-center md:mt-56 mt-20">
      <div className="md:w-1/4 md:h-md:ml-40">
        <h1 className="uppercase text-5xl w-52 mt-16 font-extrabold text-green-300">{t('our_world.events')}</h1>
      </div>
      <div className="w-full md:h-md:ml-96 ml-0 transform scale-110">
        <EventSlider />
      </div>
    </div>
  );
}
