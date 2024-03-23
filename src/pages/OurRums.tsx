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
} from '../assets/imgs/ourRums';
import { AgedByNatureLogo, BarrelAgingProcess, RumsSliders } from '../components';
import {
  firstSliderRums,
  liquorsSliderRums,
  secondSliderRums,
  specialEditionSliderRums,
} from '../assets/data/rumsList';

export const OurRums = () => {
  const { t } = useTranslation();
  return (
    <section className="lg:px-44 relative">
      <div className="absolute sm:top-0 -top-5 sm:left-0 left-5 sm:right-0 mx-auto text-center">
        <AgedByNatureLogo className="sm:w-80 sm:h-80 w-40 inline-block" />
      </div>
      <div className="sm:pt-32 pt-28 2xl:px-36 px-5 sm:mb-44 sm:text-left">
        <h1 className="uppercase font-bold text-6xl w-52 text-gold inline-block">{t('menu.our_rums')}</h1>
      </div>

      <img src={OrangeIcon} alt="orange icon" className="absolute top-72 right-44 sm:block hidden" />
      <img src={HojaIcon} alt="Leaf" className="absolute top-[38rem] 2xl:left-52 left-20 sm:block hidden" />

      <div className="sm:grid grid-cols-2 items-center sm:m-0 xs:-mt-14">
        <div className="flex sm:justify-end justify-center">
          <img src={Bottles} alt="Bottles" className="z-10 sm:w-[500px] w-80" />
        </div>
        <p className="text-green-200 sm:w-144 text-xl sm:px-0 px-10 sm:mt-0 mt-4 sm:text-left text-justify">{t('our_rums.introduction')}</p>
      </div>

      <div className="xl:px-28 mt-40">
        <BarrelAgingProcess />
      </div>

      <div className="mt-40 sm:px-40 px-10 text-justify text-xl text-green-300">
        <p className="font-medium">{t('continuos_aging_system.title')}</p>
        <p className="mb-10">{t('continuos_aging_system.paragraph1')}</p>
        <p className="mb-10">{t('continuos_aging_system.paragraph2')}</p>
        <p className="mb-10">{t('continuos_aging_system.paragraph3')}</p>
        <p className="mb-10">{t('continuos_aging_system.paragraph4')}</p>
        <p className="mb-10">{t('continuos_aging_system.paragraph5')}</p>
      </div>

      <div className="2xl:px-20 my-32">
        <RumsSliders rums={secondSliderRums} background={bgColibri} />
      </div>

      <div className="grid grid-cols-4 gap-4 2xl:px-44 px-5 pb-44 items-center relative text-green-300 text-xl uppercase">
        <div className="horizontal-line border-green-100 border-b-2 border-dashed 2xl:w-1/2 w-2/3 absolute top-[80%] left-0 right-0 my-0 mx-auto flex justify-between items-center">
          <div className="border-green-100 border-x-2 border-dashed h-12 w-full before:h-9 before:w-9 before:border-green-100 before:border-2 before:absolute before:-left-[17px] before:rounded-full before:-top-9 after:h-9 after:w-9 after:border-green-100 after:border-2 after:absolute after:-right-[17px] after:rounded-full after:-top-9" />
          <div className="h-12 border-green-100 border-l-2 absolute -bottom-[48px] sm:left-[25%] left-5 w-0 border-dashed before:h-4 before:w-4 before:bg-green-100 before:absolute before:-bottom-4 before:-left-[9px] before:rounded-full" />
        </div>

        <div className="font-bold uppercase sm:order-1 sm:col-span-1 col-span-2">
          <h6>{t('traditional_aging_system.alcohol')}</h6>
          <div className="text-right">
            <img src={Barril} alt="barrel" className="mix-blend-darken w-60  inline-block" />
          </div>
          <h6>{t('traditional_aging_system.light_rum')}</h6>
        </div>

        <div className="sm:col-span-2 sm:order-2 order-first col-span-4">
          <h2 className="font-bold text-5xl uppercase sm:mb-16 mb-5 text-gold sm:text-left text-center">
            {t('traditional_aging_system.title')}
          </h2>
          <h6 className="uppercase sm:font-bold sm:m-0 ml-10 sm:list-none list-item">{t('traditional_aging_system.age_white_oak')}</h6>
          <h6 className="uppercase sm:font-bold sm:mt-5 sm:m-0 ml-10 sm:list-none list-item">{t('traditional_aging_system.first_use')}</h6>
        </div>

        <div className="font-bold uppercase sm:order-3 sm:col-span-1 col-span-2">
          <h6 className="text-right">{t('traditional_aging_system.raw_rum')}</h6>
          <img src={Barril} alt="barrel" className="mix-blend-darken w-60" />
          <h6 className="text-right">{t('traditional_aging_system.heavy_rum')}</h6>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center sm:gap-44 gap-20 sm:pt-12 sm:px-0 px-5 relative text-green-300 text-xl">
        <div className="sm:flex items-end justify-end">
          <h6 className="font-bold w-40">{t('traditional_aging_system.demineralized_water')}</h6>
          <div className="text-center">
            <img src={Blending} alt="blending" className="w-60" />
            <h6 className="font-bold uppercase">{t('traditional_aging_system.blending')}</h6>
          </div>
        </div>

        <div className="absolute left-0 right-0 mx-auto my-0 border-green-100 border-b-2 sm:w-32 w-8 border-dashed before:h-9 before:w-9 before:border-green-100 before:border-2 before:absolute before:rounded-full before:-left-9 before:-top-4 after:h-4 after:w-4 after:bg-green-100 after:absolute after:rounded-full after:-right-4 after:-top-2" />

        <div className="flex items-end sm:pt-0 pt-13">
          <div className="text-center">
            <img src={Bottling} alt="Bottling" className="w-60" />
            <h6 className="font-bold uppercase">{t('traditional_aging_system.bottling')}</h6>
          </div>
        </div>
      </div>

      <div className="sm:mt-40 mt-20 sm:px-40 px-10 text-justify text-xl text-green-300">
        <p className="font-medium">{t('traditional_aging_system.title')}</p>
        <p className="mb-10">{t('traditional_aging_system.paragraph1')}</p>
        <p className="mb-10">{t('traditional_aging_system.paragraph2')}</p>
        <p className="mb-10">{t('traditional_aging_system.paragraph3')}</p>
        <p className="mb-10">{t('traditional_aging_system.paragraph4')}</p>
      </div>

      <div className="mt-32">
        <RumsSliders rums={firstSliderRums} background={bgUmbrellaLEaf} />
      </div>

      <div className="2xl:px-20 my-32">
        <RumsSliders name={t('our_rums.special_edition')} rums={specialEditionSliderRums} background={bgStarLeaf} />
      </div>

      <div className="2xl:px-20 my-32">
        <RumsSliders name={t('our_rums.liquors')} rums={liquorsSliderRums} background={bgCoffee} />
      </div>
    </section>
  );
};
