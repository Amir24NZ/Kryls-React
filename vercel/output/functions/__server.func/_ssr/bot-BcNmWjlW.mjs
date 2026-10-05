import { i as __toESM } from "../_runtime.mjs";
import { G as require_react, K as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as BOT, m as LogoMark, y as SITE } from "./logo-DpKueGhA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bot-BcNmWjlW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BotPage() {
	const onEmailClick = (0, import_react.useCallback)((e) => {
		const email = SITE.email;
		const subject = "KRYLS Support";
		const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
		const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}`;
		if (!(window.Telegram && window.Telegram.WebApp)) return;
		e.preventDefault();
		const tg = window.Telegram.WebApp;
		if (navigator.clipboard?.writeText) navigator.clipboard.writeText(email);
		const message = `Email copied: ${email}\nIf the mail app didn't open, use one of these:`;
		if (typeof tg.showPopup === "function") tg.showPopup({
			title: "Contact KRYLS",
			message,
			buttons: [
				{
					id: "gmail",
					type: "default",
					text: "Open Gmail (web)"
				},
				{
					id: "outlook",
					type: "default",
					text: "Open Outlook (web)"
				},
				{
					id: "close",
					type: "cancel",
					text: "Close"
				}
			]
		}, (id) => {
			if (id === "gmail") tg.openLink?.(gmail);
			if (id === "outlook") tg.openLink?.(outlook);
		});
		else {
			alert(message);
			tg.openLink?.(gmail);
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "bot-wrap",
			"aria-label": "KRYLS Bot Web App",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "title",
					children: [
						BOT.titleLead,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "title-grad",
							children: BOT.titleAccent
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "subtitle",
					children: BOT.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "bot-section",
					"aria-label": "Support",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: BOT.supportTitle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: BOT.supportLead }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "btn btn-primary btn-wide",
								href: `mailto:${SITE.email}`,
								"aria-label": "Email support@kryls.com",
								id: "emailBtn",
								onClick: onEmailClick,
								children: BOT.emailLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "btn btn-secondary btn-wide",
								href: BOT.telegramAdminHref,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": "Message @krylsadmin",
								children: BOT.telegramAdminLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "micro-note",
							children: BOT.security
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "bot-section",
					"aria-label": "Connect",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: BOT.connectTitle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: BOT.connectLead }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-primary btn-wide",
									href: "https://kryls.com",
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Open kryls.com",
									children: BOT.openSite
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-secondary btn-wide",
									href: "https://t.me/krylsglobal",
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Open KRYLS Telegram account",
									children: BOT.telegramAccount
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-secondary btn-wide",
									href: "https://x.com/krylsglobal",
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "Open KRYLS X account",
									children: BOT.xAccount
								})
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "site-footer surface",
			"aria-label": "KRYLS Bot footer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "footer-left",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-extrabold tracking-tight lowercase opacity-90",
					children: BOT.footerRight
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "footer-bottom",
				children: BOT.copyright
			})]
		})]
	});
}
//#endregion
export { BotPage as component };
