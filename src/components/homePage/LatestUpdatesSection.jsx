import { FaArrowRight, FaFacebook, FaFacebookF } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";

const FACEBOOK_PAGE_URL = import.meta.env.VITE_FACEBOOK_URL;

const FACEBOOK_EMBED_URL = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL,
)}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

export default function LatestUpdatesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="pb-10">
          <SectionHeader
            badge="Connect With Us"
            title="Latest Updates & Social Feed"
            description="Discover our latest medical equipment, completed installations, product updates, and the work we do to support healthcare facilities."
          />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Facebook Feed */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="border-b border-slate-200 px-6 py-4">
              <div className="flex gap-4 items-center">
                <div className="text-blue-500">
                  <FaFacebook size={30} />
                </div>
                <h3 className="font-semibold text-slate-900">
                  Latest Facebook Updates
                </h3>
              </div>
            </div>

            <div className="relative flex min-h-[500px] justify-center overflow-hidden p-4">
              {/* Background */}
              <div className="absolute inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat opacity-70" />

              {/* Content */}
              <div className="relative z-10">
                <iframe
                  src={FACEBOOK_EMBED_URL}
                  width="500"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Feed"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
<div className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-700 to-emerald-900 p-8 text-white shadow-lg">
  {/* Decorative background */}
  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/5" />
  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-400/10" />

  {/* Content */}
  <div className="relative z-10">
    {/* <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 backdrop-blur-sm transition duration-300 group-hover:bg-white/15">
      <FaFacebookF size={24} />
    </div> */}

    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-200">
      Stay Connected
    </p>

    <h3 className="text-3xl font-bold tracking-tight">
      Follow Us on Facebook
    </h3>

    <p className="mt-5 max-w-md text-base leading-7 text-emerald-50/90">
      Stay updated with our latest medical equipment, product launches,
      installations, deliveries, and company news.
    </p>
  </div>

  {/* Bottom CTA */}
  <div className="relative z-10 mt-12">
    <div className="mb-6 h-px w-full bg-white/10" />

    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-emerald-100">
        Visit our official page
      </span>

      <a
        href={FACEBOOK_PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
      >
        Visit Page
        <FaArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      </a>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
