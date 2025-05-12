import logo from "../../assets/shared/Logo_black.svg";
import styles from "./LoaderKest.module.css";

const LoaderKest = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className={styles.loader}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default LoaderKest;
