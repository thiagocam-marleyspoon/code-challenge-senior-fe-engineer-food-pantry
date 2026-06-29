import { NextResponse } from "next/server";

const CREDENTIALS: Record<string, { password: string; role: "user" | "admin" }> = {
  user: { password: "password", role: "user" },
  admin: { password: "admin", role: "admin" },
};

export async function POST(request: Request) {
  const form = await request.formData();
  const username = String(form.get("username") ?? "");
  const password = String(form.get("password") ?? "");

  const account = CREDENTIALS[username];

  if (!account || account.password !== password) {
    return NextResponse.redirect(
      new URL("/admin/login?error=1", request.url),
      303,
    );
  }

  const session = { user: username, role: account.role };

  const response = NextResponse.redirect(
    new URL("/admin/manage", request.url),
    303,
  );

  response.cookies.set("session", JSON.stringify(session), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
