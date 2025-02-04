// import "./Accordion.css";

import AccordionItem from "./AccordionItem.jsx";
import { accordionData } from "../../utils/accordionData.js";
import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="container py-2">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer1={item.answer1}
          answer2={item.answer2}
          answer3={item.answer3}
          answer4={item.answer4}
          li1={item.li1}
          li2={item.li2}
          li3={item.li3}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </section>
  );
};

export default Accordion;
