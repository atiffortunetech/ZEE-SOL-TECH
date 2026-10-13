import type { BlogPost } from "@/config/blog";

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="space-y-10">
      {post.sections.map((section) => (
        <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[1.7rem]">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-foreground/80">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
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
        </section>
      ))}
    </div>
  );
}
