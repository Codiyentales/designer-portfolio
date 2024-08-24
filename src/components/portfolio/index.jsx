import PortfolioImgSrc from "../../assets/portfolio-image.svg";

const Portfolio = () => {
  return (
    <div id={"work"} className="py-6">
      <h1 className={"text-center text-2xl font-bold pb-12 lg:text-4xl"}>
        Latest work
      </h1>
      <div className={"flex flex-wrap gap-x-8 justify-center"}>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
      </div>
      <div className={"flex flex-wrap gap-x-8 justify-center"}>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
        <section className={" sm:w-4/12 md:w-3/12 my-4"}>
          <a
            className={"flex flex-col items-center justify-center"}
            href="https://www.dribbble.com/shots/popular"
            target="_blank"
          >
            <img
              src={PortfolioImgSrc}
              alt="portfolio image"
              className={"w-[60%] sm:w-[90%]"}
            />
            <p className={"text-md font-semibold pt-3 lg:text-xl"}>
              Project title
            </p>
            <p className={"text-sm pt-1 lg:text-md lg:text-semibold"}>UI/UX</p>
          </a>
        </section>
      </div>
    </div>
  );
};
export default Portfolio;
