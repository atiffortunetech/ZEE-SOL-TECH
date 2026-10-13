import { createRequire } from "module";
import path from "path";
import { pathToFileURL } from "url";

// Dynamic import of compiled TS isn't easy; parse strings from source instead.
import fs from "fs";

const dir = path.resolve("src/config/blog/posts");
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const src = fs.readFileSync(path.join(dir, file), "utf8");
  const matches = [...src.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) =>
    m[1]
      .replace(/\\n/g, " ")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\"),
  );
  // Skip short metadata-ish strings
  const prose = matches.filter((s) => s.length > 40).join(" ");
  const words = prose.split(/\s+/).filter(Boolean).length;
  console.log(`${file}\t${words} words\t~${(words / 275).toFixed(1)} pages`);
}
