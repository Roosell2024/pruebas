import { useTranslation } from 'react-i18next';
import { arrowSlider } from '../../assets/imgs/cocktails';
import { CocktailItem } from '../../interfaces';
import { HowToMakeIt } from './HowToMakeIt';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface Props {
  cocktail: CocktailItem;
  lastOne?: boolean;
  firstOne?: boolean;
}

export const CocktailItemSlider = ({ cocktail, firstOne, lastOne }: Props) => {
  const { t } = useTranslation();
  return (
    <div
      className={`sm:flex relative items-center 2xl:gap-16 xl:gap-4 gap-2 justify-center text-green-100 uppercase 2xl:w-[1450px] lg:w-[1000px] mr-20 ${firstOne ? 'pl-5' : ''}`}
      tabIndex={-1}
    >
      <img src={cocktail.img} alt={`${cocktail.name}-img`} className="h-lg:xs:w-96 w-80" />
      <div className="2xl:w-[500px] sm:w-[400px] xs:w-[380px] w-[350px]">
        <h4 className="font-bold text-4xl mb-5">{cocktail.name}</h4>
        <p className="text-2xl">
          <span className="font-bold uppercase">{t('cocktails.method')}:</span> {t(`cocktails.${cocktail.method}`)}
        </p>
        <p className="text-2xl">
          <span className="font-bold uppercase">{t('cocktails.glass')}:</span> {t(`cocktails.${cocktail.glass}`)}
        </p>
        {cocktail.ice && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.ice')}:</span> {t(`cocktails.${cocktail.ice}`)}
          </p>
        )}

        {cocktail.garnish && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.garnish')}:</span> {t(`cocktails.${cocktail.garnish}`)}
          </p>
        )}
        {cocktail.levelDifficulty && (
          <p className="text-2xl">
            <span className="font-bold uppercase">{t('cocktails.levelDifficulty')}:</span>{' '}
            {t(`cocktails.${cocktail.levelDifficulty}`)}
          </p>
        )}

        <h6 className="font-bold text-3xl my-5 uppercase">{t('cocktails.ingredients')}</h6>
        <div className="grid xs:grid-cols-4 grid-cols-3 gap-2 leading-4">
          {cocktail.ingredients &&
            cocktail.ingredients.map((ingredient) => (
              <div className="text-center" key={ingredient.name}>
                <div className="bg-gold inline-flex justify-center items-center rounded-full 2xl:w-[85px] 2xl:h-[85px] w-[70px] h-[70px]">
                  <p className="font-bold xl:text-2xl text-xl">
                    {ingredient.hasIcon ? (
                      <img src={ingredient.quantity} alt={ingredient.name} className={ingredient.customClass} />
                    ) : (
                      t(ingredient.quantity)
                    )}
                  </p>
                </div>
                <p className="text-center mt-2">{t(ingredient.name)}</p>
              </div>
            ))}
        </div>
      </div>

      <HowToMakeIt name={cocktail.name} videoId={cocktail.videoUrl} />

      {!lastOne && (
        <img
          src={arrowSlider}
          alt="arrow"
          className="absolute 2xl:-right-20 2xl:w-fit sm:-right-16 right-0 w-14 sm:top-auto top-[48%]"
        />
      )}
    </div>
  );
};
