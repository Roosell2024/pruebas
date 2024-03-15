import { useTranslation } from 'react-i18next';
import { EventItem } from '../../interfaces/Events';
import { useState } from 'react';
import { useTransition } from 'transition-hook';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';
interface Props {
  eventItem: EventItem;
  lastOne?: boolean;
}

export const EventItemSlider = ({ eventItem, lastOne }: Props) => {
  const { t } = useTranslation();
  const [onOff, setOnOff] = useState(false);
  const { stage } = useTransition(onOff, 300);
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  const readMoreEvent = (open: boolean) => {
    setOnOff(open);
  };

  return (
    <div
      className={`flex md:flex-row flex-col-reverse md:justify-start  justify-center md:items-start items-center w-full min-w-max md:mt-11 mt-5 ${lastOne && 'md:mr-[25rem] mr-5'}`}
    >
      <div className="flex flex-col md:justify-between justify-center ml-1 md:ml-16 md:p-0 p-5">
        <h3 className="text-xl w-52 mt-16 font-extrabold text-green-300 md:block hidden">{t(eventItem.title)}</h3>
        <p
          className={`${
            !onOff ? 'overflow-hidden text-ellipsis' : 'overflow-y-auto'
          } md:max-h-[300px] max-h-[400px] md:pt-5 md:pl-0 pl-5  text-green-300 text-lg text-justify`}
          style={
            !isSmallDevice
              ? {
                  transition: '.3s',
                  width: stage === 'enter' ? '36rem' : '20rem',
                }
              : {
                  transition: '.3s',
                  height: stage === 'enter' ? '400px' : '250px',
                  width: '20rem',
                }
          }
        >
          {t(eventItem.text)}
        </p>
        <div className="flex justify-end mt-4">
          <button type="button" className="text-green-300 font-bold w-20" onClick={() => readMoreEvent(!onOff)}>
            {!onOff ? t('our_world.read_more') : t('our_world.read_less')}
          </button>
        </div>
      </div>
      <img src={eventItem.img} alt="" className="md:ml-8 md:w-56 mt-6 w-44" />
      {isSmallDevice ? (
        <div className="flex w-full justify-center">
          <h3 className="text-2xl w-64 mt-16 text-green-300  ">{t(eventItem.title)}</h3>
        </div>
      ) : null}
    </div>
  );
};
