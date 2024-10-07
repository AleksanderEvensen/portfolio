import {
    json,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import "./tailwind.css";
import { LinksFunction, LoaderFunctionArgs } from "@vercel/remix";
import Navbar from "./components/Navbar";
import { cn } from "./lib/utils";
import i18next from "./i18next.server";
import { useTranslation } from "react-i18next";

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
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
];

export async function loader({ request }: LoaderFunctionArgs) {
    const locale = await i18next.getLocale(request);
    return json({ locale });
}

export const handle = {
    i18n: "common",
};

export function Layout({ children }: { children: React.ReactNode }) {
    const { locale } = useLoaderData<typeof loader>();
    const { i18n } = useTranslation();

    return (
        <html
            lang={locale}
            dir={i18n.dir()}
            className={cn("dark", "scroll-smooth")}
        >
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Navbar />
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
