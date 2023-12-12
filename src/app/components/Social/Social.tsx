import { BiLogoInstagramAlt, BiLogoFacebook, BiDownload } from "react-icons/bi";
import styles from "./social.module.css";

const Social = () => (
  <div className={styles.social}>
    <BiLogoInstagramAlt size={40} color={"#6041c4"} />
    <BiLogoFacebook size={40} color={"#6041c4"} />
    <BiDownload size={40} color={"#6041c4"} />
  </div>
);

export default Social;
