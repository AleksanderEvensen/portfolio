import { ParaglideMessage } from "@inlang/paraglide-js-react";
import { ArrowDown } from "lucide-react";

import BackgroundBlob from "@/components/background-blob";
import { highlightMarkup } from "@/components/highlight";
import { SiGithub, SiLinkedIn } from "@/components/icons/SimpleIcons";
import { LocalTime } from "@/components/local-time";
import { buttonVariants } from "@/components/ui/button";
import { LINKS } from "@/data/profile";
import { m } from "@/paraglide/messages.js";

export function Hero() {
	return (
		<section
			id="top"
			aria-labelledby="hero-title"
			className="relative isolate overflow-hidden"
		>
			<div
				aria-hidden="true"
				className="dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_75%_35%,black,transparent)]"
			/>

			{/*
			 * Everything below sizes from this container's width (cqi), so the
			 * name always fits on two lines and the portrait always lands in the
			 * space "Evensen" leaves on the second line.
			 */}
			<div className="@container mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 lg:pt-14 lg:pb-20">
				<div className="enter kicker flex flex-wrap justify-between gap-x-6 gap-y-1 text-muted-foreground">
					<p>{m.hero_location()}</p>
					<p>
						{m.hero_local_time()} <LocalTime />
					</p>
				</div>

				<p className="enter kicker mt-12 text-primary-text [--enter-step:1] lg:mt-16">
					{m.hero_role()}
				</p>
				<div className="relative mt-5 md:min-h-[39.5cqi]">
					<h1
						id="hero-title"
						className="text-hero font-extrabold wrap-break-word uppercase font-stretch-[125%]"
					>
						<span className="enter block [--enter-step:2]">Aleksander</span>
						<span className="enter block [--enter-step:3]">Evensen</span>
					</h1>

					<figure className="enter isolate mt-10 w-full max-w-56 [--enter-step:4] md:absolute md:end-0 md:top-[10.12cqi] md:mt-0 md:w-[22cqi] md:max-w-none">
						<BackgroundBlob className="pointer-events-none absolute inset-0 -z-10 size-full scale-150" />
						<img
							src="/images/portrait.jpg"
							width={720}
							height={1040}
							alt={m.hero_portrait_alt()}
							fetchPriority="high"
							className="aspect-3/4 w-full rounded-2xl object-cover outline -outline-offset-1 outline-white/10"
						/>
					</figure>

					<p className="enter mt-10 max-w-[36rem] text-lede text-pretty text-muted-foreground [--enter-step:5] md:max-w-[min(36rem,74cqi)] lg:mt-12">
						<ParaglideMessage message={m.hero_lede} markup={highlightMarkup} />
					</p>
					<div className="enter mt-9 flex flex-wrap gap-3 [--enter-step:6] md:pe-[26cqi]">
						<a href="#projects" className={buttonVariants({ size: "lg" })}>
							{m.hero_cta_projects()}
							<ArrowDown strokeWidth={2} absoluteStrokeWidth />
						</a>
						<a
							href={LINKS.github}
							className={buttonVariants({ variant: "outline", size: "lg" })}
						>
							<SiGithub stroke="none" fill="currentColor" />
							GitHub
						</a>
						<a
							href={LINKS.linkedin}
							className={buttonVariants({ variant: "outline", size: "lg" })}
						>
							<SiLinkedIn stroke="none" fill="currentColor" />
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
