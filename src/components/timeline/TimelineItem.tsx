import { useMediaQuery } from '@uidotdev/usehooks';
import { useTranslation } from 'react-i18next';
import { mobileBreakpoint } from '../../config/constants';

interface Props {
  year: string;
  text: string;
  image: string;
  width: number;
  lastOne: boolean;
}

export const TimelineItem: React.FC<Props> = ({ year, image, text, width, lastOne }) => {
  const { t } = useTranslation();
  const isSmallDevice = useMediaQuery(mobileBreakpoint);

  return (
    <div className="text-gold relative sm:h-[500px] h-[650px]" style={{ width: lastOne && isSmallDevice ? '400px' : width }}>
      <div className="flex justify-center items-end h-[205px]">
        <img src={image} alt={`${year}_image`} className="inline-block" />
      </div>

      <div className="w-12 h-12 bg-white-50 rounded-full border-green-100 border-2 absolute left-0 right-0 my-0 mx-auto top-56 z-10" />
      <div
        className={`flex border-green-100 border-b-2 border-dashed absolute w-full top-[246px] left-[9.5rem] ${
          lastOne
            ? 'after:h-5 after:w-5 after:bg-green-100 after:absolute after:right-0 after:-bottom-[10px] after:rounded-full'
            : ''
        }`}
      />

      <div className="absolute top-[16rem] p-4">
        <time className="text-lg font-semibold">{year}</time>
        <p>{t(text)}</p>
      </div>
    </div>
  );
};
