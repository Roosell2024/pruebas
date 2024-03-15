import { EventItem } from '../../interfaces/Events';

import { EventJapon, EventMak, EventParis } from '../imgs/ourWorld';

export const eventsData: EventItem[] = [
  {
    title: 'our_world.events_data.paris_rum_fest.title',
    text: 'our_world.events_data.paris_rum_fest.text',
    img: EventParis,
  },
  {
    title: 'our_world.events_data.pro_wein.title',
    text: 'our_world.events_data.pro_wein.text',
    img: EventMak,
  },
  {
    title: 'our_world.events_data.foodex.title',
    text: 'our_world.events_data.foodex.text',
    img: EventJapon,
  },
];
