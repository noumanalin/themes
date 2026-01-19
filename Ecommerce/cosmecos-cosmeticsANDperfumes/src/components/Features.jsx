import AppLink from "./AppLink";

const Features = () => {
  return (
    <section aria-label="Our Features" id="features" className="wrapper py-15">
      
      {/* 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10 items-center">
        <article className="flex flex-col justify-center md:w-[80%] text-center md:text-left">
          <h2 className="font-stylish text-2xl md:text-3xl text-[var(--primary)]">Features</h2>
          <h2 className="text-3xl md:text-4xl font-light uppercase">
            Pre-built shop layouts for your digital storefront
          </h2>
          <p className="text-[var(--secondary)] mb-12 mt-2">
            Our templates include ready-made commerce layouts designed for seamless
            online shopping. You can quickly adapt and activate your digital
            storefront without delay.
          </p>
          <div>
            <AppLink>EXPLORE PAGES</AppLink>
          </div>
        </article>

        <figure className="w-full flex justify-center md:justify-end">
          <img
            src="/feature-banner.jpg"
            loading="lazy"
            alt="E-commerce store preview"
            className="w-[80%] h-auto"
          />
        </figure>
      </div>

      {/* 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10 items-center">
        <figure className="w-full flex justify-center md:justify-end">
          <img
            src="/feature-banner-2.jpg"
            loading="lazy"
            alt="Page builder preview"
            className="w-[80%] h-auto"
          />
        </figure>

        <article className="flex flex-col justify-center md:w-[80%] text-center md:text-left">
          <h2 className="font-stylish text-2xl md:text-3xl text-[var(--primary)]">Features</h2>
          <h2 className="text-3xl md:text-4xl font-light uppercase">
            Visual editor with extensive component library
          </h2>
          <p className="text-[var(--secondary)] mb-12 mt-2">
            Create impressive pages effortlessly using our intuitive editor. Access a
            comprehensive collection of modular elements, modify arrangements, and
            craft attractive sections without programming.
          </p>
          <div>
            <AppLink>EXPLORE PAGES</AppLink>
          </div>
        </article>
      </div>

    </section>
  );
};

export default Features;