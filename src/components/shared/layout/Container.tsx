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
          className={`base-background absolute left-0 top-0 w-full bg-cover bg-top 
          ${!isSmallDevice ? (location !== '/' ? 'h-[875px]' : 'h-screen') : 'h-[56vh] xs:h-[50vh] h-lg:h-[45vh]'}`}
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <img
          src={CurveImg}
          alt="curve"
          className={`absolute left-0 top-0 -mt-60 w-full ${
            !isSmallDevice
              ? location !== '/'
                ? 'h-[2000px] h-md:h-[2100px] h-md:sm:h-[1775px]'
                : 'h-[2050px] h-xs:xs:h-[1120px] sm:h-[1415px] h-sm:sm:h-[1645px] h-md:sm:h-[1755px]'
              : 'h-[1180px] h-md:h-[1230px] h-md:sm:h-[1230px] h-md:xs:h-[1190px] h-lg:h-[1210px]'
          }`}
        />
        <Header />
        <div className="relative min-h-screen xs:min-h-[calc(100vh-96px)] sm:h-md:min-h-[calc(100vh-136px)]">
          {children}
        </div>
        {location !== '/' && <Footer />}
      </main>
    </>
  );
};
