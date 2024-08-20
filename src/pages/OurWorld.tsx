import { useTranslation } from 'react-i18next';
import { AgedByNatureLogo } from '../components';
import { Events } from '../components/ourWorld/Events';
import { MapaMundi } from '../components/ourWorld/MapaMundi';
import { News } from '../components/ourWorld/News';
import { WorldOfMedals } from '../components/ourWorld/WorldOfMedals';
import { CurveImg } from '../assets/imgs/shared';
import { BGOWorld } from '../assets/imgs/ourWorld';
import { orange } from '../assets/imgs/sostenibilidad';

export const OurWorld = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top md:h-[900px] 2xl:h-[1000px]"
        style={{ backgroundImage: `url('${BGOWorld}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5" />
      </div>
      <section className="relative -mt-[320px] sm:px-10 md:-mt-[calc(900px-100px)] lg:px-20 xl:px-32 2xl:-mt-[calc(1000px-150px)]">
        <div className="md:transform-50 absolute top-10 mx-auto ml-4 text-center md:-top-60 md:left-0 md:right-0 md:ml-0">
          <AgedByNatureLogo className="inline-block w-52 sm:h-80 sm:w-80" />
        </div>
        <div className="pt-48 text-center sm:mb-44 sm:px-36 md:mt-64 md:px-5 md:text-left xs:px-12 h-sm:md:pt-28">
          <h1 className="inline-block w-80 text-5xl font-bold uppercase text-gold md:w-96 md:text-6xl">
            {t('menu.our_world')}
          </h1>
        </div>

        {/* Medals */}
        <WorldOfMedals />

        <section className="relative my-32 px-10 xl:px-52">
          <img
            src={orange}
            alt="orange"
            className="absolute md:-left-24 top-128 md:h-72 md:w-72 w-32 rotate-1 md:top-64 -z-10"
          />

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:gap-52">
            <div>
              <h2 className="text-5xl font-extrabold uppercase text-green-300">{t('our_world.mision')}</h2>
              <p className="text-justify font-normal text-green-300 md:text-lg">{t('our_world.mision_text')}</p>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold uppercase text-green-300">{t('our_world.vision')}</h2>
              <p className="text-justify font-normal text-green-300 md:text-lg">{t('our_world.vision_text')}</p>
            </div>
          </div>

          <div className='text-center my-20'>
            <h2 className="text-5xl font-extrabold uppercase text-green-300">{t('our_world.values')}</h2>

            <ul>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.respect')}</li>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.integrity')}</li>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.attitude_service')}</li>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.celebration')}</li>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.innovation')}</li>
              <li className="font-normal text-green-300 md:text-lg">{t('our_world.empathy')}</li>
            </ul>
          </div>

          <div className='mb-20 mt-36'>
            <h2 className="text-4xl font-extrabold uppercase text-green-300">{t('our_world.sustainability_policy')}</h2>
            <p className="text-justify font-normal text-green-300 md:text-lg">
              {t('our_world.sustainability_policy_text')}
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold uppercase text-green-300">{t('our_world.quality_policy')}</h2>
            <p className="text-justify font-normal text-green-300 md:text-lg">{t('our_world.quality_policy_text')}</p>
          </div>
        </section>

        <MapaMundi />
        <Events />
        <News />
      </section>
    </>
  );
};
