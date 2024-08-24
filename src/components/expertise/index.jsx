import ExpertiseImgSrc from "../../assets/expertise-image.svg";

const Expertise = () => {
  return (
    <div className={"flex flex-col sm:flex-row px-12 py-32 gap-y-24"}>
      <section
        className={
          "flex flex-col justify-center items-center sm:w-6/12 md:w-4/12 px-8"
        }
      >
        <img
          src={ExpertiseImgSrc}
          alt="expertise image"
          className={"w-[60%] lg:w-[40%]"}
        />
        <h3 className={"font-semibold text-2xl pt-8 text-center"}>Branding</h3>
        <p className={"text-center lg:text-xl"}>
          My designs bridge aesthetics and functionality, translating brand
          values into user-centric digital interactions that elevate the overall
          brand experience.
        </p>
      </section>
      <section
        className={
          "flex flex-col justify-center items-center sm:w-6/12 md:w-4/12 px-8"
        }
      >
        <img
          src={ExpertiseImgSrc}
          alt="expertise image"
          className={"w-[60%] lg:w-[40%]"}
        />
        <h3 className={"font-semibold text-2xl pt-8 text-center"}>UI/UX</h3>
        <p className={"text-center lg:text-xl"}>
          My designs bridge aesthetics and functionality, translating brand
          values into user-centric digital interactions that elevate the overall
          brand experience.
        </p>
      </section>
      <section
        className={
          "flex flex-col justify-center items-center sm:w-6/12 md:w-4/12 px-8"
        }
      >
        <img
          src={ExpertiseImgSrc}
          alt="expertise image"
          className={"w-[60%] lg:w-[40%]"}
        />
        <h3 className={"font-semibold text-2xl pt-8 text-center"}>
          Graphics Design
        </h3>
        <p className={"text-center lg:text-xl"}>
          My designs bridge aesthetics and functionality, translating brand
          values into user-centric digital interactions that elevate the overall
          brand experience.
        </p>
      </section>
    </div>
  );
};
export default Expertise;
