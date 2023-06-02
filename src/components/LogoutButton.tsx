import { AuthContext } from "../authentication/AuthProvider";
import { useContext } from "react";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  //* have better way to handle this ? (redirect)

  const handleLogout = () => {
    logout();
    console.log("Logout Success");
    window.location.reload();
  };

  return (
    <button
      onClick={handleLogout}
      className=" mx-auto my-10 flex w-1/2	 justify-center rounded-lg bg-violet px-3 py-1.5 text-sm font-semibold leading-6 text-yellow shadow-sm hover:bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      Logout Now !
    </button>
  );
};
export default LogoutButton;
