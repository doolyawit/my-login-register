import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import HomeContextProvider, { HomeContext } from "../../contexts/HomeProvider";
import Title from "../../components/layouts/Title";
import useViewModel from "./useViewModel";
import NavBar from "../../components/NavBar";
import ProductCard from "../../components/products/ProductCard";
import ProductList from "../../components/products/ProductList";
import ProductDetailModal from "../../components/products/ProductDetailModal";
import { LoginEmoji } from "../../components/svg/LoginEmoji";
import { RegisterEmoji } from "../../components/svg/RegisterEmoji";
import { useProductDetailModal } from "../../hooks/useProductDetailModal";

const Home = () => {
  const { products, setProductIndex, productIndex } = useViewModel();
  const { openModal } = useProductDetailModal();

  return (
    <HomeContextProvider>
      <div className="md:h-11/12 min-h-full w-fit min-w-full flex-1 rounded-2xl bg-white drop-shadow-2xl backdrop-blur-lg sm:h-full sm:w-screen sm:justify-around  ">
        <NavBar
          shopName="DIWX SHOP"
          logoIcon={<LoginEmoji />}
          menuItems={["Home", "Pricing", "Contact", <RegisterEmoji />]}
          menuItemStyle="border border-solid border-black hover:bg-yellow text-sm py-1 md:flex md:justify-center md:self-center sm:h-8 md:mr-2 lg:text-base xl:mr-5"
        />
        <Title title="Welcome!" />
        <Header mode={HomeContext} />
        {/* Product index map */}
        <ProductList>
          {products &&
            products?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => {
                    openModal();
                    setProductIndex(index);
                  }}
                />
              );
            })}
        </ProductList>

        {products && (
          <ProductDetailModal product={products[productIndex] ?? {}} />
        )}
        <Footer mode={HomeContext} />
      </div>
    </HomeContextProvider>
  );
};
export default Home;
[];
