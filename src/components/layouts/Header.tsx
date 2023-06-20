import { useContext } from 'react';
import { HeaderProps } from '../interfaces/layout';

const Header = ({ mode }: { mode: React.Context<HeaderProps> }) => {
  const context = useContext(mode);

  return (
    <>
      <h2 className="text-md ml-4 mt-2 hidden text-center font-extrabold leading-9 tracking-tight text-orange sm:mt-0 sm:text-xl md:block">
        {context.title}
      </h2>
      <h3 className=" text-sm font-bold text-black sm:mt-5">
        {context.subTitle}
      </h3>
    </>
  );
};

export default Header;
