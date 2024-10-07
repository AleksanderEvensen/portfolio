import { Link, NavLink } from "@remix-run/react";
import { RemixNavLinkProps } from "@remix-run/react/dist/components";
import { BookCopy, Globe, Home } from "lucide-react";
import { cn } from "~/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import * as Flags from "~/components/icons/Flags";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t, i18n } = useTranslation();

    // const currentLanguage = i18n.language == "no" ? "no" : "en";

    return (
        <header className="fixed top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 grid place-items-center">
            <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-20">
                <Link to="/" className="mx-4 flex items-center space-x-2">
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className="aspect-square h-10 text-white"
                    />
                    <span className="text-lg font-space-mono">
                        Aleksander Evensen
                    </span>
                </Link>
                <nav className="flex gap-10">
                    <NavElement
                        to={"/"}
                        className="[&.active-url]:underline underline-offset-8"
                    >
                        <Home />
                        <span className="text-lg font-dm-sans">
                            {t("navbar.home")}
                        </span>
                    </NavElement>
                    <NavElement
                        to={"/projects"}
                        className="[&.active-url]:underline underline-offset-8"
                    >
                        <BookCopy />
                        <span className="text-lg font-dm-sans">
                            {t("navbar.projects")}
                        </span>
                    </NavElement>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button
                                variant={"link"}
                                className="hover:text-red-500 transition-colors relative w-fit"
                            >
                                <Globe />
                                {/* {currentLanguage == "en" && (
                                    <Flags.AmericanFlag className="aspect-[4/3] h-3 absolute bottom-2 right-2" />
                                )}
                                {currentLanguage == "no" && (
                                    <Flags.NorwegianFlag className="aspect-[4/3] h-3 absolute bottom-2 right-2" />
                                )} */}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                                onClick={() => {
                                    i18n.changeLanguage("en");
                                }}
                            >
                                <Flags.AmericanFlag className="aspect-[4/3] h-5 mr-2" />
                                English
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => {
                                    i18n.changeLanguage("no");
                                }}
                            >
                                <Flags.NorwegianFlag className="aspect-[4/3] h-5 mr-2" />
                                Norwegian
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </div>
        </header>
    );
}

function NavElement(
    props: React.PropsWithChildren<
        RemixNavLinkProps & React.RefAttributes<HTMLAnchorElement>
    >
) {
    return (
        <NavLink
            {...props}
            className={({ isActive }) =>
                cn(
                    "flex items-center gap-2 hover:text-red-500 transition-colors",
                    props.className,
                    isActive && "active-url"
                )
            }
        >
            {props.children}
        </NavLink>
    );
}
