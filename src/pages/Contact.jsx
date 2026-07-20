import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

function Contact() {
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong.");
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
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
            />

            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
            />

            <Turnstile
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken("")}
              onError={() => setTurnstileToken("")}
            />

            <Button disabled={!turnstileToken} type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
