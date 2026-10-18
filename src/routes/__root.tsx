import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { LINKS } from "@/data/profile";
import { m } from "@/paraglide/messages.js";
import {
	getLocale,
	getTextDirection,
	locales,
	localizeHref,
} from "@/paraglide/runtime.js";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: m.meta_title(),
			},
			{
				name: "description",
				content: m.meta_description(),
			},
			{
				name: "theme-color",
				content: "#0a0c11",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png",
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Space+Mono:wght@400;700&display=swap",
			},
			// Tell search engines about every language version of the page.
			{
				rel: "canonical",
				href: `${LINKS.site}${localizeHref("/")}`,
			},
			...locales.map((locale) => ({
				rel: "alternate",
				hrefLang: locale,
				href: `${LINKS.site}${localizeHref("/", { locale })}`,
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: `${LINKS.site}/`,
			},
		],
	}),

	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
			<TanStackDevtools
				plugins={[
					{
						name: "TanStack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang={getLocale()} dir={getTextDirection()} className="dark">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
