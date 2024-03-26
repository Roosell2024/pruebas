import { ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Footer, Header } from '.';
import { CurveImg } from '../../../assets/imgs/shared';
import { LanguageFab } from '..';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mobileBreakpoint } from '../../../config/constants';
import { AgeVerification } from '../AgeVerification';

interface ContainerProps {
  children: ReactNode;
  bgImage: string;
}

export const Container: React.FC<ContainerProps> = ({ children, bgImage }) => {
  const [location] = useLocation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  return (
    <>
      <AgeVerification />
      <LanguageFab />
      <main className="relative overflow-hidden">
        <div
          className={`base-background absolute w-full top-0 left-0 bg-cover bg-top 
          ${!isSmallDevice ? (location !== '/' ? 'h-[875px]' : 'h-screen') : 'h-lg:h-[45vh] xs:h-[50vh] h-[56vh]'}`}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <img
          src={CurveImg}
          alt="curve"
          className={`absolute top-0 left-0 w-full -mt-60 ${
            !isSmallDevice
              ? location !== '/'
                ? 'sm:h-[1775px] h-[2100px]'
                : 'sm:h-md:h-[1755px] sm:h-sm:h-[1645px] sm:h-[1415px] h-[2050px]'
              : 'h-lg:h-[1210px] h-[1230px]'
          }`}
        />
        <Header />
        <div className="relative sm:h-md:min-h-[calc(100vh-136px)] xs:min-h-[calc(100vh-96px)] min-h-screen">
          {children}
        </div>
        {location !== '/' && <Footer />}
      </main>
    </>
  );
};
