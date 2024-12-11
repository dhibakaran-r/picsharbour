import "../../css/Style.css";
import "../../css/Category.css";
import img1 from "../../images/Animal2.jpg";
import img2 from "../../images/Nature.jpg";
import img3 from "../../images/motor.jpg";
import img4 from "../../images/birds.jpg";
import img5 from "../../images/Fantasy.jpg";
import img6 from "../../images/Digital.jpg";
import img7 from "../../images/Planet2.jpg";
import img8 from "../../images/flower.jpg";
import Morebtn from "../../utils/Morebtn";

const Category = () => {
  const categoryDatas = [
    {
      category: "Nature",
      pic: img2,
      quots:
        "Look deep into nature, and then you will understand everything better.",
    },

    {
      category: "Animals",
      pic: img1,
      quots:
        "Animals are the bridge between us and the beauty of all that is natural.",
    },

    {
      category: "Birds",
      pic: img4,
      quots:
        "Birds remind us that every departure can lead to a beautiful destination.",
    },

    {
      category: "Flowers",
      pic: img8,
      quots: "A garden is a love song, composed by flowers.",
    },

    {
      category: "Motors",
      pic: img3,
      quots: "Energize your journey with the spirit of motors.",
    },

    {
      category: "Fantasy",
      pic: img5,
      quots:
        "Dive into the fantastical; let your mind be the portal to otherworldly wonders.",
    },

    {
      category: "Digital",
      pic: img6,
      quots:
        "In the realm of technology, innovation is the heartbeat of progress.",
    },

    {
      category: "Planets",
      pic: img7,
      quots: "In the dance of the spheres, each planet has a unique rhythm.",
    },
  ];
  return (
    <section className="section Category-container" id="category">
      <div className="heading">
        <h1 className="title">Category</h1>
        <h4 className="title-tag">"In every picture, a thousand emotions."</h4>
      </div>

      <div className="Category">
        {categoryDatas.map((categoryDatas) => (
          <div className="images category-image" id={categoryDatas.category}>
            <img src={categoryDatas.pic} alt="Picture" className="image"></img>
            <div className="overlay">
              <h2 className="tag">{categoryDatas.category}</h2>
              <span className="quots quotseff color">
                <blockquote>{categoryDatas.quots}</blockquote>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="aligh-more">
        <Morebtn />
      </div>
    </section>
  );
};

export default Category;
