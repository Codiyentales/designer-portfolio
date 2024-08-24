import TestimonialImgSrc from "../../assets/codiyen.png";

const Testimonials = () => (
  <div>
    <h1 className={"text-center text-2xl font-bold pb-12 lg:text-4xl"}>
      Testimonials
    </h1>
    <div className={"flex flex-col sm:flex-row sm:justify-center gap-x-8 mx-1"}>
      <section
        className={
          "md:w-3/12 sm:w-1/2 w-full flex flex-col bg-[#F3F3F3] rounded-xl px-4 pt-6 pb-4 mb-4 md:text-xl"
        }
      >
        <p className={"font-medium pb-4"}>
          From initial concept to final product, she handled every visual aspect
          of our project, from developing prototypes, refining designs, and
          supporting us all the way to launch.
        </p>

        <div className={"flex flex-col items-center sm:flex-row py-2 gap-x-4"}>
          <div>
            <img
              className={"w-12 rounded-full"}
              src={TestimonialImgSrc}
              alt="testimonial author"
            />
          </div>
          <div className={"flex flex-col pt-4 sm:pt-0"}>
            <p className={"font-semibold text-sm"}>Don Joe</p>
            <p className={"text-sm text-center sm:self-start"}>Google</p>
          </div>
        </div>
      </section>
      <section
        className={
          "md:w-3/12 sm:w-1/2 w-full flex flex-col bg-[#F3F3F3] rounded-xl px-4 pt-6 pb-4 mb-4 md:text-xl"
        }
      >
        <p className={"font-medium pb-4"}>
          From initial concept to final product, she handled every visual aspect
          of our project, from developing prototypes, refining designs, and
          supporting us all the way to launch.
        </p>

        <div className={"flex flex-col items-center sm:flex-row py-2 gap-x-4"}>
          <div>
            <img
              className={"w-12 rounded-full"}
              src={TestimonialImgSrc}
              alt="testimonial author"
            />
          </div>
          <div className={"flex flex-col pt-4 sm:pt-0"}>
            <p className={"font-semibold text-sm"}>Don Joe</p>
            <p className={"text-sm text-center sm:self-start"}>Google</p>
          </div>
        </div>
      </section>
      <section
        className={
          "md:w-3/12 sm:w-1/2 w-full flex flex-col bg-[#F3F3F3] rounded-xl px-4 pt-6 pb-4 mb-4 md:text-xl"
        }
      >
        <p className={"font-medium pb-4"}>
          From initial concept to final product, she handled every visual aspect
          of our project, from developing prototypes, refining designs, and
          supporting us all the way to launch.
        </p>

        <div className={"flex flex-col items-center sm:flex-row py-2 gap-x-4"}>
          <div>
            <img
              className={"w-12 rounded-full"}
              src={TestimonialImgSrc}
              alt="testimonial author"
            />
          </div>
          <div className={"flex flex-col pt-4 sm:pt-0"}>
            <p className={"font-semibold text-sm"}>Don Joe</p>
            <p className={"text-sm text-center sm:self-start"}>Google</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);
export default Testimonials;
