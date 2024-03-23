import _ from 'lodash';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { OrangeIcon } from '../assets/imgs/shared';
import { AgedByNatureLogo, CocktailsSlider } from '../components';
import { agedByNature, signatureDrinks, tikiCocktails } from '../assets/data/cocktails';
import { botellaCoctel, broomIcon, leafMultiColor, orangeComplete } from '../assets/imgs/cocktails';
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
        return o.flavor.toUpperCase() === flavorSelected.toUpperCase() && o.ingredients.filter((i) => i.name.toUpperCase() === productSelected.toUpperCase()).length !== 0;
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
    <section className="xl:px-44 sm:px-10 relative">
      <div className="absolute sm:left-114 left-10 sm:top-10">
        <AgedByNatureLogo className="sm:w-80 w-44" />
      </div>

      <img
        src={OrangeIcon}
        alt="orange icon"
        className="absolute top-80 right-0 left-36 mx-auto w-32 mix-blend-darken -rotate-12 sm:block hidden"
      />

      <div className="sm:pt-80 pt-40 sm:mb-28">
        <h1 className="uppercase font-extrabold h-lg:xs:text-6xl text-5xl text-gold text-left sm:px-0 px-10">{t('menu.cocktails')}</h1>
      </div>

      <div className="relative sm:my-56 -mt-44 sm:text-center text-right">
        <img src={leafMultiColor} alt="Leaf" className="top-0 left-0 absolute sm:block hidden" />
        <img src={orangeComplete} alt="orange" className="-top-44 right-32 absolute rotate-90 w-52 opacity-60 sm:block hidden" />
        <img src={botellaCoctel} alt="Vaso de coctel con botella" className="sm:absolute sm:-top-56 sm:-right-20 sm:w-[400px] w-48 inline-block" />

        <div className="inline-block 2xl:w-[650px] sm:w-[450px] text-justify text-green-300 sm:px-0 px-10">
          <p className="text-2xl">{t('cocktails.introduction')}</p>
        </div>

      </div>

      <div className="sm:flex items-center sm:mt-52 mt-10 gap-4 sm:px-0 px-10">
        <p className="font-bold text-4xl sm:border-r-2 border-dashed border-green-300 text-gold sm:pr-5 sm:mb-0 mb-4 uppercase">
          {t('cocktails.find_cocktail_style')}
        </p>
        <div className="relative sm:w-60 sm:mb-0 mb-4">
          <select
            className="w-full p-2.5 text-gold bg-white-50 border border-green-100 rounded-md shadow-sm outline-none appearance-none focus:border-green-100"
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
            className="w-full p-2.5 text-gold bg-white-50 border border-green-100 rounded-md shadow-sm outline-none appearance-none focus:border-green-100"
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
        <button type="button" onClick={resetFilters} className="sm:mt-0 mt-4">
          <img src={broomIcon} alt="clear icon" className="w-7" />
        </button>
      </div>
      <div className="sm:my-52 my-20 ">
        {signatureDrinks.length > 0 && (
          <CocktailsSlider title={t('cocktails.signature_cocktails')} options={filterOptions(signatureDrinks)} />
        )}

        <div className="sm:px-0 px-10">
          <p className="text-green-300 text-xl">
            <b>{t('cocktails.syrups.honeybee_and_lemongrass.title')}</b>
            {t('cocktails.syrups.honeybee_and_lemongrass.text')}
          </p>

          <p className="text-green-300 text-xl mt-10">
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
  );
};
