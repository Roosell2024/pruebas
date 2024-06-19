import { useTranslation } from 'react-i18next';
import {
  Barril,
  Blending,
  Bottles,
  Bottling,
  OrangeIcon,
  HojaIcon,
  bgColibri,
  bgUmbrellaLEaf,
  bgStarLeaf,
  bgCoffee,
  BGOurRums,
} from '../assets/imgs/ourRums';
import { AgedByNatureLogo, BarrelAgingProcess, RumsSliders } from '../components';
import {
  firstSliderRums,
  liquorsSliderRums,
  secondSliderRums,
  specialEditionSliderRums,
} from '../assets/data/rumsList';
import { CurveImg } from '../assets/imgs/shared';

export const OurRums = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className={`-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top md:h-screen`}
        style={{ backgroundImage: `url('${BGOurRums}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5 md:-mb-16" />
      </div>

      <section className="relative -mt-[320px] xl:-mt-[calc(100vh-96px)] md:-mt-[calc(100vh-150px)] lg:px-44">
        <div className="absolute -top-5 left-5 mx-auto text-center sm:left-0 sm:right-0 sm:top-0">
          <AgedByNatureLogo className="inline-block w-40 sm:h-80 sm:w-80" />
        </div>
        <div className="px-5 pt-28 sm:mb-44 sm:pt-32 sm:text-left 2xl:px-36">
          <h1 className="inline-block w-52 text-6xl font-bold uppercase text-gold">{t('menu.our_rums')}</h1>
        </div>

        <img src={OrangeIcon} alt="orange icon" className="absolute right-44 top-80 hidden sm:block xl:top-72" />
        <img src={HojaIcon} alt="Leaf" className="absolute left-20 top-[38rem] hidden sm:block 2xl:left-52" />

        <div className="grid-cols-2 items-center sm:m-0 sm:grid md:mt-80 h-sm:xl:-mt-14">
          <div className="flex justify-center sm:justify-end">
            <img src={Bottles} alt="Bottles" className="z-10 w-80 sm:w-[500px]" />
          </div>
          <p className="mt-4 px-10 text-justify text-xl text-green-200 sm:mt-0 sm:px-0 sm:text-left md:w-144">
            {t('our_rums.introduction')}
          </p>
        </div>

        <div className="mt-40 xl:px-28">
          <BarrelAgingProcess />
        </div>

        <div className="mt-40 px-10 text-justify text-xl text-green-300 sm:px-40">
          <p className="font-medium">{t('continuos_aging_system.title')}</p>
          <p className="mb-10">{t('continuos_aging_system.paragraph1')}</p>
          <p className="mb-10">{t('continuos_aging_system.paragraph2')}</p>
          <p className="mb-10">{t('continuos_aging_system.paragraph3')}</p>
          <p className="mb-10">{t('continuos_aging_system.paragraph4')}</p>
          <p className="mb-10">{t('continuos_aging_system.paragraph5')}</p>
        </div>

        <div className="my-32 2xl:px-20">
          <RumsSliders rums={secondSliderRums} background={bgColibri} />
        </div>

        <div className="relative grid grid-cols-4 items-center gap-4 px-5 pb-44 text-xl uppercase text-green-300 2xl:px-44">
          <div className="horizontal-line absolute left-0 right-0 top-[80%] mx-auto my-0 flex w-2/3 items-center justify-between border-b-2 border-dashed border-green-100 2xl:w-1/2">
            <div className="h-12 w-full border-x-2 border-dashed border-green-100 before:absolute before:-left-[17px] before:-top-9 before:h-9 before:w-9 before:rounded-full before:border-2 before:border-green-100 after:absolute after:-right-[17px] after:-top-9 after:h-9 after:w-9 after:rounded-full after:border-2 after:border-green-100" />
            <div className="absolute -bottom-[48px] left-5 h-12 w-0 border-l-2 border-dashed border-green-100 before:absolute before:-bottom-4 before:-left-[9px] before:h-4 before:w-4 before:rounded-full before:bg-green-100 sm:left-[25%]" />
          </div>

          <div className="col-span-2 font-bold uppercase sm:order-1 sm:col-span-1">
            <h6>{t('traditional_aging_system.alcohol')}</h6>
            <div className="text-right">
              <img src={Barril} alt="barrel" className="inline-block w-60  mix-blend-darken" />
            </div>
            <h6>{t('traditional_aging_system.light_rum')}</h6>
          </div>

          <div className="order-first col-span-4 sm:order-2 sm:col-span-2">
            <h2 className="mb-5 text-center text-5xl font-bold uppercase text-gold sm:mb-16 sm:text-left">
              {t('traditional_aging_system.title')}
            </h2>
            <h6 className="ml-10 list-item uppercase sm:m-0 sm:list-none sm:font-bold">
              {t('traditional_aging_system.age_white_oak')}
            </h6>
            <h6 className="ml-10 list-item uppercase sm:m-0 sm:mt-5 sm:list-none sm:font-bold">
              {t('traditional_aging_system.first_use')}
            </h6>
          </div>

          <div className="col-span-2 font-bold uppercase sm:order-3 sm:col-span-1">
            <h6 className="text-right">{t('traditional_aging_system.raw_rum')}</h6>
            <img src={Barril} alt="barrel" className="w-60 mix-blend-darken" />
            <h6 className="text-right">{t('traditional_aging_system.heavy_rum')}</h6>
          </div>
        </div>

        <div className="relative grid grid-cols-2 items-center gap-20 px-5 text-xl text-green-300 sm:gap-44 sm:px-0 sm:pt-12">
          <div className="items-end justify-end sm:flex">
            <h6 className="w-40 font-bold">{t('traditional_aging_system.demineralized_water')}</h6>
            <div className="text-center">
              <img src={Blending} alt="blending" className="w-60" />
              <h6 className="font-bold uppercase">{t('traditional_aging_system.blending')}</h6>
            </div>
          </div>

          <div className="absolute left-0 right-0 mx-auto my-0 w-8 border-b-2 border-dashed border-green-100 before:absolute before:-left-9 before:-top-4 before:h-9 before:w-9 before:rounded-full before:border-2 before:border-green-100 after:absolute after:-right-4 after:-top-2 after:h-4 after:w-4 after:rounded-full after:bg-green-100 sm:w-32" />

          <div className="flex items-end pt-13 sm:pt-0">
            <div className="text-center">
              <img src={Bottling} alt="Bottling" className="w-60" />
              <h6 className="font-bold uppercase">{t('traditional_aging_system.bottling')}</h6>
            </div>
          </div>
        </div>

        <div className="mt-20 px-10 text-justify text-xl text-green-300 sm:mt-40 sm:px-40">
          <p className="font-medium">{t('traditional_aging_system.title')}</p>
          <p className="mb-10">{t('traditional_aging_system.paragraph1')}</p>
          <p className="mb-10">{t('traditional_aging_system.paragraph2')}</p>
          <p className="mb-10">{t('traditional_aging_system.paragraph3')}</p>
          <p className="mb-10">{t('traditional_aging_system.paragraph4')}</p>
        </div>

        <div className="mt-32">
          <RumsSliders rums={firstSliderRums} background={bgUmbrellaLEaf} />
        </div>

        <div className="my-32 2xl:px-20">
          <RumsSliders name={t('our_rums.special_edition')} rums={specialEditionSliderRums} background={bgStarLeaf} />
        </div>

        <div className="my-32 2xl:px-20">
          <RumsSliders name={t('our_rums.liquors')} rums={liquorsSliderRums} background={bgCoffee} />
        </div>
      </section>
    </>
  );
};
