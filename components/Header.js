import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-11 xl:px-0 wl:h-[0px]">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 my-1 sm:my-0">
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
