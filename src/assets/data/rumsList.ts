import {
  Bottle1985,
  Bottle20Anniversary,
  Bottle25Anniversary,
  Bottle30Anniversary,
  BottleCoffee,
  BottleDegreesRum9,
  BottleGoldRum4,
  BottleProvinceRum7,
  BottleSecretRum12,
  BottleVolcanoRum5,
  BottleWhiteRum,
} from '../imgs/ourRums/bottleRums';
import { RumItem } from '../../interfaces';

export const firstSliderRums: RumItem[] = [
  {
    bottle: BottleWhiteRum,
    text: 'rums.anejo_claro.description',
    abv: '35% Costa Rica - 40% International',
    aging: 'rums.anejo_claro.aging',
    nosing: 'rums.anejo_claro.nosing',
    taste: 'rums.anejo_claro.flavor',
  },
  {
    bottle: BottleGoldRum4,
    text: 'rums.coffee_liquor.description',
    abv: '35% Costa Rica',
    aging: 'rums.gold.aging',
    nosing: 'rums.gold.nosing',
    taste: 'rums.gold.flavor',
  },
  {
    bottle: BottleVolcanoRum5,
    text: 'rums.5_volcanos.description',
    abv: '35% Costa Rica - 40% International',
    aging: 'rums.5_volcanos.aging',
    nosing: 'rums.5_volcanos.nosing',
    taste: 'rums.5_volcanos.flavor',
  },
  {
    bottle: BottleProvinceRum7,
    text: 'rums.7_provinces.description',
    abv: '35% Costa Rica - 40% International',
    aging: 'rums.7_provinces.aging',
    nosing: 'rums.7_provinces.nosing',
    taste: 'rums.7_provinces.flavor',
  },
  {
    bottle: BottleDegreesRum9,
    text: 'rums.9_degrees.description',
    abv: '40%',
    aging: 'rums.9_degrees.aging',
    nosing: 'rums.9_degrees.nosing',
    taste: 'rums.9_degrees.flavor',
  },
  {
    bottle: BottleSecretRum12,
    text: 'rums.12_secrets.description',
    abv: '35% Costa Rica - 40% International',
    aging: 'rums.12_secrets.aging',
    nosing: 'rums.12_secrets.nosing',
    taste: 'rums.12_secrets.flavor',
  },
];

export const secondSliderRums: RumItem[] = [
  {
    bottle: Bottle20Anniversary,
    text: 'rums.20_years.description',
    abv: '40%',
    aging: 'rums.20_years.aging',
    nosing: 'rums.20_years.nosing',
    taste: 'rums.20_years.flavor',
  },
  {
    bottle: Bottle25Anniversary,
    text: 'rums.25_years.description',
    abv: '40%',
    aging: 'rums.25_years.aging',
    nosing: 'rums.25_years.nosing',
    taste: 'rums.25_years.flavor',
  },
  {
    bottle: Bottle30Anniversary,
    text: 'rums.30_years.description',
    abv: '40%',
    aging: 'rums.30_years.aging',
    nosing: 'rums.30_years.nosing',
    taste: 'rums.30_years.flavor',
  },
];

export const specialEditionSliderRums: RumItem[] = [
  {
    bottle: Bottle1985,
    text: 'rums.1985.description',
    abv: '43%',
    aging: 'rums.1985.aging',
    nosing: 'rums.1985.nosing',
    taste: 'rums.1985.flavor',
  },
];

export const liquorsSliderRums: RumItem[] = [
  {
    bottle: BottleCoffee,
    text: 'rums.coffee_liquor.description',
    abv: '26.50%',
    aging: 'rums.coffee_liquor.aging',
    nosing: 'rums.coffee_liquor.nosing',
    taste: 'rums.coffee_liquor.flavor',
  },
];
