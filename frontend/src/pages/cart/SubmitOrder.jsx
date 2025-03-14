import { FaArrowLeft } from "react-icons/fa";
import Modal from "./../../components/modalWindow/Modal.jsx";
import ProgressSteps from "./../../components/progressSteps/ProgressSteps.jsx";
import SubmitForm from "./SubmitForm.jsx";
import { useRef } from "react";

const SubmitOrder = (props) => {
  const editFormRef = useRef();

  const submitChildForm = () => {
    if (editFormRef && editFormRef.current) {
      editFormRef.current.submitForm();
    }
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <ProgressSteps step1 step2 />
          <button
            onClick={props.onHideCart}
            className="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
							flex justify-center items-center border-2 cursor-pointer
							border-primaryDark 
							hover:bg-gradient-to-br hover:from-primaryLight 
							hover:to-primaryDark hover:text-white hover:ring 
							hover:border-white hover:ring-primaryDark/70"
            data-aos="zoom-in"
            data-aos-delay="2000"
            data-aos-duration="2000"
          >
            <div className="pb-1">&times;</div>
          </button>
        </div>

        <section>
          <div className="container">
            <div
              className="list-none my-3 p-0 overflow-auto max-h-[400px] 
              sm:max-h-[550px]"
            >
              <SubmitForm
                ref={editFormRef}
                onSetDeliveryOption={props.onSetDeliveryOption}
                onOpenConfirm={props.onOpenConfirm}
              />
            </div>

            <div className="flex justify-between text-sm sm:text-lg">
              <button
                className="cursor-pointer bg-transparent text-primaryDark 
                  ml-2 font-semibold border-2 border-primaryDark py-2 px-4 
                  rounded-xl  hover:bg-gradient-to-br hover:from-primaryLight 
                  hover:to-primaryDark hover:text-white hover:ring 
                  hover:border-white hover:ring-primaryDark/70"
                // data-aos="zoom-in"
                // data-aos-delay="500"
                // data-aos-duration="2000"
                onClick={props.onShowCart}
              >
                <div className="flex items-center justify-between">
                  <FaArrowLeft />
                  <p className="ml-2">Назад</p>
                </div>
              </button>
              <button
                className="cursor-pointer bg-transparent text-primaryDark 
                  ml-2 font-semibold border-2 border-primaryDark py-2 px-4 
                  rounded-xl  hover:bg-gradient-to-br hover:from-primaryLight 
                  hover:to-primaryDark hover:text-white hover:ring 
                  hover:border-white hover:ring-primaryDark/70 my-animation"
                // data-aos="zoom-in"
                // data-aos-delay="500"
                // data-aos-duration="2000"
                onClick={submitChildForm}
              >
                Подтвердить
              </button>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default SubmitOrder;
