import { ParaglideMessage } from "@inlang/paraglide-js-react";

import { highlightMarkup } from "@/components/highlight";
import { RocketDrawing } from "@/components/rocket-drawing";
import { SectionHeading } from "@/components/section-heading";
import { OFF_THE_CLOCK, TOOLBOX } from "@/data/profile";
import { m } from "@/paraglide/messages.js";

export function About() {
	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24"
		>
			<SectionHeading
				id="about-title"
				index="03"
				kicker={m.section_about()}
				title={m.about_title()}
			/>

			<div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
				<div className="max-w-[26rem] max-lg:mx-auto max-lg:w-full">
					<RocketDrawing className="h-auto w-full" />
					<table className="mt-10 w-full">
						<caption className="kicker mb-4 text-start text-muted-foreground">
							{m.about_off_the_clock()}
						</caption>
						<thead>
							<tr className="kicker text-muted-foreground">
								<th scope="col" className="w-14 pb-2 text-start font-normal">
									{m.about_parts_number()}
								</th>
								<th scope="col" className="pb-2 text-start font-normal">
									{m.about_parts_part()}
								</th>
								<th scope="col" className="pb-2 text-start font-normal">
									{m.about_parts_detail()}
								</th>
							</tr>
						</thead>
						<tbody>
							{OFF_THE_CLOCK.map((item, i) => (
								<tr key={item.part()} className="border-t align-baseline">
									<td className="py-3 pe-4 font-mono text-sm text-primary-text tabular-nums">
										{String(i + 1).padStart(2, "0")}
									</td>
									<td className="py-3 pe-4 font-semibold">{item.part()}</td>
									<td className="py-3 text-pretty text-muted-foreground">
										{item.detail()}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div>
					<div className="max-w-[38rem] space-y-5 text-lede text-pretty text-muted-foreground">
						<p>
							<ParaglideMessage
								message={m.about_bio_intro}
								markup={highlightMarkup}
							/>
						</p>
						<p>{m.about_bio_now()}</p>
						<p>{m.about_bio_space()}</p>
					</div>

					<h3 className="kicker mt-14 text-muted-foreground">
						{m.about_toolbox()}
					</h3>
					<div className="mt-5 grid gap-x-10 gap-y-8 sm:grid-cols-2">
						{TOOLBOX.map((group) => (
							<div key={group.group()}>
								<h4 className="font-semibold">{group.group()}</h4>
								<ul className="mt-3 flex flex-wrap gap-2">
									{group.items.map((item) => (
										<li
											key={item}
											className="rounded-md bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
										>
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
