// import './Style.css'
// import './Gallery.css'
import img1 from "../../images/Animal.jpg";
import img2 from "../../images/London.jpg";
import img3 from "../../images/mountain.jpg";
import img4 from "../../images/solar.jpg";

const Gallery = () => {
  const galleryDatas = [
    {
      pic: img1,
      quots:
        "Gentle wanderer of the woods, the deer paints tranquility on the canvas of nature.",
    },

    {
      pic: img2,
      quots:
        "A city of endless charm, where the old and new collide in a harmonious dance.",
    },

    {
      pic: img3,
      quots:
        "In the presence of eternity, the mountains are as transient as the clouds.",
    },

    {
      pic: img4,
      quots:
        "The solar system, a celestial carousel where planets ride the rays of the sun.",
    },
  ];

  return (
    <section className="section  Gallery-container" id="Gallery">
      <div className="heading">
        <h1 className="title">Pictures</h1>
        <h4 className="title-tag">Frame the beauty you see</h4>
      </div>

      <div className="Gallery">
        {galleryDatas.map((galleryDatas) => (
          <div className="images">
            <img src={galleryDatas.pic} alt="Picture" className="image"></img>
            <div className="overlay">
              <span className="quots">
                <blockquote>{galleryDatas.quots}</blockquote>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
