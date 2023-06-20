import { NavBarProps } from "./interfaces/navBar";
import { cx } from "@emotion/css";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const defaultStyle = "cursor-pointer rounded-full px-1 mb-1 text-center mx-2 ";

const NavBar = ({
  shopName,
  logoIcon,
  menuItems,
  menuItemStyle,
}: NavBarProps) => {
  return (
    <>
      <nav className="hidden w-full flex-1 rounded-2xl sm:hidden sm:justify-between md:flex lg:flex xl:flex">
        <div className="ml-5 w-1/3  flex-1	flex-grow self-center	 rounded-2xl	text-left text-xl font-extrabold text-black">
          <span className="cursor-pointer">{shopName}</span>
        </div>

        <div className="w-1/3 flex-1 flex-grow justify-center self-center ">
          {logoIcon}
        </div>

        <div className="flex w-1/3 flex-1 flex-grow items-center justify-evenly   rounded-2xl md:mr-2">
          <ul className=" flex flex-1 justify-end rounded-full border-solid border-black text-black">
            {menuItems?.map((item, index) => (
              <li key={index} className={cx(defaultStyle, menuItemStyle)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ----- mobile */}
      <div className="min-h-full  md:hidden lg:hidden xl:hidden">
        <Disclosure as="nav" className="rounded-full bg-white  ">
          {({ open }: { open: boolean }) => (
            <>
              <div className="mx-auto max-w-7xl px-4  sm:px-6  lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex w-1/3  flex-1 items-center ">
                    <div className="-mr-2 flex ">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex  items-center justify-center rounded-xl border border-solid  border-black bg-white p-1 text-black hover:bg-yellow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6 "
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6 "
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                  <div className=" w-1/3 flex-1 flex-grow justify-center self-center  ">
                    {logoIcon}
                  </div>
                  <div className=" flex w-1/3  flex-1	flex-grow justify-end	 self-center	rounded-2xl text-left text-xs font-extrabold text-black ">
                    <span className="cursor-pointer">{shopName}</span>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="rounded-md bg-transparent md:hidden lg:hidden xl:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {menuItems.map((item, index) => (
                    <Disclosure.Button
                      key={index}
                      as="a"
                      href="#"
                      className="block  rounded-xl px-3 py-2 text-base font-medium text-black hover:bg-yellow hover:text-black"
                    >
                      {item}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};
export default NavBar;
