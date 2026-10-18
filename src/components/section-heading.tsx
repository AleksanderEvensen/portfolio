import type { ReactNode } from "react";

export function SectionHeading({
	id,
	index,
	kicker,
	title,
	children,
}: {
	id: string;
	index: string;
	kicker: string;
	title: string;
	children?: ReactNode;
}) {
	return (
		<div className="grid gap-x-8 gap-y-4 border-t pt-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
			<p className="kicker text-primary-text">
				<span className="tabular-nums">{index}</span>
				<span aria-hidden="true" className="text-muted-foreground">
					{" / "}
				</span>
				{kicker}
			</p>
			<div>
				<h2
					id={id}
					className="text-title font-extrabold text-balance font-stretch-[112.5%]"
				>
					{title}
				</h2>
				{children && (
					<p className="mt-5 max-w-[38rem] text-lede text-pretty text-muted-foreground">
						{children}
					</p>
				)}
			</div>
		</div>
	);
}
