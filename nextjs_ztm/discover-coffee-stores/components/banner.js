import styles from './banner.module.css';

const Banner = ({buttonText, onClick}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.titl1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Banner;
