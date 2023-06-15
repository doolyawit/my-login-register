import { NavBarProps } from "./interfaces/navBar";
import { cx } from "@emotion/css";
const defaultStyle = "cursor-pointer rounded-full px-1 mb-1 text-center ";

const NavBar = ({
  shopName,
  logoIcon,
  menuItems,
  menuItemStyle,
}: NavBarProps) => {
  return (
    <>
      <nav className="hidden w-full flex-1 rounded-2xl sm:hidden sm:justify-between md:flex lg:flex xl:flex">
        <div className="ml-5 w-1/3  flex-grow	self-center rounded-2xl	 text-left	text-xl font-extrabold text-black ">
          <span className="cursor-pointer">{shopName}</span>
        </div>

        <div className="w-1/3 flex-grow justify-center self-center ">
          {logoIcon}
        </div>

        <div className="flex w-1/3 flex-grow items-center justify-evenly rounded-2xl   md:mr-5">
          <ul className="flex flex-1 rounded-full border-solid border-black text-black">
            {menuItems?.map((item, index) => (
              <li key={index} className={cx(defaultStyle, menuItemStyle)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ----- */}

      <nav className="flex w-screen justify-between rounded-2xl sm:flex md:hidden lg:hidden xl:hidden ">
        <div className="z-50 w-1/6 flex-1 flex-grow self-center rounded-2xl text-left">
          <div className="peer ml-3 h-full w-20 rounded-full border border-solid border-black px-2 text-center text-sm text-black hover:bg-yellow">
            Menus &#9662;
          </div>
          {/* Fix small hover na vbar again */}
          <div className=" absolute left-4 mt-1 hidden  w-1/3 flex-grow content-start  rounded-2xl bg-white peer-hover:flex ">
            <ul
              className="flex-col content-start justify-start gap-5 rounded-full  border-solid border-black
         text-black drop-shadow-lg "
            >
              {menuItems?.map((item, index) => (
                <li key={index} className={cx(defaultStyle, menuItemStyle)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" flex-1 flex-grow justify-center self-center sm:shrink ">
          {logoIcon}
        </div>
        <div className=" mr-3 mt-5 flex-1 font-extrabold text-black ">
          <span className="cursor-pointer">{shopName}</span>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
