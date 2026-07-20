import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useRef } from "react";

function Contact() {
  const turnstileRef = useRef();
  const [website, setWebsite] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          website,
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        throw new Error(
          "You've sent too many messages. Please wait a few minutes and try again.",
        );
      }

      throw new Error(data.message);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTurnstileToken("");

      turnstileRef.current?.reset();
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          badge="Contact Us"
          title="Let's Discuss Your Healthcare Equipment Needs"
          description="Have questions or need a quotation? Send us a message and our team will get back to you as soon as possible."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 text-slate-600">+63 912 345 6789</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-slate-600">info@metcare.com</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="mt-2 text-slate-600">
                Santa Rosa City, Laguna, Philippines
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-xl font-semibold">Business Hours</h3>
              <p className="mt-2 text-slate-600">Monday - Friday</p>

              <p className="text-slate-600">8:00 AM - 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border p-8 shadow-sm"
          >
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex="-1"
              className="hidden"
            />

            <Input
              disabled={isSubmitting}
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />

            <Input
              disabled={isSubmitting}
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />

            <Input
              disabled={isSubmitting}
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
            />

            <Textarea
              disabled={isSubmitting}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />

            <Turnstile
              ref={turnstileRef}
              disabled={isSubmitting}
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            />

            <Button
              type="submit"
              disabled={!turnstileToken || isSubmitting}
              className="w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-20"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
