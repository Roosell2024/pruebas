import { useTranslation } from 'react-i18next';
import { AgeByNatureWhiteEN, AgeByNatureWhiteES } from '../../assets/imgs/shared';

interface Props {
  className?: string;
}

export const AgedByNatureLogo = ({ className = '' }: Props) => {
  const { i18n } = useTranslation();
  return (
    <img
      alt="logo_anejado"
      className={`opacity-50 ${className}`}
      src={i18n.language === 'sp' ? AgeByNatureWhiteES : AgeByNatureWhiteEN}
    />
  );
};
