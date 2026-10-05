import { SOCIALS } from "@/lib/content";

function Icon({ id }: { id: (typeof SOCIALS)[number]["id"] }) {
  if (id === "web") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.95" />
        <path d="M3.5 12h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.95" />
        <path d="M12 3c3.2 3.5 3.2 14.5 0 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.95" />
        <path d="M12 3c-3.2 3.5-3.2 14.5 0 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
      </svg>
    );
  }
  if (id === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }
  if (id === "telegram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M21 5L3.7 11.8c-.9.35-.86 1.64.06 1.94l4.7 1.55 1.8 5.3c.28.82 1.39.98 1.89.27l2.6-3.75 4.7 3.45c.74.55 1.79.14 1.99-.79L22 6.6C22.2 5.6 21.5 4.8 21 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 14.7l11.2-8.0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 7.5h15v9h-15v-9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M4.7 7.8l7.3 5.6 7.3-5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className ? `social-links ${className}` : "social-links"} aria-label="Official links">
      {SOCIALS.map((item) => (
        <a
          key={item.id}
          className="social-link"
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={item.label}
        >
          <span className="sr-only">{item.sr}</span>
          <Icon id={item.id} />
        </a>
      ))}
    </div>
  );
}
