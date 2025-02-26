import Image from "../assets/shared/constraction.png";
import { Link } from "react-router";
import Loader from "./../components/sharedUI/LoaderKest.jsx";

const About = () => {
  return (
    <section className="section h-[62vh] m-[3rem]" id="about">
      <div className="container flex-col justify-center">
        <div className="justify-self-center w-[250px] mb-8">
          <img src={Image} alt="" />
        </div>
        <Loader />
      </div>
    </section>
  );
};
export default About;
