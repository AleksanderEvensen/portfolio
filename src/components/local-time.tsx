import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
	timeZone: "Europe/Oslo",
	hour: "2-digit",
	minute: "2-digit",
	hourCycle: "h23",
});

const subscribe = () => () => {};

/**
 * The current time in Norway. The page is prerendered at build time, so the
 * server renders an invisible placeholder of the same width and the browser
 * fills in the real time once it hydrates.
 */
export function LocalTime() {
	const hydrated = useSyncExternalStore(
		subscribe,
		() => true,
		() => false,
	);

	if (!hydrated) {
		return (
			<span aria-hidden="true" className="invisible tabular-nums">
				00:00
			</span>
		);
	}

	const now = new Date();
	return (
		<time dateTime={now.toISOString()} className="tabular-nums">
			{formatter.format(now)}
		</time>
	);
}
