type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  const payload = (await request
    .json()
    .catch(() => null)) as ContactPayload | null;

  if (
    !payload?.name ||
    !payload.email ||
    !payload.message ||
    !isEmail(payload.email)
  ) {
    return new Response(
      JSON.stringify({
        error: "Please provide a valid name, email, and message.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  // Add Resend / Postmark / SendGrid here when ready.
  // Keep server-side so provider keys never reach the browser.
  console.info("Contact inquiry received", {
    name: payload.name,
    email: payload.email,
    company: payload.company ?? "",
    message: payload.message.slice(0, 2000),
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
