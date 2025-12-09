import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="relative md:absolute z-30 w-full flex items-center px-4 xl:px-0">
      <div className=" container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-2 md:gap-y-6 py-2 md:py-4 lg:py-8 my-1 sm:my-0">
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
