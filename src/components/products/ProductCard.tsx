import Button from "../Button";
import { ProductCardProps } from "../interfaces/product";

export default function ProductCard({ product, onClick }: ProductCardProps) {
  //Todo: re-compose
  return (
    <>
      {/* Not normal */}
      <div className=" mx-5 hidden flex-1 rounded-xl bg-gradient-to-b from-orange  to-white drop-shadow-2xl  backdrop-blur-lg  sm:hidden md:flex">
        <div className="   sm:max-w-2xl sm:px-6 md:max-w-2xl lg:max-w-7xl lg:px-6">
          <div key={product.id} className=" flex flex-col py-5  ">
            <div className=" w-full overflow-hidden rounded-md bg-gray-200 ">
              <img
                //TODO: set size of image to equal from fetch
                src={product.url}
                alt={product.description}
                className="h-6  w-full object-cover object-center sm:h-1/3 md:h-1/3  lg:h-full lg:w-full"
              />
            </div>

            <div className=" mt-4 flex justify-between text-black">
              <div className="flex flex-col">
                <div className=" self-start text-black">{product.name}</div>
                <div className=" self-start text-xs font-extrabold text-blue">
                  {product.category}
                </div>
              </div>
              <div className=" mt-1  h-full rounded-full border  border-solid border-black bg-yellow px-3 text-xs">
                ${product.price}
              </div>
            </div>

            <div className="mt-4 ">
              <p className="mt-1 text-left text-xs text-black  ">
                {product.description}
              </p>
            </div>
          </div>
        </div>
        <Button
          label="DETAILS"
          customizeStyle="mx-auto mb-4  w-1/2	   px-1 py-1.5 text-xs font-extrabold leading-6 text-black shadow-sm hover:bg-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange bg-transparent border border-black"
          onClick={onClick}
        ></Button>
      </div>
      {/* normal-grid  */}
      <div
        className="mb-4 flex h-24 w-10/12 flex-1 rounded-xl bg-gradient-to-b from-orange to-white pr-2 drop-shadow-2xl backdrop-blur-lg sm:flex md:hidden lg:hidden xl:hidden"
        onClick={onClick}
      >
        <div className=" flex max-w-2xl flex-1 gap-1 ">
          <div className=" w-6/12">
            <img
              //TODO: set size of image to equal from fetch
              src={product.url}
              alt={product.description}
              className=" m-2 h-20 w-full rounded-xl object-cover object-center"
            />
          </div>
          <div
            key={product.id}
            className=" ml-2 flex h-24 flex-col text-sm sm:ml-6  "
          >
            <div className="mt-4 flex justify-between text-black">
              <div className="flex flex-col">
                <div className=" self-start  text-black">{product.name}</div>
                <div className=" self-start text-xs  text-blue">
                  {product.category}
                </div>
              </div>
              <div className="  h-6 w-1/3  rounded-full border border-solid border-black bg-yellow text-sm">
                ${product.price}
              </div>
            </div>

            <div>
              <p className="mt-1 text-left text-xs text-black  ">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
