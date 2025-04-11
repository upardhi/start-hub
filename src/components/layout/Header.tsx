import React from "react";
import { Home, Users, Settings } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const Header: React.FC = () => {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/users", label: "Users", icon: Users },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map(({ href, label, icon: Icon }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors 
                     
                      
                         hover:bg-gray-100 dark:hover:bg-gray-700
                    `}
                    aria-current={"page"}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
