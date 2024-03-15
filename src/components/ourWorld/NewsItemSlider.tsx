import { useTranslation } from 'react-i18next';
import { NewsItem } from '../../interfaces/NewsItem';
import { useState } from 'react';
import { useTransition } from 'transition-hook';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';

interface Props {
  newItem: NewsItem;
  lastOne?: boolean;
}

export const NewItemSlider = ({ newItem, lastOne }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { stage } = useTransition(open, 300);
    const isSmallDevice = useMediaQuery(mobileBreakpoint);

  const readMoreEvent = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`shadow-lg shadow-green-50 rounded-3xl md:p-12 p-5 flex flex-col w-full ${lastOne ? 'md:mr-80' : 'mr-0'}`}
      style={
        !isSmallDevice
          ? {
              transition: '.3s',
              maxHeight: stage === 'enter' ? '750px' : '600px',
              width: stage === 'enter' ? '600px' : '480px',
            }
          : {
              transition: '.3s',
              maxHeight: stage === 'enter' ? '800px' : '600px',
              width: '350px',
            }
      }
    >
      <div className="flex flex-col w-full md:justify-start md:items-start justify-center items-center">
        <h3 className="text-2xl font-extrabold text-green-300">{t(newItem.title)}</h3>
        <img src={newItem.img} alt="" className="mt-6 w-full" />
        <div className="flex flex-col md:w-full md:max-w-full max-w-[350px]">
          <p className="text-green-300 text-lg font-normal pt-5 pb-1 md:pl-0 pl-3">{t(newItem.date)}</p>
          <p
            className={`${!open ? 'overflow-hidden line-clamp-6' : 'overflow-y-auto pr-1'}  text-green-300 text-justify`}
            style={
              !isSmallDevice
                ? {
                    transition: '.3s',
                    width: stage === 'enter' ? '32rem' : '24rem',
                    maxHeight: stage === 'enter' ? '18rem' : '13rem',
                  }
                : {
                    transition: '.3s',
                    width: '20rem',
                    maxHeight: stage === 'enter' ? '18rem' : '13rem',
                  }
            }
          >
            {t(newItem.text)}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="button" className="text-green-300 font-bold hover:text-green-100" onClick={readMoreEvent}>
          {t(open ? 'our_world.read_less' : 'our_world.read_more')}
        </button>
      </div>
    </div>
  );
};
