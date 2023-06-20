import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IMetaPageOption } from '../interfaces/layout';

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
