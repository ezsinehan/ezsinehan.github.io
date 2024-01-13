"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGlovo } from "@icons-pack/react-simple-icons";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black text-white z-10 bg-opacity-90">
      <div className="container mx-auto p-4 items-center flex justify-between">
        <div className="flex items-center space-x-4 ">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src="/favicon.ico" alt="Profile" width={50} height={50} />
          </div>
          <Link
            href="https://www.google.com/search?q=Sinehan+Ezhilmuthu&sca_esv=596100147&sxsrf=AM9HkKlcgGnMNq0C1zT9rWs0n_MZjF5k_g:1704501665504&ei=oaGYZdGsHr3GkPIPi4mH8AQ&ved=0ahUKEwiRgarCw8eDAxU9I0QIHYvEAU4Q4dUDCBA&uact=5&oq=Sinehan+Ezhilmuthu&gs_lp=Egxnd3Mtd2l6LXNlcnAiElNpbmVoYW4gRXpoaWxtdXRodTIEECMYJ0joElCPAljhEHABeACQAQCYAZgBoAGIBKoBAzMuMrgBA8gBAPgBAcICCBAAGIAEGKIE4gMEGAEgQYgGAQ&sclient=gws-wiz-serp"
            className="text-lg font-mono hover:opacity-50"
          >
            Sinehan Ezhilmuthu
          </Link>
        </div>
        <Link
          href="https://www.google.com/search?q=united+states,+california&sourceid=chrome&ie=UTF-8"
          className="text-lg font-mono flex items-center hover:opacity-50"
        >
          <SiGlovo className="mr-1 " />
          United States, California
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <hr className="border-t-1 border-gray-300 w-2/3" />
      </div>
    </header>
  );
};

export default Header;
