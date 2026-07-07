import Link from "next/link";

const courses = [
  { href: "/courses/mhfa-awareness", label: "Mental Health First Aid Awareness" },
  { href: "/courses/mhfa", label: "First Aid for Mental Health" },
  { href: "/courses/mhfa-supervising", label: "Supervising First Aid for Mental Health" },
  { href: "/courses/youth-mental-health", label: "Youth Mental Health First Aid" },
  { href: "/courses/refresher", label: "Annual Refresher" },
];

const info = [
  { href: "/about", label: "About David" },
  { href: "/for-organisations", label: "For Organisations" },
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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tagline */}
          <div>
            <p className="font-bold text-white text-base mb-2">David Scott</p>
            <p className="text-sm leading-relaxed text-gray-400">
              Mental health first aid training delivered by a registered NHS mental health nurse.
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

        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} David Scott. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
