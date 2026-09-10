import profile from "@/data/profile.json";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-4 py-12">
      <div className="border-2 border-[var(--foreground)] text-[var(--foreground)] shadow-[0_0_16px_rgba(51,255,51,0.35)]">
        <div className="border-b-2 border-[var(--foreground)] px-3 py-1 text-sm tracking-wide">
          C:\PROFILE&gt; whoami.exe
        </div>

        <div className="flex flex-col gap-6 px-4 py-6 text-base leading-relaxed sm:text-lg">
          <section className="flex flex-col gap-1">
            <p>&gt; whoami</p>
            <p className="pl-4 text-xl sm:text-2xl">{profile.name}</p>
          </section>

          <section className="flex flex-col gap-1">
            <p>&gt; cat profile.txt</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5 pl-4">
              <dt className="opacity-70">SCHOOL</dt>
              <dd>{profile.school}</dd>
              <dt className="opacity-70">MAJOR</dt>
              <dd>{profile.major}</dd>
              <dt className="opacity-70">GOAL</dt>
              <dd>{profile.goal}</dd>
            </dl>
          </section>

          <section className="flex flex-col gap-1">
            <p>&gt; ls ./interests</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 pl-4">
              {profile.interests.map((interest) => (
                <li key={interest}>[{interest}]</li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-1">
            <p>&gt; ls ./links</p>
            <ul className="flex flex-col gap-1 pl-4">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-4 hover:opacity-70"
                  >
                    ./{link.label.toLowerCase()} -&gt; {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <p>
            &gt; <span className="cursor">_</span>
          </p>
        </div>
      </div>
    </main>
  );
}
