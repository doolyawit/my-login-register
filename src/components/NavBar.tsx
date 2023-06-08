import { LoginEmoji } from "./svg/LoginEmoji";
import { RegisterEmoji } from "./svg/RegisterEmoji";

export const NavBar = () => {
  return (
    <nav className="flex w-full justify-between rounded-2xl  ">
      <div className="ml-5 w-1/3  flex-grow	self-center rounded-2xl	 text-left	text-xl font-extrabold text-black">
        <span className="cursor-pointer">DIWX SHOP</span>
      </div>

      <div className="w-1/3 flex-grow justify-center self-center">
        <LoginEmoji w="50" h="50" />
      </div>

      <div className="flex w-1/3 flex-grow items-center justify-evenly rounded-2xl md:mr-5 ">
        <ul className="flex justify-evenly gap-5 rounded-full border-solid border-black text-black">
          <li className="cursor-pointer rounded-full border border-solid border-black  p-1 hover:bg-yellow">
            Home
          </li>
          <li className="cursor-pointer rounded-full border border-solid border-black p-1 hover:bg-yellow">
            Pricing
          </li>
          <li className=" cursor-pointer rounded-full border border-solid border-black p-1 hover:bg-yellow">
            Contact
          </li>
          <li className=" cursor-pointer rounded-full border border-solid border-black px-1.5  hover:bg-yellow">
            <RegisterEmoji w="20" h="20" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
