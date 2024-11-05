"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <header className="p-4">
      <nav className="flex items-center justify-center gap-4">
        <Link
          className={pathname === "/" ? "font-bold text-red-500" : ""}
          href="/"
        >
          Home
        </Link>
        <Link
          className={pathname === "/about" ? "font-bold text-red-500" : ""}
          href="/about"
        >
          About
        </Link>
        <Link
          className={pathname === "/notes" ? "font-bold text-red-500" : ""}
          href="/notes"
        >
          Notes
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
