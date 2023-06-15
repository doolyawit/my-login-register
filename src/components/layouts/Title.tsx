import { Helmet, HelmetProvider } from "react-helmet-async";
import { IMetaPageOption } from "../interfaces/layout";

//TODO: research about react-helmet-async (Helmet Provider)
const Title = ({ title }: IMetaPageOption) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Title;
