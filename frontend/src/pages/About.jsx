import Image from "../assets/shared/constraction.png";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="section h-[62vh] m-[5rem]" id="about">
      <div className="container flex justify-center">
        <img src={Image} alt="" />
      </div>
    </section>
  );
};
export default About;
