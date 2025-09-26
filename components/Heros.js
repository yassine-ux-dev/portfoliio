import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between lg:px-16">
      {/* Grid container */}
      <div className="z-10 grid pt-15 md:pt-24 lg:pt-32 grid-cols-1 lg:grid-cols-2 min-h-screen items-center ">
        {/* Text Section */}
        <div className="flex col-span-2 place-self-center justify-between lg:flex-row md:flex-row flex-col flex-shrink ">
          <div className="col-span-1 place-self-center px-4 gap-2">
            <h1 className="name text-4xl  lg:text-4xl  md:text-2xl">
              𝐘𝐚𝐬𝐬𝐢𝐧𝐞 𝐁𝐞𝐧 𝐂𝐡𝐚𝐫𝐫𝐚𝐝𝐚
            </h1>
            <p className="w-full xl:max-w-xl mx-0 xl:mx-0  xl:px-0 mb-6 xl:mb-5  text-left">
              <b>
                Master&apos;s Research Student in Software Engineering at @ISIMM
                . Focused on web development, I enjoy coding and solving
                problems
              </b>
            </p>

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
          <div className="flex justify-center items-center  col-span-1">
            <div className="flex justify-center items-center flex-shrink  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]   relative">
              <div className=" box absolute left-1/2 transform -translate-x-1/2 sm:left-0 sm:translate-x-0  md:left-1/2 md:-translate-x-1/2 "></div>
            </div>
          </div>
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
