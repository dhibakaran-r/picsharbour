// import React from "react";
import "../../css/Header.css";
import bg from "../../images/flintro.jpg";

const Header = () => {
  return (
    <section className="section intro" id="home">
      <div className="background">
        <img src={bg} alt="intro"></img>
      </div>
      <div className="head">
        <h1 className="content">
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
