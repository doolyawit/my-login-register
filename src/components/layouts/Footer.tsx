import { Link } from "react-router-dom";
import { useContext } from "react";

const Footer = ({
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
    <div className="mt-10 text-black">
      {context.message}{" "}
      <Link
        to={`${context.link}`}
        className="font-bold text-orange hover:text-lg"
      >
        {context.aMessage}
      </Link>
    </div>
  );
};

export default Footer;
