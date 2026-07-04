"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(1, "Business name is required"),
  phone: z.string().min(8, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Please select a service"),
  problem: z.string().min(10, "Briefly describe your current problem"),
  budget: z.string().optional(),
  contactMethod: z.enum(["email", "phone", "whatsapp"]),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { contactMethod: "email" },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    setStatus("loading");
    // TODO: implement API route or server action
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[var(--color-gold)]/30 bg-[var(--color-forest)]/50 p-8 text-center" role="status">
        <h3 className="text-xl font-semibold text-[var(--fg)]">Thank you!</h3>
        <p className="mt-2 text-[var(--muted)]">
          We have received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <input {...register("honeypot")} className="hidden" aria-hidden />

      {[
        { name: "name" as const, label: "Your Name", type: "text" },
        { name: "businessName" as const, label: "Business Name", type: "text" },
        { name: "phone" as const, label: "Phone or WhatsApp", type: "tel" },
        { name: "email" as const, label: "Email", type: "email" },
      ].map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-[var(--fg)]">
            {field.label} *
          </label>
          <input
            id={field.name}
            type={field.type}
            {...register(field.name)}
            aria-invalid={!!errors[field.name]}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
            className="w-full rounded border border-white/10 bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--color-gold)] focus:outline-none"
          />
          {errors[field.name] && (
            <p id={`${field.name}-error`} className="mt-1 text-xs text-red-400" role="alert">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-[var(--fg)]">
          Service Required *
        </label>
        <select
          id="service"
          {...register("service")}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="w-full rounded border border-white/10 bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] focus:border-[var(--color-gold)] focus:outline-none"
        >
          <option value="">Select a service</option>
          <option value="digital-presence">Digital Presence</option>
          <option value="websites-and-experiences">Websites and Experiences</option>
          <option value="business-systems">Business Systems</option>
          <option value="automation-and-strategy">Automation and Strategy</option>
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-xs text-red-400" role="alert">{errors.service.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="problem" className="mb-1 block text-sm font-medium text-[var(--fg)]">
          Current Business Problem *
        </label>
        <textarea
          id="problem"
          {...register("problem")}
          rows={4}
          aria-invalid={!!errors.problem}
          aria-describedby={errors.problem ? "problem-error" : undefined}
          className="w-full rounded border border-white/10 bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--color-gold)] focus:outline-none"
          placeholder="Describe your current workflow, challenges and what you need"
        />
        {errors.problem && (
          <p id="problem-error" className="mt-1 text-xs text-red-400" role="alert">{errors.problem.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="mb-1 block text-sm font-medium text-[var(--fg)]">
          Approximate Budget Range
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="w-full rounded border border-white/10 bg-[var(--bg)] px-4 py-3 text-sm text-[var(--fg)] focus:border-[var(--color-gold)] focus:outline-none"
        >
          <option value="">Prefer not to say</option>
          <option value="under-25k">Under ₹25,000</option>
          <option value="25k-50k">₹25,000 – ₹50,000</option>
          <option value="50k-1l">₹50,000 – ₹1,00,000</option>
          <option value="above-1l">Above ₹1,00,000</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-[var(--fg)]">
          Preferred Contact Method
        </legend>
        <div className="flex gap-4">
          {(["email", "phone", "whatsapp"] as const).map((method) => (
            <label key={method} className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <input
                type="radio"
                value={method}
                {...register("contactMethod")}
                className="accent-[var(--color-gold)]"
              />
              {method.charAt(0).toUpperCase() + method.slice(1)}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex items-start gap-2 text-xs text-[var(--muted)]">
        <input type="checkbox" required className="mt-0.5 accent-[var(--color-gold)]" />
        I agree to the processing of my data for this enquiry.
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request a Free Digital Audit"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400" role="alert">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
    </form>
  );
}
