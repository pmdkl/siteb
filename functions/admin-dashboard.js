// functions/admin-dashboard.js

import { isAdminAuthenticated } from "./auth.js";

export async function onRequestGet(context) {
  if (!isAdminAuthenticated(context.request)) {
    return Response.redirect("/admin-login.html", 302);
  }

  const url = new URL("/admin-dashboard.html", context.request.url);

  return context.env.ASSETS.fetch(url.toString());
}

