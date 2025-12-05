//admin-logout.js

import { clearAdminCookie } from "./auth.js";

export async function onRequestGet() {
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": clearAdminCookie(),
      "Location": "/admin-login.html",
    },
  });
}

