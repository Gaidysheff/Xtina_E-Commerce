import ContactThroughSocialNet from "./ContactThroughSocialNet";

const Contacts = () => {
  return (
    <section className="container" id="contacts">
      <div className="mt-10">
        <div
          className="text-lg 2xsm:text-xl xsm:text-2xl sm:text-4xl md:text-5xl 
          text-bold text-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Контакты
        </div>
        <div className="py-10">
          <ContactThroughSocialNet />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
