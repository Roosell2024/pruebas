import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CurveImg, OrangeIcon } from '../assets/imgs/shared';
import { AgedByNatureLogo, CocktailsSlider } from '../components';
import { agedByNature, signatureDrinks, tikiCocktails } from '../assets/data/cocktails';
import { BGCocktails, botellaCoctel, broomIcon, leafMultiColor, orangeComplete } from '../assets/imgs/cocktails';
import { CocktailItem } from '../interfaces';

export const Cocktails = () => {
  const array = _.concat(signatureDrinks, agedByNature, tikiCocktails);
  const mainIngredients = [
    'Centenario Café',
    'Ron Centenario Añejo Claro',
    'Ron Centenario Oro',
    'Ron Centenario 5 Volcanes',
    'Ron Centenario 7 Provincias',
    'Ron Centenario 9 Grados',
    'Ron Centenario 12 Secretos',
    'Ron Centenario 20',
    'Ron Centenario 25',
    'Ron Centenario 30',
  ];
  const flavors = _.map(_.sortBy(_.uniqBy(array, 'flavor'), 'flavor'), 'flavor');
  const [flavorSelected, setFlavorSelected] = useState('');
  const [productSelected, setProductSelected] = useState('');
  const { t } = useTranslation();

  const resetFilters = () => {
    setFlavorSelected('');
    setProductSelected('');
  };

  const filterOptions = (options: CocktailItem[]) => {
    return options.filter((o) => {
      if (flavorSelected && productSelected) {
        return (
          o.flavor.toUpperCase() === flavorSelected.toUpperCase() &&
          o.ingredients.filter((i) => i.name.toUpperCase() === productSelected.toUpperCase()).length !== 0
        );
      }
      if (flavorSelected) {
        return o.flavor.toUpperCase() === flavorSelected.toUpperCase();
      }
      if (productSelected) {
        return o.ingredients.filter((i) => i.name.toUpperCase() === productSelected.toUpperCase()).length !== 0;
      }
      return true;
    });
  };

  return (
    <>
      <div
        className={`-mt-24 flex h-[56vh] w-full items-end bg-cover bg-top md:h-screen`}
        style={{ backgroundImage: `url('${BGCocktails}')` }}
      >
        <img src={CurveImg} alt="curve" className="-mb-5 md:-mb-16" />
      </div>

      <section className="relative -mt-[320px] sm:px-10 md:-mt-[calc(100vh-150px)] xl:-mt-[calc(100vh-96px)] xl:px-44">
        <div className="absolute left-10 sm:left-114 sm:top-10">
          <AgedByNatureLogo className="w-44 sm:w-80" />
        </div>

        <img
          src={OrangeIcon}
          alt="orange icon"
          className="absolute left-36 right-0 top-80 mx-auto hidden w-32 -rotate-12 mix-blend-darken sm:block"
        />

        <div className="pt-40 sm:mb-28 sm:pt-80">
          <h1 className="px-10 text-left text-5xl font-extrabold uppercase text-gold sm:px-0 h-lg:xs:text-6xl">
            {t('menu.cocktails')}
          </h1>
        </div>

        <div className="relative text-right sm:my-72 sm:text-center h-sm:-mt-44 h-sm:sm:my-56">
          <img src={leafMultiColor} alt="Leaf" className="absolute left-0 top-0 hidden sm:block" />
          <img
            src={orangeComplete}
            alt="orange"
            className="absolute -top-44 right-32 hidden w-52 rotate-90 opacity-60 sm:block"
          />
          <img
            src={botellaCoctel}
            alt="Vaso de coctel con botella"
            className="inline-block w-48 sm:absolute sm:-right-20 sm:-top-56 sm:w-[400px]"
          />

          <div className="inline-block px-10 text-justify text-green-300 sm:w-[450px] sm:px-0 2xl:w-[650px]">
            <p className="text-2xl">{t('cocktails.introduction')}</p>
          </div>
        </div>

        <div className="mt-10 items-center gap-4 px-10 sm:mt-52 sm:flex sm:px-0">
          <p className="mb-4 border-dashed border-green-300 text-4xl font-bold uppercase text-gold sm:mb-0 sm:border-r-2 sm:pr-5">
            {t('cocktails.find_cocktail_style')}
          </p>
          <div className="relative mb-4 sm:mb-0 sm:w-60">
            <select
              className="w-full appearance-none rounded-md border border-green-100 bg-white-50 p-2.5 text-gold shadow-sm outline-none focus:border-green-100"
              value={productSelected}
              onChange={({ target: { value } }) => {
                setProductSelected(value);
              }}
            >
              <option value="" disabled className="font-bold text-green-100">
                {t('cocktails.by_product')}
              </option>
              {mainIngredients.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="relative sm:w-60">
            <select
              className="w-full appearance-none rounded-md border border-green-100 bg-white-50 p-2.5 text-gold shadow-sm outline-none focus:border-green-100"
              value={flavorSelected}
              onChange={({ target: { value } }) => {
                setFlavorSelected(value);
              }}
            >
              <option value="" disabled className="font-bold text-green-100">
                {t('cocktails.by_flavor')}
              </option>
              {flavors.map((f) => (
                <option key={f} value={f}>
                  {t(`cocktails.${f}`)}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={resetFilters} className="mt-4 sm:mt-0">
            <img src={broomIcon} alt="clear icon" className="w-7" />
          </button>
        </div>
        <div className="my-20 sm:my-52 ">
          {signatureDrinks.length > 0 && (
            <CocktailsSlider title={t('cocktails.signature_cocktails')} options={filterOptions(signatureDrinks)} />
          )}

          <div className="px-10 sm:px-0">
            <p className="text-xl text-green-300">
              <b>{t('cocktails.syrups.honeybee_and_lemongrass.title')}</b>
              {t('cocktails.syrups.honeybee_and_lemongrass.text')}
            </p>

            <p className="mt-10 text-xl text-green-300">
              <b>{t('cocktails.syrups.rosemary.title')}</b> {t('cocktails.syrups.rosemary.text')}
            </p>
          </div>

          {agedByNature.length > 0 && (
            <CocktailsSlider title={t('cocktails.aged_by_nature')} options={filterOptions(agedByNature)} />
          )}
          {tikiCocktails.length > 0 && (
            <CocktailsSlider title={t('cocktails.tiki_cocktails')} options={filterOptions(tikiCocktails)} />
          )}
        </div>
      </section>
    </>
  );
};
