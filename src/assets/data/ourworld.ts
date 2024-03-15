import { MedalsItem } from '../../interfaces/MedalsItem';
import {
  Bottle20Anniversary,
  Bottle25Anniversary,
  Bottle30Anniversary,
  BottleCoffee,
  BottleDegreesRum9,
  BottleProvinceRum7,
  BottleSecretRum12,
} from '../imgs/ourRums/bottleRums';
import {
  AlemaniSilver2012,
  AlemaniaSpirit2011,
  AwardISWGermany2024,
  DoubleGoldFlorida2018,
  EspanaDobleGold2014,
  EspanaDobleGold2015,
  EspanaDobleGold2016,
  EspanaSilver2012,
  EspanaSilver2014,
  FiftyBestNewYork2018,
  RenaissanceMiami2018,
  SilverSpirits2017,
  TokyoGold2022,
  TokyoSilver2023,
  TokyoSuperior2023,
  WorldSpiritsSilver2019,
  SpainGoldMedal2016,
  AlemaniSilver2007,
  MadridRumSilver2018,
} from '../imgs/ourWorld';

export const medalsData: MedalsItem[] = [
  {
    bottle: 'Botella 20',
    medals: [
      {
        name: 'AWARD ISW GERMANY 2024',
        img: AwardISWGermany2024,
        main: true,
        text: 'our_world.medals.AWARD_ISW_GERMANY_2024',
      },
      {
        name: 'FIFTY BEST NEW YORK 2018',
        img: FiftyBestNewYork2018,
        main: false,
        text: 'our_world.medals.FIFTY_BEST_NEW_YORK_2018',
      },
      {
        name: 'DOUBLE GOLD MEDAL FLORIDA 2018',
        img: DoubleGoldFlorida2018,
        main: false,
        text: 'our_world.medals.DOUBLE_GOLD_MEDAL_FLORIDA_2018',
      },
      {
        name: 'RUM RENAISSANCE MIAMI 2018',
        img: RenaissanceMiami2018,
        main: false,
        text: 'our_world.medals.RUM_RENAISSANCE_MIAMI_2018',
      },
    ],
    img: Bottle20Anniversary,
    position: 1,
  },
  {
    bottle: 'Botella 25',
    medals: [
      {
        name: 'DOUBLE GOLD MEDAL FLORIDA 2018',
        img: DoubleGoldFlorida2018,
        main: true,
        text: 'our_world.medals.DOUBLE_GOLD_MEDAL_FLORIDA_2018',
      },

      {
        name: 'ESPAÑA DOBLE GOLD MEDAL 2015',
        img: EspanaDobleGold2015,
        main: false,
        text: 'our_world.medals.ESPAÑA_DOBLE_GOLD_MEDAL_2015',
      },
      {
        name: 'FIFTY BEST NEW YORK 2018',
        img: FiftyBestNewYork2018,
        main: false,
        text: 'our_world.medals.FIFTY_BEST_NEW_YORK_2018',
      },
      {
        name: 'RUM RENAISSANCE MIAMI 2018',
        img: RenaissanceMiami2018,
        main: false,
        text: 'our_world.medals.RUM_RENAISSANCE_MIAMI_2018',
      },
    ],
    img: Bottle25Anniversary,
    position: 2,
  },
  {
    bottle: 'Botella 30',
    medals: [
      {
        name: 'TOKYO SUPERIOR GOLD WINNER 2023',
        img: TokyoSuperior2023,
        main: true,
        text: 'our_world.medals.TOKYO_SUPERIOR_GOLD_WINNER_2023',
      },

      {
        name: 'ALEMANIA_SPIRIT_OF_THE_YEAR_2011',
        img: AlemaniaSpirit2011,
        main: false,
        text: 'our_world.medals.ALEMANIA_SPIRIT_OF_THE_YEAR_2011',
      },
      {
        name: 'DOUBLE GOLD MEDAL FLORIDA 2018',
        img: DoubleGoldFlorida2018,
        main: false,
        text: 'our_world.medals.DOUBLE_GOLD_MEDAL_FLORIDA_2018',
      },
      {
        name: 'ESPAÑA DOBLE GOLD MEDAL 2016',
        img: EspanaDobleGold2016,
        main: false,
        text: 'our_world.medals.ESPAÑA_DOBLE_GOLD_MEDAL_2016',
      },
    ],
    img: Bottle30Anniversary,
    position: 3,
  },
  {
    bottle: 'Botella 12',
    medals: [
      {
        name: 'AWARD ISW GERMANY 2024',
        img: AwardISWGermany2024,
        main: true,
        text: 'our_world.medals.AWARD_ISW_GERMANY_2024',
      },

      {
        name: 'TOKIO GOLD WINNER 2022',
        img: TokyoGold2022,
        main: false,
        text: 'our_world.medals.TOKIO_GOLD_WINNER_2022',
      },
      {
        name: 'ESPAÑA SILVER MEDAL 2014',
        img: EspanaDobleGold2014,
        main: false,
        text: 'our_world.medals.ESPAÑA_SILVER_MEDAL_2014',
      },
      {
        name: 'TOKYO SILVER WINNER 2023',
        img: TokyoSilver2023,
        main: false,
        text: 'our_world.medals.TOKYO_SILVER_WINNER_2023',
      },
    ],
    img: BottleSecretRum12,
    position: 4,
  },
  {
    bottle: 'Botella 9',
    medals: [
      {
        name: 'SPAIN GOLD MEDAL 2016',
        img: SpainGoldMedal2016,
        main: true,
        text: 'our_world.medals.SPAIN_GOLD_MEDAL_2016',
      },

      {
        name: 'SILVER SPIRITS 2017',
        img: SilverSpirits2017,
        main: false,
        text: 'our_world.medals.SILVER_SPIRITS_2017',
      },
      {
        name: 'ALEMANIA_SILVER_MEDAL_2012',
        img: AlemaniSilver2012,
        main: false,
        text: 'our_world.medals.ALEMANIA_SILVER_MEDAL_2012',
      },
      {
        name: 'ALEMANIA_SILVER_MEDAL_2007',
        img: AlemaniSilver2007,
        main: false,
        text: 'our_world.medals.ALEMANIA_SILVER_MEDAL_2007',
      },
    ],
    img: BottleDegreesRum9,
    position: 5,
  },
  {
    bottle: 'Botella 7',
    medals: [
      {
        name: 'DOUBLE GOLD MEDAL FLORIDA 2018',
        img: DoubleGoldFlorida2018,
        main: true,
        text: 'our_world.medals.DOUBLE_GOLD_MEDAL_FLORIDA_2018',
      },

      {
        name: 'WORLD SPIRITS SILVER 2019',
        img: WorldSpiritsSilver2019,
        main: false,
        text: 'our_world.medals.WORLD_SPIRITS_SILVER_2019',
      },
      {
        name: 'ESPAÑA SILVER MEDAL 2014',
        img: EspanaSilver2014,
        main: false,
        text: 'our_world.medals.ESPAÑA_SILVER_MEDAL_2014',
      },
      {
        name: 'ESPAÑA SILVER MEDAL 2012',
        img: EspanaSilver2012,
        main: false,
        text: 'our_world.medals.ESPAÑA_SILVER_MEDAL_2012',
      },
    ],
    img: BottleProvinceRum7,
    position: 6,
  },
  {
    bottle: 'Botella Cafe',
    medals: [
      {
        name: 'MADRID RUM CONFERENCE SILVER 2018',
        img: MadridRumSilver2018,
        main: true,
        text: 'our_world.medals.MADRID_RUM_CONFERENCE_SILVER_2018',
      },
    ],
    img: BottleCoffee,
    position: 7,
  },
];
