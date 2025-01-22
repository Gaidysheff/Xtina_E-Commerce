import Image1 from "../../assets/hero/Dior_Sauvage.png";

const HeroData = [
  {
    id: 1,
    image: Image1,
    title: "Dior Sauvage Eau De Parfum",
    aroma1: "Свежий пряный",
    aroma2: "Цитрусовый",
    aroma3: "Амбровый",
  },
  {
    id: 2,
    image: Image1,
    title: "Dior Sauvage Eau De Parfum",
    aroma1: "Свежий пряный",
    aroma2: "Цитрусовый",
    aroma3: "Амбровый",
  },
  {
    id: 3,
    image: Image1,
    title: "Dior Sauvage Eau De Parfum",
    aroma1: "Свежий пряный",
    aroma2: "Цитрусовый",
    aroma3: "Амбровый",
  },
];

const Hero = () => {
  return (
    <div className="my-3">
      <div className="rounded-3xl bg-brandGreen/50 px-4 py-2">
        Слайдер лучших товаров или Новинок Слайдер лучших товаров или Новинок
      </div>
    </div>
  );
};

export default Hero;
