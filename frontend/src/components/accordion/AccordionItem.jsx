import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef } from "react";

const AccordionItem = (props) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper-blocks">
      <button
        className={`question-container ${props.isOpen ? "active" : ""}`}
        onClick={props.onClick}
      >
        <p className="question-content">{props.question}</p>
        <RiArrowDropDownLine
          className={`arrow ${props.isOpen ? "active" : ""}`}
        />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          props.isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="answer-content">{props.answer1}</p>
        {props.answer2 && <p className="answer-content">{props.answer2}</p>}
        {props.answer3 && <p className="answer-content">{props.answer3}</p>}
        {props.li1 && <p className="answer-list">{props.li1}</p>}
        {props.li2 && <p className="answer-list">{props.li2}</p>}
        {props.li3 && <p className="answer-list">{props.li3}</p>}
        {props.answer4 && <p className="answer-content">{props.answer4}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
