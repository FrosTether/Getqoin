import { useEffect, useRef, useState } from "react";
import { SiteFrame } from "@/components/site-frame";

const REPO = "https://github.com/FrosTether/Graysons-Wallet";
const APK =
  "https://github.com/FrosTether/Graysons-Wallet/raw/main/releases/GraysonsWallet-0.3.0-poc.apk";
const APK_PAGE =
  "https://github.com/FrosTether/Graysons-Wallet/blob/main/releases/GraysonsWallet-0.3.0-poc.apk";
const SHA = "5594c078584f0e2a0edc6037b7f87f4044a89cd085eedae850cdfb436ca0694f";

const APPS = [
  {
    name: "Graysons Wallet",
    text: "Create or restore a wallet, claim a .frostchain name, and run your node.",
  },
  {
    name: "Frostoise",
    text: "The tone-gated miner. It only hashes while the phone hears 7.83 Hz.",
  },
  {
    name: "MyFrost",
    text: "Send and receive QOIN by @name. Transfers are public.",
  },
];

const SPEC: [string, string][] = [
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
  ["Genesis", "3 October 2026, 13:37 Eastern"],
];

const WAVE_PATH = (() => {
  const pts: string[] = [];
  for (let x = 0; x <= 640; x += 3) {
    const t = x / 640;
    const carrier = Math.sin(t * Math.PI * 16);
    const envelope = 0.55 + 0.45 * Math.sin(t * Math.PI * 3.2);
    const y = 50 - carrier * envelope * 34;
    pts.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`);
  }
  return pts.join(" ");
})();

export function GetQoin() {
  return (
    <SiteFrame>
      <p className="mt-8 rounded-[10px] border border-rule border-l-4 border-l-lamp bg-card px-3.5 py-3 text-[0.9375rem]">
        <strong>Proof of concept (v0.3.0).</strong> Graysons Wallet is software for a toy chain. QOIN has no
        guaranteed value. This page does not sell a token. Expect bugs and breaking changes.
      </p>

      <h1 className="display mt-10 mb-4 text-[clamp(2.2rem,9vw,3.75rem)]">Get Qoin</h1>
      <p className="mb-8 max-w-[34em] text-[clamp(1.0625rem,2.4vw,1.25rem)]">
        Android wallet, node, and miner for Qoin on Frostchain, part of finux. One install is three apps.
        The build on GitHub is the reference.
      </p>

      <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-3">
        {APPS.map((app) => (
          <li key={app.name} className="rounded-xl border border-rule p-3.5">
            <h2 className="m-0 mb-1.5 text-base font-semibold">{app.name}</h2>
            <p className="m-0 text-[0.9375rem] text-soft">{app.text}</p>
          </li>
        ))}
      </ul>

      <section className="mt-8 rounded-2xl bg-panel px-4 py-5 text-panel-ink sm:px-7 sm:py-7" aria-labelledby="download-title">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="download-title" className="m-0 text-base font-semibold">
            Download
          </h2>
          <p className="m-0 inline-flex items-center gap-2 text-sm text-panel-soft">
            <span className="size-2 rounded-full bg-lamp shadow-[0_0_8px_rgba(255,178,56,0.7)]" aria-hidden="true" />
            v0.3.0 · Android 8.0 or newer
          </p>
        </div>
        <p className="m-0 text-[0.95rem] text-panel-soft">
          Not on the Play Store. Your phone will ask you to allow installs from the browser. The file is{" "}
          <span className="mono-tight text-lamp">GraysonsWallet-0.3.0-poc.apk</span> in the repository. Check the
          hash after it lands.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={APK}
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-magenta px-5 py-2.5 text-base font-semibold text-on-magenta no-underline shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)] hover:bg-magenta-hot hover:text-on-magenta"
          >
            Download the APK
          </a>
          <a
            href={APK_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-panel-line px-4 py-2.5 text-base font-semibold text-panel-ink no-underline hover:text-lamp"
          >
            View the file on GitHub
          </a>
        </div>
        <HashLine />
      </section>

      <h2 className="section">Tone mining</h2>
      <p className="text-soft">
        Frostoise mines only while it is locked on a 7.83 Hz signal, the Schumann resonance. You do not need
        special hardware. The microphone path needs the tone to pulse at least 5% deep.
      </p>
      <ol className="m-0 grid list-decimal gap-2 pl-5">
        <li>Play a pulsed 7.83 Hz tone on a speaker near the phone. The button below does that.</li>
        <li>
          Open <strong>Frostoise</strong>, allow the microphone, and wait for{" "}
          <span className="mono-tight text-[0.85em]">LOCKED · 7.83 Hz</span>.
        </li>
        <li>
          Tap <strong>Start mining</strong>.
        </li>
      </ol>
      <ToneBench />
      <p className="text-sm text-soft">
        The proof is the phone’s own sensor report: a ritual and a speed bump, not a security guarantee.
        Blocks are secured by proof of work. This tone is not a health product, and no health claim is made
        about the frequency.
      </p>

      <h2 className="section">Chain parameters</h2>
      <p className="text-soft">As built in v0.3.0. The emission curve follows CryptoNote and Wownero. Signatures and accounts do not.</p>
      <dl className="m-0">
        {SPEC.map(([term, detail]) => (
          <div key={term} className="grid gap-0.5 border-t border-rule py-2.5 sm:grid-cols-[11rem_1fr] sm:gap-x-4 sm:items-baseline">
            <dt className="text-sm text-soft">{term}</dt>
            <dd className="m-0">{detail}</dd>
          </div>
        ))}
      </dl>

      <h2 className="section">Honest limits</h2>
      <ul className="m-0 grid gap-2 pl-5">
        <li>No coin or token is offered for money, crypto, or donations. Donations elsewhere on finux are gifts and buy nothing.</li>
        <li>There are no ring signatures or stealth addresses, so transfers are public.</li>
        <li>The app source is still being moved into the repository. Until then, the APK is the reference build.</li>
        <li>
          Related drafts, not this download: the{" "}
          <a href="https://finux.tech/qoin" target="_blank" rel="noopener noreferrer">
            Qoin wave demo
          </a>{" "}
          and the{" "}
          <a href="https://finux.tech/qoin/whitepaper" target="_blank" rel="noopener noreferrer">
            whitepaper
          </a>
          . Neither issues a token.
        </li>
      </ul>

      <h2 className="section">Join the network</h2>
      <p>
        Phones on the same Wi-Fi find each other. To reach anyone else, open{" "}
        <strong>Graysons Wallet → Node → Add</strong> and enter a public node’s address. That list was meant
        for GitHub Discussions. Discussions are not turned on for{" "}
        <a href={REPO} target="_blank" rel="noopener noreferrer">
          FrosTether/Graysons-Wallet
        </a>
        , so there is no list to read yet.
      </p>
      <p>
        License: GPL-3.0.{" "}
        <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">
          LICENSE
        </a>
        . Code and the rest of finux live at{" "}
        <a href="https://github.com/FrosTether" target="_blank" rel="noopener noreferrer">
          github.com/FrosTether
        </a>
        .
      </p>
    </SiteFrame>
  );
}

function HashLine() {
  const hashRef = useRef<HTMLParagraphElement>(null);
  const [state, setState] = useState<"idle" | "copied" | "selected">("idle");

  async function copy() {
    let copied = false;
    try {
      const write = navigator.clipboard.writeText(SHA);
      copied = await Promise.race([
        write.then(() => true).catch(() => false),
        new Promise<boolean>((resolve) => window.setTimeout(() => resolve(false), 400)),
      ]);
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

  return (
    <div className="mt-4 border-t border-panel-line pt-3">
      <p className="m-0 mb-1 text-sm text-panel-soft">SHA-256</p>
      <p ref={hashRef} className="mono-tight m-0 text-[0.72rem] leading-relaxed break-all text-lamp sm:text-[0.8125rem]">
        {SHA}
      </p>
      <button
        type="button"
        onClick={copy}
        className="mt-2 inline-flex min-h-11 items-center rounded-[10px] border border-panel-line bg-transparent px-3 text-sm font-semibold text-panel-ink hover:text-lamp"
      >
        {state === "copied" ? "Copied" : state === "selected" ? "Hash selected" : "Copy hash"}
      </button>
    </div>
  );
}

type AudioRig = { ctx: AudioContext; stop: () => void };

function Waveform({ playing }: { playing: boolean }) {
  return (
    <svg
      viewBox="0 0 640 100"
      className="block h-[100px] w-full rounded-[10px] bg-lens"
      role="img"
      aria-label={playing ? "Pulsed tone playing" : "Idle tone waveform"}
    >
      <path
        d={WAVE_PATH}
        fill="none"
        stroke={playing ? "var(--color-lamp)" : "var(--color-panel-soft)"}
        strokeWidth="1.75"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function ToneBench() {
  const rig = useRef<AudioRig | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
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
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const carrier = ctx.createOscillator();
    carrier.type = "sine";
    carrier.frequency.value = 196;
    const amp = ctx.createGain();
    amp.gain.value = 0.08;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 7.83;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.05;
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
      } catch {
        /* already stopped */
      }
      void ctx.close();
    };
    rig.current = { ctx, stop: halt };
    setPlaying(true);
    window.setTimeout(() => {
      if (rig.current?.ctx === ctx) stop();
    }, 30000);
  }

  return (
    <div className="my-4 rounded-2xl bg-panel p-4 text-panel-ink sm:p-6">
      <Waveform playing={playing} />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex min-h-11 items-center rounded-[10px] bg-magenta px-4 py-2.5 text-base font-semibold text-on-magenta shadow-[inset_0_-3px_0_rgba(0,0,0,0.25)] hover:bg-magenta-hot"
        >
          {playing ? "Stop pulse" : "Play 7.83 Hz pulse"}
        </button>
        <p className="m-0 text-sm text-panel-soft">
          {playing ? "Playing · 196 Hz carrier, pulsed at 7.83 Hz. Stops itself after 30 seconds." : "Idle · speaker stays quiet until you press play."}
        </p>
      </div>
    </div>
  );
}
