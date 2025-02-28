import Image from "../assets/shared/constraction.png";
import Loader from "./../components/sharedUI/LoaderKest.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userFormScheme = z.object({
  firstName: z.string().optional(),
  email: z.string().email(),
  profileUrl: z.string().url(),
  age: z.number().min(1),
  friends: z.array(z.string()),
  settings: z.object({
    isSubscribed: z.boolean(),
  }),
});

const Contacts = () => {
  const userForm = useForm({ resolver: zodResolver(userFormScheme) });

  return (
    <section className="section h-[62vh] m-[3rem]" id="about">
      <div className="container flex-col justify-center">
        {/* ========================================================= */}

        {/* ========================================================= */}
        {/* <div className="justify-self-center w-[250px] mb-8">
          <img src={Image} alt="" />
        </div>
        <Loader /> */}
      </div>
    </section>
  );
};

export default Contacts;
