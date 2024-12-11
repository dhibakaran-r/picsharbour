import "../../css/Style.css";
import "../../css/Picture.css";
import "../../css/slid.css";
import img1 from "../../images/galaxy-1.jpg";
import img2 from "../../images/London.jpg";
import img3 from "../../images/mountain.jpg";
import img4 from "../../images/solar.jpg";

const Slider = () => {
  const sliderDatas = [
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
    // <section className="section Picture-container" id="picture">
    //   <div className="heading">
    //     <h1 className="title">Pictures</h1>
    //     <h4 className="title-tag">Frame the beauty you see</h4>
    //   </div>

      <section class="carousel">
          <ol class="carousel__viewport">
          {sliderDatas.map((sliderDatas) => (
           <li class="carousel__slide">
           <div
             class="carousel__snapper"
             style={{
                backgroundImage: `url(${sliderDatas.pic})`
              }}
           ></div>
          </li>
        ))}
          </ol>
        </section>



    //   <div className="Picture">
    //     {sliderDatas.map((sliderDatas) => (
    //       <div className="images framestyle">
    //         <img src={sliderDatas.pic} alt="collection" className="" />
    //         <div className="overlay">
    //           <span className="quots">
    //             <blockquote>{sliderDatas.quots}</blockquote>
    //           </span>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Slider;
