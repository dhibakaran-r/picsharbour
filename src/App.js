import "./css/App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Picture from "./Components/Picture/Picture";
import Category from "./Components/Category/Category";
import Explore from "./Components/Explore/Explore";
import Gallery from "./Components/Gallery/Gallery";
import Slider from "./Components/slider/Slider";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Picture />
      <Slider />
      <Category />
      <Explore />
      {/* <Gallery /> */}
    </>
  );
}

export default App;
