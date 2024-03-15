import { Logo, Menu, SocialMedia } from '.';

export const Header = () => {
  return (
    <header className="flex sm:justify-between justify-start items-center relative z-50">
      <Logo />
      <SocialMedia />
      <Menu />
    </header>
  );
};
