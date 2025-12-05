// functions/auth.js

export function setAdminCookie() {
  return "admin_auth=1; Path=/; HttpOnly; Secure; SameSite=Strict";
}

export function clearAdminCookie() {
  return "admin_auth=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0";
}

export function isAdminAuthenticated(request) {
  const cookie = request.headers.get("Cookie") || "";
  return cookie.includes("admin_auth=1");
}


// Middleware for protected GET routes
export async function protectRoute(context) {
  if (!isAdminAuthenticated(context.request)) {
    return Response.redirect("/admin-login.html", 302);
  }

  return context.next();
}
