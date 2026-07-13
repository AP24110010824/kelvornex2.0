import {
  Video,
  Award,
  Users,
  FolderKanban,
  HelpCircle,
  TrendingUp,
  Star,
  ArrowRight,
} from "lucide-react";

// Real placement company logos with original colors
const placementCompanies = [
  {
    name: "Zerodha",
    icon: (
      <div className="flex items-center gap-1.5 shrink-0">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#387ed1" strokeWidth="4" />
          <circle cx="12" cy="12" r="4" fill="#387ed1" />
        </svg>
        <span className="text-[13px] font-black tracking-tight text-[#387ed1]">ZERODHA</span>
      </div>
    ),
  },
  {
    name: "Boat",
    icon: (
      <div className="flex items-center gap-1 shrink-0">
        <span className="w-5 h-5 rounded-full bg-[#e31d27] flex items-center justify-center text-white text-[10px] font-bold">bo</span>
        <span className="text-[13px] font-black tracking-tight text-[#e31d27]">BOAT</span>
      </div>
    ),
  },
  {
    name: "Rapido",
    icon: (
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-5 h-5 bg-[#f8cb15] text-[#2d2d2d] rounded-full flex items-center justify-center text-[10px] font-black">R</span>
        <span className="text-[13px] font-black tracking-tight text-[#2d2d2d]">RAPIDO</span>
      </div>
    ),
  },
  {
    name: "Cars24",
    icon: (
      <div className="flex items-center gap-1 shrink-0">
        <span className="text-[14px] font-extrabold italic text-[#f05a28] tracking-tighter">CARS24</span>
      </div>
    ),
  },
  {
    name: "Khatabook",
    icon: (
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-5 h-5 bg-[#007aff] text-white rounded-md flex items-center justify-center text-[9px] font-bold">KH</span>
        <span className="text-[12px] font-extrabold text-[#007aff] tracking-tight">KHATABOOK</span>
      </div>
    ),
  },
  {
    name: "PhonePe",
    icon: (
      <div className="flex items-center gap-1.5 shrink-0">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#5f259f" />
          <text x="5" y="17" className="text-white text-[12px] font-black" fill="#ffffff">पे</text>
        </svg>
        <span className="text-[12px] font-black tracking-wide text-[#5f259f]">PHONEPE</span>
      </div>
    ),
  },
  {
    name: "Zomato",
    icon: (
      <div className="flex items-center gap-1 shrink-0">
        <span className="text-[15px] font-black italic tracking-tighter text-[#E23744]">zomato</span>
      </div>
    ),
  },
  {
    name: "Amazon",
    icon: (
      <div className="flex items-center gap-1 shrink-0">
        <svg className="w-16 h-5" viewBox="0 0 100 30">
          <path d="M16 18c0 1.2-.5 2.1-1.3 2.1-.6 0-1-.5-1-1.2 0-1.8 1.8-1.9 2.3-1.9v1zm2.3 2.8V15.2c0-1.7-.8-3.1-2.9-3.1-1.6 0-2.8.9-3.2 1.8l1 .7c.4-.7 1.1-1.3 2.1-1.3.9 0 1.7.5 1.7 1.5v.7c-2.7.2-4.8 1-4.8 3.5 0 1.9 1.2 3.1 3 3.1 1.5 0 2.4-.7 2.8-1.5l.2 1.3h1.1zm7.5-6.5c-.8 0-1.5.3-2 1v-4.2H22.5V20.8h1.2v-.8c.5.7 1.2 1 2 1 1.7 0 3-1.4 3-3.6 0-2.2-1.3-3.6-3-3.6zm-.4 6.2c-.8 0-1.5-.7-1.5-2.5 0-1.9.7-2.6 1.5-2.6.9 0 1.6.7 1.6 2.6 0 1.8-.7 2.5-1.6 2.5zm11.7-6.2c-1.8 0-3 1.3-3 3.6 0 2.2 1.2 3.6 3 3.6 1.8 0 3-1.3 3-3.6 0-2.2-1.2-3.6-3-3.6zm0 6.2c-.9 0-1.6-.7-1.6-2.5 0-1.9.7-2.6 1.6-2.6.9 0 1.6.7 1.6 2.6 0 1.8-.7 2.5-1.6 2.5zM48 14.3v1c.5-.7 1.2-1.2 2.3-1.2 1.5 0 2.3 1 2.3 2.6v4.1H51.4v-3.7c0-.9-.3-1.7-1.2-1.7-1 0-1.4.9-1.4 1.8V20.8h-1.2V14.3H48z" fill="#000000" />
          <path d="M12.2 24.2C21.4 27.6 36.4 29 48.5 24.3c1.2-.5 2.1.8.8 1.5C37.2 32.3 19.8 32.3 11 26.5c-1-.7 0-1.8 1.2-2.3z" fill="#FF9900" />
          <path d="M49 22.8c.8.2 1.8.5 2.6.1.4-.2.2-1.1-.1-1.3-.9-.6-2.2-1-3.1-.7-.4.1-.4 1.1.2 1.5.1.1.2.2.4.4z" fill="#FF9900" />
        </svg>
      </div>
    ),
  },
  {
    name: "Microsoft",
    icon: (
      <div className="flex items-center gap-1.5 shrink-0">
        <svg className="w-16 h-5" viewBox="0 0 120 30">
          <path d="M4.5 13.5H0V9H4.5v4.5zm5.5 0H5.5V9H10v4.5zm-5.5 5.5H0v-4.5h4.5V19zm5.5 0H5.5v-4.5H10V19z" fill="#F25022" />
          <path d="M15.5 13.5H11V9h4.5v4.5zm5.5 0h-4.5V9H21v4.5zm-5.5 5.5H11v-4.5h4.5V19zm5.5 0h-4.5v-4.5H21V19z" fill="#7FBA00" />
          <path d="M4.5 24.5H0V20h4.5v4.5zm5.5 0H5.5V20H10v4.5zm-5.5 5.5H0V25h4.5v5zm5.5 0H5.5V25H10v5z" fill="#01A4EF" />
          <path d="M15.5 24.5H11V20h4.5v4.5zm5.5 0h-4.5V20H21v4.5zm-5.5 5.5H11V25h4.5v5zm5.5 0h-4.5v-4.5H21v5z" fill="#FFB900" />
          <text x="28" y="19" className="text-[13px] font-semibold tracking-wide" fill="#737373">Microsoft</text>
        </svg>
      </div>
    ),
  },
  {
    name: "Razorpay",
    icon: (
      <div className="flex items-center gap-1 shrink-0">
        <svg className="w-16 h-5" viewBox="0 0 120 30">
          <path d="M12 4 L2 18 L10 18 L6 26 L22 10 L14 10 Z" fill="#0B72E7" />
          <text x="24" y="18" className="text-xs font-black tracking-wide italic" fill="#0B72E7">Razorpay</text>
        </svg>
      </div>
    ),
  },
];

// Repeated companies list for infinite continuous auto-scrolling marquee
const marqueeCompanies = [
  ...placementCompanies,
  ...placementCompanies,
  ...placementCompanies,
];

const advantageCards = [
  {
    icon: Video,
    title: "LIVE Interactive Sessions",
    body: "Real-time sessions with practitioners — ask, debug, and get live feedback.",
  },
  {
    icon: Award,
    title: "Industry Ratified Certifications",
    body: "Credentials validated by leading industry bodies and government organisations.",
  },
  {
    icon: Users,
    title: "Expert Industry Mentors",
    body: "Learn from engineers and leaders with 10+ years of real-world experience.",
  },
  {
    icon: FolderKanban,
    title: "Portfolio-worthy Projects",
    body: "Build production-grade projects that impress senior engineers on day one.",
  },
  {
    icon: HelpCircle,
    title: "Dedicated Query Sessions",
    body: "One-on-one doubt resolution sessions with your mentor, at your convenience.",
  },
  {
    icon: TrendingUp,
    title: "Active Peer Community",
    body: "Join 50,000+ ambitious learners in a thriving, collaborative learning network.",
  },
];

const successStories = [
  {
    quote: '"The web development program at Kelvornex was life-changing. The mentors are industry experts who guide you at every step. I landed my dream job within 3 months of completion."',
    name: "Rahul Sharma",
    role: "Full Stack Developer @ Google",
    avatar: "https://images.pexels.com/photos/7584674/pexels-photo-7584674.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
  {
    quote: '"The curriculum is extremely well-structured. Practical projects gave me the confidence to solve real-world problems. Highly recommended for anyone looking to transition into Data Science."',
    name: "Ananya Iyer",
    role: "Data Scientist @ Amazon",
    avatar: "https://images.pexels.com/photos/6893883/pexels-photo-6893883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
  {
    quote: '"Kelvornex\'s Machine Learning program is one of the best out there. The focus on fundamentals combined with advanced topics like NLP and CV is unmatched."',
    name: "Vikram Singh",
    role: "ML Engineer @ Microsoft",
    avatar: "https://images.pexels.com/photos/8278871/pexels-photo-8278871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  },
];

interface BookingStepsProps {
  showOnlyHireTalents?: boolean;
}

export default function BookingSteps({ showOnlyHireTalents = false }: BookingStepsProps) {
  if (showOnlyHireTalents) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Continuous Auto-scrolling Infinite Marquee Block */}
        <div className="text-center py-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540]">
            Hire talent that <span className="text-[#0900ff]">stands out!</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Our students are placed in top companies worldwide
          </p>
          
          {/* Autoplay Slider Container */}
          <div className="relative mt-8 w-full overflow-hidden bg-white border border-slate-100 shadow-sm rounded-2xl py-6">
            <div className="flex w-[300%] items-center animate-marquee gap-10 sm:gap-14">
              {marqueeCompanies.map((c, i) => (
                <div key={i} className="flex-1 flex justify-center items-center">
                  {c.icon}
                </div>
              ))}
            </div>
            {/* Soft shadow gradients to blend the marquee edges */}
            <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Microsoft Certification Block (Validate your skills with global standards) placed directly below Hire Talent */}
        <div className="mt-12 rounded-3xl bg-white border border-slate-100 p-6 sm:p-10 shadow-lg grid md:grid-cols-[1fr_2.5fr] gap-6 md:gap-10 items-center text-left">
          <div className="flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-10">
            {/* Microsoft colorful logo block using official colors: Red, Green, Blue, Yellow */}
            <div className="grid grid-cols-2 gap-1.5 w-11 h-11 mb-4">
              <span className="bg-[#F25022] rounded-sm" />
              <span className="bg-[#7FBA00] rounded-sm" />
              <span className="bg-[#01A4EF] rounded-sm" />
              <span className="bg-[#FFB900] rounded-sm" />
            </div>
            <h3 className="text-lg font-bold text-[#0a2540]">Microsoft</h3>
            <p className="text-xs font-extrabold text-[#0900ff] mt-1">Certified Partner</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Authorized Technical Training</p>
          </div>
          
          <div>
            <h4 className="text-xl font-extrabold text-[#0a2540]">
              Validate your skills with global standards
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Our specialized technical programs and curriculum align with Microsoft standards. Students receive industry-ratified validation recognized by technology companies globally.
            </p>
            
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                "Microsoft Curriculum Standards Alignment",
                "Official Industry-Vetted Project Work",
                "Globally Recognized Career Credentials",
                "Direct Path to Advanced Technical Roles",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00ccff]" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }

  return (
    <section id="enroll" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
      
      <div className="mt-8 md:mt-12">
        {/* Advantage Header — Why Choose Kelvornex positioned ABOVE Success Stories */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-16 mb-12">
          <div>
            <span className="inline-flex items-center rounded-md bg-[#e2f1ff] px-2.5 py-1 text-xs font-bold text-[#008eff] tracking-wide">
              🔹 OUR ADVANTAGE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0a2540] leading-tight">
              Why Choose <span className="text-[#0900ff]">Kelvornex?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl">
              We bridge the gap between classroom theory and industry reality through live mentorship, real projects, and community.
            </p>
          </div>
          <button className="self-start md:self-auto rounded-full bg-slate-900 text-white hover:bg-black text-xs font-bold px-6 py-3.5 flex items-center gap-2 transition-all active:scale-95 shadow-lg">
            APPLY AS MENTOR <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Advantage grid + Rating scorecard */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 6 Grid items */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {advantageCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{card.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{card.body}</p>
                </div>
              );
            })}
          </div>

          {/* Rating overview card */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-md flex flex-col justify-between text-center lg:text-left h-full">
            <div>
              <p className="text-5xl sm:text-6xl font-black text-[#0a2540]">4.8</p>
              
              {/* Star row */}
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00ccff] stroke-none" />
                ))}
              </div>
              
              <p className="mt-3 text-sm font-bold text-slate-900">Google Rating</p>
              <p className="text-xs text-slate-400">From 10,000+ Students</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 gap-y-6 gap-x-4 text-left">
              {[
                { val: "50K+", lbl: "MENTEES" },
                { val: "500+", lbl: "PARTNERS" },
                { val: "120+", lbl: "MENTORS" },
                { val: "98%", lbl: "SATISFACTION" },
              ].map((stat) => (
                <div key={stat.lbl}>
                  <p className="text-lg sm:text-xl font-extrabold text-[#0900ff]">{stat.val}</p>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider mt-0.5">{stat.lbl}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>



      {/* ── PART 3: Success Stories (now positioned BELOW Why Choose segment) ── */}
      <div className="mt-16 md:mt-24 pt-10 border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540]">
            Success <span className="text-[#0900ff]">Stories</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Hear from our alumni who have successfully transitioned into high-growth tech roles after learning with Kelvornex.
          </p>
        </div>

        {/* 3 Testimonial Column Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col justify-between">
              
              {/* Quote bubbles decoration matching screenshot layout */}
              <span className="absolute top-5 right-6 w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center font-extrabold text-sm select-none">
                “
              </span>

              <div>
                {/* 5 stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#00ccff] stroke-none" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  {story.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{story.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{story.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── PART 4: Ready to learn CTA banner (labeled with id="enroll-newsletter" as target) ── */}
      <div id="enroll-newsletter" className="mt-20 rounded-3xl bg-gradient-to-r from-plum-900 to-plum-700 px-5 py-10 sm:px-8 sm:py-12 md:px-14 text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#00ccff]/25 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#ffe8f7]/10 blur-2xl" />
        <h3 className="relative text-2xl md:text-3xl font-bold text-white">
          Ready to learn, execute, and succeed?
        </h3>
        <p className="relative mt-3 text-mint-100/80 text-sm max-w-lg mx-auto">
          Join 15,000+ successful learners. Get exclusive course discounts and
          career guides straight to your inbox.
        </p>
        <form
          className="relative mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 rounded-full bg-white/95 px-5 py-3 text-sm text-plum-900 placeholder:text-sage-400 focus:outline-none focus:ring-2 focus:ring-[#00ccff]"
          />
          <button
            type="submit"
            className="rounded-full bg-[#00ccff] hover:bg-[#00ccff]/90 text-plum-900 text-sm font-bold px-7 py-3 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

    </section>
  );
}
