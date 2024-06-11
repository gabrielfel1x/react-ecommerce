import img from "../assets/banner.png";

function Home() {
  return (
    <div className="bg-primary banner font-primary">
      <div className="py-8 px-48 grid md:grid-cols-2 w-full">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow">
            <h2 className="text-primary font-bold text-3xl md:text-4xl">
              The best of you!
            </h2>
            <h3 className="text-2xl font-semibold">
              Valentin's day special offer{" "}
              <span className="text-primary font-secondary font-medium">
                10% discount
              </span>
            </h3>
            <a
              href="#"
              className="inline-block bg-primary text-white rounded-md px-6 py-3 hover:bg-primaryHover transition-all duration-200"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="ml-auto">
          <img src={img} alt="" className="h-[280px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default Home;
