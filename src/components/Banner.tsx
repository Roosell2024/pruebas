import { useBannerContext } from '../hooks';
import BannerMobile from '../assets/imgs/banners/banner-mobile.webp';
import BannerDesktop from '../assets/imgs/banners/banner-web.webp';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../config/constants';
import { useEffect } from 'react';

export const Banner = () => {
  const { open, setOpen } = useBannerContext();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed left-0 top-0 z-[55] flex h-screen w-screen items-center justify-center bg-black/65">
      <div className="relative">
        <button onClick={() => setOpen(false)} className="absolute right-1 top-1 rounded-full text-white-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10l4 4m0 -4l-4 4" />
            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
          </svg>
        </button>

        <img src={isSmallDevice ? BannerMobile : BannerDesktop} alt="banner" />
      </div>
    </div>
  );
};
