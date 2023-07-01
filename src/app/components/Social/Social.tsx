import { BiLogoInstagramAlt, BiLogoFacebook, BiDownload } from "react-icons/bi";
import styles from "./social.module.css";

const Social = () => (
  <div className={styles.social}>
    <BiLogoInstagramAlt size={35} color={"white"} />
    <BiLogoFacebook size={35} color={"white"} />
    <BiDownload size={35} color={"white"} />
  </div>
);

export default Social;
