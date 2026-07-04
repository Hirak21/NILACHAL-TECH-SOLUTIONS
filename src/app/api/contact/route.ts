import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  businessName: z.string().min(1),
  phone: z.string().min(8),
  email: z.string().email(),
  service: z.string().min(1),
  problem: z.string().min(10),
  budget: z.string().optional(),
  contactMethod: z.enum(["email", "phone", "whatsapp"]),
  honeypot: z.string().max(0),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Format the submission for logging / email
    const submission = {
      timestamp: new Date().toISOString(),
      name: data.name,
      businessName: data.businessName,
      phone: data.phone,
      email: data.email,
      service: data.service,
      problem: data.problem,
      budget: data.budget || "Not specified",
      contactMethod: data.contactMethod,
    };

    // Log submission (replace with email service like Resend in production)
    console.log("=== New Contact Form Submission ===");
    console.log(JSON.stringify(submission, null, 2));
    console.log("===================================");

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    // await resend.emails.send({ ... });

    return NextResponse.json({
      ok: true,
      message: "Thank you! We will get back to you shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
