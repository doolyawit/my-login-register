import { ProductCardProps } from "../interfaces/product";

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <>
      {/* Desktop Version */}
      <div
        className=" mx-5 hidden flex-1 rounded-xl bg-gradient-to-b from-orange  to-white drop-shadow-2xl  backdrop-blur-lg  sm:hidden md:mx-2 md:mb-10 md:inline lg:mx-4 lg:inline xl:mx-6 xl:inline "
        onClick={onClick}
      >
        <div className=" md:w-full2 sm:max-w-2xl  sm:px-6 md:max-w-xl lg:max-w-7xl lg:px-6">
          <div key={product.id} className=" flex flex-col py-5  ">
            <div className=" w-full overflow-hidden rounded-md bg-gray-200 ">
              <img
                src={product.url}
                alt={product.description}
                className="h-6 w-full object-cover object-center sm:h-1/3  md:h-1/3 lg:h-full lg:w-full"
              />
            </div>
            <div className=" mt-4 flex justify-between text-black md:mt-2">
              <div className="flex flex-col">
                <div className=" self-start text-black  md:text-sm lg:text-base">
                  {product.name}
                </div>
                <div className=" self-start text-xs font-extrabold text-blue md:text-2xs">
                  {product.category}
                </div>
              </div>
              <div className=" mt-1  h-full rounded-full border  border-solid border-black bg-yellow px-3 text-xs md:px-2 ">
                ${product.price}
              </div>
            </div>

            <div className="mt-4 md:mt-1 ">
              <p className="mt-1 text-left text-xs text-black md:text-2xs xl:mt-2 xl:text-center  ">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="mb-4 flex w-10/12 flex-1 rounded-xl bg-gradient-to-b from-orange to-white pr-2 drop-shadow-2xl backdrop-blur-lg sm:flex md:hidden lg:hidden xl:hidden"
        onClick={onClick}
      >
        <div className=" flex max-w-2xl flex-1 gap-2 ">
          <div className=" w-1/2 flex-1">
            <img
              src={product.url}
              alt={product.description}
              className=" m-2 h-20 w-full rounded-xl object-cover object-center"
            />
          </div>
          <div
            key={product.id}
            className=" ml-2 flex h-24 flex-1 flex-col text-sm sm:ml-6 "
          >
            <div className="mt-4 flex justify-between text-black">
              <div className="flex flex-col">
                <div className=" self-start  text-base text-black">
                  {product.name}
                </div>
                <div className=" mt-2 self-start text-2xs text-black">
                  {product.category}
                </div>
              </div>
              <div className="  h-6 w-1/3 rounded-full border border-solid border-black bg-yellow py-1 text-xs">
                ${product.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
