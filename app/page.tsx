import fs from "fs";
import path from "path";
import Link from "next/link";

function getPages(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const pages: string[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      } else if (entry.name === "page.mdx") {
        const route = path
          .relative(appDir, dir)
          .split(path.sep)
          .join("/");
        pages.push("/" + route);
      }
    }
  }

  walk(appDir);
  return pages.sort();
}

export default function Home() {
  const pages = getPages();

  return (
    <ul className="list-disc pl-4">
      {pages.map((page) => (
        <li key={page}>
          <Link href={page} className="underline">
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
