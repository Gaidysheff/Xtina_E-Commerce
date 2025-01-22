import Banner from "./../components/banner/Banner.jsx";
import BannerCertificate from "./../components/banner/BannerCertificate.jsx";
import BannerConsultancy from "./../components/banner/BannerConsultancy.jsx";
import Blogs from "./../components/blogs/Blogs.jsx";
import Brands from "./../components/brands/Brands.jsx";
import Category from "./../components/category/Category.jsx";
import Contacts from "./../components/contacts/Contacts.jsx";
import Hero from "./../components/hero/Hero.jsx";
import InBrief from "./../components/inBrief/InBrief.jsx";
import Questions from "./../components/questions/Questions.jsx";

const Home = () => {
  return (
    <section className="px-3 sm:px-0 my-5">
      <div className="container py-2">
        <h2 className="text-md font-bold">Главная страница</h2>
        <InBrief />
        <Hero />
        <BannerConsultancy />
        <Category />
        <BannerCertificate />
        <Questions />
        <Banner />
        <Blogs />
        <Brands />
        <Contacts />
        {/* 
        <Popup orderPopup={orderPopup} orderPopupHandler={orderPopupHandler} /> */}
      </div>
    </section>
  );
};
export default Home;
