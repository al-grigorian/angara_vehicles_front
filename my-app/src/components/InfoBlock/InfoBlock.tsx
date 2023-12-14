import styles from "./infoblock.module.scss";
import planeGif from "../../assets/icons/take-off.gif";

export const InfoBlock = () => {
  return (
    <div className={styles.infoblock}>
      <div className={styles.container}>
        <div className={styles.infoblock__title}>
          <div className={styles.infoblock__title_text}>Полетели</div>
          <img
            className={styles.infoblock__title_gif}
            src={planeGif}
            alt="sss"
          ></img>
        </div>
        <div className={styles.infoblock__subtitle}>
          Ищете свой собственный космический аппарат? Мы предлагаем широкий выбор
          ракетоносителей для любых потребностей и предпочтений. От небольших и простых
          до самых передовых и мощных, у нас есть ракетоносители, которые подойдут
          для любых задач.
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
