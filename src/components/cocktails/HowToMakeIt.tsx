import { useEffect, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../config/constants';
import { useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useTransition } from 'transition-hook';

interface Props {
  videoId: string;
  name: string;
}

export const HowToMakeIt = ({ videoId, name }: Props) => {
  const isSmallDevice = useMediaQuery(mobileBreakpoint);
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const { stage, shouldMount } = useTransition(openModal, 300);

  useEffect(() => {
    createObserver();
    // eslint-disable-next-line
  }, [shouldMount]);

  const createObserver = () => {
    const button = document.querySelector('.lty-playbtn') as HTMLButtonElement;
    if (shouldMount) {
      if (!button) return;
      const options = {
        rootMargin: '-50%',
        threshold: 1,
      };
      const observer = new IntersectionObserver(() => button.click(), options);
      observer.observe(button);
    }
  };

  const videoComponent = (
    <LiteYouTubeEmbed
      id={videoId}
      title={t(name)}
      params="rel=0&enablejsapi=1&autoplay=1&loop=1"
      poster="maxresdefault"
      wrapperClass="sm:w-[200px] sm:h-[350px] h-[622px] bg-center yt-lite sm:shadow-xl"
      iframeClass="sm:w-[200px] sm:h-[350px] h-[622px]"
      playerClass="lty-playbtn"
      noCookie={true}
      rel="0"
    />
  );

  if (isSmallDevice) {
    return (
      <div className="mt-10 text-center">
        <button
          className="rounded-2xl bg-error-600 text-white-50 h-lg:xs:px-10 px-5 py-5 text-4xl uppercase inline-block h-lg:xs:w-80"
          onClick={() => setOpenModal(true)}
        >
          {t('cocktails.how_to_make_it')}
        </button>

        {shouldMount && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center transition delay-75 justify-center ${
              stage === 'enter' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="p-10 w-full">
              {videoComponent}
              <button onClick={() => setOpenModal(false)} className="absolute top-5 right-5 text-5xl text-white-50">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h4 className="font-bold text-3xl mb-3 w-56">{t('cocktails.how_to_make_it')}</h4>
      {videoComponent}
    </div>
  );
};
