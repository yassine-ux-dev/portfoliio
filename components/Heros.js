import ImageSection from "../components/ImageSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between lg:px-16">
      {/* Grid container */}
<<<<<<< HEAD
      <div className="z-10 grid pt-15 md:pt-24 lg:pt-32 grid-cols-1 lg:grid-cols-2 min-h-screen items-center ">
        {/* Text Section */}
        <div className="flex col-span-2 place-self-center justify-between lg:flex-row md:flex-row flex-col flex-shrink ">
          <div className="col-span-1 place-self-center px-4 gap-2">
            <h1 className="name text-4xl  lg:text-4xl  md:text-2xl ">
              𝐘𝐚𝐬𝐬𝐢𝐧𝐞 𝐁𝐞𝐧 𝐂𝐡𝐚𝐫𝐫𝐚𝐝𝐚
            </h1>
            <p className="w-full xl:max-w-xl mx-0 xl:mx-0  xl:px-0 mb-6 xl:mb-5  text-left">
=======
      <div className="z-10 grid pt-0 md:pt-20 lg:pt-20 grid-cols-1 lg:grid-cols-2 min-h-screen items-start md:items-center ">
        {/* Text Section */}
        <div className="flex col-span-2 place-self-start md:place-self-center justify-between lg:flex-row flex-col flex-shrink ">
          <div className="col-span-1 place-self-center px-4 flex flex-col gap-4 mt-0 md:mt-0">
            <h1 className="name text-4xl  lg:text-4xl  md:text-2xl ">
              𝐘𝐚𝐬𝐬𝐢𝐧𝐞 𝐁𝐞𝐧 𝐂𝐡𝐚𝐫𝐫𝐚𝐝𝐚
            </h1>
            <div className="w-full xl:max-w-xl mx-0 xl:mx-0  xl:px-0 mb-6 xl:mb-5  text-left">
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <span className=" text-gray-400 font-bold ">
                  Full Stack Developer.
                </span>{" "}
                I enjoy solving problems, learning new things, and experimenting
                with different technologies. When I'm not coding, I'm likely
                working on a side project or exploring something new.
              </p>
<<<<<<< HEAD
            </p>
=======
            </div>
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)

            <a
              href="/CV-YassineBenCharrada.pdf"
              download="CV-YassineBenCharrada"
              className="bg-[#d3e8d7] hover:bg-[#8f9e92] text-black rounded-2xl 
             w-[120px] h-[40px] md:w-[200px] md:h-[50px] xl:w-[200px] xl:h-[50px]
             flex items-center justify-center transition-colors duration-300"
            >
              <span className="flex items-center justify-center text-sm md:text-base font-semibold">
                Résumé
                <svg
                  className="w-4 h-4 ml-2 md:w-6 md:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 10V4a1 1 0 00-1-1H9.914a1 1 0 00-.707.293L5.293 7.207A1 1 0 005 7.914V20a1 1 0 001 1h12a1 1 0 001-1v-2M10 3v4a1 1 0 01-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Image Section */}
          <ImageSection />
        </div>

        {/* Mouse Scroll - Only on medium and up */}
        <div className="col-span-2 flex items-center justify-center sm:mt-[-100px] relative hidden md:flex">
          <a href="#about">
            <div className="mouse-scroll"></div>
          </a>
          <a href="#about">
            <span className="text-sm font-medium ml-2">Scroll Down</span>
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="dox flex justify-center items-center flex-col mt-10">
        <h2 className="text-4xl font-bold">Skills</h2>
        <span className="text-center">My technical skills</span>
      </div>
    </div>
  );
};

export default Home;
