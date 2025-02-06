import Accordion from "./../components/accordion/Accordion.jsx";
import Banner from "./../components/banner/Banner.jsx";
import BannerBottles from "./../components/banner/BannerBottles.jsx";
import BannerCertificate from "./../components/banner/BannerCertificate.jsx";
import BannerConsultancy from "./../components/banner/BannerConsultancy.jsx";
import Blogs from "./../components/blogs/Blogs.jsx";
import Brands from "./../components/brands/Brands.jsx";
import Category from "./../components/category/Category.jsx";
import Contacts from "./../components/contacts/Contacts.jsx";
import Hero from "./../components/hero/Hero.jsx";
import Introduction from "./../components/introduction/Introduction.jsx";
import Questions from "./../components/questions/Questions.jsx";
import YandexMap from "./../components/map/YandexMap.jsx";

const Home = (props) => {
  return (
    <section className="px-3 sm:px-0 my-5">
      {/* <div className="container py-2"> */}
      <Introduction themeHandler={props.themeHandler} theme={props.theme} />
      <Hero />
      <Accordion />
      <BannerConsultancy />
      <Blogs />
      <BannerBottles />
      <BannerCertificate
        themeHandler={props.themeHandler}
        theme={props.theme}
      />
      <Brands />
      <Contacts />
      <YandexMap />
      <br />

      {/* 
        <Popup orderPopup={orderPopup} orderPopupHandler={orderPopupHandler} /> */}
      {/* </div> */}
    </section>
  );
};
export default Home;
