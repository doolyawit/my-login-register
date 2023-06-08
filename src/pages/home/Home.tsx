import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import HomeContextProvider, { HomeContext } from "../../contexts/HomeProvider";
import Title from "../../components/layouts/Title";
import { useViewModel } from "./useViewModel";
import { NavBar } from "../../components/NavBar";
import ProductCard from "../../components/products/ProductCard";
import { ProductList } from "../../components/products/ProductList";

const Home = () => {
  const { products } = useViewModel();
  return (
    <HomeContextProvider>
      <div className=" flex min-h-full w-full min-w-full flex-1 flex-col  justify-center  rounded-2xl bg-white drop-shadow-2xl backdrop-blur-lg">
        <NavBar />
        {/* add welcome text */}
        <Title title="Welcome!" />
        <Header mode={HomeContext} />
        <ProductList>
          {products?.map((product) => {
            return <ProductCard product={product} />;
          })}
        </ProductList>

        <Footer mode={HomeContext} />
      </div>
    </HomeContextProvider>
  );
};
export default Home;
