import { Link, NavLink } from "@remix-run/react";
import { RemixNavLinkProps } from "@remix-run/react/dist/components";
import { BookCopy, Home } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 grid place-items-center">
            <div className="container hidden md:flex h-20 max-w-screen-2xl items-center justify-between px-20">
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
                        <span className="text-lg font-dm-sans">Home</span>
                    </NavElement>
                    <NavElement
                        to={"/projects"}
                        className="[&.active-url]:underline underline-offset-8"
                    >
                        <BookCopy />
                        <span className="text-lg font-dm-sans">Projects</span>
                    </NavElement>
                </nav>
            </div>

            <div className="container md:hidden flex h-20 max-w-screen-2xl items-center justify-between px-5">
                <Link to="/" className="mx-4 flex items-center space-x-2">
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className="aspect-square h-10 text-white"
                    />
                    <span className="text-lg font-space-mono">Aleksander</span>
                </Link>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant={"ghost"}>
                            <svg
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M3 5H11"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M3 12H16"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M3 19H21"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-5">
                        <NavElement
                            to={"/"}
                            className="[&.active-url]:underline underline-offset-8"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Home />
                            <span className="text-lg font-dm-sans">Home</span>
                        </NavElement>
                        <NavElement
                            to={"/projects"}
                            className="[&.active-url]:underline underline-offset-8"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <BookCopy />
                            <span className="text-lg font-dm-sans">
                                Projects
                            </span>
                        </NavElement>
                    </SheetContent>
                </Sheet>
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
