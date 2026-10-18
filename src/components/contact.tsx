import { SiGithub, SiLinkedIn } from "@/components/icons/SimpleIcons";
import { Logo } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/data/profile";
import { m } from "@/paraglide/messages.js";

export function Contact() {
	return (
		<section
			id="contact"
			aria-labelledby="contact-title"
			className="relative isolate overflow-hidden border-t"
		>
			<div
				aria-hidden="true"
				className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_80%_at_20%_100%,black,transparent)]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-64 -start-40 -z-10 size-[40rem] rounded-full bg-[radial-gradient(closest-side,var(--primary-subtle),transparent)]"
			/>

			<div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
				<p className="kicker text-primary-text">
					<span className="tabular-nums">04</span>
					<span aria-hidden="true" className="text-muted-foreground">
						{" / "}
					</span>
					{m.section_contact()}
				</p>
				<h2
					id="contact-title"
					className="mt-6 text-callout font-extrabold wrap-break-word uppercase font-stretch-[125%]"
				>
					{m.contact_title()}
				</h2>
				<p className="mt-8 max-w-[34rem] text-lede text-pretty text-muted-foreground">
					{m.contact_lede()}
				</p>
				<div className="mt-9 flex flex-wrap gap-3">
					<a href={LINKS.linkedin} className={buttonVariants({ size: "lg" })}>
						<SiLinkedIn stroke="none" fill="currentColor" />
						{m.contact_linkedin()}
					</a>
					<a
						href={LINKS.github}
						className={buttonVariants({ variant: "outline", size: "lg" })}
					>
						<SiGithub stroke="none" fill="currentColor" />
						{m.contact_github()}
					</a>
				</div>
			</div>
		</section>
	);
}

export function SiteFooter() {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-8 text-sm text-muted-foreground sm:px-8">
				<p className="flex items-center gap-3">
					<Logo className="size-5 text-primary" />
					<span>
						© <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
						Aleksander Evensen
					</span>
				</p>
				<p>
					{m.footer_built_with()}{" "}
					<a href={LINKS.source} className="text-link">
						{m.footer_source()}
					</a>
				</p>
			</div>
		</footer>
	);
}
