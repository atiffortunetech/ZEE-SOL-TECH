import type { BlogPost } from "@/config/blog";

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-12">
      {post.sections.map((section) => (
        <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 text-[1.05rem] leading-[1.8] text-foreground/80">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}
          </div>
          {section.bullets?.length ? (
            <ul className="mt-5 space-y-2.5 border-l-2 border-accent/30 pl-5">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="text-[1.02rem] leading-relaxed text-foreground/80">
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}
          {section.subsections?.map((sub) => (
            <div key={sub.heading} id={sectionId(sub.heading)} className="mt-8 scroll-mt-28">
              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                {sub.heading}
              </h3>
              <div className="mt-3 space-y-3 text-[1.05rem] leading-[1.8] text-foreground/80">
                {sub.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                ))}
              </div>
              {sub.bullets?.length ? (
                <ul className="mt-4 space-y-2 border-l-2 border-accent/20 pl-5">
                  {sub.bullets.map((bullet) => (
                    <li key={bullet} className="text-[1.02rem] leading-relaxed text-foreground/80">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>
      ))}

      {post.faqs.length ? (
        <section id="frequently-asked-questions" className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-4">
            {post.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-surface px-5 py-4 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    {faq.question}
                    <span className="mt-1 text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-foreground/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
