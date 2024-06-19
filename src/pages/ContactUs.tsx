import { useTranslation } from 'react-i18next';
import { CurveImg, LeafIcon, LeafsIconC, OrangeIcon } from '../assets/imgs/shared';
import {
  BGContactUs,
  CelIcon,
  EmailIcon,
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '../assets/imgs/contactUs';
import { AgedByNatureLogo, ContactUsForm } from '../components';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../config/constants';

export const ContactUs = () => {
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);
  return (
    <>
      <div
        className="-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top 2xl:h-[1000px] md:h-[900px]"
        style={{ backgroundImage: `url('${BGContactUs}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5" />
      </div>

      <section className="relative -mt-[320px] md:-mt-[calc(900px-100px)] lg:px-28 2xl:-mt-[calc(1000px-150px)] xl:px-36 2xl:px-52">
        <div className={`transform-50 absolute left-1/2 top-24 md:top-36`}>
          <AgedByNatureLogo className="h-96 w-96" />
        </div>
        <div className="mt-44 pt-2 sm:px-36 md:pt-28">
          <h1
            className={`text-center font-bold uppercase text-gold sm:text-left ${!isSmallDevice ? 'text-6xl' : 'text-5xl'}`}
          >
            {t('menu.contact_us')}
          </h1>
        </div>

        <img src={LeafsIconC} alt="Leafs" className="absolute top-32 hidden sm:right-40 sm:block" />
        <img src={OrangeIcon} alt="Orange icon" className="absolute -left-14 top-128 z-0 hidden rotate-12 sm:block" />
        <img
          src={LeafIcon}
          alt="Leaf"
          className="absolute left-96 top-[40rem] ml-20 mt-10 hidden w-32 -rotate-[9deg] sm:block"
        />

        <ContactUsForm />

        <div className="mt-20 items-center justify-center px-8 sm:mt-32 sm:flex sm:px-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center gap-4">
              <img src={CelIcon} alt="Cel" className={`${isSmallDevice ? 'w-20' : ''}`} />
              <div>
                <p className="text-xl font-black uppercase text-green-300">{t('contact_us.phone_number')}</p>
                <p
                  className={`font-black text-green-300 hover:underline ${isSmallDevice ? 'text-xl font-bold' : 'text-3xl'}`}
                >
                  <a href="tel:+50622164200">+(506) 2216-4200</a>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <img src={EmailIcon} alt="Email" className={`${isSmallDevice ? 'w-20' : ''}`} />
              <div>
                <p className="text-xl font-black uppercase text-green-300">{t('contact_us.email')}</p>
                <p
                  className={`font-black text-green-300 hover:underline  ${isSmallDevice ? 'text-base font-bold' : 'text-3xl'}`}
                >
                  <a href="mailto:customerservice@centenario.co.cr">customerservice@centenario.co.cr</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${
              isSmallDevice
                ? `relative mx-1 my-12 h-[20px] w-[250px] border-b-[3px] border-dashed border-green-100 before:absolute
        before:left-[15rem] before:top-2 before:h-5 before:w-5 before:rounded-full before:bg-green-300 after:absolute after:-bottom-3
        after:-left-[12px] after:h-5 after:w-5 after:rounded-full after:bg-green-300 xs:w-[300px] before:xs:left-[18.9rem] `
                : `relative mx-32 hidden h-[400px] border-l-[3px] border-dashed border-green-100
        before:absolute before:-left-[12px] before:-top-2 before:h-5 before:w-5 before:rounded-full before:bg-green-300
        after:absolute after:-bottom-2 after:-left-[12px] after:h-5 after:w-5 after:rounded-full after:bg-green-300 sm:block xl:mx-44`
            }`}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-0">
            <a href="https://www.facebook.com/roncentenario" target="_blank" rel="noreferrer">
              <img src={FaceBookIcon} alt="Facebook" className={`${isSmallDevice ? 'w-32' : 'w-44'} `} />
            </a>
            <a href="https://www.instagram.com/ron.centenario_intl" target="_blank" rel="noreferrer">
              <img src={InstagramIcon} alt="Instagram" className={`${isSmallDevice ? 'w-32' : 'w-44'} `} />
            </a>
            <a href="https://www.youtube.com/channel/UC97aJcwEDoVCQW02rFCi99A" target="_blank" rel="noreferrer">
              <img src={YoutubeIcon} alt="Youtube" className={`${isSmallDevice ? 'w-32' : 'w-44'} `} />
            </a>
            <a href="https://www.linkedin.com/company/centenario-internacional/" target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="Linkedin" className={`${isSmallDevice ? 'w-32' : 'w-44'} `} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
