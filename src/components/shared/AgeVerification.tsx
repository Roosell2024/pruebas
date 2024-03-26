import { useState } from 'react';
import { useTransition } from 'transition-hook';
import { LogoGreenEN, LogoGreenES } from '../../assets/imgs/shared';
import { useTranslation } from 'react-i18next';

export const AgeVerification = () => {
  const [isAccepted, setIsAccepted] = useState(localStorage.getItem('age-verification') === 'accepted');
  const [onOff, setOnOff] = useState(false);
  const { i18n } = useTranslation();
  const { stage, shouldMount } = useTransition(onOff, 300);

  const handleAccept = () => {
    setIsAccepted(true);
    localStorage.setItem('age-verification', 'accepted');
  };

    if (isAccepted) return null; 

  return (
    <div
      className="fixed w-screen h-screen z-[51] bg-black/50 left-0 top-0 flex justify-center items-center bg-no-repeat bg-bottom p-5"
     
    >
      <div className="shadow-xl rounded-xl p-8 relative overflow-hidden text-center bg-gradient-to-b from-gold to-white-50 max-w-md">
        <h3 className='text-green-300 text-3xl font-bold uppercase mb-5'>Bienvenido</h3>
        <img
          src={i18n.language === 'en' ? LogoGreenEN : LogoGreenES}
          alt="Logo ron centenario"
          className="mb-5 w-44 inline-block"
        />
        <p className='text-green-300 text-xl'>¿Tienes la edad legal mínima requerida para consumir bebidas alcohólicas en tu país de residencia?</p>
        <div className="flex gap-4 mt-5 justify-center">
          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-300 px-10 py-2 font-medium text-white-50 transition hover:scale-105 uppercase"
            onClick={handleAccept}
          >
            <span>Yes</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white-50/20"></div>
            </div>
          </button>

          <button
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-50/80 px-10 py-2 font-medium text-white-50 transition hover:scale-105 uppercase"
            onClick={() => setOnOff(true)}
          >
            <span>No</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white-50/20"></div>
            </div>
          </button>
        </div>
        {shouldMount && (
          <div
            className="absolute text-white-50 w-full h-full bg-green-300 rounded-xl p-8 left-0 flex justify-center items-center bg-no-repeat bg-left-top bg-cover"
            style={{
              transition: '500ms',
              top: stage === 'enter' ? 0 : '100%',
            }}
          >
            <div className="text-center">
              <h3 className="title">Oh no!</h3>
              <p>No eres lo suficientemente mayor... ¡Lo siento!</p>
              <button
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gold px-10 py-2 font-medium text-white-50 transition hover:scale-105 uppercase mt-5"
                onClick={() => window.history.back()}
              >
                <span>Regresar</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white-50/20"></div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
