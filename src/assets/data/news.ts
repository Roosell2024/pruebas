import { NewsItem } from "../../interfaces/NewsItem";
import { NewsMarcadoItaliano, NewsMercadoAlemania, NewsMercadoJapones } from '../imgs/ourWorld';


export const newsData: NewsItem[] = [
  {
    title: 'our_world.news_data.inGermany.title',
    text: `our_world.news_data.inGermany.text`,
    date: 'our_world.news_data.inGermany.date',
    img: NewsMercadoAlemania,
  },
  {
    title: 'our_world.news_data.inItaly.title',
    text: `our_world.news_data.inItaly.text`,
    date: 'our_world.news_data.inItaly.date',
    img: NewsMarcadoItaliano,
  },
  {
    title: 'our_world.news_data.inJapon.title',
    text: `our_world.news_data.inJapon.text`,
    date: 'our_world.news_data.inJapon.date',
    img: NewsMercadoJapones,
  },
];