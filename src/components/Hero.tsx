export default function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <img
          src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Team of developers learning and building together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/55 to-plum-950/25 md:from-plum-950/85 md:via-plum-950/40 md:to-plum-950/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 py-12 sm:py-16 text-center md:text-left">
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-8xl lg:text-[8.5rem] font-extrabold text-white tracking-tight md:leading-none drop-shadow-lg break-words">
            KELVORNEX
          </h1>
          <p className="mt-3 text-lagoon-400 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base">
            Learn. Execute. Succeed.
          </p>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-mint-100 text-sm sm:text-base leading-relaxed drop-shadow">
            Master in-demand skills with hands-on courses, real-world projects,
            and mentor support — everything you need to launch your career in
            one platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0">
            <a
              href="#enroll-newsletter"
              className="rounded-full bg-lagoon-500 hover:bg-lagoon-400 text-white text-sm sm:text-base font-bold px-7 py-3.5 text-center transition-colors shadow-lg shadow-lagoon-500/30"
            >
              Start Learning
            </a>
            <a
              href="#courses"
              className="rounded-full border-2 border-mint-100/80 text-white hover:bg-white/10 text-sm sm:text-base font-semibold px-7 py-3.5 text-center transition-colors backdrop-blur-sm"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
