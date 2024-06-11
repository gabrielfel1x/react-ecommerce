import banner from "../assets/teste.png";

const Banner = () => {
  return (
    <div className="container mt-32 w-full">
      <div className="flex items-center justify-center w-full">
        <div
          className="h-[200px] md:h-[260px] bg-cover bg-center w-full rounded-xl p-8 md:p-16 relative"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <p className="text-primary text-3xl font-bold z-10">Products Tiave</p>
          <a
            href="#"
            className="mt-6 bg-primary text-white w-[120px] h-[40px] flex items-center justify-center rounded-md hover:text-primary hover:bg-white transition-all duration-200 font-medium z-10"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
