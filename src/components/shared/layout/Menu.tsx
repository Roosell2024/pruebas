import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useTransition } from 'transition-hook';
import { useTranslation } from 'react-i18next';
import { HamburgerMenu } from '../../../assets/imgs/icons';

export const Menu = () => {
  const [, setLocation] = useLocation();
  const [onOff, setOnOff] = useState(false);
  const { stage, shouldMount } = useTransition(onOff, 100);
  const { t } = useTranslation();

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

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOnOff(!onOff);
  };

  const handleClickItem = (url: string) => () => {
    setLocation(url);
    setOnOff(false);
  };

  const classes = !shouldMount
    ? 'w-28 h-28 items-center justify-center -top-3 -right-5 bg-opacity-70'
    : '-right-60 -top-80 w-[650px] h-[650px] items-start pt-[350px] pl-[170px] shadow-lg shadow-gold';

  return (
    <nav>
      <div
        className={`absolute bg-gold rounded-full flex z-50 ${classes}`}
        style={{
          transition: '.3s',
        }}
      >
        {shouldMount && (
          <ul
            className="list-disc text-3xl text-green-100"
            style={{
              transition: '.3s',
              opacity: stage === 'enter' ? 1 : 0,
            }}
          >
            <li>
              <span onClick={handleClickItem('/our-history')} className="hover:cursor-pointer">
                {t('menu.our_history')}
              </span>
            </li>

            <li>
              <span onClick={handleClickItem('/our-rums')} className="hover:cursor-pointer">
                {t('menu.our_rums')}
              </span>
            </li>

            <li>
              <span onClick={handleClickItem('/cocktails')} className="hover:cursor-pointer">
                {t('menu.cocktails')}
              </span>
            </li>

            <li>
              <span onClick={handleClickItem('/sostenibilidad')} className="hover:cursor-pointer">
                {t('menu.sustainability')}
              </span>
            </li>

            <li>
              <span onClick={handleClickItem('/our-world')} className="hover:cursor-pointer">
                {t('menu.our_world')}
              </span>
            </li>

            <li>
              <span onClick={handleClickItem('/contact-us')} className="hover:cursor-pointer">
                {t('menu.contact_us')}
              </span>
            </li>
          </ul>
        )}
        <button
          type="button"
          onClick={toggleMenu}
          className={shouldMount ? 'opacity-60 absolute left-[22.5rem] inline-block' : ''}
        >
          <img alt="menu icon" className="w-7 h-7" src={HamburgerMenu} />
        </button>
      </div>
    </nav>
  );
};
