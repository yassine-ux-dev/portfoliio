import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="absolute z-30 w-full flex items-center px-11 xl:px-0 wl:h-[0px]">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 my-1 sm:my-0">
=======
    <header className="relative md:absolute z-30 w-full flex items-center px-4 xl:px-0">
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-y-6 py-2 md:py-4 lg:py-8 my-1 sm:my-0">
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
          <Link href={"/"}>
            <h1>
              <b>./Y@s</b>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
