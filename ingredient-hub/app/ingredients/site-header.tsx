import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "View menu", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Customer service", href: "#" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#" aria-label="Home" className="flex items-center">
          <Image
            src="/logo-marley-spoon.svg"
            alt="Marley Spoon"
            width={143}
            height={30}
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-800 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
