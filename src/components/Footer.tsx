import Link from "next/link";

const courses = [
  { href: "/courses/mhfa-awareness", label: "Mental Health First Aid Awareness" },
  { href: "/courses/mhfa", label: "First Aid for Mental Health" },
  { href: "/courses/mhfa-supervising", label: "Supervising First Aid for Mental Health" },
  { href: "/courses/youth-mental-health", label: "Youth Mental Health First Aid" },
  { href: "/courses/refresher", label: "Annual Refresher" },
  { href: "/bespoke-training", label: "Bespoke Training" },
];

const info = [
  { href: "/about", label: "About David" },
  { href: "/for-organisations", label: "For Organisations" },
  { href: "/why-mhfa", label: "Why MHFA?" },
  { href: "/hse", label: "HSE Guidance" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo-icon.png" alt="" className="h-14 w-auto" />
              <span className="flex flex-col leading-tight">
                <span className="font-bold text-white text-lg">Positive Cultures</span>
                <span className="text-sm text-gray-400">Training and Consultancy</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Creating workplaces where people feel heard, supported and able to thrive.
            </p>
          </div>

          {/* Courses */}
          <div>
            <p className="font-semibold text-white text-sm mb-3">Courses</p>
            <ul className="space-y-2">
              {courses.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <p className="font-semibold text-white text-sm mb-3">Information</p>
            <ul className="space-y-2">
              {info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-white text-sm mb-3">Legal</p>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Positive Cultures Training and Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
