import { ABVIcon, AgingIcon, NosingIcon, TasteIcon } from '../../assets/imgs/ourRums';
import { useRef, useState } from 'react';
import { useTransition } from 'transition-hook';
import { RumItem } from '../../interfaces';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';

interface Props {
  rum: RumItem;
}

export const RumItemSlider = ({ rum }: Props) => {
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);
  const container = useRef<HTMLDivElement | null>(null);

  const [itemSelected, setItemSelected] = useState({
    text: '',
    lineClasses: '',
    positionTooltip: { left: '0', top: '0', right: 'auto' },
  });
  const [onOff, setOnOff] = useState(false);
  const { stage, shouldMount } = useTransition(onOff, 300);

  const tooltipData = {
    abv: {
      lineClasses: 'before:-left-14',
      positionTooltip: {
        left: isSmallDevice ? '0' : '13rem',
        top: isSmallDevice ? '8rem' : '14rem',
        right: 'auto',
      },
    },
    aging: {
      lineClasses: 'before:-left-14',
      positionTooltip: {
        left: isSmallDevice ? '0' : '13rem',
        top: isSmallDevice ? '8rem' : '38rem',
        right: 'auto',
      },
    },
    nosing: {
      lineClasses: 'before:-right-14',
      positionTooltip: {
        left: 'auto',
        top: isSmallDevice ? '8rem' : '12rem',
        right: isSmallDevice ? '0' : '13rem',
      },
    },
    taste: {
      lineClasses: 'before:-right-14',
      positionTooltip: {
        left: 'auto',
        top: isSmallDevice ? '8rem' : '35rem',
        right: isSmallDevice ? '0' : '13rem',
      },
    },
  };

  const handleHoverIcon = (iconName: keyof RumItem) => () => {
    const tooltip = tooltipData[iconName as keyof typeof tooltipData];
    setItemSelected({
      ...tooltip,
      text: rum[iconName],
    });
    setOnOff(true);
  };

  const handleMouseLeave = () => {
    setOnOff(false);
  };

  return (
    <div className="h-[850px] relative mx-10" ref={container}>
      <img
        src={rum.bottle}
        alt="bottle"
        className="absolute left-0 right-0 mx-auto my-0 sm:h-sm:top-16 top-40 sm:h-sm:w-72 w-48"
      />
      <p className="2xl:w-[30rem] sm:w-[27em] text-justify absolute h-sm:bottom-12 bottom-28 right-0 left-0 mx-auto text-green-300 font-medium">
        {t(rum.text)}
      </p>

      {shouldMount && (
        <div
          className={`absolute sm:w-60 w-full bg-white-50 text-green-100 shadow-green-200 shadow-md p-5 rounded-lg top-20 sm:before:absolute before:border-t-2 before:border-dashed before:border-t-green-300 before:w-14 before:top-10 ${itemSelected?.lineClasses}`}
          style={{
            ...itemSelected?.positionTooltip,
            transition: '.3s',
            opacity: stage === 'enter' ? 1 : 0,
          }}
        >
          <p className="text-xl">{t(itemSelected?.text)}</p>
        </div>
      )}

      <div className="sm:w-40 w-[6.3rem] absolute sm:left-0 -left-8 sm:top-40 top-0 text-center">
        <h6 className="font-bold text-center text-green-300 text-xl uppercase mb-3">abv%</h6>
        <img
          src={ABVIcon}
          alt="abv"
          className="inline-block sm:w-36 w-[74px]"
          onMouseEnter={handleHoverIcon('abv')}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="sm:w-40 w-[6.3rem] absolute sm:left-0 left-20 sm:top-[33rem] top-0 text-center">
        <h6 className="font-bold text-center text-green-300 text-xl uppercase mb-3">{t('our_rums.aging')}</h6>
        <img
          src={AgingIcon}
          alt="Aging"
          className="inline-block sm:w-auto w-20"
          onMouseEnter={handleHoverIcon('aging')}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="sm:w-40 w-[6.3rem] absolute sm:right-0 right-15 sm:top-40 top-0 text-center">
        <h6 className="font-bold text-center text-green-300 text-xl uppercase mb-3">{t('our_rums.aroma')}</h6>
        <img
          src={NosingIcon}
          alt="nosing"
          className="inline-block sm:w-32 w-16"
          onMouseEnter={handleHoverIcon('nosing')}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="sm:w-40 w-[6.3rem] absolute sm:right-0 -right-8 sm:top-[33rem] top-0 text-center">
        <h6 className="font-bold text-center text-green-300 text-xl uppercase mb-3">{t('our_rums.flavor')}</h6>
        <img
          src={TasteIcon}
          alt="taste"
          className="sm:h-40 h-20 inline-block"
          onMouseEnter={handleHoverIcon('taste')}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};
