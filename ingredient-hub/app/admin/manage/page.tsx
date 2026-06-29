import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navLinks = [{ label: "Manage Ingredients", href: "#" }];

type Session = { user: string; role: "user" | "admin" };

export default async function ManageIngredients() {
  const sessionCookie = (await cookies()).get("session");

  if (!sessionCookie) {
    redirect("/admin/login");
  }

  const session = JSON.parse(sessionCookie.value) as Session;
  const isAdmin = session.role === "admin";

  return (
    <>
      {/* Header (non-public / admin) */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#" aria-label="Admin" className="flex items-center">
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

      {/* Admin banner (sticky, directly below the header) */}
      {isAdmin && (
        <div className="sticky top-16 z-30 border-b border-emerald-200 bg-emerald-50">
          <div className="mx-auto max-w-6xl px-4 py-2 text-sm font-medium text-emerald-800 sm:px-6">
            Logged in as administrator
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        {isAdmin ? (
          <h1 className="text-2xl font-semibold text-neutral-900">
            Manage Ingredients
          </h1>
        ) : (
          <p className="text-2xl font-semibold text-neutral-900">
            403 Forbidden
          </p>
        )}
      </main>

      {/* Footer (non-public / admin) */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
          <Image
            src="/logo-marley-spoon.svg"
            alt="Marley Spoon"
            width={143}
            height={30}
          />
          <p className="border-t border-black/10 pt-6 text-sm text-neutral-500">
            2026 © MMM Consumer Brands Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
