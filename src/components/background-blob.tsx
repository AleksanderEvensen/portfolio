import { useEffect, useState } from "react";
import { spline } from "@/lib/splinejs";
import { createNoise2D } from "simplex-noise";
import { ClientOnly } from "@tanstack/react-router";

const noise = createNoise2D();

function createPoints() {
    const points = [];
    // how many points do we need
    const numPoints = 12;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        // store the point's position
        points.push({
            x: x,
            y: y,
            // we need to keep a reference to the point's original point for when we modulate the values later
            originX: x,
            originY: y,
            // more on this in a moment!
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000,
        });
    }

    return points;
}

function map(
    n: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
): number {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

export default function BackgroundBlob({ className }: { className?: string }) {
    const [points, setPoints] = useState<[number, number][]>([]);
    const [hue, setHue] = useState(0);
    useEffect(() => {
        const _points = createPoints();

        for (let i = 0; i < _points.length; i++) {
            const point = _points[i];

            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

            const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
            const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

            point.x = x;
            point.y = y;
            point.noiseOffsetX += 0.001;
            point.noiseOffsetY += 0.001;
        }

        setPoints(_points.map((p) => [p.x, p.y]));
        setHue(Math.floor(Math.random() * 360));
    }, []);

    return (
        <ClientOnly>
            <svg
                viewBox="0 0 200 200"
                style={{
                    // @ts-expect-error No literal string type "why this error idk"
                    "--start-color": `hsl(${hue % 360}, 100%, 75%)`,
                    "--stop-color": `hsl(${(hue + 60) % 360}, 100%, 75%)`,
                    filter: "blur(42px)",
                }}
                className={className}
            >
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop
                        id="gradientStop1"
                        offset="0%"
                        stopColor="var(--start-color)"
                    />
                    <stop
                        id="gradientStop2 "
                        offset="100%"
                        stopColor="var(--stop-color)"
                    />
                </linearGradient>
                <path d={spline(points, 1, true)} fill="url('#gradient')"></path>
            </svg>
        </ClientOnly>
    );
}
