import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Effect from "effect/Effect";

// Cache rules for the static asset layer (Cloudflare `_headers` syntax).
// Files under /assets are content-hashed, so browsers can keep them forever.
// HTML keeps Cloudflare's default (revalidate with an ETag) so a deploy is
// picked up immediately.
const headers = `
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800
`;

export const Website = Cloudflare.Website.Vite("Website", {
	assets: { headers },
});

export default Alchemy.Stack(
	"Portfolio",
	{
		providers: Cloudflare.providers(),
		state: Cloudflare.state(),
	},
	Effect.gen(function* () {
		const website = yield* Website;

		return {
			url: website.url.as<string>(),
		};
	}),
);
