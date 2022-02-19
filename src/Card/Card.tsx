import { FC } from "react";
import Styles from "./_.module.css";

interface Props {
  thumbnail?: string;
  title: string;
}

const Card: FC<Props> = ({ thumbnail = "", title = "" }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.thumbnail}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={Styles.cardDetails}>
        <div>
          <div className={Styles.cardTitle}>
            <p className={Styles.title} title={title}>
              {title}
            </p>
          </div>
          <div className={Styles.userDetails}></div>
        </div>
        <div className={Styles.socialProof}></div>
      </div>
    </div>
  );
};

export default Card;
