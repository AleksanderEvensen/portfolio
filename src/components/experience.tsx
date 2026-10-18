import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { RouteMap } from "@/components/route-map";
import { SectionHeading } from "@/components/section-heading";
import { ROLES, text, type Role } from "@/data/profile";
import { cn } from "@/lib/utils";
import { m } from "@/paraglide/messages.js";
import { getLocale } from "@/paraglide/runtime.js";

const monthYearFormats = new Map<string, Intl.DateTimeFormat>();

function formatMonth(isoMonth: string) {
	const locale = getLocale();
	let format = monthYearFormats.get(locale);
	if (!format) {
		format = new Intl.DateTimeFormat(locale, {
			month: "short",
			year: "numeric",
			timeZone: "UTC",
		});
		monthYearFormats.set(locale, format);
	}
	return format.format(new Date(`${isoMonth}-01T00:00:00Z`));
}

export function Experience() {
	const listRef = useRef<HTMLOListElement>(null);
	const [scrolledTo, setScrolledTo] = useState(ROLES[0].id);
	const [hovered, setHovered] = useState<string | null>(null);
	const activeId = hovered ?? scrolledTo;
	const activeStop = ROLES.find((role) => role.id === activeId)?.stop;

	// The role crossing the middle of the viewport drives the map.
	useEffect(() => {
		const items = listRef.current?.querySelectorAll<HTMLElement>("[data-role]");
		if (!items) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const id = entry.target.getAttribute("data-role");
					if (entry.isIntersecting && id) setScrolledTo(id);
				}
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);
		for (const item of items) observer.observe(item);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="experience"
			aria-labelledby="experience-title"
			className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
		>
			<SectionHeading
				id="experience-title"
				index="01"
				kicker={m.section_experience()}
				title={m.experience_title()}
			>
				{m.experience_lede()}
			</SectionHeading>

			<div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
				<div className="lg:sticky lg:top-24 lg:self-start">
					<RouteMap active={activeStop} />
				</div>

				<ol ref={listRef} onMouseLeave={() => setHovered(null)}>
					{ROLES.map((role) => (
						<RoleItem
							key={role.id}
							role={role}
							active={role.id === activeId}
							onHover={() => setHovered(role.id)}
						/>
					))}
				</ol>
			</div>
		</section>
	);
}

function RoleItem({
	role,
	active,
	onHover,
}: {
	role: Role;
	active: boolean;
	onHover: () => void;
}) {
	return (
		<li
			data-role={role.id}
			onMouseEnter={onHover}
			className="group/role relative grid gap-x-8 gap-y-3 border-t py-7 first:border-t-0 first:pt-0 sm:grid-cols-[11.5rem_minmax(0,1fr)]"
		>
			<span
				aria-hidden="true"
				className={cn(
					"absolute -top-px start-0 h-0.5 w-12 bg-primary transition-opacity duration-150 ease-out group-first/role:hidden",
					active ? "opacity-100" : "opacity-0",
				)}
			/>
			<div className="kicker flex flex-wrap gap-x-3 gap-y-1 text-muted-foreground sm:flex-col">
				<p className="tabular-nums">
					<time dateTime={role.start} className="whitespace-nowrap">
						{formatMonth(role.start)}
					</time>
					{" – "}
					{role.end ? (
						<time dateTime={role.end} className="whitespace-nowrap">
							{formatMonth(role.end)}
						</time>
					) : (
						m.experience_present()
					)}
				</p>
				<p className={cn(active && "text-primary-text")}>{role.kind()}</p>
			</div>

			<div>
				<h3 className="text-xl leading-tight font-bold font-stretch-[112.5%]">
					{role.title()}
				</h3>
				<p className="mt-1 font-medium">{text(role.org)}</p>
				{role.location && (
					<p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
						<MapPin
							aria-hidden="true"
							className="size-4 shrink-0"
							strokeWidth={1.5}
							absoluteStrokeWidth
						/>
						{text(role.location)}
					</p>
				)}
				{role.summary && (
					<p className="mt-3 max-w-[60ch] text-pretty text-muted-foreground">
						{role.summary()}
					</p>
				)}
				{role.tags && (
					<ul className="mt-4 flex flex-wrap gap-2">
						{role.tags.map((tag) => (
							<li
								key={text(tag)}
								className="rounded-md bg-secondary px-2 py-0.5 text-sm text-secondary-foreground"
							>
								{text(tag)}
							</li>
						))}
					</ul>
				)}
			</div>
		</li>
	);
}
