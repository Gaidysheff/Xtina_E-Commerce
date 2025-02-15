// import DeliveryOptions from "./delivery/DeliveryOptions.jsx";

import Modal from "./../../components/modalWindow/Modal.jsx";
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
        <div
          onClick={props.onHideCart}
          className="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
							flex justify-center items-center border-2 cursor-pointer
							border-primaryDark 
							hover:bg-gradient-to-br hover:from-primaryLight 
							hover:to-primaryDark hover:text-white hover:ring 
							hover:border-white hover:ring-primaryDark/70"
        >
          <div className="pb-1">&times;</div>
        </div>

        <section>
          <div className="container">
            <div
              className="list-none my-3 p-0 overflow-auto max-h-[400px] 
              sm:max-h-[550px]"
            >
              <SubmitForm ref={editFormRef} />
              {/* <DeliveryOptions /> */}
            </div>

            <div className="text-end">
              <button
                className="cursor-pointer bg-transparent text-primaryDark ml-2
											font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
											hover:bg-gradient-to-br hover:from-primaryLight 
											hover:to-primaryDark hover:text-white hover:ring 
											hover:border-white hover:ring-primaryDark/70"
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
