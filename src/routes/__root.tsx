import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "KRYLS Protocol";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: `${APP_NAME} — Automated Non‑Custodial Escrow` },
      {
        name: "description",
        content:
          "KRYLS is an automated, non-custodial escrow protocol for digital services on EVM networks. Deterministic settlement paths, auditable execution, and rule-based dispute handling.",
      },
      { name: "theme-color", content: "#020205" },
      { name: "application-name", content: "KRYLS" },
      { name: "color-scheme", content: "dark" },
      { name: "author", content: "KRYLS" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/k.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preload", href: "/fonts/inter-latin.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/k.webp", as: "image", type: "image/webp" },
    ],
  }),
  component: () => (
    <html lang="en" dir="ltr" className="dark antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg min-h-dvh font-sans">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
