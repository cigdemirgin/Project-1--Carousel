
import Carousel from "./Carousel";
import imageData from "../data/data";

const App = () => {
  return (
    <div className="carousel-container">
      <Carousel carouselData={imageData} />
    </div>
  );
};



export default App;
