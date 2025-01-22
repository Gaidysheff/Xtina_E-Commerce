import Image from "../assets/shared/404.png";

const Error = () => {
  return (
    <section className="section h-[82vh]">
      <div className="container">
        <div className="flex justify-center my-5 md:my-[5rem]">
          <img
            className="h-[300px] md:h-[100%]"
            src={Image}
            alt="Page not found"
          />
        </div>
        <div className="text-center md:my-5">
          <h2 className="text-xl md:text-6xl text-blue-800 font-semibold my-5">
            У-у-упс! <br />
            Страница не найдена
          </h2>
          <p className="text-lg md:text-3xl text-blue-500">
            Не плачь! Это всего-то лишь навсего{" "}
            <span className="text-blue-800 font-semibold">ошибка 404</span>.
            Возможно ты допустил/а ошибку в адресной строке, либо сервер
            перегружен.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Error;
