import React from "react";

import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

const links: SocialLink[] = [
  { icon: SiGithub, href: "https://github.com/ezsinehan" },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/sinehan-ezhilmuthu-481473261/",
  },
  { icon: SiDiscord, href: "https://discord.dog/332579582492540939" },
  { icon: SiInstagram, href: "https://www.instagram.com/sinehann/" },
];

const Socials = () => {
  return (
    <div className="mt-4 flex items-center justify-center space-x-8">
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <link.icon className="h-9 w-9 transition-opacity hover:opacity-75" />
        </Link>
      ))}
      <Link href="mailto:ezsinehan@gmail.com">
        <EmailIcon />
      </Link>
    </div>
  );
};

function EmailIcon() {
  return (
    <svg
      className="h-8 w-8 text-foreground transition-opacity hover:opacity-75"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <title>Email</title>
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  );
}

export default Socials;
