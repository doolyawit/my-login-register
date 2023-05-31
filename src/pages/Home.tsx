import { useContext, useEffect } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import HomeContextProvider, { HomeContext } from "../contexts/HomeProvider";
import { AuthContext } from "../contexts/AuthContext";
import { UserLogin } from "../schemas/UserLogin";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userLogin = useContext(AuthContext);
  const userInfo: UserLogin | undefined | null | string | object =
    userLogin?.getUser();

  useEffect(() => {
    if (!userLogin.checkAuth()) {
      navigate("/");
    }
  }, [userLogin, navigate]);
  {
    return (
      <HomeContextProvider>
        <>
          <Header mode={HomeContext} />
          Welcome {userInfo?.email} 💥
          <img
            src="https://media.giphy.com/media/r3LYut2JMz0YM/giphy-downsized-large.gif"
            alt=""
            className=" mx-auto rounded-lg drop-shadow-2xl"
          />
          <LogoutButton />
          <Footer mode={HomeContext} />
        </>
      </HomeContextProvider>
    );
  }
};
export default Home;
