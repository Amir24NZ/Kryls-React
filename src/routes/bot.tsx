import { useCallback, type MouseEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BOT, SITE } from "@/lib/content";
import { LogoMark } from "@/components/logo";

type TelegramWebApp = {
  showPopup?: (
    params: {
      title: string;
      message: string;
      buttons: Array<{ id: string; type: string; text: string }>;
    },
    cb: (id: string) => void,
  ) => void;
  openLink?: (url: string) => void;
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

export const Route = createFileRoute("/bot")({
  head: () => ({
    meta: [{ title: "KRYLS Bot" }],
    scripts: [{ src: "https://telegram.org/js/telegram-web-app.js" }],
  }),
  component: BotPage,
});

function BotPage() {
  const onEmailClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const email = SITE.email;
    const subject = "KRYLS Support";
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}`;

    if (!(window.Telegram && window.Telegram.WebApp)) {
      return;
    }

    e.preventDefault();
    const tg = window.Telegram.WebApp;

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(email);
    }

    const message = `Email copied: ${email}\nIf the mail app didn't open, use one of these:`;

    if (typeof tg.showPopup === "function") {
      tg.showPopup(
        {
          title: "Contact KRYLS",
          message,
          buttons: [
            { id: "gmail", type: "default", text: "Open Gmail (web)" },
            { id: "outlook", type: "default", text: "Open Outlook (web)" },
            { id: "close", type: "cancel", text: "Close" },
          ],
        },
        (id) => {
          if (id === "gmail") tg.openLink?.(gmail);
          if (id === "outlook") tg.openLink?.(outlook);
        },
      );
    } else {
      alert(message);
      tg.openLink?.(gmail);
    }
  }, []);

  return (
    <div className="page-shell">
      <main className="bot-wrap" aria-label="KRYLS Bot Web App">
        <h1 className="title">
          {BOT.titleLead} <span className="title-grad">{BOT.titleAccent}</span>
        </h1>
        <p className="subtitle">{BOT.subtitle}</p>

        <section className="bot-section" aria-label="Support">
          <h2>{BOT.supportTitle}</h2>
          <p>{BOT.supportLead}</p>
          <div className="actions">
            <a
              className="btn btn-primary btn-wide"
              href={`mailto:${SITE.email}`}
              aria-label="Email support@kryls.com"
              id="emailBtn"
              onClick={onEmailClick}
            >
              {BOT.emailLabel}
            </a>
            <a
              className="btn btn-secondary btn-wide"
              href={BOT.telegramAdminHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message @krylsadmin"
            >
              {BOT.telegramAdminLabel}
            </a>
          </div>
          <div className="micro-note">{BOT.security}</div>
        </section>

        <section className="bot-section" aria-label="Connect">
          <h2>{BOT.connectTitle}</h2>
          <p>{BOT.connectLead}</p>
          <div className="actions">
            <a
              className="btn btn-primary btn-wide"
              href="https://kryls.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open kryls.com"
            >
              {BOT.openSite}
            </a>
            <a
              className="btn btn-secondary btn-wide"
              href="https://t.me/krylsglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open KRYLS Telegram account"
            >
              {BOT.telegramAccount}
            </a>
            <a
              className="btn btn-secondary btn-wide"
              href="https://x.com/krylsglobal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open KRYLS X account"
            >
              {BOT.xAccount}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer surface" aria-label="KRYLS Bot footer">
        <div className="footer-content">
          <div className="footer-left">
            <LogoMark />
          </div>
          <div className="font-extrabold tracking-tight lowercase opacity-90">{BOT.footerRight}</div>
        </div>
        <div className="footer-bottom">{BOT.copyright}</div>
      </footer>
    </div>
  );
}
