import { useId } from "react";

// A drafting-style elevation of a rocket, with a chase drone and a detail
// view of the fuel tank. Purely decorative: the numbered balloons match the
// rows of the parts list rendered next to it, which carries the content.

const outline = {
	fill: "none",
	stroke: "var(--muted-foreground)",
	strokeWidth: 1.5,
	strokeLinejoin: "round",
	strokeLinecap: "round",
} as const;

const thin = {
	fill: "none",
	stroke: "var(--border-strong)",
	strokeWidth: 0.75,
} as const;

const accent = {
	fill: "none",
	stroke: "var(--primary)",
	strokeWidth: 1.5,
	strokeLinecap: "round",
} as const;

/** Leader lines run from a dot on the part to a numbered balloon. */
const BALLOONS = [
	{ n: "01", at: [206, 96], from: [128, 151], to: [196, 103] },
	{ n: "02", at: [206, 232], from: [140, 232], to: [194, 232] },
	{ n: "03", at: [370, 404], from: [342, 378], to: [361, 396] },
	{ n: "04", at: [362, 50], from: [335, 71], to: [353, 58] },
] as const;

const ROTORS = [
	[278, 82],
	[322, 82],
	[278, 126],
	[322, 126],
] as const;

// 45° section hatching across the tank, clipped to the tank outline.
const HATCH = Array.from({ length: 22 }, (_, i) => {
	const x = 92 + i * 7;
	return `M${x} 316 L${x - 88} 404`;
}).join(" ");

export function RocketDrawing({ className }: { className?: string }) {
	const clipId = `tank-${useId().replace(/[^\w-]/g, "")}`;

	return (
		<svg viewBox="0 0 400 520" aria-hidden="true" className={className}>
			<defs>
				<clipPath id={clipId}>
					<rect x="92" y="316" width="56" height="88" />
				</clipPath>
			</defs>

			{/* Overall height dimension */}
			<g {...thin}>
				<path d="M114 30 H28 M94 480 H28 M36 38 V472" />
			</g>
			<path
				d="M36 30 L33 39 H39 Z M36 480 L33 471 H39 Z"
				fill="var(--border-strong)"
			/>

			{/* Rocket */}
			<path
				{...outline}
				fill="var(--card)"
				d="M92 384 L62 438 V452 L92 440 Z M148 384 L178 438 V452 L148 440 Z"
			/>
			<path
				{...outline}
				fill="var(--card)"
				d="M120 30 C133 46 148 78 148 120 V440 H92 V120 C92 78 107 46 120 30 Z"
			/>
			<rect
				x="92"
				y="262"
				width="56"
				height="14"
				{...thin}
				fill="var(--secondary)"
			/>
			<g {...thin}>
				<path d="M92 188 H148 M92 192 H148 M92 214 H148 M92 250 H148 M92 420 H148" />
				<rect x="92" y="316" width="56" height="88" />
				<path d={HATCH} clipPath={`url(#${clipId})`} />
			</g>
			<circle cx="120" cy="155" r="9" {...outline} fill="var(--background)" />
			<circle cx="120" cy="155" r="5" fill="var(--primary-subtle)" />
			<path
				transform="translate(106 282) scale(0.56)"
				fill="var(--primary)"
				d="M45.7796 38.9118L30.0315 10.0882C28.0629 5.97059 16.2519 5.9706 18.2204 10.0882L33.9685 38.9118C35.937 43.0294 47.748 43.0294 45.7796 38.9118Z M3.22836 38.8604L9.53428 30.1395C11.5739 25.9535 23.8113 25.9535 21.7717 30.1395L15.4658 38.8604C13.4263 43.0465 1.18888 43.0465 3.22836 38.8604Z"
			/>
			<path
				{...outline}
				fill="var(--card)"
				d="M117 396 H123 V454 H117 Z M98 440 H142 L138 450 H102 Z M108 450 C106 463 101 471 96 480 H144 C139 471 134 463 132 450 Z"
			/>
			<path
				{...accent}
				strokeDasharray="4 5"
				d="M108 488 L98 512 M120 488 V516 M132 488 L142 512"
			/>

			{/* Centre line drawn over the elevation, as on a real sheet */}
			<path {...thin} strokeDasharray="14 4 2 4" d="M120 14 V500" />

			{/* Chase drone, seen from above */}
			<path
				{...thin}
				strokeDasharray="3 4"
				d="M272 140 C240 176 200 168 168 124"
			/>
			<g>
				<path
					{...outline}
					strokeWidth={3}
					d="M278 82 L322 126 M322 82 L278 126"
				/>
				{ROTORS.map(([x, y]) => (
					<g key={`${x}-${y}`}>
						<circle cx={x} cy={y} r="17" {...thin} strokeDasharray="2 3" />
						<circle cx={x} cy={y} r="4" {...outline} fill="var(--card)" />
					</g>
				))}
				<rect
					x="290"
					y="92"
					width="20"
					height="24"
					rx="5"
					{...outline}
					fill="var(--card)"
				/>
				<circle cx="300" cy="92" r="3.5" fill="var(--primary)" />
			</g>

			{/* Detail view of the tank */}
			<circle cx="120" cy="360" r="16" {...thin} strokeDasharray="3 3" />
			<path {...thin} d="M136 358 L240.5 344" />
			<circle
				cx="300"
				cy="336"
				r="60"
				{...outline}
				strokeWidth={1}
				fill="var(--background)"
			/>
			<g {...outline}>
				<path d="M260 330 C262 360 282 374 300 374 C318 374 338 360 340 330" />
				<ellipse cx="300" cy="330" rx="40" ry="6" />
				<path d="M288 374 L291 381 H309 L312 374" />
				<path d="M312 326 L340 298 M318 328 L346 304" />
				<path
					strokeWidth={1}
					d="M322 316 C318 322 324 326 320 330 M328 312 C324 320 330 325 326 330"
				/>
				<path d="M276 330 A9 6 0 0 1 294 330" fill="var(--card)" />
			</g>
			<circle cx="285" cy="327.5" r="2.5" fill="var(--primary)" />
			<path
				{...thin}
				stroke="var(--muted-foreground)"
				strokeWidth={1}
				strokeLinecap="round"
				d="M282 318 C278 310 286 306 282 298 M294 316 C290 308 298 304 294 296 M306 318 C302 310 310 306 306 298"
			/>

			{/* Balloons */}
			{BALLOONS.map(({ n, at: [x, y], from, to }) => (
				<g key={n}>
					<path {...thin} d={`M${from.join(" ")} L${to.join(" ")}`} />
					<circle
						cx={from[0]}
						cy={from[1]}
						r="2"
						fill="var(--muted-foreground)"
					/>
					<circle
						cx={x}
						cy={y}
						r="12"
						fill="var(--background)"
						stroke="var(--primary)"
						strokeWidth="1.25"
					/>
					<text
						x={x}
						y={y}
						textAnchor="middle"
						dominantBaseline="central"
						fill="var(--primary-text)"
						className="font-mono text-[11px]"
					>
						{n}
					</text>
				</g>
			))}
		</svg>
	);
}
