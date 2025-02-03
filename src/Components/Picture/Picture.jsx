import img1 from "../../assets/images/Animal.jpg";
import img2 from "../../assets/images/London.jpg";
import img3 from "../../assets/images/mountain.jpg";
import img4 from "../../assets/images/solar.jpg";

const Picture = () => {
  const pictureDatas = [
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
    <section className="section Picture-container" id="picture">
      <div className="heading">
        <h1 className="title">Pictures</h1>
        <h4 className="title-tag">Frame the beauty you see</h4>
      </div>

      <div className="Picture">
        {pictureDatas.map((pictureDatas) => (
          <div className="images framestyle">
            <img src={pictureDatas.pic} alt="collection" className="" />
            <div className="overlay">
              <span className="quots">
                <blockquote>{pictureDatas.quots}</blockquote>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  // normal method

  // return(
  //         <section className='Picture-container'>

  //             <div className='heading' id='picture'>
  //                     <h1 className='title'>Pictures</h1>
  //                     <h4 className='title-tag'>Frame the beauty you see</h4>
  //             </div>

  //             <div className='Picture'>

  //                 <div className='images'>
  //                     <img src={img1} alt='img1' className='image'></img>
  //                     <div className="overlay">
  //                     <span  className='quots'><blockquote>"Gentle wanderer of the woods, the deer paints tranquility on the canvas of nature."</blockquote></span>
  //                     </div>
  //                 </div>

  //                 <div className='images'>
  //                 <img src={img2} alt='img2' className='image'></img>
  //                 <div className="overlay">
  //                     <span  className='quots'><blockquote>"A city of endless charm, where the old and new collide in a harmonious dance."</blockquote></span>
  //                     </div>
  //                 </div>

  //                 <div className='images'>
  //                 <img src={img3} alt='img3' className='image'></img>
  //                 <div className="overlay">
  //                     <span  className='quots'><blockquote>"In the presence of eternity, the mountains are as transient as the clouds."</blockquote></span>
  //                     </div>
  //                 </div>

  //                 <div className='images'>
  //                 <img src={img4} alt='img4' className='image'></img>
  //                 <div className="overlay">
  //                     <span  className='quots'><blockquote>"The solar system, a celestial carousel where planets ride the rays of the sun."</blockquote></span>
  //                     </div>
  //                 </div>

  //             </div>
  //         </section>
  //     )
};

export default Picture;
