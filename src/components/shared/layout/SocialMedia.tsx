import {
  FacebookHeaderIcon,
  InstagramHeaderIcon,
  LinkedinHeaderIcon,
  YoutubeHeaderIcon,
} from '../../../assets/imgs/shared';

export const SocialMedia = () => {
  return (
    <div className="sm:flex hidden sm:space-x-14 space-x-4">
      <a href="https://www.facebook.com/roncentenario" target="_blank" rel="noreferrer">
        <img alt="facebook Icon" className="w-7 h-7 object-contain" src={FacebookHeaderIcon} />
      </a>
      <a href="https://www.instagram.com/ron.centenario_intl" target="_blank" rel="noreferrer">
        <img alt="Instagram Icon" className="w-7 h-7 object-contain" src={InstagramHeaderIcon} />
      </a>
      <a href="https://www.linkedin.com/company/centenario-internacional/" target="_blank" rel="noreferrer">
        <img alt="Linkedin Icon" className="w-7 h-7 object-contain" src={LinkedinHeaderIcon} />
      </a>
      <a href="https://www.youtube.com/channel/UC97aJcwEDoVCQW02rFCi99A" target="_blank" rel="noreferrer">
        <img alt="Youtube Icon" className="w-9 h-9 object-contain" src={YoutubeHeaderIcon} />
      </a>
    </div>
  );
};
