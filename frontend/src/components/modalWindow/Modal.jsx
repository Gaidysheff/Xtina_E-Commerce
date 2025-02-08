import "./Modal.css";

import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onHideCart}
      className="fixed top-0 left-0 w-full min-h-screen z-20 
		bg-gray-950/75"
    ></div>
  );
};

const ModalWindow = (props) => {
  return (
    <div
      className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-5 rounded-xl
		z-30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] animation-mine
		md:w-[40rem] md:left-[calc(50%-20rem)]"
    >
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{props.children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};

export default Modal;
