import { useId } from "react";

import {
	CITY_POINTS,
	GRATICULE,
	NORWAY_LAND,
	NORWAY_VIEWBOX,
} from "@/data/norway-map";
import { STOPS, text, type StopId } from "@/data/profile";
import { cn } from "@/lib/utils";
import { m } from "@/paraglide/messages.js";

const { width: W, height: H } = NORWAY_VIEWBOX;

// Each leg bows to the right of its direction of travel, like a flight arc.
const ROUTE = STOPS.slice(1).reduce(
	(d, stop, i) => {
		const [x0, y0] = CITY_POINTS[STOPS[i].id];
		const [x1, y1] = CITY_POINTS[stop.id];
		const length = Math.hypot(x1 - x0, y1 - y0);
		const bow = length * 0.22;
		const cx = (x0 + x1) / 2 - ((y1 - y0) / length) * bow;
		const cy = (y0 + y1) / 2 + ((x1 - x0) / length) * bow;
		return `${d} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x1} ${y1}`;
	},
	`M${CITY_POINTS[STOPS[0].id].join(" ")}`,
);

// Moss and Oslo sit close together, so their labels split above and below.
// Bardufoss is labelled on its left so the label stays inside narrow screens.
const LABELS: Record<StopId, { side: "start" | "end"; align: string }> = {
	moss: { side: "end", align: "translate-y-0.5" },
	oslo: { side: "end", align: "-translate-y-[calc(100%+0.125rem)]" },
	trondheim: { side: "end", align: "-translate-y-1/2" },
	bardufoss: { side: "start", align: "-translate-y-1/2" },
};

export function RouteMap({ active }: { active?: StopId }) {
	const dotsId = `dots-${useId().replace(/[^\w-]/g, "")}`;

	return (
		<figure className="mx-auto w-full max-w-[24rem] lg:max-w-[min(100%,calc((100dvh-9rem)*0.81))]">
			<div className="relative" style={{ aspectRatio: `${W} / ${H}` }}>
				<svg
					viewBox={`0 0 ${W} ${H}`}
					aria-hidden="true"
					className="absolute inset-0 size-full"
				>
					<defs>
						<radialGradient id={`${dotsId}-fade`}>
							<stop offset="0.55" stopColor="white" />
							<stop offset="1" stopColor="black" />
						</radialGradient>
						<mask id={`${dotsId}-mask`}>
							<rect width={W} height={H} fill={`url(#${dotsId}-fade)`} />
						</mask>
						<pattern
							id={dotsId}
							width="5"
							height="5"
							patternUnits="userSpaceOnUse"
						>
							<circle
								cx="2.5"
								cy="2.5"
								r="1.15"
								style={{ fill: "var(--border-strong)" }}
							/>
						</pattern>
					</defs>

					<g
						fill="none"
						stroke="var(--border)"
						strokeWidth="0.75"
						mask={`url(#${dotsId}-mask)`}
					>
						{GRATICULE.map((line) => (
							<path key={line.label} d={line.d} />
						))}
					</g>

					<path d={NORWAY_LAND} fill={`url(#${dotsId})`} />
					<path
						d={NORWAY_LAND}
						fill="none"
						stroke="var(--border)"
						strokeWidth="0.6"
					/>

					<path
						d={ROUTE}
						fill="none"
						stroke="var(--primary)"
						strokeWidth="1.5"
						strokeDasharray="1 6"
						strokeLinecap="round"
					/>

					{STOPS.map((stop) => {
						const [x, y] = CITY_POINTS[stop.id];
						const isActive = stop.id === active;
						return (
							<g key={stop.id}>
								{isActive && (
									<circle
										key={`pulse-${stop.id}`}
										cx={x}
										cy={y}
										r="14"
										fill="var(--primary)"
										className="origin-center opacity-0 [transform-box:fill-box] motion-safe:animate-[stop-pulse_1.2s_ease-out_2]"
									/>
								)}
								<circle
									cx={x}
									cy={y}
									r={isActive ? 6 : 4}
									fill={isActive ? "var(--primary)" : "var(--background)"}
									stroke="var(--primary)"
									strokeWidth="2"
									className="transition-[r,fill] duration-150 ease-out"
								/>
							</g>
						);
					})}
				</svg>

				<ol className="absolute inset-0">
					{STOPS.map((stop, i) => {
						const [x, y] = CITY_POINTS[stop.id];
						const isActive = stop.id === active;
						const label = LABELS[stop.id];
						const left = label.side === "start";
						return (
							<li
								key={stop.id}
								className={cn(
									"absolute flex items-baseline gap-2 rounded-md border px-2 py-0.5 whitespace-nowrap transition-colors duration-150 ease-out",
									label.align,
									left && "-translate-x-full",
									isActive
										? "border-primary-border bg-primary-subtle text-foreground"
										: "border-transparent bg-background/90 text-muted-foreground",
								)}
								style={{
									left: `calc(${(x / W) * 100}% ${left ? "- 0.75rem" : "+ 0.75rem"})`,
									top: `${(y / H) * 100}%`,
								}}
							>
								<span className="sr-only">
									{m.map_stop({ number: i + 1 })}{" "}
								</span>
								<span className="text-sm font-semibold">{stop.name}</span>
								<span className="kicker tabular-nums">{text(stop.years)}</span>
							</li>
						);
					})}
				</ol>
			</div>
		</figure>
	);
}
