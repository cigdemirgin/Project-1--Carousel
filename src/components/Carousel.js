import { useState } from "react";

function Carousel({ carouselData }) {
    const [image, setImage] = useState(carouselData);
    const [index, setIndex] = useState(0);
  
    function handleRight() {
      const newRightIndex = index + 1;
      if (newRightIndex <= image.length - 1) {
        setIndex(newRightIndex);
      } else {
        setIndex(0);
      }
    }
  
    function handleLeft() {
      const newLeftIndex = index - 1;
      if (newLeftIndex >= 0) {
        setIndex(newLeftIndex);
      } else {
        setIndex(image.length - 1);
      }
    }
  
    return (
      <div >
        <img src={image[index].url} alt="Random İmage" />
        <div className="carousel-buttons">
          <button onClick={handleLeft}>Önceki</button>
          <button onClick={handleRight}>Sonraki</button>
        </div>
      </div>
    );
  }
  export default Carousel