import { i as __toESM } from "../_runtime.mjs";
import { G as require_jsx_runtime, K as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-qoin-Cj95EgV0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GITHUB = "https://github.com/FrosTether/Graysons-Wallet";
var NAV = [
	{
		href: "/",
		label: "Get Qoin",
		current: true
	},
	{
		href: "https://finux.tech/projects",
		label: "Projects",
		external: true
	},
	{
		href: "https://finux.tech/opensource",
		label: "Open source",
		external: true
	},
	{
		href: GITHUB,
		label: "GitHub",
		external: true
	},
	{
		href: "https://finux.tech/contact",
		label: "Contact",
		external: true
	}
];
function SiteFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl px-4 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "display inline-flex items-center gap-2.5 text-[1.375rem] no-underline hover:text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-alarm" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-lens" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-lamp" })
						]
					}), "finux"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]",
					"aria-label": "Site",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						"aria-current": item.current ? "page" : void 0,
						...item.external ? {
							target: "_blank",
							rel: "noopener noreferrer"
						} : {},
						className: "inline-flex min-h-11 items-center py-2 text-soft no-underline hover:text-ink hover:underline aria-[current=page]:text-ink aria-[current=page]:underline",
						children: item.label
					}, item.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule py-5 pb-10 text-sm text-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 max-w-md",
					children: "No token. No sale. No value is offered here."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 flex flex-wrap gap-x-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://finux.tech/",
							className: "text-soft",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "finux.tech"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: GITHUB,
							className: "text-soft",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "·"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://finux.tech/contact",
							className: "text-soft",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Contact"
						})
					]
				})]
			})
		]
	});
}
var REPO = "https://github.com/FrosTether/Graysons-Wallet";
var APK = "https://github.com/FrosTether/Graysons-Wallet/raw/main/releases/GraysonsWallet-0.3.0-poc.apk";
var APK_PAGE = "https://github.com/FrosTether/Graysons-Wallet/blob/main/releases/GraysonsWallet-0.3.0-poc.apk";
var SHA = "5594c078584f0e2a0edc6037b7f87f4044a89cd085eedae850cdfb436ca0694f";
var APPS = [
	{
		name: "Graysons Wallet",
		text: "Create or restore a wallet, claim a .frostchain name, and run your node."
	},
	{
		name: "Frostoise",
		text: "The tone-gated miner. It only hashes while the phone hears 7.83 Hz."
	},
	{
		name: "MyFrost",
		text: "Send and receive QOIN by @name. Transfers are public."
	}
];
var SPEC = [
	["Coin", "QOIN, 11 decimal places"],
	["Block time", "5 minutes, LWMA difficulty over 60 blocks"],
	["Proof of work", "double SHA-256"],
	["Block 1", "13,370.08241991 QOIN premine to jacobfrost.frostchain"],
	["Block reward", "(2⁶⁴ − coins mined so far) ÷ 2²⁰ × 1.5, about 263.86 QOIN at launch"],
	["Unlock", "Mined coins unlock after 12 blocks"],
	["Minimum fee", "0.0001 QOIN"],
	["Signatures", "LMS_SHA256_M32_H10 with LMOTS_SHA256_N32_W4 (RFC 8554), 1,024 per key, automatic rotation"],
	["Accounts", "Public, with optional .frostchain names"],
	["Resonance proof", "7.50–8.20 Hz, peak ≥ 10× noise, 4–60 s window, ≥ 200 samples at ≥ 16 Hz, at most 15 minutes old"],
	["P2P", "HTTP on TCP 7830, LAN discovery on UDP 7830"],
	["Genesis", "3 October 2026, 13:37 Eastern"]
];
var WAVE_PATH = (() => {
	const pts = [];
	for (let x = 0; x <= 640; x += 3) {
		const t = x / 640;
		const y = 50 - Math.sin(t * Math.PI * 16) * (.55 + .45 * Math.sin(t * Math.PI * 3.2)) * 34;
		pts.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`);
	}
	return pts.join(" ");
})();
function GetQoin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 rounded-[10px] border border-rule border-l-4 border-l-lamp bg-card px-3.5 py-3 text-[0.9375rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Proof of concept (v0.3.0)." }), " Graysons Wallet is software for a toy chain. QOIN has no guaranteed value. This page does not sell a token. Expect bugs and breaking changes."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "display mt-10 mb-4 text-[clamp(2.2rem,9vw,3.75rem)]",
			children: "Get Qoin"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-8 max-w-[34em] text-[clamp(1.0625rem,2.4vw,1.25rem)]",
			children: "Android wallet, node, and miner for Qoin on Frostchain, part of finux. One install is three apps. The build on GitHub is the reference."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "m-0 grid list-none gap-3 p-0 sm:grid-cols-3",
			children: APPS.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-rule p-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "m-0 mb-1.5 text-base font-semibold",
					children: app.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0 text-[0.9375rem] text-soft",
					children: app.text
				})]
			}, app.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 rounded-2xl bg-panel px-4 py-5 text-panel-ink sm:px-7 sm:py-7",
			"aria-labelledby": "download-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "download-title",
						className: "m-0 text-base font-semibold",
						children: "Download"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "m-0 inline-flex items-center gap-2 text-sm text-panel-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2 rounded-full bg-lamp shadow-[0_0_8px_rgba(255,178,56,0.7)]",
							"aria-hidden": "true"
						}), "v0.3.0 · Android 8.0 or newer"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "m-0 text-[0.95rem] text-panel-soft",
					children: [
						"Not on the Play Store. Your phone will ask you to allow installs from the browser. The file is",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mono-tight text-lamp",
							children: "GraysonsWallet-0.3.0-poc.apk"
						}),
						" in the repository. Check the hash after it lands."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: APK,
						className: "inline-flex min-h-11 items-center justify-center rounded-[10px] bg-magenta px-5 py-2.5 text-base font-semibold text-on-magenta no-underline shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)] hover:bg-magenta-hot hover:text-on-magenta",
						children: "Download the APK"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: APK_PAGE,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-11 items-center justify-center rounded-[10px] border border-panel-line px-4 py-2.5 text-base font-semibold text-panel-ink no-underline hover:text-lamp",
						children: "View the file on GitHub"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashLine, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section",
			children: "Tone mining"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-soft",
			children: "Frostoise mines only while it is locked on a 7.83 Hz signal, the Schumann resonance. You do not need special hardware. The microphone path needs the tone to pulse at least 5% deep."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "m-0 grid list-decimal gap-2 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Play a pulsed 7.83 Hz tone on a speaker near the phone. The button below does that." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Open ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Frostoise" }),
					", allow the microphone, and wait for",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mono-tight text-[0.85em]",
						children: "LOCKED · 7.83 Hz"
					}),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Tap ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Start mining" }),
					"."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToneBench, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-soft",
			children: "The proof is the phone’s own sensor report: a ritual and a speed bump, not a security guarantee. Blocks are secured by proof of work. This tone is not a health product, and no health claim is made about the frequency."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section",
			children: "Chain parameters"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-soft",
			children: "As built in v0.3.0. The emission curve follows CryptoNote and Wownero. Signatures and accounts do not."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "m-0",
			children: SPEC.map(([term, detail]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-0.5 border-t border-rule py-2.5 sm:grid-cols-[11rem_1fr] sm:gap-x-4 sm:items-baseline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-sm text-soft",
					children: term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "m-0",
					children: detail
				})]
			}, term))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section",
			children: "Honest limits"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "m-0 grid gap-2 pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No coin or token is offered for money, crypto, or donations. Donations elsewhere on finux are gifts and buy nothing." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "There are no ring signatures or stealth addresses, so transfers are public." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The app source is still being moved into the repository. Until then, the APK is the reference build." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Related drafts, not this download: the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://finux.tech/qoin",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Qoin wave demo"
					}),
					" ",
					"and the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://finux.tech/qoin/whitepaper",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "whitepaper"
					}),
					". Neither issues a token."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section",
			children: "Join the network"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Phones on the same Wi-Fi find each other. To reach anyone else, open",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Graysons Wallet → Node → Add" }),
			" and enter a public node’s address. That list was meant for GitHub Discussions. Discussions are not turned on for",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: REPO,
				target: "_blank",
				rel: "noopener noreferrer",
				children: "FrosTether/Graysons-Wallet"
			}),
			", so there is no list to read yet."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"License: GPL-3.0.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `${REPO}/blob/main/LICENSE`,
				target: "_blank",
				rel: "noopener noreferrer",
				children: "LICENSE"
			}),
			". Code and the rest of finux live at",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/FrosTether",
				target: "_blank",
				rel: "noopener noreferrer",
				children: "github.com/FrosTether"
			}),
			"."
		] })
	] });
}
function HashLine() {
	const hashRef = (0, import_react.useRef)(null);
	const [state, setState] = (0, import_react.useState)("idle");
	async function copy() {
		let copied = false;
		try {
			const write = navigator.clipboard.writeText(SHA);
			copied = await Promise.race([write.then(() => true).catch(() => false), new Promise((resolve) => window.setTimeout(() => resolve(false), 400))]);
		} catch {
			copied = false;
		}
		if (!copied) {
			const node = hashRef.current;
			if (node) {
				const range = document.createRange();
				range.selectNodeContents(node);
				const sel = window.getSelection();
				sel?.removeAllRanges();
				sel?.addRange(range);
			}
			try {
				copied = document.execCommand("copy");
			} catch {
				copied = false;
			}
		}
		setState(copied ? "copied" : "selected");
		window.setTimeout(() => setState("idle"), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 border-t border-panel-line pt-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 mb-1 text-sm text-panel-soft",
				children: "SHA-256"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				ref: hashRef,
				className: "mono-tight m-0 text-[0.72rem] leading-relaxed break-all text-lamp sm:text-[0.8125rem]",
				children: SHA
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: copy,
				className: "mt-2 inline-flex min-h-11 items-center rounded-[10px] border border-panel-line bg-transparent px-3 text-sm font-semibold text-panel-ink hover:text-lamp",
				children: state === "copied" ? "Copied" : state === "selected" ? "Hash selected" : "Copy hash"
			})
		]
	});
}
function Waveform({ playing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 640 100",
		className: "block h-[100px] w-full rounded-[10px] bg-lens",
		role: "img",
		"aria-label": playing ? "Pulsed tone playing" : "Idle tone waveform",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: WAVE_PATH,
			fill: "none",
			stroke: playing ? "var(--color-lamp)" : "var(--color-panel-soft)",
			strokeWidth: "1.75",
			vectorEffect: "non-scaling-stroke"
		})
	});
}
function ToneBench() {
	const rig = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		return () => rig.current?.stop();
	}, []);
	function stop() {
		rig.current?.stop();
		rig.current = null;
		setPlaying(false);
	}
	function toggle() {
		if (playing) {
			stop();
			return;
		}
		const ctx = new (window.AudioContext || window.webkitAudioContext)();
		const carrier = ctx.createOscillator();
		carrier.type = "sine";
		carrier.frequency.value = 196;
		const amp = ctx.createGain();
		amp.gain.value = .08;
		const lfo = ctx.createOscillator();
		lfo.frequency.value = 7.83;
		const lfoGain = ctx.createGain();
		lfoGain.gain.value = .05;
		lfo.connect(lfoGain);
		lfoGain.connect(amp.gain);
		carrier.connect(amp);
		amp.connect(ctx.destination);
		carrier.start();
		lfo.start();
		const halt = () => {
			try {
				carrier.stop();
				lfo.stop();
			} catch {}
			ctx.close();
		};
		rig.current = {
			ctx,
			stop: halt
		};
		setPlaying(true);
		window.setTimeout(() => {
			if (rig.current?.ctx === ctx) stop();
		}, 3e4);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-4 rounded-2xl bg-panel p-4 text-panel-ink sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waveform, { playing }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggle,
				className: "inline-flex min-h-11 items-center rounded-[10px] bg-magenta px-4 py-2.5 text-base font-semibold text-on-magenta shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)] hover:bg-magenta-hot",
				children: playing ? "Stop pulse" : "Play 7.83 Hz pulse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "m-0 text-sm text-panel-soft",
				children: playing ? "Playing · 196 Hz carrier, pulsed at 7.83 Hz. Stops itself after 30 seconds." : "Idle · speaker stays quiet until you press play."
			})]
		})]
	});
}
//#endregion
export { GetQoin as t };
