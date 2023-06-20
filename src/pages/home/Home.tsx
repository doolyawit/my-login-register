import Header from "../../components/layouts/Header";
import HomeContextProvider, { HomeContext } from "../../contexts/HomeProvider";
import Title from "../../components/layouts/Title";
import useViewModel from "./useViewModel";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/products/ProductCard";
import ProductList from "../../components/products/ProductList";
import { LoginEmoji } from "../../components/svg/LoginEmoji";
import { RegisterEmoji } from "../../components/svg/RegisterEmoji";
import { useInformationModal } from "../../hooks/useInformationModal";
import ProductDetailModal from "../../components/modals/ProductDetailModal";
import Footer from "../../components/layouts/Footer";
import { SearchBox } from "../../components/forms/SearchBox";

const Home = () => {
  const { products, setProductIndex, productIndex } = useViewModel();
  const { openModal } = useInformationModal();
  return (
    <HomeContextProvider>
      <div className="md:h-11/12 min-h-full w-screen min-w-full flex-1 rounded-2xl bg-white drop-shadow-2xl backdrop-blur-lg sm:h-full sm:w-screen sm:justify-around  ">
        <NavBar
          shopName="DIWX SHOP"
          logoIcon={<LoginEmoji />}
          menuItems={["Home", "Pricing", "Contact", <RegisterEmoji />]}
          menuItemStyle="border border-solid border-black hover:bg-yellow text-sm py-1 md:flex md:justify-center md:self-center sm:h-8 md:mr-2 lg:text-base xl:mr-5"
        />
        <Title title="Welcome!" />
        <Header mode={HomeContext} />
        <SearchBox />
        {/* Product index map */}
        <ProductList>
          {products &&
            products?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => {
                    setProductIndex(index);
                    openModal();
                  }}
                />
              );
            })}
        </ProductList>

        {products && (
          <ProductDetailModal products={products} productIndex={productIndex} />
        )}
        <Footer mode={HomeContext} />
      </div>
    </HomeContextProvider>
  );
};
export default Home;
[];
