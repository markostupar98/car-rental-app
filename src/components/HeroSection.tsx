import Image from "next/image";
import heroImage from "../../public/hero.webp";

const HeroSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 flex-1">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="mockup"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>
      <div className="relative flex items-center justify-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div className="text-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
            Drive Your Adventure, Rent with Ease
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
            Whether it's a quick getaway or a long road trip, our service makes
            renting a car easy and convenient, offering a wide selection of
            vehicles to suit your needs.
          </p>
          <div className="flex justify-center space-x-3">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Book a car
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
