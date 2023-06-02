import { useContext } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import HomeContextProvider, { HomeContext } from "../contexts/HomeProvider";

import LogoutButton from "../components/LogoutButton";
import { AuthContext } from "../authentication/AuthProvider";
import Title from "../components/layouts/Title";

const Home = () => {
  const userInfo = useContext(AuthContext);

  return (
    <HomeContextProvider>
      <>
        <Title title="Welcome!" />
        <Header mode={HomeContext} />
        Welcome {userInfo?.user?.email} 💥
        <img
          src="https://media.giphy.com/media/cGEvknAXVmEcsw2E4n/giphy.gif"
          alt=""
          className=" mx-auto rounded-lg drop-shadow-2xl"
        />
        <LogoutButton />
        <Footer mode={HomeContext} />
      </>
    </HomeContextProvider>
  );
};
export default Home;
