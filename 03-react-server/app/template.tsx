"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CACHE_BUST_PARAM = "v";

// This is a hack to force re-rendering of the server components
// Next.js has an aggressive client-side route cache that would
// prevent re-rendering on navigation for 30s.
// See: https://nextjs.org/docs/app/building-your-application/caching#router-cache
// This causes frustration: https://www.youtube.com/watch?v=_yhSh4g0NSk
// Using a client component template to create cache busting links is a workaround.

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryParams = useSearchParams();
  let cacheBust = 0;
  const cacheBustString = queryParams.get(CACHE_BUST_PARAM);
  if (cacheBustString && !isNaN(parseInt(cacheBustString))) {
    cacheBust = parseInt(cacheBustString) + 1;
  }
  // const cacheBust = Math.random();

  return (
    <div>
      <nav>
        <Link
          suppressHydrationWarning
          href={`/?${CACHE_BUST_PARAM}=${cacheBust}`}
        >
          Home
        </Link>
        <Link
          suppressHydrationWarning
          href={`/01-simple?${CACHE_BUST_PARAM}=${cacheBust}`}
        >
          Simple
        </Link>
        <Link href={`/02-backend?${CACHE_BUST_PARAM}=${cacheBust}`}>
          Backend
        </Link>
        <Link href={`/03-streaming?${CACHE_BUST_PARAM}=${cacheBust}`}>
          Streaming
        </Link>
        <Link href={`/04-clock?${CACHE_BUST_PARAM}=${cacheBust}`}>Clock</Link>
      </nav>
      <nav>
        <Link href={`/05-counter?${CACHE_BUST_PARAM}=${cacheBust}`}>
          Counter
        </Link>
        <Link href={`/06-composition?${CACHE_BUST_PARAM}=${cacheBust}`}>
          Composition
        </Link>
        <Link href={`/07-dataflow?${CACHE_BUST_PARAM}=${cacheBust}`}>
          DataFlow
        </Link>
        <Link href={`/08-serveractions?${CACHE_BUST_PARAM}=${cacheBust}`}>
          ServerActions
        </Link>
      </nav>
      <div id="main">{children}</div>
    </div>
  );
}
