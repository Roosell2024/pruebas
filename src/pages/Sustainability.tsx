import { AgeByNatureGoldEN, AgeByNatureGoldES, CurveImg } from '../assets/imgs/shared';
import {
  hojaLarga,
  orange,
  hojasCierre,
  NaturesGodParents,
  NaturesGodParentsES,
  BGSotenibilidad,
} from '../assets/imgs/sostenibilidad';
import { VideoComp } from '../components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../config/constants';

export const Sustainability = () => {
  const { t, i18n } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  return (
    <>
      <div
        className="-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top md:h-[900px] 2xl:h-[1000px]"
        style={{ backgroundImage: `url('${BGSotenibilidad}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5 md:-mb-16" />
      </div>

      <section className="relative -mt-[320px] md:-mt-[calc(900px-100px)] lg:px-44 2xl:-mt-[calc(1000px-150px)]">
        <div className={`${isSmallDevice ? 'mt-20' : ' mt-32'}`}>
          <h1
            className={`text-center font-bold  uppercase text-gold sm:text-left ${!isSmallDevice ? 'text-6xl' : 'text-5xl'} `}
          >
            {t('menu.sustainability')}
          </h1>
        </div>
        {!isSmallDevice && (
          <img
            src={orange}
            alt="orange"
            className="absolute left-0 top-128 h-72 w-72 rotate-1 sm:top-64 sm:h-md:left-auto"
          />
        )}

        <div className="mt-36 text-center sm:mt-28">
          <img
            alt="logo_anejado"
            className={`${isSmallDevice ? 'h-64 w-64' : 'h-144 w-144'} mb-20 inline-block`}
            src={i18n.language === 'sp' ? AgeByNatureGoldES : AgeByNatureGoldEN}
          />
        </div>
        <img
          src={hojaLarga}
          alt="Leafs"
          className={`absolute   ${isSmallDevice ? '-right-5 top-32 w-32' : 'right-0 top-52 sm:h-md:right-20'}`}
        />
        <div className={`${isSmallDevice ? 'p-5' : ''}`}>
          <VideoComp
            autoPlay={false}
            video={
              i18n.language === 'sp'
                ? 'https://roncentenario.blob.core.windows.net/multimedia/Añejado por la Naturaleza Español.mp4'
                : 'https://roncentenario.blob.core.windows.net/multimedia/Aged credentials.mp4'
            }
          />
        </div>

        <div className="my-20 items-center justify-center gap-10 px-10 sm:my-52 sm:flex sm:px-0 xl:gap-20 2xl:gap-40">
          {isSmallDevice ? (
            <>
              <img
                src={i18n.language === 'sp' ? NaturesGodParentsES : NaturesGodParents}
                alt="Natures God Parents"
                className="mb-8 mt-10 w-128 sm:mt-0"
              />
              <VideoComp
                autoPlay={false}
                video={'https://roncentenario.blob.core.windows.net/multimedia/Video padrinos.mp4'}
              />
            </>
          ) : (
            <>
              <VideoComp
                autoPlay={false}
                video={'https://roncentenario.blob.core.windows.net/multimedia/Video padrinos.mp4'}
              />
              <img
                src={i18n.language === 'sp' ? NaturesGodParentsES : NaturesGodParents}
                alt="Natures God Parents"
                className="mb-8 mt-10 w-128 sm:mt-0"
              />
            </>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <img src={hojasCierre} alt="hojasCierre" className=" mix-blend-darken" />
        </div>
      </section>
    </>
  );
};
