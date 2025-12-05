// functions/admin-login.js

import { setAdminCookie } from "./auth.js";

export async function onRequestPost({ request, env }) {
  const body = await request.json();
  const { username, password } = body;

  // Compare with environment variables
  if (username === env.ADMIN_USER && password === env.ADMIN_PASS) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": setAdminCookie()
      }
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 401,
    headers: { "Content-Type": "application/json" }
  });
}
