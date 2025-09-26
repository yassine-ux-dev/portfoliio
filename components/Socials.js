import Link from "next/link";
import {
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitterLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="social flex items-center gap-x-5 text-lg ">
      <Link
        href="https://x.com/yassinecha20173"
        className="hover:text-accent transition-all duration-300 "
      >
        <RiTwitterLine />
      </Link>
      <Link
        href="https://github.com/yassine-ux-dev"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yassine-charrada-2280172a2/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href="https://www.facebook.com/yassine.bc.71"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
