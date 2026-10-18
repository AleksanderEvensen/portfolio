import type { Register } from "@tanstack/react-router";
import {
	createServerEntry,
	createStartHandler,
	defaultStreamHandler,
} from "@tanstack/react-start/server";

import { paraglideMiddleware } from "./paraglide/server.js";

const handler = createStartHandler(defaultStreamHandler);

// Paraglide resolves the locale from the request URL and keeps it scoped to
// this request while it renders, including during prerendering. TanStack
// Router owns URL rewriting, so the original request is passed through.
export default createServerEntry<Register>({
	fetch(request, opts) {
		return paraglideMiddleware(request, () => handler(request, opts));
	},
});
