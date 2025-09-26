// icons
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
} from "react-icons/hi2";
import { MdTimeline } from "react-icons/md"; // Importing MdTimeline from 'md' icons

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "#about", icon: <HiUser /> },
  {
    name: "Education",
    path: "#experience",
    icon: <MdTimeline />,
  },
  { name: "project", path: "#project", icon: <HiRectangleGroup /> },
  {
    name: "Contact",
    path: "#contact",
    icon: <HiChatBubbleBottomCenterText />,
  },
];

import Link from "next/link";

import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center 
      gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[3%] z-50 top-0
      w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center  justify-between
        xl:justify-between gap-y-10 px-4 md:px-40 
        xl:px-0 h-[60px] xl:h-max py-8 bg-white/10 backdrop-blur-sm 
        text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute  left-14 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
