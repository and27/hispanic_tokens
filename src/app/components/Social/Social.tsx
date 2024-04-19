"use client";
import { BiLogoLinkedin, BiLogoFacebook, BiDownload } from "react-icons/bi";
import styles from "./social.module.css";
import { FacebookShareButton, LinkedinShareButton } from "next-share";

const baseURL = "https://hispanicgroup.com";

const Social = () => (
  <div className={styles.social}>
    <FacebookShareButton
      url={`${baseURL}/caroB10`}
      quote={"Mira mi nuevo logro"}
      hashtag={"#nextshare"}
    >
      <BiLogoFacebook size={40} color={"#6041c4"} />
    </FacebookShareButton>

    <LinkedinShareButton url={"https://github.com/next-share"}>
      <BiLogoLinkedin size={40} color={"#6041c4"} />
    </LinkedinShareButton>

    <FacebookShareButton
      url={`${baseURL}/caroB10`}
      quote={"Mira mi nuevo logro"}
      hashtag={"#nextshare"}
    >
      <BiDownload size={40} color={"#6041c4"} />{" "}
    </FacebookShareButton>
  </div>
);

export default Social;
