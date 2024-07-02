import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/siezedeath" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/alfayed-alam-50a080160/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_alfyalam__/" }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
