import { Sustainability, Cocktails, ContactUs, HomePage, OurHistory, OurRums, OurWorld } from '../pages';

export const routes = [
  {
    name: 'home',
    path: '/',
    Component: <HomePage />,
  },

  {
    name: 'history',
    path: '/our-history',
    Component: <OurHistory />,
  },
  {
    name: 'rums',
    path: '/our-rums',
    Component: <OurRums />,
  },
  {
    name: 'cocktails',
    path: '/cocktails',
    Component: <Cocktails />,
  },
  {
    name: 'sostenibilidad',
    path: '/sostenibilidad',
    Component: <Sustainability />,
  },
  {
    name: 'world',
    path: '/our-world',
    Component: <OurWorld />,
  },
  {
    name: 'contact',
    path: '/contact-us',
    Component: <ContactUs />,
  },
];
