import "./App.css";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Picture from "./Components/Picture/Picture";
import Category from "./Components/Category/Category";
import Explore from "./Components/Explore/Explore";
import Gallery from "./Components/Gallery/Gallery";
import Slider from "./Components/Slider/Slider";
import Workspace from "./Components/Workspace";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Nav />
      <Header />
      {/* <Picture /> */}
      {/* <Slider /> */}
      {/* <Category /> */}
      {/* <Explore /> */}
      {/* <Gallery /> */}
      {/* <Workspace /> */}
    </div>
  );
}

export default App;
