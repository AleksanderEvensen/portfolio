import type { ReactNode } from "react";

/**
 * Renderer for `{#highlight}…{/highlight}` markup in messages: lifts a phrase
 * from the muted body color to the full foreground color.
 */
export const highlightMarkup = {
	highlight: ({ children }: { children?: ReactNode }) => (
		<span className="text-foreground">{children}</span>
	),
};
