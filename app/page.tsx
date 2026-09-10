import profile from "@/data/profile.json";

const mono = "font-[family-name:var(--font-plex-mono)]";
const display = "font-[family-name:var(--font-archivo)]";

export default function Home() {
  const profileFields = [
    { label: "SCHOOL", value: profile.school, note: profile.schoolNote },
    { label: "MAJOR", value: profile.major, note: profile.majorNote },
    { label: "GOAL", value: profile.goal, note: profile.goalNote },
  ];

  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 md:px-16">
        <header className="flex items-center justify-between gap-6 border-b border-[#f2efe9]/[0.14] py-[22px]">
          <div className="flex items-center gap-3.5">
            <div className="flex h-[42px] w-[34px] items-center justify-center overflow-hidden bg-[#e8e3d9]">
              <img
                src="/ku-mark.jpg"
                alt="고려대학교 마크"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className={`${mono} text-[11px] tracking-[0.18em] text-[#8f8b83]`}>
                KOREA UNIVERSITY
              </span>
              <span className={`${display} text-[13px] font-semibold tracking-[0.04em]`}>
                PERSONAL PROFILE
              </span>
            </div>
          </div>
          <nav className={`${mono} flex gap-4 text-[11px] tracking-[0.16em] text-[#8f8b83] sm:gap-6 md:gap-[30px]`}>
            <a href="#profile" className="hover:text-[#f2efe9]">01 PROFILE</a>
            <a href="#interests" className="hover:text-[#f2efe9]">02 INTERESTS</a>
            <a href="#links" className="hover:text-[#f2efe9]">03 LINKS</a>
          </nav>
        </header>

        <section className="relative grid grid-cols-1 items-center gap-8 py-14 sm:py-20 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 md:py-32">
          <div className="min-w-0">
            <div className={`${mono} flex items-center gap-3 text-[11px] tracking-[0.2em] text-[#b3182f]`}>
              <span className="h-px w-[26px] bg-[#b3182f]" />
              <span>{profile.tagline}</span>
            </div>
            <h1 className={`${display} mt-6 text-[clamp(52px,11vw,148px)] font-semibold leading-[0.9] tracking-[-0.045em] text-balance`}>
              {profile.name}
            </h1>
            <p className="mt-5 max-w-[520px] text-[clamp(15px,1.5vw,18px)] leading-[1.75] text-[#b8b4ac] text-pretty">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <a
                href="#links"
                className={`${display} inline-flex items-center whitespace-nowrap bg-[#b3182f] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-white hover:bg-[#8e1225]`}
              >
                CONTACT →
              </a>
              <a
                href="#profile"
                className={`${display} inline-flex items-center whitespace-nowrap border border-[#f2efe9]/[0.22] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] hover:border-[#f2efe9]`}
              >
                SCROLL ↓
              </a>
            </div>
          </div>
          <div className="w-[clamp(96px,15vw,168px)] justify-self-center bg-[#e8e3d9] p-[18px] md:justify-self-auto">
            <img src="/ku-mark.jpg" alt="고려대학교 마크" className="w-full mix-blend-multiply" />
          </div>
        </section>
      </div>

      <div className="overflow-hidden border-y border-[#f2efe9]/[0.14] bg-[#101012]">
        <div
          className={`${display} flex w-max animate-[ticker_34s_linear_infinite] whitespace-nowrap py-3.5 text-[13px] font-medium tracking-[0.22em] text-[#6f6b64]`}
        >
          {[0, 1].map((rep) => (
            <span key={rep} className="flex flex-none items-center gap-11 pr-11">
              {profile.ticker.map((word, i) => (
                <span key={i} className="flex items-center gap-11">
                  <span>{word}</span>
                  <span>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 md:px-16">
        <section id="profile" className="pt-14 sm:pt-20 md:pt-28">
          <div className="flex flex-col gap-8">
            <div className="flex items-baseline gap-4">
              <span className={`${mono} text-[11px] tracking-[0.2em] text-[#b3182f]`}>01</span>
              <h2 className={`${display} m-0 text-[clamp(24px,3.4vw,40px)] font-semibold tracking-[-0.02em]`}>
                기본 정보
              </h2>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px bg-[#f2efe9]/[0.14]">
              {profileFields.map((field) => (
                <div key={field.label} className="flex flex-col gap-3 bg-[#0c0c0d] px-6 py-[30px]">
                  <span className={`${mono} text-[10px] tracking-[0.2em] text-[#8f8b83]`}>
                    {field.label}
                  </span>
                  <span className="text-[clamp(18px,2vw,23px)] font-medium leading-[1.35]">
                    {field.value}
                  </span>
                  <span className="text-[13px] text-[#8f8b83]">{field.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="pt-14 sm:pt-20 md:pt-28">
          <div className="mb-8 flex items-baseline gap-4">
            <span className={`${mono} text-[11px] tracking-[0.2em] text-[#b3182f]`}>02</span>
            <h2 className={`${display} m-0 text-[clamp(24px,3.4vw,40px)] font-semibold tracking-[-0.02em]`}>
              취미
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="whitespace-nowrap border border-[#f2efe9]/20 px-[18px] py-[11px] text-sm text-[#e6e2db] hover:border-[#b3182f] hover:text-white"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section id="links" className="pt-14 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24">
          <div className="mb-8 flex items-baseline gap-4">
            <span className={`${mono} text-[11px] tracking-[0.2em] text-[#b3182f]`}>03</span>
            <h2 className={`${display} m-0 text-[clamp(24px,3.4vw,40px)] font-semibold tracking-[-0.02em]`}>
              연락
            </h2>
          </div>
          <div className="flex flex-col">
            {profile.links.map((link, i) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex flex-wrap items-center justify-between gap-3 border-t border-[#f2efe9]/[0.14] px-1 py-6 transition-[color,padding] hover:pl-[14px] hover:text-[#b3182f] ${
                  i === profile.links.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="flex items-baseline gap-4">
                  <span className={`${mono} text-[11px] tracking-[0.18em] text-[#8f8b83]`}>
                    {link.label.toUpperCase()}
                  </span>
                  <span className={`${display} text-[clamp(20px,2.6vw,30px)] font-medium tracking-[-0.02em]`}>
                    {link.handle}
                  </span>
                </span>
                <span className={`${display} text-xl`}>→</span>
              </a>
            ))}
          </div>
          <div className={`${mono} mt-[30px] flex items-center gap-2.5 text-[13px] text-[#6f6b64]`}>
            <span>&gt;</span>
            <span className="inline-block h-[17px] w-[9px] animate-[blink_1.1s_step-end_infinite] bg-[#b3182f]" />
          </div>
        </section>
      </div>

      <footer className="bg-[#b3182f] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-6 px-5 py-8 sm:px-8 md:px-16 md:py-12">
          <div className="flex flex-col gap-2">
            <span className={`${display} text-[clamp(26px,4.5vw,52px)] font-bold leading-none tracking-[-0.03em]`}>
              {profile.footer.org}
            </span>
            <span className={`${mono} text-[11px] tracking-[0.2em] opacity-75`}>
              {profile.footer.est}
            </span>
          </div>
          <span className={`${mono} text-[11px] tracking-[0.16em] opacity-75`}>
            {profile.footer.copyright}
          </span>
        </div>
      </footer>
    </div>
  );
}
