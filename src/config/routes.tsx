import { Sustainability, Cocktails, ContactUs, HomePage, OurHistory, OurRums, OurWorld } from '../pages';
import { BgHome } from '../assets/imgs/home';
import { BgOurHistory } from '../assets/imgs/ourHistory';
import { BGContactUs } from '../assets/imgs/contactUs';
import { BGSotenibilidad } from '../assets/imgs/sostenibilidad';
import { BGCocktails } from '../assets/imgs/cocktails';
import { BGOWorld } from '../assets/imgs/ourWorld';
import { BGOurRums } from '../assets/imgs/ourRums';

export const routes = [
  {
    name: 'home',
    path: '/',
    bgImage: BgHome,
    Component: <HomePage />,
  },

  {
    name: 'history',
    path: '/our-history',
    bgImage: BgOurHistory,
    Component: <OurHistory />,
  },
  {
    name: 'rums',
    path: '/our-rums',
    bgImage: BGOurRums,
    Component: <OurRums />,
  },
  {
    name: 'cocktails',
    path: '/cocktails',
    bgImage: BGCocktails,
    Component: <Cocktails />,
  },
  {
    name: 'sostenibilidad',
    path: '/sostenibilidad',
    bgImage: BGSotenibilidad,
    Component: <Sustainability />,
  },
  {
    name: 'world',
    path: '/our-world',
    bgImage: BGOWorld,
    Component: <OurWorld/>
  },
  {
    name: 'contact',
    path: '/contact-us',
    bgImage: BGContactUs,
    Component: <ContactUs />,
  },
];
