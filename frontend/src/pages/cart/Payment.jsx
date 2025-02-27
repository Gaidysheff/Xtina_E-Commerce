import Modal from "./../../components/modalWindow/Modal.jsx";
import PaymentModule from "./PaymentModule.jsx";
import ProgressSteps from "./../../components/progressSteps/ProgressSteps.jsx";

const Payment = (props) => {
  return (
    <Modal onHideConfirm={props.onHideConfirm}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <ProgressSteps step1 step2 step3 step4 />
          <button
            onClick={props.onHideConfirm}
            className="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
          flex justify-center items-center border-2 cursor-pointer
          border-primaryDark hover:bg-gradient-to-br hover:from-primaryLight 
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
              Модуль оплаты
            </div>
            <div className="text-end">
              {/* ----------------------------- */}
              <div
                className="flex justify-between items-center font-semibold 
                my-[1rem] text-xl"
              >
                <PaymentModule totalToBePaid={props.totalToBePaid} />
              </div>
              {/* ----------------------------- */}
              <button
                className="cursor-pointer bg-transparent text-primaryDark ml-2
                font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
                hover:bg-gradient-to-br hover:from-primaryLight 
                hover:to-primaryDark hover:text-white hover:ring 
                hover:border-white hover:ring-primaryDark/70"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="2000"
                // onClick={smth}
              >
                Оплатить
              </button>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Payment;
