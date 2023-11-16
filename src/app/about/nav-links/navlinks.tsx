"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "about", href: "/about", icon: HomeIcon },
  {
    name: "proyect",
    href: "/about/proyect",
    icon: DocumentDuplicateIcon,
  },
  { name: "Home", href: "/", icon: UserGroupIcon },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-cenetr justify-center gap-2 rounded-md bg-gray-50 p-3 text-sn font-medium hover:bg-sky-100 hover:text-violet-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === link.href ? "bg-sky-100 text-violet-600" : ""
            }`}
          >
            <LinIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
