import React, { createContext, useState } from 'react';

type BannerContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const BannerContext = createContext<BannerContextType>({
  open: false,
  setOpen: () => {},
});

export const BannerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);

  return <BannerContext.Provider value={{ open, setOpen }}>{children}</BannerContext.Provider>;
};
