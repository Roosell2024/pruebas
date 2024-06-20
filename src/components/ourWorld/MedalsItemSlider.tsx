import { useEffect, useState } from 'react';
import { MedalsItem } from '../../interfaces/MedalsItem';
import { arrowSlider } from '../../assets/imgs/cocktails';
import { MiniMedalla } from '../../assets/imgs/ourWorld';
import { useTranslation } from 'react-i18next';
import { useTransition } from 'transition-hook';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';
interface Props {
  rumMedals: MedalsItem;
  lastOne?: boolean;
}

export const MedalsItemSlider = ({ rumMedals, lastOne }: Props) => {
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);
  const [onOff, setOnOff] = useState(false);
  const { stage, shouldMount } = useTransition(onOff, 300);
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
    isSmallDevice && setOnOff(!onOff);
  };

  return (
    <div className={`relative flex flex-row justify-start w-full min-w-max md:pb-0 pb-10 ${lastOne ? 'sm:mr-96 mr-0' : ''}`}>
      <img
        src={rumMedals.img}
        alt={rumMedals.bottle}
        className="md:mt-6 md:h-md:w-[21rem] md:w-[18rem] md:h-fit h-114"
      />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div className="flex flex-col gap-2 col-span-1 md:h-auto h-114">
          {rumMedals.medals.map((med, i) => (
            <img
              src={med.img}
              key={i}
              alt={med.name}
              className="md:h-md:w-32 sm:w-28 w-24 coin md:hover:flipping hover:cursor-pointer"
              onClick={() => changeMedal(i)}
            />
          ))}
        </div>
        {(shouldMount || !isSmallDevice) && (
          <div
            className="text-center md:col-span-2 col-span-full md:relative absolute top-0 left-0 right-0 mx-auto z-10 md:w-auto w-80 bg-white-50 md:shadow-none shadow-lg shadow-green-50 md:rounded-none rounded-lg p-5"
            style={{
              transition: '.3s',
              opacity: isSmallDevice ? (stage === 'enter' ? 1 : 0) : 1,
            }}
          >
            <img src={medalData.img} alt={medalData.name} className="md:h-md:w-60 w-44 inline-block md:mb-0 mb-5" />
            <p className="md:w-80 sm:w-[16rem] md:mt-5 text-green-300 md:text-lg font-normal text-justify md:h-md:h-[340px] h-[300px] overflow-y-auto md:pr-1">
              {t(medalData.text)}
            </p>
            {isSmallDevice && (
              <div className="w-full text-right mt-5">
                <button onClick={() => setOnOff(!onOff)} className='text-lg text-green-300 border border-green-300 rounded-lg px-5'>{t('close')}</button>
              </div>
            )}
          </div>
        )}
        <div className="md:col-span-2 md:col-start-2 col-span-full text-center md:ml-0 xs:-ml-36 -ml-44">
          <a
            href="https://roncentenario.blob.core.windows.net/multimedia/Book of medals 2023 (12 premium).pdf"
            target="_blank"
            download
            rel="noreferrer"
            className="inline-flex w-64 max-h-12 mt-8 items-center justify-center space-x-2 bg-green-300 hover:bg-green-200 transition text-white-50 px-4 py-2 rounded-lg focus:outline-none"
          >
            <div className="flex relative -left-8">
              <img src={MiniMedalla} alt="Mini medalla" className="w-15 h-12" />
            </div>
            <span>{t('our_world.more_medals')}</span>
          </a>
        </div>
      </div>
      {!lastOne && (
        <div className={`flex justify-center items-center md:ml-10 ${lastOne && 'md:ml-[45rem]'}`}>
          <img src={arrowSlider} alt="arrow" className="2xl:w-fit w-14" />
        </div>
      )}
    </div>
  );
};
