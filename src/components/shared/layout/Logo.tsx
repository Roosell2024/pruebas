import { Link } from 'wouter';
import { LogoWhiteEN, LogoWhiteES } from '../../../assets/imgs/shared';
import { useTranslation } from 'react-i18next';

export const Logo = () => {
  const { i18n } = useTranslation();

  return (
    <div className="sm:w-64 w-48 h-24 p-5">
      <Link href="/">
        <img alt="logo" className="hover:cursor-pointer" src={i18n.language === 'sp' ? LogoWhiteES : LogoWhiteEN} />
      </Link>
    </div>
  );
};
