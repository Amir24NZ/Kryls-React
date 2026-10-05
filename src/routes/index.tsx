import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <SiteHeader />
      <Landing />
      <SiteFooter />
    </div>
  );
}
