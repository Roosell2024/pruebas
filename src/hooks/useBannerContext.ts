import { useContext } from 'react';
import { BannerContext } from '../context';

export const useBannerContext = () => {
  return useContext(BannerContext);
};
