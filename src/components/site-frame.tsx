import type { ReactNode } from "react";

const GITHUB = "https://github.com/FrosTether/Graysons-Wallet";

const NAV = [
  { href: "/", label: "Get Qoin", current: true },
  { href: "https://finux.tech/projects", label: "Projects", external: true },
  { href: "https://finux.tech/opensource", label: "Open source", external: true },
  { href: GITHUB, label: "GitHub", external: true },
  { href: "https://finux.tech/contact", label: "Contact", external: true },
];

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-8">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 pt-6">
        <a href="/" className="display inline-flex items-center gap-2.5 text-[1.375rem] no-underline hover:text-ink">
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-alarm" />
            <span className="size-2.5 rounded-full bg-lens" />
            <span className="size-2.5 rounded-full bg-lamp" />
          </span>
          finux
        </a>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]" aria-label="Site">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex min-h-11 items-center py-2 text-soft no-underline hover:text-ink hover:underline aria-[current=page]:text-ink aria-[current=page]:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule py-5 pb-10 text-sm text-soft">
        <p className="m-0 max-w-md">No token. No sale. No value is offered here.</p>
        <p className="m-0 flex flex-wrap gap-x-3">
          <a href="https://finux.tech/" className="text-soft" target="_blank" rel="noopener noreferrer">
            finux.tech
          </a>
          <span aria-hidden="true">·</span>
          <a href={GITHUB} className="text-soft" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://finux.tech/contact" className="text-soft" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}
