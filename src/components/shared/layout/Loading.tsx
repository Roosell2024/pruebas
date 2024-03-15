import { useTranslation } from 'react-i18next';

export const Loading = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-300 bg-opacity-60 z-50">
      <div className='flex flex-col items-center'>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gold"></div>
        <div className="text-white-50 text-center mt-2 text-xl">{t('loading')}...</div>
      </div>
    </div>
  );
};
