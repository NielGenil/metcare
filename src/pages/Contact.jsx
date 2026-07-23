import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { useRef } from "react";
import { FaEnvelope } from "react-icons/fa6";
import { CgLock } from "react-icons/cg";
import { FaClock } from "react-icons/fa";

function Contact() {
  const turnstileRef = useRef();
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "You've sent too many messages. Please wait a few minutes and try again.",
          );
        }

        throw new Error(data.message || "Something went wrong.");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setWebsite("");

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
    <section className="pb-24">
      <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <SectionHeader
          title="Let's Discuss Your Healthcare Equipment Needs"
          description="Have questions or need a quotation? Send us a message and our team will get back to you as soon as possible."
        />
      </section>

      <div className="overflow-hidden shadow-sm mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.0840866595327!2d121.07457169999999!3d14.306546899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d79898932e1f%3A0x1e0676f1660ced59!2sMETCARE%20Biomedical%20Corporation!5e0!3m2!1sen!2sph!4v1784788020003!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="MetCare Location"
        />
      </div>

      <Container>
        {/* Contact Information */}

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div className="sm:mt-15 space-y-12">
            <SectionHeader
              badge="Contact Us"
              title="We Offer 24/7 Emergency Service To All of Our Customers"
              description="Because healthcare never stops, neither do we. Our dedicated biomedical team is available around the clock to respond to urgent service calls, equipment breakdowns, and critical technical issues. With fast response times and expert care, we make sure your medical equipment is always ready when lives depend on it."
              center={false}
            />
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <FaEnvelope className="text-emerald-600 text-xl" />
                  <h2 className="text-lg font-semibold">Email</h2>
                </div>
                <p className="text-emerald-600">metcare.biomedical@gmail.com</p>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <FaClock className="text-emerald-600 text-xl" />
                  <h2 className="text-lg font-semibold">Open Hours</h2>
                </div>
                <p className="">Mon-Sat: 8am-5pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
              label="Number"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. XXX-XXXX-XXX"
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
              style={{
                width: 50,
                transform: "scale(0.9)",
                transformOrigin: "left top",
              }}
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
