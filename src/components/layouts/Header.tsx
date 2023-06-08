import { useContext } from "react";

const Header = ({
  mode,
}: {
  mode: React.Context<{
    title: string;
    subTitle?: string;
    message?: string;
    link?: string;
    aMessage?: string;
  }>;
}) => {
  const context = useContext(mode);

  return (
    <>
      <h2 className="mt-2 text-center text-2xl	 font-extrabold leading-9 tracking-tight text-orange ">
        {context.title}
      </h2>
      <h3 className="mt-7 font-bold text-black">{context.subTitle}</h3>
    </>
  );
};

export default Header;
