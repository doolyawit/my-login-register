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
      <h2 className="text-center  font-sans text-2xl font-bold leading-9 tracking-tight text-orange">
        {context.title}
      </h2>
      <h3 className="mt-7   font-semibold text-black">{context.subTitle}</h3>
    </>
  );
};

export default Header;
