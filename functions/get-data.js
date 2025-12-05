// get-data.js

import { isAdminAuthenticated } from "./auth.js";

export async function onRequestGet({ request, env }) {
  // Protect route
  if (!isAdminAuthenticated(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Fetch all items from KV
  const list = await env.LOGIN_DATA.list();
  const results = [];

  for (const key of list.keys) {
    const item = await env.LOGIN_DATA.get(key.name, "json");
    if (item) results.push(item);
  }

  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" }
  });
}
