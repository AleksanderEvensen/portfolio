// Everything the page says about me lives here, so updating the portfolio
// means editing data, not markup. Sources: LinkedIn and GitHub, October 2026.
//
// Translatable text is stored as Paraglide message functions, not strings, so
// it is resolved in the current locale at render time. The copy itself lives
// in messages/{locale}.json.

import { m } from "@/paraglide/messages.js";

/** A message function, called during render to get text in the current locale. */
type Text = () => string;

export const LINKS = {
	site: "https://ahse.no",
	github: "https://github.com/AleksanderEvensen",
	linkedin: "https://www.linkedin.com/in/aleksander-evensen/",
	source: "https://github.com/AleksanderEvensen/portfolio",
} as const;

export type StopId = "moss" | "bardufoss" | "trondheim" | "oslo";

export const STOPS: ReadonlyArray<{
	id: StopId;
	name: string;
	years: string | Text;
}> = [
	{ id: "moss", name: "Moss", years: m.map_home },
	{ id: "bardufoss", name: "Bardufoss", years: "2023–24" },
	{ id: "trondheim", name: "Trondheim", years: "2024–" },
	{ id: "oslo", name: "Oslo", years: "2026" },
];

export type Role = {
	id: string;
	title: Text;
	org: string | Text;
	kind: Text;
	/** ISO year and month, as in "2026-05". */
	start: string;
	/** Omit while the role is ongoing. */
	end?: string;
	location?: string | Text;
	stop?: StopId;
	summary?: Text;
	tags?: Array<string | Text>;
};

export const ROLES: Role[] = [
	{
		id: "norsk-byggedata",
		title: m.role_byggedata_title,
		org: "Norsk Byggedata",
		kind: m.kind_internship,
		start: "2026-05",
		end: "2026-08",
		location: m.role_byggedata_location,
		stop: "oslo",
		summary: m.role_byggedata_summary,
		tags: [m.tag_data_pipelines, "Swift"],
	},
	{
		id: "texicon",
		title: m.role_texicon_title,
		org: "Texicon",
		kind: m.kind_consulting,
		start: "2024-10",
		end: "2026-04",
	},
	{
		id: "tihlde",
		title: m.role_tihlde_title,
		org: "TIHLDE · Index",
		kind: m.kind_volunteer,
		start: "2024-09",
		location: "Trondheim",
		stop: "trondheim",
		summary: m.role_tihlde_summary,
		tags: ["TypeScript", "React", "TanStack Start", "React Native"],
	},
	{
		id: "ntnu",
		title: m.role_ntnu_title,
		org: "NTNU",
		kind: m.kind_education,
		start: "2024-08",
		end: "2028-06",
		location: "Trondheim",
		stop: "trondheim",
		summary: m.role_ntnu_summary,
	},
	{
		id: "air-force",
		title: m.role_air_force_title,
		org: m.role_air_force_org,
		kind: m.kind_service,
		start: "2023-04",
		end: "2024-04",
		location: m.role_air_force_location,
		stop: "bardufoss",
		summary: m.role_air_force_summary,
	},
	{
		id: "sibus",
		title: m.role_sibus_title,
		org: "SIBUS",
		kind: m.kind_volunteer,
		start: "2021-09",
		end: "2022-02",
		summary: m.role_sibus_summary,
	},
];

export type Project = {
	name: string | Text;
	href: string;
	summary: Text;
	stack: string[];
	year: string;
	extra?: { label: Text; href: string };
};

export const FEATURED: Project & { platforms: string[]; icon: string } = {
	name: "Berth",
	href: "https://github.com/AleksanderEvensen/berth",
	summary: m.project_berth_summary,
	stack: ["Rust", "GPUI", "Docker"],
	year: "2026",
	platforms: ["Linux", "macOS", "Windows"],
	icon: "/images/berth.svg",
	extra: {
		label: m.project_berth_download,
		href: "https://github.com/AleksanderEvensen/berth/releases/latest",
	},
};

export const PROJECTS: Project[] = [
	{
		name: "openconnect-sso",
		href: "https://github.com/AleksanderEvensen/openconnect-sso",
		summary: m.project_openconnect_summary,
		stack: ["Rust"],
		year: "2026",
	},
	{
		name: "cnvs",
		href: "https://github.com/AleksanderEvensen/canvas-cli",
		summary: m.project_cnvs_summary,
		stack: ["Rust"],
		year: "2026",
	},
	{
		name: m.project_jvm_name,
		href: "https://github.com/AleksanderEvensen/zig-jvm",
		summary: m.project_jvm_summary,
		stack: ["Zig", "Rust"],
		year: "2024",
		extra: {
			label: m.project_jvm_rust_version,
			href: "https://github.com/AleksanderEvensen/Rusty-JVM",
		},
	},
	{
		name: "nRPC",
		href: "https://github.com/AleksanderEvensen/nRPC",
		summary: m.project_nrpc_summary,
		stack: ["TypeScript"],
		year: "2023",
	},
];

export const EXPERIMENTS: Project[] = [
	{
		name: "swai",
		href: "https://github.com/AleksanderEvensen/swai",
		summary: m.project_swai_summary,
		stack: ["Rust"],
		year: "2024",
	},
	{
		name: "quickjs-zig",
		href: "https://github.com/AleksanderEvensen/quickjs-zig",
		summary: m.project_quickjs_summary,
		stack: ["Zig"],
		year: "2025",
	},
	{
		name: "linux-rice",
		href: "https://github.com/AleksanderEvensen/linux-rice",
		summary: m.project_rice_summary,
		stack: ["QML", "Lua"],
		year: "2026",
	},
	{
		name: "cfd",
		href: "https://github.com/AleksanderEvensen/cfd",
		summary: m.project_cfd_summary,
		stack: ["Rust"],
		year: "2024",
	},
];

export const TOOLBOX: ReadonlyArray<{ group: Text; items: string[] }> = [
	{
		group: m.toolbox_languages,
		items: ["Rust", "Zig", "TypeScript", "Go", "C#", "Java", "Lua", "Python"],
	},
	{
		group: m.toolbox_web,
		items: ["React", "TanStack", "Vue", "Svelte", "Tailwind CSS"],
	},
	{
		group: m.toolbox_data,
		items: ["PostgreSQL", "SQLite", "Drizzle", "MySQL"],
	},
	{
		group: m.toolbox_platforms,
		items: ["Cloudflare Workers", "Docker", "Linux", "React Native"],
	},
];

// Parts list for the rocket drawing in the About section. The order matches
// the numbered balloons on the drawing.
export const OFF_THE_CLOCK: ReadonlyArray<{ part: Text; detail: Text }> = [
	{ part: m.part_payload, detail: m.part_payload_detail },
	{ part: m.part_avionics, detail: m.part_avionics_detail },
	{ part: m.part_propellant, detail: m.part_propellant_detail },
	{ part: m.part_chase_drone, detail: m.part_chase_drone_detail },
];

/** Resolves a field that is either fixed text or a message function. */
export function text(value: string | Text) {
	return typeof value === "function" ? value() : value;
}
