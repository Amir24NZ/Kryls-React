import { i as __toESM } from "../_runtime.mjs";
import { G as require_react, K as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as WORKFLOW, S as STATE_PATHS, _ as PROTOCOL_LAYER, a as BrandLockup, b as SOCIALS, c as ENGAGEMENT, d as FOOTER, f as HERO, g as PRINCIPLES, h as NAV, l as ESCROW_INTERNALS, m as LogoMark, n as ARCH_CARDS, o as CAPABILITIES, p as HOW_IT_WORKS, r as ARCH_LAYERS, s as DISPUTE_FLOW, t as APP_LAYER, u as ESCROW_STACK, v as PROTOCOL_SECTIONS, x as STATES, y as SITE } from "./logo-DpKueGhA.mjs";
import { a as Scale, c as Layers, i as Shield, l as CircleCheck, o as MessagesSquare, r as Store, s as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CaZgdGM2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function KrylsOrb() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "orb",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb-sphere" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "orb-ring" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb-k",
				children: "K"
			})
		]
	});
}
function Icon({ id }) {
	if (id === "web") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "9",
				stroke: "currentColor",
				strokeWidth: "2",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3.5 12h17",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 3c3.2 3.5 3.2 14.5 0 18",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				opacity: "0.95"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 3c-3.2 3.5-3.2 14.5 0 18",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeLinecap: "round",
				opacity: "0.45"
			})
		]
	});
	if (id === "x") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 6L18 18",
			stroke: "currentColor",
			strokeWidth: "2.4",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M18 6L6 18",
			stroke: "currentColor",
			strokeWidth: "2.4",
			strokeLinecap: "round",
			opacity: "0.9"
		})]
	});
	if (id === "telegram") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M21 5L3.7 11.8c-.9.35-.86 1.64.06 1.94l4.7 1.55 1.8 5.3c.28.82 1.39.98 1.89.27l2.6-3.75 4.7 3.45c.74.55 1.79.14 1.99-.79L22 6.6C22.2 5.6 21.5 4.8 21 5Z",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M9 14.7l11.2-8.0",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			opacity: "0.9"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4.5 7.5h15v9h-15v-9Z",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4.7 7.8l7.3 5.6 7.3-5.6",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			opacity: "0.9"
		})]
	});
}
function SocialLinks({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: className ? `social-links ${className}` : "social-links",
		"aria-label": "Official links",
		children: SOCIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "social-link",
			href: item.href,
			target: item.href.startsWith("http") ? "_blank" : void 0,
			rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
			"aria-label": item.label,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: item.sr
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { id: item.id })]
		}, item.id))
	});
}
var CAP_ICONS = [
	Store,
	MessagesSquare,
	Shield,
	Layers,
	Scale,
	CircleCheck
];
function Rail({ nodes }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rail",
		role: "list",
		children: nodes.map((node, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "contents",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rail-node",
				role: "listitem",
				children: node
			}), i < nodes.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rail-arrow",
				"aria-hidden": "true",
				children: "→"
			}) : null]
		}, node))
	});
}
function ProtocolSection({ section }) {
	const intro = section.bullets.length ? section.paragraphs[0] : null;
	const rest = section.bullets.length ? section.paragraphs.slice(1) : section.paragraphs;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "card surface",
		id: section.id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "num",
			children: section.num
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "stitle",
			children: section.title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-body",
			children: [
				intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: intro }) : null,
				section.bullets.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: section.bullets.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) }) : null,
				rest.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p)),
				"emailLine" in section && section.emailLine ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"For inquiries, contact:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-link",
						href: `mailto:${SITE.email}`,
						children: SITE.email
					})
				] }) : null
			]
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "wrap hero-stage",
				"aria-label": "Protocol overview",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-grid relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "status-pill w-fit",
								"aria-label": "Launch status",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pulse-dot",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: HERO.launch })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "title",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "title-grad",
									children: HERO.title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "subtitle",
								children: HERO.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "quote",
								children: [HERO.quoteOff, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: HERO.quoteOn })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "chips",
								"aria-label": "Highlights",
								children: HERO.chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "chip",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: chip.lead }),
										" ",
										chip.rest
									]
								}, chip.lead))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "cta-col",
								"aria-label": "Primary action",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "btn btn-primary",
									href: SITE.inquiryMailto,
									"aria-label": "Email support",
									children: HERO.cta
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 md:mt-0",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KrylsOrb, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "wrap section cv",
				"aria-labelledby": "principles-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "What it is"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "principles-title",
							className: "section-title",
							children: "A non-custodial escrow protocol designed for digital services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-lead",
							children: "It provides the financial infrastructure required to move a digital engagement from Agreement → Funding → Execution → Approval → Settlement without requiring a centralized intermediary to control the escrowed funds."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid-principles mt-5",
							children: PRINCIPLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "principle surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })]
							}, item.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap section cv",
				"aria-labelledby": "layers-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Why it exists"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "layers-title",
						className: "section-title",
						children: "Application coordinates. Protocol settles."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-lead",
						children: "Traditional freelancing platforms place a large amount of trust in a centralized service. KRYLS separates the application layer from the financial settlement layer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "split mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "split-card panel surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: APP_LAYER.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: APP_LAYER.line }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tag-row",
									children: APP_LAYER.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: item
									}, item))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "split-card protocol panel surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: PROTOCOL_LAYER.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PROTOCOL_LAYER.line }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "tag-row",
									children: PROTOCOL_LAYER.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: item
									}, item))
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "how-it-works",
				className: "wrap section cv",
				"aria-labelledby": "how-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "how-title",
						className: "section-title",
						children: "From project to settlement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-lead",
						children: "Wallet-based identity, client / freelancer roles, and a project lifecycle that ends in on-chain settlement — not discretionary platform control."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { nodes: WORKFLOW })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flow mt-5",
						children: HOW_IT_WORKS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flow-step surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "n",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.text })
							]
						}, step.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "capabilities",
				className: "wrap section cv",
				"aria-labelledby": "cap-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Core capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "cap-title",
						className: "section-title",
						children: "The platform around the protocol"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-lead",
						children: "The protocol is surrounded by a Web3 application designed to make the underlying infrastructure usable."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cap-grid mt-5",
						children: CAPABILITIES.map((item, i) => {
							const Icon = CAP_ICONS[i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "cap surface",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "icon",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											size: 18,
											strokeWidth: 2
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })
								]
							}, item.title);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cap-grid mt-4",
						children: ENGAGEMENT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "cap surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })]
						}, item.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "escrow",
				className: "wrap section cv",
				"aria-labelledby": "escrow-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Non-custodial escrow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "escrow-title",
							className: "section-title",
							children: "The platform should coordinate the work — not own the money."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-lead",
							children: "The application coordinates the relationship. The protocol governs the settlement. Critical financial operations are represented by explicit protocol logic."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "stack stack-narrow mt-6",
							children: ESCROW_STACK.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "stack-layer",
								children: layer
							}, layer))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "escrow-box surface mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-dim mb-2 text-sm font-bold tracking-[0.14em]",
									children: "CLIENT → FUND"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "KRYLS ESCROW" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "internals",
									children: ESCROW_INTERNALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tag",
										children: item
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-dim mt-3 text-sm font-bold tracking-[0.14em]",
									children: "SETTLEMENT → FREELANCER"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "section-lead mt-5",
							children: [
								"Projects move through explicit states such as Created → Funded → Active → Completed, with additional paths for ",
								STATE_PATHS,
								". Invalid transitions are rejected by the protocol."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { nodes: STATES })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "architecture",
				className: "wrap section cv",
				"aria-labelledby": "arch-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "arch-title",
						className: "section-title",
						children: "App layer, protocol layer, EVM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-lead",
						children: "The escrow engine is built around several independent security boundaries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "arch-col mt-5",
						children: ARCH_LAYERS.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "arch-layer surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: layer.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: layer.text })]
						}, layer.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cap-grid mt-4",
						children: ARCH_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "cap surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: card.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.text })]
						}, card.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel surface mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-extrabold tracking-tight",
								children: "Dispute Resolution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-lead",
								children: "Disputes are a first-class part of the KRYLS architecture. The application currently coordinates dispute workflow as an MVP off-chain component. The escrow contract is designed with on-chain dispute hooks and is prepared for Kleros-compatible dispute flows."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rail, { nodes: DISPUTE_FLOW })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "note",
								children: "Messaging architecture is XMTP-ready. Optional XMTP toggles and on-chain message event patterns are part of the contract design — not a claim of live XMTP messaging today."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "networks",
				className: "wrap section cv",
				"aria-labelledby": "net-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-kicker",
						children: "Technology / network"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "net-title",
						className: "section-title",
						children: "Sepolia for escrow. Polygon for swap."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "net-grid mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "net-card panel surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Ethereum Sepolia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "path",
									children: "Ethereum Sepolia → KRYLS Escrow"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "On-chain escrow for digital-service engagements. Supported test assets: USDT · USDC · DAI." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "net-card panel surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Polygon" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "path",
									children: "Polygon → Swap"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Optional token-swap functionality designed for Polygon, using external liquidity sources. KRYLS does not control pricing, execution, or provide financial guarantees." })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "note",
						children: "Current deployments are intended for development and testing unless explicitly stated otherwise. Stack: Solidity · Node.js / Express · Ethers.js · ERC-20 · EVM."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "status",
				className: "wrap section cv",
				"aria-labelledby": "status-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-kicker",
							children: "Current project status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "status-title",
							className: "section-title",
							children: "Coming Soon · Pre-Production"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-lead",
							children: "From tested protocol → toward production-ready infrastructure. KRYLS has progressed beyond a basic escrow prototype, with a Web3 application layer, wallet-based identity, freelancing marketplace, project lifecycle management, client / freelancer roles, communication layer, on-chain escrow, milestone architecture, and dispute architecture."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "note",
							children: "Passing tests are not a security audit. Current results are evidence of engineering maturity and tested behavior — not a guarantee of absolute security."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-lead mt-4",
							children: "KRYLS is designed for clients, companies, service providers, and teams worldwide that require standardized settlement and dispute handling for digital service engagements."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "overview",
				className: "wrap section cv pb-2",
				"aria-label": "Overview sections",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cards-title",
					children: "Protocol overview (10 sections)"
				}), PROTOCOL_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtocolSection, { section }, section.id))]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer surface",
		"aria-label": "Site footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-title",
						children: FOOTER.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-sub",
						children: FOOTER.sub
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, { className: "mt-0" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-bottom",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: FOOTER.rights }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "opacity-75",
				children: FOOTER.note
			})]
		})]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "site-header glass-nav",
		"aria-label": "Site header",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "nav-links max-[899px]:hidden",
				"aria-label": "Page sections",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					children: item.label
				}, item.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "status-pill header-status",
					"aria-label": "Status",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pulse-dot",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coming Soon" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "menu-btn min-[900px]:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
				})]
			})
		]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		id: "mobile-nav",
		className: "mobile-panel surface",
		"aria-label": "Mobile sections",
		children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: item.href,
			onClick: () => setOpen(false),
			children: item.label
		}, item.href))
	}) : null] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip-link",
				href: "#top",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
