import Image from "../assets/shared/constraction.png";
import { Link } from "react-router";
import Loader from "./../components/sharedUI/LoaderKest.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const About = () => {
  const mail = "test@email.ru";

  const mySchema = z.object({
    email: z.string().email(),
    // email: z.string().email().required("Email is required"),
    password: z.string().min(8),
    // .string()
    // .min(8, "Password must be at least 8 characters long")
    // .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: `${mail}` },
    resolver: zodResolver(mySchema),
    // reValidateMode: "onSubmit",
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", { message: "This email is already in use" });
    }
  };
  return (
    <section className="section h-[62vh] m-[3rem]" id="about">
      <div className="container flex-col justify-center">
        {/* ========================================================= */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2"
            {...register("email")}
            type="text"
            placeholder="email"
          />

          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}

          <input
            {...register("password")}
            type="password"
            placeholder="password"
            className="border-2"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}

          <button disabled={isSubmitting}>
            {isSubmitting ? "Loading" : "Submit"}
          </button>
        </form>
        {/* ========================================================= */}

        {/* <div className="justify-self-center w-[250px] mb-8">
          <img src={Image} alt="" />
        </div>
        <Loader /> */}
      </div>
    </section>
  );
};
export default About;
