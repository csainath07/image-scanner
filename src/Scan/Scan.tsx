import { FC, useEffect, useState } from "react";
import Card from "Card/Card";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Scan: FC = () => {
  const { state }: any = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const _fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              requests: [
                {
                  image: {
                    source: {
                      imageUri: state.url,
                    },
                  },
                  features: [{ type: "TEXT_DETECTION", maxResults: 5 }],
                },
              ],
            }),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        // handle error
        console.log("error", err);
      } finally {
        setLoading(false);
      }
    };

    //_fetchDetails();
  }, []);

  return (
    <div className="scan-page-container">
      <div>
        <Link to="/">Go Back</Link>
        <div className="selected-image">
          <Card thumbnail={state.url} title={state.alt} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Scan;
