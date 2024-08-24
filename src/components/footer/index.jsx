import {
  PiBehanceLogo,
  PiDribbbleLogo,
  PiFacebookLogo,
  PiInstagramLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer id={"contact"} className={"flex px-16 py-28 flex-col sm:flex-row"}>
      <section className={"sw:w-8/12 w-full"}>
        <h3 className={"text-2xl font-semibold text-[#2d2d2d] lg:text-4xl"}>
          Lets work together
        </h3>
        <p>
          Ready to bring your vision to life ? Let&apos;s collaborate on your
          next project.
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
      <section className={"sm:w-4/12 w-full flex justify-center items-center"}>
        <a href="mailto:codiyentales@gmail.com" target={"_blank"}>
          <button
            className={
              "h-[50px] w-[120px] sm:w-[160px] sm:h-[70px] bg-black text-white mt-8 hover:text-gray-200"
            }
          >
            Contact
          </button>
        </a>
      </section>
    </footer>
  );
};
export default Footer;
