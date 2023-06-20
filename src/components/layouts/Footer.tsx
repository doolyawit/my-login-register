import { Link } from "react-router-dom";
import { useContext } from "react";
import { FooterProps } from "../interfaces/layout";

const Footer = ({ mode }: { mode: React.Context<FooterProps> }) => {
  const context = useContext(mode);
  return (
    <div className=" mb-2 text-xs text-black sm:mb-0 sm:text-sm">
      {context.message}{" "}
      <Link
        to={`${context.link}`}
        className="hover:text-md text-xs font-extrabold text-orange sm:text-sm"
      >
        {context.aMessage}
      </Link>
    </div>
  );
};

export default Footer;
