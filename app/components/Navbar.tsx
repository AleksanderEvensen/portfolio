import { Link, NavLink } from "@remix-run/react";
import { RemixNavLinkProps } from "@remix-run/react/dist/components";
import { BookCopy, Home } from "lucide-react";
import { cn } from "~/lib/utils";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 grid place-items-center">
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
