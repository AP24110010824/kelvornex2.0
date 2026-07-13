import Logo from "./Logo";

const columns = [
  {
    title: "Learn",
    links: ["All Courses", "Career Programs", "Free Tutorials", "Scholarships"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Mentors", "Success Stories"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Refund Policy", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-mint-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 sm:gap-8 md:gap-10">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white p-1">
                <Logo className="w-9 h-9" />
              </span>
              <span className="flex items-baseline gap-0.5">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  KELVORNEX
                </span>
                <span className="text-sm font-bold text-lagoon-500">.in</span>
              </span>
            </div>
            <p className="mt-3 text-[11px] font-bold tracking-[0.25em] uppercase text-lagoon-400">
              Learn. Execute. Succeed.
            </p>
            <p className="mt-4 text-xs leading-relaxed max-w-xs">
              Your all-in-one platform for learning in-demand skills, building
              real projects, and launching a successful career.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs hover:text-lagoon-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p>© {new Date().getFullYear()} Kelvornex.in — All rights reserved.</p>
          <p>
            Made with <span className="text-lagoon-400">♥</span> for learners
            everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
