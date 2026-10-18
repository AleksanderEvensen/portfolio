import { useEffect, useId, useRef } from "react";
import { createNoise2D } from "simplex-noise";

import { spline } from "@/lib/splinejs";

const NUM_POINTS = 12;
const RADIUS = 75;
const WOBBLE = 20;
// The blob morphs after load and then settles. It stays under five seconds so
// the motion never needs a pause control.
const SETTLE_MS = 4500;
const SPEED = 0.0004;

// A seeded generator gives the server and the browser the same shape, so the
// blob is prerendered with the page instead of popping in after hydration.
function mulberry32(seed: number) {
	return () => {
		seed = (seed + 0x6d2b79f5) | 0;
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function createBlob(seed: number) {
	const random = mulberry32(seed);
	const noise = createNoise2D(random);
	const points = Array.from({ length: NUM_POINTS }, (_, i) => {
		const theta = ((i + 1) * Math.PI * 2) / NUM_POINTS;
		return {
			// Rounded so engines with different trig precision agree.
			x: Math.round((100 + Math.cos(theta) * RADIUS) * 100) / 100,
			y: Math.round((100 + Math.sin(theta) * RADIUS) * 100) / 100,
			offsetX: random() * 1000,
			offsetY: random() * 1000,
		};
	});

	return (time: number) =>
		spline(
			points.map((p): [number, number] => [
				p.x + noise(p.offsetX + time, p.offsetX + time) * WOBBLE,
				p.y + noise(p.offsetY + time, p.offsetY + time) * WOBBLE,
			]),
			1,
			true,
		);
}

const blobPath = createBlob(11);

export default function BackgroundBlob({ className }: { className?: string }) {
	const gradientId = `blob-${useId().replace(/[^\w-]/g, "")}`;
	const pathRef = useRef<SVGPathElement>(null);

	useEffect(() => {
		if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches)
			return;

		let frame = 0;
		let time = 0;
		const start = performance.now();
		let last = start;

		const tick = (now: number) => {
			const progress = Math.min(1, (now - start) / SETTLE_MS);
			time += SPEED * (1 - progress) ** 2 * (now - last);
			last = now;
			pathRef.current?.setAttribute("d", blobPath(time));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, []);

	return (
		<svg
			viewBox="0 0 200 200"
			aria-hidden="true"
			className={className}
			style={{ filter: "blur(42px)" }}
		>
			<linearGradient id={gradientId} gradientTransform="rotate(90)">
				<stop offset="0%" style={{ stopColor: "var(--primary)" }} />
				<stop offset="100%" style={{ stopColor: "var(--primary-border)" }} />
			</linearGradient>
			<path
				ref={pathRef}
				d={blobPath(0)}
				fill={`url(#${gradientId})`}
				suppressHydrationWarning
			/>
		</svg>
	);
}
