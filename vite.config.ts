import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";
import { lazyPlugins } from "vite-plus";

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
			".agents/**",
			".claude/**",
			"skills-lock.json",
		],
	},
	lint: {
		ignorePatterns: ["src/routeTree.gen.ts", ".agents/**", ".claude/**"],
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
		tailwindcss(),
		tanstackStart({
			pages: [{ path: "/", prerender: { enabled: true } }],
		}),
		viteReact(),
	]),
});

export default config;
