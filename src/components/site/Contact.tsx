import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Solar Panel Cleaning",
  "Solar Panel Maintenance",
  "Animal / Bird Protection",
  "Leak Inspection",
  "Not sure — need advice",
];

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Enter a valid 10-digit phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.service) errors.service = "Select the service you need.";
  if (values.message.trim().length < 10)
    errors.message = "Tell us a little about your system (10+ characters).";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (invalid?: string) =>
    cn(
      "w-full rounded-sm border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold",
      invalid ? "border-destructive" : "border-border",
    );

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Request your free quote.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Send us a few details about your solar setup and what you need. Prefer to talk it
            through? Call and we will answer your questions directly.
          </p>

          <ul className="mt-9 space-y-5 border-t border-border pt-8">
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.7} />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Phone
                </span>
                <a href={PHONE_HREF} className="text-lg font-semibold text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.7} />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Service area
                </span>
                <span className="text-foreground">Across Texas</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.7} />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Quotes
                </span>
                <span className="text-foreground">Free, with no obligation</span>
              </span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-sm border border-border bg-card p-6 sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Jane Miller"
                className={fieldClass(errors.name)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="210-555-0134"
                className={fieldClass(errors.phone)}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={fieldClass(errors.email)}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-2 block text-sm font-semibold">
                Service needed
              </label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={(e) => update("service", e.target.value)}
                className={fieldClass(errors.service)}
                aria-invalid={!!errors.service}
              >
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Roughly how many panels, roof type, and what you've noticed."
                className={cn(fieldClass(errors.message), "resize-y")}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-charcoal px-6 py-3.5 text-sm font-bold text-background transition-colors hover:bg-charcoal/90 disabled:opacity-70"
            >
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "sending" ? "Sending…" : "Send My Request"}
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div aria-live="polite" className="mt-5">
            {status === "sent" && (
              <p className="flex items-start gap-2 rounded-sm bg-accent px-4 py-3 text-sm text-accent-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Thanks — your request is in. We&apos;ll reach out shortly. Need it sooner? Call{" "}
                {PHONE_DISPLAY}.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-start gap-2 rounded-sm bg-destructive/10 px-4 py-3 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                Please fix the highlighted fields and try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
