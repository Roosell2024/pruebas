import { useEffect, useState } from 'react';
import { useTransition } from 'transition-hook';
import i18n, { resources } from '../../../config/i18n';

export const LanguageFab = () => {
  const [onOff, setOnOff] = useState(false);
  const { stage, shouldMount } = useTransition(onOff, 300);

  const languageSelected = localStorage.getItem('i18nextLng') || 'en';
  const languages = Object.keys(resources).sort().filter((lang) => lang !== languageSelected);

  useEffect(() => {
    if (onOff) {
      document.addEventListener(
        'click',
        () => {
          setOnOff(false);
        },
        { once: true },
      );
    }
  }, [onOff]);

  const handleOpenOptions = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setOnOff(!onOff);
  };

  const handleChangeLanguage = (lang: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang);
    setOnOff(false);
  }

  return (
    <div className="fixed h-sm:sm:right-7 right-3 h-sm:sm:bottom-7 bottom-3 z-50 flex flex-col items-center gap-3">
      {shouldMount && (
        <div
          style={{
            transition: '.3s',
            opacity: stage === 'enter' ? 1 : 0,
            filter: stage === 'enter' ? 'unset' : 'blur(10px)',
          }}
          className="flex flex-col items-center gap-3"
        >
          {languages.map((lang) => {
            return (
              <div
                key={lang}
                onClick={handleChangeLanguage(lang)}
                className="w-20 h-20 rounded-full hover:cursor-pointer relative shadow-lg"
                style={{
                  backgroundImage: `url(${resources[lang].flag})`,
                  backgroundPosition: 'center',
                }}
              />
            );
          })}
        </div>
      )}
      <div
        className="w-20 h-20 rounded-full hover:cursor-pointer shadow-lg"
        onClick={handleOpenOptions}
        style={{
          backgroundImage: `url(${resources[languageSelected].flag})`,
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};
