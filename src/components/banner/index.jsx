import {
  PiBehanceLogo,
  PiDribbbleLogo,
  PiFacebookLogo,
  PiInstagramLogo,
} from "react-icons/pi";
import BannerImgSrc from "../../assets/banner-image.jpg";

import AdidasLogo from "../../assets/clients/adidas.svg";
import NikeLogo from "../../assets/clients/nike.svg";
import GoogleLogo from "../../assets/clients/google.svg";
import AppleLogo from "../../assets/clients/apple.svg";
import SamsungLogo from "../../assets/clients/samsung.svg";

const Banner = () => (
  <section id={"about"}>
    <section className={"flex flex-col sm:flex-row"}>
      <section className={"sm:w-7/12 p-16"}>
        <h3 className={"text-xl font-medium lg:text-2xl"}>
          Branding | User Experience
        </h3>
        <h1
          className={"text-3xl sm:text-4xl font-bold md:py-6 py-2 lg:text-6xl"}
        >
          Visual Designer
        </h1>
        <p className={"lg:text-xl"}>
          Visual Designer specializing in Branding, UI/UX and Graphic Design
        </p>
        <ul className={"flex text-3xl gap-x-7 mt-4 pt-2 lg:text-5xl "}>
          <li>
            <a href="https://www.dribbble.com/example" target={"_blank"}>
              <PiDribbbleLogo />
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/example" target={"_blank"}>
              <PiBehanceLogo />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/example" target={"_blank"}>
              <PiInstagramLogo />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/example" target={"_blank"}>
              <PiFacebookLogo />
            </a>
          </li>
        </ul>
      </section>
      <section className={"w-full sm:w-5/12 flex justify-center items-center"}>
        <img
          src={BannerImgSrc}
          alt="Banner image"
          className={"w-8/12 sm:w-[60%] rounded-full"}
        />
      </section>
    </section>
    <div className={"w-full flex justify-center items-center py-16"}>
      <section
        className={
          "flex flex-col gap-y-16 sm:flex-row px-8 justify-between items-center pt-16 w-[80%]"
        }
      >
        <img src={AdidasLogo} alt="adidas logo" />
        <img src={NikeLogo} alt="nike logo" />
        <img src={SamsungLogo} alt="samsung logo" />
        <img src={AppleLogo} alt="apple logo" />
        <img src={GoogleLogo} alt="google logo" />
      </section>
    </div>
  </section>
);

export default Banner;
