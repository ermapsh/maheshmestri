import { useState } from "react";
import {
  Send,
  Mail,
  Copy,
  Check,
  Phone,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";
import { personalInfo } from "../../data/portfolioData";

type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

type SubmissionStatus = "idle" | "sending" | "success" | "error";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  projectType: "Mobile App (React Native)",
  message: "",
};

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [form, setForm] = useState<ContactFormData>({ ...initialForm });

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      toast.success("Email address copied!");
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy email address:", error);
      toast.error("Unable to copy email address.");
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    const toastId = toast.loading("Sending your message...");
    event.preventDefault();

    if (status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Missing EmailJS configuration. Check VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY."
      );
      setStatus("error");
      toast.error("Email service is not configured. Please try again later.");
      return;
    }

    setStatus("sending");

    try {

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name.trim(),
          user_email: form.email.trim(),
          project_type: form.projectType,
          message: form.message.trim(),
        },
        { publicKey }
      );

      console.log("EmailJS success:", response.status, response.text);

      setForm({ ...initialForm });
      setStatus("success");

      toast.update(toastId, {
        render: "Message sent successfully! I'll get back to you soon.",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.error("EmailJS error:", error.status, error.text);
      } else {
        console.error("Unexpected EmailJS error:", error);
      }

      setStatus("error");

      toast.update(toastId, {
        render: "Failed to send your message. Please try again or email me directly.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Left column: Direct contact cards */}
      <div className="lg:col-span-2 space-y-6">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              Direct Contact
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Prefer direct email or phone? I typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            {/* Email card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-gray-500">
                    Email Address
                  </div>
                  <div className="text-sm font-medium text-white truncate">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone card */}
            <a
              href={personalInfo.socials.phone}
              className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] flex items-center justify-between gap-3 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-gray-500">
                    Direct / WhatsApp
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                    {personalInfo.phone}
                  </div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>

          <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Full NDA &amp; IP protection assured</span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Available for both contracts &amp; full-time roles</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right column: Contact form */}
      <div className="lg:col-span-3">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/[0.08] p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            Send a Message
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm mb-6">
            Send your project inquiry directly to my inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono uppercase tracking-wider text-gray-400"
                >
                  Your Name *
                </label>

                <input
                  id="contact-name"
                  name="user_name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="e.g. Alex Carter"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono uppercase tracking-wider text-gray-400"
                >
                  Your Email *
                </label>

                <input
                  id="contact-email"
                  name="user_email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="e.g. alex@company.com"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm"
                />
              </div>
            </div>

            {/* Project category */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-project"
                className="text-xs font-mono uppercase tracking-wider text-gray-400"
              >
                Project Category
              </label>

              <select
                id="contact-project"
                name="project_type"
                value={form.projectType}
                onChange={(event) =>
                  updateField("projectType", event.target.value)
                }
                className="w-full px-4 py-2.5 rounded-xl bg-gray-900 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 text-sm"
              >
                <option value="Mobile App (React Native)">
                  Mobile App (React Native / iOS / Android)
                </option>
                <option value="AI / Computer Vision (MediaPipe)">
                  AI / Computer Vision (MediaPipe)
                </option>
                <option value="Backend & Microservices (Spring Boot / Kafka)">
                  Backend &amp; Microservices (Spring Boot / Kafka)
                </option>
                <option value="Full-Stack Web & Next.js">
                  Full-Stack Web &amp; Next.js
                </option>
                <option value="Full-Time Engineering Role">
                  Full-Time Engineering Role
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono uppercase tracking-wider text-gray-400"
              >
                Message &amp; Overview *
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={4}
                placeholder="Describe your requirements, timeline, and current tech stack..."
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 text-sm resize-none"
              />
            </div>

            {/* Submit button: the form onSubmit handles submission */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 hover:from-purple-500 hover:to-cyan-400 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/25 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <Send className="w-4 h-4" />
              <span>
                {status === "sending"
                  ? "Sending Message..."
                  : status === "success"
                    ? "Send Another Message"
                    : status === "error"
                      ? "Try Again"
                      : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
