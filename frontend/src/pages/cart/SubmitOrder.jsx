import Modal from "./../../components/modalWindow/Modal.jsx";
import SubmitForm from "./SubmitForm.jsx";
import { useRef } from "react";

const SubmitOrder = (props) => {
  const editFormRef = useRef();

  // -----------------------------------------

  const submitChildForm = () => {
    // event.preventDefault();
    if (editFormRef && editFormRef.current) {
      editFormRef.current.submitForm();
    }
    props.onOpenConfirm();
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className="flex flex-col">
        <div
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
              />
            </div>

            <div className="text-end">
              <button
                className="cursor-pointer bg-transparent text-primaryDark ml-2
											font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
											hover:bg-gradient-to-br hover:from-primaryLight 
											hover:to-primaryDark hover:text-white hover:ring 
											hover:border-white hover:ring-primaryDark/70"
                onClick={submitChildForm}
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="2000"
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
