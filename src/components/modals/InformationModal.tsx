import { useInformationModal } from '../../hooks/useInformationModal';
import BaseModal from './BaseModal';
import { InformationModalProps } from '../interfaces/modal';
import Button from '../Button';

function InformationModal({
  children,
  modalLabel,
  title,
  button1Label,
  button1OnClick,
  button2Label,
  button2OnClick,
}: InformationModalProps) {
  const { isModalOpen, closeModal } = useInformationModal();
  const renderMobile = () => {
    return (
      <div className="m-0 flex flex-col justify-normal md:hidden lg:hidden  xl:hidden">
        {/* Header */}
        <div className="mb-2 flex h-1/6 items-center  justify-between  border-b border-solid border-black px-3 pb-1 pt-2">
          <span className="text-sm text-black sm:text-2xl">{title}</span>
          <Button
            label="X"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  w-8 h-4 hover:bg-red text-black text-sm"
          ></Button>
        </div>

        {/* Body */}
        {children}

        {/* Footer */}
        <div className="mb-2 flex h-1/6 justify-center gap-6">
          <Button
            label={button1Label}
            onClick={button1OnClick}
            customizeStyle="bg-transparent border-black border  hover:bg-red  text-black text-2xs text-2xs sm:text-sm"
          ></Button>
          {button2Label && (
            <Button
              label={button2Label}
              customizeStyle="bg-transparent border-black border  hover:bg-yellow sm:text-sm text-black text-2xs"
              onClick={button2OnClick}
            ></Button>
          )}
        </div>
      </div>
    );
  };
  return (
    <BaseModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      modalLabel={modalLabel}
      modalStyle={
        ' relative top-1/4 mx-auto w-2/3 h-fit rounded-xl  sm:absolute sm:left-1/4 xl:left-1/3 sm:top-1/4 sm:w-1/3 bg-green p-0 m-0 md:w-1/2  lg:w-1/2 xl:w-1/3  '
      }
    >
      {/* Header */}
      <div className="m-0 hidden h-full w-full flex-col  justify-normal sm:hidden md:flex lg:flex ">
        <div className="mb-4 flex justify-between border-b  border-solid  border-black px-4 py-3 sm:mb-0">
          <span className=" text-black sm:text-lg">{title}</span>
          <Button
            label="X"
            onClick={() => {
              closeModal();
            }}
            customizeStyle="bg-transparent border-black border  w-8 h-8   hover:bg-red text-black "
          ></Button>
        </div>
        {/* Body - Dynamic content */}
        {children}
        {/* Footer */}
        <div className="mb-4 flex justify-center	 gap-10 sm:gap-5 lg:content-stretch lg:bg-green xl:mt-2">
          <Button
            label={button1Label}
            onClick={button1OnClick}
            customizeStyle="bg-transparent border-black border  hover:bg-red sm:text-sm text-black"
          ></Button>
          {button2Label && (
            <Button
              label={button2Label}
              customizeStyle="bg-transparent border-black border  hover:bg-yellow sm:text-sm text-black"
              onClick={button2OnClick}
            ></Button>
          )}
        </div>
      </div>
      {renderMobile()}
    </BaseModal>
  );
}

export default InformationModal;
