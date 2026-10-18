import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
	EXPERIMENTS,
	FEATURED,
	LINKS,
	PROJECTS,
	text,
	type Project,
} from "@/data/profile";
import { m } from "@/paraglide/messages.js";

const card =
	"group relative flex h-full flex-col rounded-2xl border border-transparent bg-card shadow-border transition-[background-color,box-shadow] duration-150 ease-out hover:bg-card-hover hover:shadow-border-hover";

const arrow =
	"size-5 shrink-0 text-muted-foreground transition-[color,translate] duration-150 ease-out group-hover:text-primary-text motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5";

export function Projects() {
	return (
		<section
			id="projects"
			aria-labelledby="projects-title"
			className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
		>
			<SectionHeading
				id="projects-title"
				index="02"
				kicker={m.section_projects()}
				title={m.projects_title()}
			>
				{m.projects_lede()}
			</SectionHeading>

			<ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<li className="md:col-span-2 lg:row-span-2">
					<FeaturedCard />
				</li>
				{PROJECTS.map((project) => (
					<li key={project.href}>
						<ProjectCard project={project} />
					</li>
				))}
				<li className="md:col-span-2 lg:col-span-1">
					<Experiments />
				</li>
			</ul>
		</section>
	);
}

function FeaturedCard() {
	return (
		<article className={`${card} isolate overflow-hidden p-6 sm:p-10`}>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -end-24 -top-32 -z-10 size-[30rem] rounded-full bg-[radial-gradient(closest-side,var(--primary-subtle),transparent)]"
			/>
			<div
				aria-hidden="true"
				className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_70%_at_85%_10%,black,transparent)]"
			/>

			<div className="flex items-start justify-between gap-6">
				<img
					src={FEATURED.icon}
					alt=""
					width={112}
					height={112}
					className="-ms-3 -mt-3 size-24 sm:size-28"
				/>
				<p className="kicker text-primary-text">
					{m.projects_featured()} ·{" "}
					<span className="tabular-nums">{FEATURED.year}</span>
				</p>
			</div>

			<div className="mt-auto pt-16 lg:pt-24">
				<h3 className="text-feature font-extrabold uppercase font-stretch-[125%]">
					<a
						href={FEATURED.href}
						className="card-link inline-flex items-center gap-3"
					>
						{text(FEATURED.name)}
						<ArrowUpRight
							aria-hidden="true"
							className={`${arrow} size-8`}
							strokeWidth={2.5}
							absoluteStrokeWidth
						/>
					</a>
				</h3>
				<p className="mt-4 max-w-[34rem] text-lede text-pretty text-muted-foreground">
					{FEATURED.summary()}
				</p>

				<dl className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-[auto_auto] sm:justify-start">
					<div>
						<dt className="kicker text-muted-foreground">
							{m.projects_built_with()}
						</dt>
						<dd className="mt-1 font-medium">{FEATURED.stack.join(", ")}</dd>
					</div>
					<div>
						<dt className="kicker text-muted-foreground">
							{m.projects_runs_on()}
						</dt>
						<dd className="mt-1 font-medium">
							{FEATURED.platforms.join(", ")}
						</dd>
					</div>
				</dl>

				{FEATURED.extra && (
					<a
						href={FEATURED.extra.href}
						className="text-link relative z-10 mt-8 inline-block font-semibold"
					>
						{FEATURED.extra.label()}
					</a>
				)}
			</div>
		</article>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<article className={`${card} p-6`}>
			<div className="kicker flex items-baseline justify-between gap-4 text-muted-foreground">
				<p>{project.stack.join(" · ")}</p>
				<p className="tabular-nums">{project.year}</p>
			</div>
			<h3 className="mt-10 text-2xl leading-tight font-bold tracking-[-0.01em] font-stretch-[112.5%]">
				<a
					href={project.href}
					className="card-link inline-flex items-start gap-2"
				>
					{text(project.name)}
					<ArrowUpRight
						aria-hidden="true"
						className={`${arrow} mt-1`}
						strokeWidth={2}
						absoluteStrokeWidth
					/>
				</a>
			</h3>
			<p className="mt-3 text-pretty text-muted-foreground">
				{project.summary()}
			</p>
			{project.extra && (
				<p className="mt-auto pt-5">
					<a
						href={project.extra.href}
						className="text-link relative z-10 font-semibold"
					>
						{project.extra.label()}
					</a>
				</p>
			)}
		</article>
	);
}

function Experiments() {
	return (
		<div className="flex h-full flex-col rounded-2xl border border-dashed border-border-strong p-6">
			<h3 className="kicker text-muted-foreground">
				{m.projects_experiments()}
			</h3>
			<ul className="mt-5 space-y-4">
				{EXPERIMENTS.map((project) => (
					<li key={project.href}>
						<a
							href={project.href}
							className="group flex items-start justify-between gap-4 rounded-md"
						>
							<span>
								<span className="font-semibold underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-150 ease-out group-hover:decoration-current">
									{text(project.name)}
								</span>
								<span className="block text-sm text-muted-foreground">
									{project.summary()}
								</span>
							</span>
							<span className="kicker shrink-0 pt-0.5 text-muted-foreground">
								{project.stack[0]}
							</span>
						</a>
					</li>
				))}
			</ul>
			<p className="mt-auto pt-6">
				<a
					href={`${LINKS.github}?tab=repositories`}
					className="text-link font-semibold"
				>
					{m.projects_all_repositories()}
				</a>
			</p>
		</div>
	);
}
