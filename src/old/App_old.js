import { useState } from "react";
const imageData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1672603030563-a848041c4d74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1584306758710-7b452b379187?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1521287329847-ec334c5517fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

const App = () => {
  const [image, setImage] = useState(imageData);
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
    <div>
      <img width="450" height="500"  src={image[index].url} alt="Random İmage" />
      <div>
      <button onClick={handleLeft}>Önceki</button>
      <button onClick={handleRight}>Sonraki</button>
      </div>
    </div>
  );
};
export default App;
