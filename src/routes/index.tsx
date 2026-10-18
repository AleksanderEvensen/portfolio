import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/about";
import { Contact, SiteFooter } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<>
			<SiteHeader />
			<main id="main">
				<Hero />
				<Experience />
				<Projects />
				<About />
				<Contact />
			</main>
			<SiteFooter />
		</>
	);
}
