"use client";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { usePathname } from "next/navigation";
import styles from "./social.module.css";
import { FacebookShareButton, LinkedinShareButton } from "next-share";

const baseURL = "https://rewards.motivateaeducarte.com";

const Social = () => {
  const pathname = usePathname();

  return (
    <div className={styles.social}>
      <FacebookShareButton
        url={`${baseURL}${pathname}`}
        quote={"He completado una nueva tarea en Motivateaducarte"}
        hashtag={"#motivateaeducarte"}
      >
        <BiLogoFacebook size={40} color={"#6041c4"} />
      </FacebookShareButton>

      <LinkedinShareButton url={`${baseURL}${pathname}`}>
        <BiLogoLinkedin size={40} color={"#6041c4"} />
      </LinkedinShareButton>
    </div>
  );
};
export default Social;
