import bg from "../../assets/images/Ocean.jpg";
import image from "../../assets/images/image.jpg";
import wallpaper from "../../assets/images/wallpaper.jpg";
import background from "../../assets/images/background.jpg";
import { GiArmoredBoomerang } from "react-icons/gi";

const Explore = () => {
  const exploreDatas = [
    {
      title: "Image",
      pic: image,
      description:
        "An image is a visual representation or depiction of an object, scene, concept, or idea. It is a two-dimensional representation of visual information that can be perceived by the human eye. Images can take various forms, including photographs, illustrations, paintings, or digital graphics, and they play a crucial role in conveying information, emotions, and aesthetics. In digital contexts, images are often composed of pixels, with each pixel contributing to the overall visual content.",
      class: "explore-image-1",
    },

    {
      title: "Wallpaper",
      pic: wallpaper,
      description:
        "A wallpaper, in a general context, refers to a decorative background displayed on a computer screen or other electronic device. It's the graphical image or pattern that serves as the backdrop to the user interface. Wallpapers are customizable, allowing users to personalize their devices with images, designs, or patterns of their choice. They enhance the visual aesthetics of the screen and provide a means for users to express their preferences and style.",
      class: "explore-image-2",
    },

    {
      title: "Background",
      pic: background,
      description:
        "In a visual or design context, the background refers to the area or space behind the main elements of a composition. It serves as the backdrop against which other elements, such as text, images, or graphics, are positioned. The background is crucial for setting the overall tone and atmosphere of a design. It can be a solid color, a gradient, an image, or any other visual element that complements or contrasts with the foreground elements. Effective use of background enhances the overall visual appeal and helps convey the intended message or theme of the design.Birds remind us that every departure can lead to a beautiful destination.",
      class: "explore-image-1",
    },

    // {
    //     "category":"Flowers",
    //     "pic":"",
    //     "quots":"A garden is a love song, composed by flowers."
    // },

    // {
    //     "category":"Motors",
    //     "pic":"",
    //     "quots":"Energize your journey with the spirit of motors."
    // },

    // {
    //     "category":"Fantasy",
    //     "pic":"",
    //     "quots":"Dive into the fantastical; let your mind be the portal to otherworldly wonders."
    // },

    // {
    //     "category":"Digital",
    //     "pic":"",
    //     "quots":"In the realm of technology, innovation is the heartbeat of progress."
    // },

    // {
    //     "category":"Planets",
    //     "pic":"",
    //     "quots":"In the dance of the spheres, each planet has a unique rhythm."
    // },
  ];
  return (
    <section className="section Explore-container" id="explore">
      <div className="explore-bg">
        <img src={bg} alt="Background"></img>

        <div className="heading explore-head">
          <h1 className="title">Explore</h1>
          <h4 className="title-tag explore-tag">
            "Exploration is the compass of the curious."
          </h4>
        </div>

        <div className="explore-details">
          <p>
            Embark on a visual odyssey through our captivating picture gallery.
            Dive into a world where each image is a story waiting to be told.
            From stunning landscapes to intimate portraits, our collection
            invites you to explore the diverse tapestry of human experiences and
            the beauty that surrounds us. Uncover inspiration, share in the joy
            of creativity, and lose yourself in the artistry of our carefully
            curated gallery. Welcome to a journey where every click opens a
            window to a new perspective-explore, indulge, and let the pictures
            speak.
          </p>
        </div>
      </div>
      <div className="Explore">
        <div className="sub-head">
          <h2>Explore a multitude of genres according to your preferences</h2>
        </div>
        {exploreDatas.map((exploreDatas) => (
          //  id={exploreDatas.title}
          <div className={exploreDatas.class}>
            <div className="block-image framestyle">
              <img
                src={exploreDatas.pic}
                alt="Picture"
                className="explore-images"
              ></img>
            </div>

            <div className="lines">
              <h2 className="line-heading">{exploreDatas.title}</h2>
              <p className="line-body">{exploreDatas.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='see-more'>
            <a href='#' className='more-btn'>see more <GiArmoredBoomerang/> </a>
        </div>         */}
    </section>
  );
};

export default Explore;
