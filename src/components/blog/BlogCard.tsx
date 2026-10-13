import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import { formatBlogDate } from "@/config/blog";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
  className,
}: {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-teal-900/5",
        featured && "md:grid md:grid-cols-2 md:items-stretch",
        className,
      )}
    >
      <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden">
        <div
          className={cn(
            "relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated",
            featured && "md:aspect-auto md:h-full md:min-h-[280px]",
          )}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-80" />
        </div>
      </Link>

      <div className={cn("flex flex-1 flex-col p-5 md:p-6", featured && "md:justify-center md:p-8")}>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span>{post.category}</span>
          <span className="text-muted/60">•</span>
          <time dateTime={post.publishedAt} className="normal-case tracking-normal text-muted">
            {formatBlogDate(post.publishedAt)}
          </time>
          <span className="text-muted/60">•</span>
          <span className="normal-case tracking-normal text-muted">{post.readingMinutes} min read</span>
        </div>

        <h2
          className={cn(
            "font-display font-semibold leading-tight text-foreground transition group-hover:text-accent-secondary",
            featured ? "text-2xl md:text-3xl" : "text-xl",
          )}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className={cn("mt-3 text-sm leading-relaxed text-muted", featured && "md:text-base")}>
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-secondary transition group-hover:gap-2"
        >
          Read article
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
