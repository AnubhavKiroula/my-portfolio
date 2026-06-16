import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = process.env.RESEND_API_KEY;

// Avoid build-time failure when env vars are not set.
// The API route will still error at runtime if the key is missing.
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// If the env var is missing, fail safely instead of throwing during build/collect.
// This prevents Next.js static build from crashing.
function assertResend() {
  if (!resend) {
    return Response.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }
  return null;
}

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    if (!resend) {
      return Response.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    // At this point TypeScript can safely treat resend as non-null.
    const resendClient = resend;

    const { data: resendData, error: resendError } = await resendClient.emails.send({
      from: "Porfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
