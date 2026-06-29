import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "View menu", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Customer service", href: "#" },
];

export default async function AdminLogin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <>
      {/* Header (public) */}
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

          <div className="flex items-center gap-8">
            {/* Desktop nav */}
            <nav className="hidden md:flex md:items-center md:gap-8">
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

            {/* Log out */}
            <form action="/api/admin/logout" method="POST">
              <button
                type="submit"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-semibold text-neutral-900">Admin Login</h1>

        <form
          action="/api/admin/login"
          method="POST"
          className="mt-8 flex max-w-sm flex-col gap-4"
        >
          {error && (
            <p
              role="alert"
              className="rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              Invalid username or password.
            </p>
          )}

          <label className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
            Username
            <input
              type="text"
              name="username"
              autoComplete="username"
              required
              className="rounded border border-neutral-300 px-3 py-2 text-base text-neutral-900 focus:border-neutral-500 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium text-neutral-800">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="rounded border border-neutral-300 px-3 py-2 text-base text-neutral-900 focus:border-neutral-500 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-2 rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Log in
          </button>
        </form>
      </main>

      {/* Footer (public) */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/logo-marley-spoon.svg"
              alt="Marley Spoon"
              width={143}
              height={30}
            />
            <nav className="flex flex-wrap gap-6">
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                About us
              </Link>
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-neutral-700 hover:underline">
                Ingredient Hub
              </Link>
            </nav>
          </div>
          <p className="mt-6 border-t border-black/10 pt-6 text-sm text-neutral-500">
            2026 © MMM Consumer Brands Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
