import { useEffect, useState } from 'react';
import { MedalsItem } from '../../interfaces/MedalsItem';
import { arrowSlider } from '../../assets/imgs/cocktails';
import { MiniMedalla } from '../../assets/imgs/ourWorld';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';

interface Props {
  rumMedals: MedalsItem;
  lastOne?: boolean;
}

export const MedalsItemSlider = ({ rumMedals, lastOne }: Props) => {
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);
  const [medalData, setMedalData] = useState({
    img: '',
    name: '',
    text: '',
    main: false,
  });

  useEffect(() => {
    rumMedals.medals.forEach((medal) => {
      if (medal.main) {
        setMedalData(medal);
      }
    });
    // eslint-disable-next-line
  }, []);

  const changeMedal = (i: number) => {
    setMedalData(rumMedals.medals[i]);
  };

  return (
    <div
      className={`flex flex-row justify-start w-full min-w-max ${lastOne ? 'md:h-md:mr-96 mr-0' : ''} md:transform md:scale-100 scale-75`}
    >
      <div className="flex md:mt-0 -mt-24 md:ml-0 -ml-28 ">
        <img src={rumMedals.img} alt="" className="md:mt-6 md:h-md:w-[21rem] md:w-[18rem] md:h-fit h-144" />
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="flex md:flex-col flex-row md:mt-0 mt-10 md:block hidden">
          {rumMedals.medals.map((med, i) => (
            <img
              src={med.img}
              key={i}
              alt={med.name}
              className="md:h-md:w-32 w-28 h-fit mb-2 coin hover:flipping hover:cursor-pointer"
              onClick={() => changeMedal(i)}
            />
          ))}
        </div>
        <div className="flex flex-row md:mt-0 -mt-24">
          <div
            className={`flex flex-col justify-start items-center md:ml-8 ${rumMedals.bottle !== 'Botella 30' ? '-ml-16' : ''}`}
          >
            <img src={medalData.img} alt={medalData.name} className="md:h-md:w-60 w-44 h-fit" />
            <p className="md:w-80 w-[16rem] mt-5 text-green-300 text-lg font-normal text-justify md:h-md:h-[340px] h-[300px] overflow-y-auto pr-1">
              {t(medalData.text)}{' '}
            </p>
            <a
              href="https://roncentenario.blob.core.windows.net/multimedia/Book of medals 2023 (12 premium).pdf"
              target="_blank"
              download
              rel="noreferrer"
              className="md:flex hidden w-64 max-h-12 mt-8 items-center justify-center space-x-2 bg-green-300 hover:bg-green-200 transition text-white-50 px-4 py-2 rounded-lg focus:outline-none"
            >
              <div className="flex relative -left-8">
                <img src={MiniMedalla} alt="" className="w-15  h-12 " />
              </div>
              <span>{t('our_world.more_medals')}</span>
            </a>
          </div>
          {!lastOne && (
            <div className={`flex justify-center items-center ml-10 ${lastOne && 'md:ml-[45rem]'}`}>
              <img src={arrowSlider} alt="arrow" className="2xl:w-fit w-14" />
            </div>
          )}
        </div>
        {isSmallDevice ? (
          <div className="flex flex-col justify-center mt-24 -ml-60">
            <div className="flex flex-row">
              {rumMedals.medals.map((med, i) => (
                <img
                  src={med.img}
                  key={i}
                  alt={med.name}
                  className="md:h-md:w-32 w-28 mb-2 coin hover:flipping hover:cursor-pointer"
                  onClick={() => changeMedal(i)}
                />
              ))}
            </div>
            <div className={`absolute top-[40rem] ${rumMedals.bottle !== 'Botella 30' ? 'left-4' : 'left-12'} `}>
              <a
                href="https://roncentenario.blob.core.windows.net/multimedia/Book of medals 2023 (12 premium).pdf"
                target="_blank"
                download
                rel="noreferrer"
                className="flex w-96 max-h-14 mt-8  items-center justify-center bg-green-300 hover:bg-green-200 transition text-white-50 px-4 py-2 rounded-lg focus:outline-none"
              >
                <div className="flex relative -left-20">
                  <img src={MiniMedalla} alt="" className="w-20 h-14" />
                </div>
                <p className="text-xl -ml-8">{t('our_world.more_medals')}</p>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
