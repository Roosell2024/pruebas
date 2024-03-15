import {
  CroatiaFlag,
  CzechRepublicFlag,
  ElSalvadorFlag,
  GermanyFlag,
  JapanFlag,
  LatviaFlag,
  PanamaFlag,
  PeruFlag,
  PolandFlag,
  RomaniaFlag,
  SloveniaFlag,
  SwitzerlandFlag,
  UsaFlag,
} from '../../assets/imgs/ourWorld/flags';
import { MapaMundiSvg } from '../../assets/imgs/ourWorld';

export const MapaItem = () => {
  return (
    <div className="flex md:flex-row justify-start w-full flex-col-reverse">
      <div className="flex flex-col w-full absolute  md:top-64 top-28 md:left-0 justify-center md:items-start items-center">
        <ul className="list-disc text-green-300 text-lg z-10">
          <li>
            <a
              href="https://www.totalbeveragesolution.com/product-finder/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              United States/All states except Florida
              <img src={UsaFlag} alt="usa flag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://iws-fla.com/product/centenario-rum/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              United States/Florida <img src={UsaFlag} alt="usa flag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href=" https://www.amazon.de/stores/page/8EA6E10B-22E7-4F27-853C-70CC51C43A8D?ingress=2&visitId=a5b35505-cca5-4e03-925d-966c9e8345b5&ref_=ast_bln"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Germany <img src={GermanyFlag} alt="GermanyFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.global-wines.cz/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Czech Republic <img src={CzechRepublicFlag} alt="CzechRepublicFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.sccs.lv/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Latvia <img src={LatviaFlag} alt="LatviaFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://liquidgroup.ro/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Romania <img src={RomaniaFlag} alt="RomaniaFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.vrutak.hr/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Croatia <img src={CroatiaFlag} alt="CroatiaFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://shop.venkavojo.si/sl/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Slovenia <img src={SloveniaFlag} alt="SloveniaFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.spiritdepot.pl/en/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Poland <img src={PolandFlag} alt="PolandFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.drinks.ch/de/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Switzerland <img src={SwitzerlandFlag} alt="Switzerland" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://lcgroup.com.pe/"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Perú <img src={PeruFlag} alt="PeruFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thehousebarsv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              El Salvador <img src={ElSalvadorFlag} alt="ElSalvadorFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://miesquinagourmet.com/shop/ols/categories/destilados-ron-centenario"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Panamá <img src={PanamaFlag} alt="PanamaFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
          <li>
            <a
              href="https://www.likaman-online.com/p/search?keyword=centenario"
              target="_blank"
              rel="noreferrer"
              className="w-fit flex flex-row items-center text-green-300 hover:text-green-100"
            >
              Japan <img src={JapanFlag} alt="JapanFlag" className="w-4 md:h-fit ml-1 shadow" />
            </a>
          </li>
        </ul>
      </div>
      <div className="md:mt-10 md:ml-56 md:w-[90%] mt-52 ml-12 w-full">
        <img src={MapaMundiSvg} alt="mapa mundi" className='md:w-max md:h-auto md:scale-100 scale-150 md:opacity-100 opacity-70 ' />
      </div>
    </div>
  );
};
