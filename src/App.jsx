import { useContext } from "react";
import "./App.css";
import { ImagesContext } from "./ImagesContext";
import Products from "./Products";

function App() {
  const { images } = useContext(ImagesContext);
  return (
    <>
      <div>Images from DB</div>
      <div>
        {images.map((product) => (
          <Products key={product.key} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
