import { AgeByNatureGoldEN, AgeByNatureGoldES } from '../assets/imgs/shared';
import { hojaLarga, orange, hojasCierre, NaturesGodParents, NaturesGodParentsES } from '../assets/imgs/sostenibilidad';
import { VideoComp } from '../components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../config/constants';

export const Sustainability = () => {
  const { t, i18n } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  return (
    <section className="lg:px-44 relative">
      <div className={`${isSmallDevice ? 'mt-20' : ' mt-32'}`}>
        <h1
          className={`uppercase font-bold  text-gold sm:text-left text-center ${!isSmallDevice ? 'text-6xl' : 'text-5xl'} `}
        >
          {t('menu.sustainability')}
        </h1>
      </div>
      {!isSmallDevice && (
        <img
          src={orange}
          alt="orange"
          className="absolute w-72 h-72 rotate-1 sm:top-64 top-128 sm:h-md:left-auto left-0"
        />
      )}

      <div className={`text-center sm:mt-28  ${isSmallDevice ? 'mt-20' : ''} `}>
        <img
          alt="logo_anejado"
          className={`${isSmallDevice ? 'w-64 h-64' : 'w-144 h-144'} inline-block mb-20`}
          src={i18n.language === 'sp' ? AgeByNatureGoldES : AgeByNatureGoldEN}
        />
      </div>
      <img
        src={hojaLarga}
        alt="Leafs"
        className={`absolute   ${isSmallDevice ? '-right-5 top-32 w-32' : 'sm:h-md:right-20 right-0 top-52'}`}
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

      <div className="sm:flex sm:my-52 my-20 justify-center items-center 2xl:gap-40 xl:gap-20 gap-10 sm:px-0 px-10">
        {isSmallDevice ? (
          <>
            <img
              src={i18n.language === 'sp' ? NaturesGodParentsES : NaturesGodParents}
              alt="Natures God Parents"
              className="w-128 mb-8 sm:mt-0 mt-10"
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
              className="w-128 mb-8 sm:mt-0 mt-10"
            />
          </>
        )}
      </div>

      <div className="flex justify-center mt-12">
        <img src={hojasCierre} alt="hojasCierre" className=" mix-blend-darken" />
      </div>
    </section>
  );
};
