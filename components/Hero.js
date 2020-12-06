const Hero = () => (
  <>
    <div className="bg-gray-800 pb-44">
      <div className="relative max-w-7xl mx-auto pt-6 pb-6 flex justify-between max-md:flex-col max-md:justify-center max-md:items-center hero">
        <div className="flex justify-center flex-col">
          <h1 className="text-gray-200 text-3xl max-md:text-center font-bold">
            Blender Resources
          </h1>
          <h2
            style={{ maxWidth: "70%" }}
            className="text-gray-200 text-3xl max-md:text-center max-md:m-auto max-md:mb-4 max-sm:hidden"
          >
            curated list of resources to help your blender journey
          </h2>
        </div>
        <img src="/hero.png" className="hero-image" />
      </div>
    </div>
    <div className="relative">
      <div className="custom-shape-divider-bottom-1607292598">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </>
);

export default Hero;
