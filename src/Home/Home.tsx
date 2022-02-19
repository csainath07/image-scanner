import { useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { getAllImagesFromTab } from "utils/chrome";
import Card from "Card/Card";

import "./style.css";

const Home: FC = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<
    {
      url: string;
      alt: string;
    }[]
  >([]);

  useEffect(() => {
    getAllImagesFromTab(
      (
        images: {
          url: string;
          alt: string;
        }[]
      ) => setImages(images || [])
    );
  }, []);

  const onScan = (image: { url: string; alt: string }) => {
    navigate("scan", { state: image });
  };
  return (
    <div className="image-gallery">
      {images.map((img, index) => (
        <div className="images" key={index} onClick={() => onScan(img)}>
          <Card thumbnail={img.url} title={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default Home;
