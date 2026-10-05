import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { BrandLockup } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header glass-nav" aria-label="Site header">
        <BrandLockup />
        <nav className="nav-links max-[899px]:hidden" aria-label="Page sections">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="status-pill header-status" aria-label="Status">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Coming Soon</span>
          </div>
          <button
            type="button"
            className="menu-btn min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {open ? (
        <nav id="mobile-nav" className="mobile-panel surface" aria-label="Mobile sections">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}
