import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";
import { lazyPlugins } from "vite-plus";

import inlang from "./project.inlang/settings.json" with { type: "json" };

// One prerendered page per locale: the base locale at "/" and every other
// locale under its own prefix, matching Paraglide's default URL routing.
const localizedPages = inlang.locales.map((locale) => ({
	path: locale === inlang.baseLocale ? "/" : `/${locale}/`,
	prerender: { enabled: true },
}));

const config = defineConfig({
	staged: {
		"*": "vp check --fix",
	},
	fmt: {
		useTabs: true,
		printWidth: 80,
		sortImports: true,
		ignorePatterns: [
			"src/routeTree.gen.ts",
			"src/paraglide/**",
			".agents/**",
			".claude/**",
			"skills-lock.json",
		],
	},
	lint: {
		ignorePatterns: [
			"src/routeTree.gen.ts",
			"src/paraglide/**",
			".agents/**",
			".claude/**",
		],
		jsPlugins: [
			{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" },
			{ name: "shadcn", specifier: "@shadcn/lint" },
		],
		rules: { "vite-plus/prefer-vite-plus-imports": "error" },
		options: { typeAware: true, typeCheck: true },
	},
	resolve: {
		tsconfigPaths: true,
	},
	plugins: lazyPlugins(() => [
		// Must come first. Console piping is off because Vite+ already forwards
		// browser logs to the terminal, and the two together echo endlessly.
		devtools({ consolePiping: { enabled: false } }),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/paraglide",
			emitTsDeclarations: true,
			// The site is served as static files, so the URL alone decides the
			// locale. Anything without a locale prefix is the base locale.
			strategy: ["url", "baseLocale"],
		}),
		tailwindcss(),
		tanstackStart({ pages: localizedPages }),
		viteReact(),
	]),
});

export default config;
