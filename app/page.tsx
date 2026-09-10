import profile from "@/data/profile.json";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col justify-center gap-16 px-6 py-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold sm:text-4xl">{profile.name}</h1>
        <p className="text-lg leading-relaxed text-[var(--foreground)]/80">
          {profile.school} {profile.major}에서 {profile.goal}을 목표로 공부하고
          있는 {profile.name}입니다.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]/60">
          관심사
        </h2>
        <ul className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-[var(--foreground)]/15 px-4 py-1.5 text-sm"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground)]/60">
          링크
        </h2>
        <ul className="flex flex-wrap gap-3">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--foreground)] px-5 py-2 text-sm font-medium text-[var(--background)] transition hover:opacity-85"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
