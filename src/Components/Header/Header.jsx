// import bg from "../assets/images/flintro.jpg";
import bg from "../../assets/images/hero.png";

const Header = () => {
  return (
    <section className="w-full relative h-40 p-4 mt-80 flex justify-around items-center" id="home">
      <div className="w-1/4  rounded-full">
        <img src={bg} alt="intro" className=""></img>
      </div>
      <div className="head w-3/5 p-8 flex items-center justify-center shadow-lg">
        <h1 className="text-xl tracking-widest text-white font-semibold">
          Welcome to our vibrant online gallery, where visual storytelling comes
          to life. Immerse yourself in a curated collection of captivating
          images that span the spectrum of artistry, culture, and emotion. From
          breathtaking landscapes to evocative portraits, our platform is a
          celebration of creativity captured in pixels. Explore, be inspired,
          and embark on a visual journey through the lens of talented
          photographers from around the world. This is more than a collection;
          it's an invitation to see the world through a myriad of perspectives.
          Welcome to a world of images that speak louder than words.
        </h1>
      </div>
    </section>
  );
};

export default Header;