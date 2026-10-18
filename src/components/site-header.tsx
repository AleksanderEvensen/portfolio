import { SiGithub, SiLinkedIn } from "@/components/icons/SimpleIcons";
import { LINKS } from "@/data/profile";
import { cn } from "@/lib/utils";
import { m } from "@/paraglide/messages.js";
import {
	getLocale,
	locales,
	localizeHref,
	type Locale,
} from "@/paraglide/runtime.js";

const SECTIONS = [
	{ href: "#experience", label: m.section_experience },
	{ href: "#projects", label: m.section_projects },
	{ href: "#about", label: m.section_about },
	{ href: "#contact", label: m.section_contact },
];

// Language names are always shown in their own language.
const LANGUAGES: Record<Locale, { short: string; name: string }> = {
	en: { short: "EN", name: "English" },
	nb: { short: "NO", name: "Norsk" },
};

export function Logo({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 50 50"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M45.7796 38.9118L30.0315 10.0882C28.0629 5.97059 16.2519 5.9706 18.2204 10.0882L33.9685 38.9118C35.937 43.0294 47.748 43.0294 45.7796 38.9118Z" />
			<path d="M3.22836 38.8604L9.53428 30.1395C11.5739 25.9535 23.8113 25.9535 21.7717 30.1395L15.4658 38.8604C13.4263 43.0465 1.18888 43.0465 3.22836 38.8604Z" />
		</svg>
	);
}

const iconLink =
	"inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-[color,background-color] duration-150 ease-out hover:bg-accent hover:text-foreground";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
			<a
				href="#main"
				className="absolute start-4 top-3 z-50 -translate-y-24 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground focus-visible:translate-y-0"
			>
				{m.skip_to_content()}
			</a>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
				<a
					href="#top"
					className="flex items-center gap-3 rounded-md font-bold tracking-tight font-stretch-[112.5%]"
				>
					<Logo className="size-7 text-primary" />
					<span className="max-[28rem]:sr-only md:max-lg:sr-only">
						Aleksander Evensen
					</span>
				</a>

				<nav aria-label={m.nav_label()} className="hidden md:block">
					<ul className="flex items-center gap-8">
						{SECTIONS.map((section) => (
							<li key={section.href}>
								<a
									href={section.href}
									className="kicker rounded-sm text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground"
								>
									{section.label()}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="-me-2 flex items-center gap-1">
					<LanguageSwitcher />
					<a
						href={LINKS.github}
						aria-label={m.github_profile()}
						className={iconLink}
					>
						<SiGithub className="size-5" stroke="none" fill="currentColor" />
					</a>
					<a
						href={LINKS.linkedin}
						aria-label={m.linkedin_profile()}
						className={iconLink}
					>
						<SiLinkedIn className="size-5" stroke="none" fill="currentColor" />
					</a>
				</div>
			</div>
		</header>
	);
}

function LanguageSwitcher() {
	const current = getLocale();

	return (
		<nav aria-label={m.language_label()} className="me-2">
			<ul className="flex items-center rounded-lg border border-border-strong p-0.5">
				{locales.map((locale) => {
					const active = locale === current;
					return (
						<li key={locale}>
							<a
								href={localizeHref("/", { locale })}
								hrefLang={locale}
								lang={locale}
								aria-label={LANGUAGES[locale].name}
								aria-current={active ? "true" : undefined}
								className={cn(
									"kicker inline-flex h-8 min-w-9 items-center justify-center rounded-md px-2 transition-[color,background-color] duration-150 ease-out",
									active
										? "bg-primary-subtle text-primary-text"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{LANGUAGES[locale].short}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
