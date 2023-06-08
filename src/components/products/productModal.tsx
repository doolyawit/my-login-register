import { Product } from "../../services/datasources/interfaces/product";
import Modal from "react-modal";
import Button from "../Button";
const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "80%",
    background: "white",
    borderRadius: "0.6rem",
    border: "none",
    padding: 0,
  },
};

function ProductModal({
  product,
  isModalOpen,
  setIsModalOpen,
  closeModal,
}: {
  product: Product;
  isModalOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
  closeModal: () => void;
}) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customModalStyles}
      contentLabel="Product Details Modal"
    >
      <div className="m-0 flex h-full w-full flex-col  justify-normal  bg-green ">
        <div className="mb-4 flex justify-between  border-b  border-solid border-black px-4 py-3">
          <span className="text-2xl">DETAILS</span>
          <Button
            word="X"
            handleClick={() => {
              setIsModalOpen(false);
            }}
            cusStyle="bg-transparent border-black border rounded-lg w-8 h-8 flex justify-center items-center hover:bg-red"
          ></Button>
        </div>

        <div className="flex justify-between gap-5 p-7 lg:py-3">
          <div className="w-1/3">
            <img
              src="https://images.unsplash.com/photo-1685902397640-04a02fde0f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="h-96 w-screen"
            />
          </div>
          <div className="w-2/3">
            <div className=" relative left-80 mt-1 w-1/3 rounded-full border border-solid border-black bg-pink  px-3 text-center text-2xl lg:left-72 xl:left-96">
              {product.name}
            </div>
            <div className="mr-2 mt-4 text-right text-sm">
              {product.category}
            </div>
            <div className=" text-xl">${product.price}</div>
            <div className="description-container relative bg-green">
              <p className={"h-52 max-h-52 overflow-scroll"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas maecenas pharetra convallis posuere morbi leo urna.
                Purus in massa tempor nec feugiat. Scelerisque eleifend donec
                pretium vulputate sapien. Lacinia quis vel eros donec ac odio
                tempor orci dapibus. Non odio euismod lacinia at quis. Mattis
                aliquam faucibus purus in massa tempor nec feugiat nisl. Id
                velit ut tortor pretium viverra suspendisse potenti nullam ac.
                Tellus pellentesque eu tincidunt tortor aliquam nulla. Euismod
                elementum nisi quis eleifend quam. Tincidunt ornare massa eget
                egestas. Malesuada nunc vel risus commodo viverra. Vel elit
                scelerisque mauris pellentesque pulvinar pellentesque. Aliquet
                enim tortor at auctor urna nunc id cursus. Sit amet volutpat
                consequat mauris nunc congue. Elementum pulvinar etiam non quam.
                Egestas sed sed risus pretium quam vulputate dignissim. Eros
                donec ac odio tempor. Ipsum consequat nisl vel pretium lectus
                quam id. Pulvinar etiam non quam lacus suspendisse faucibus.
                Quis lectus nulla at volutpat diam ut venenatis tellus. Cum
                sociis natoque penatibus et magnis. Arcu felis bibendum ut
                tristique et. Orci dapibus ultrices in iaculis nunc sed augue.
                Aliquet enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl. llus. Cum sociis
                natoque penatibus et magnis. Arcu felis bibendum ut tristique
                et. Orci dapibus ultrices in iaculis nunc sed augue. Aliquet
                enim tortor at auctor. Nam at lectus urna duis convallis
                convallis. Odio eu feugiat pretium nibh. Pellentesque habitant
                morbi tristique senectus et netus. Dis parturient montes
                nascetur ridiculus mus mauris vitae ultricies. Eleifend mi in
                nulla posuere sollicitudin aliquam. Eu sem integer vitae justo
                eget magna fermentum. Nunc lobortis mattis aliquam faucibus. Eu
                mi bibendum neque egestas congue quisque. Pharetra magna ac
                placerat vestibulum lectus mauris ultrices eros. Eget gravida
                cum sociis natoque penatibus et. Volutpat consequat mauris nunc
                congue. Pretium nibh ipsum consequat nisl.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10	 lg:content-stretch lg:bg-green">
          <Button
            word="Cancel"
            handleClick={() => {
              setIsModalOpen(false);
            }}
            cusStyle="bg-transparent border-black border rounded-lg w-1/3 h-2/3 flex justify-center items-center hover:bg-red"
          ></Button>
          <Button
            word="Save to Bookmark"
            cusStyle="bg-transparent border-black border rounded-lg w-1/3 h-2/3 flex justify-center items-center hover:bg-yellow"
          ></Button>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;
