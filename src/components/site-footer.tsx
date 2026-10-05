import { FOOTER } from "@/lib/content";
import { LogoMark } from "@/components/logo";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="site-footer surface" aria-label="Site footer">
      <div className="footer-content">
        <div className="footer-left">
          <span aria-hidden="true">
            <LogoMark />
          </span>
          <div className="min-w-0">
            <div className="footer-title">{FOOTER.title}</div>
            <div className="footer-sub">{FOOTER.sub}</div>
          </div>
        </div>
        <SocialLinks className="mt-0" />
      </div>
      <div className="footer-bottom">
        <div>{FOOTER.rights}</div>
        <div className="opacity-75">{FOOTER.note}</div>
      </div>
    </footer>
  );
}
