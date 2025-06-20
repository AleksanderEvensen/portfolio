import BackgroundBlob from "@/components/background-blob";
import { SiGithub, SiLinkedIn } from "@/components/icons/SimpleIcons";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
					{/* Left Sidebar */}
					<div className="w-full max-w-xs lg:w-64 flex-shrink-0 flex flex-col items-center lg:items-start">
						{/* Profile Picture with Blob */}
						<div className="mb-6 lg:mb-8 mx-auto relative">
							{/* Blob background */}
							<BackgroundBlob className="absolute scale-130 inset-0 w-full h-full -z-10" />
							<img
								src="/images/me.jpg"
								alt="Aleksander Evensen"
								className="w-40 h-52 sm:w-44 sm:h-56 lg:w-48 lg:h-64 rounded-lg object-cover border-4 relative z-10"
							/>
						</div>

						{/* Navigation */}
						<nav className="flex flex-row lg:flex-col gap-4 lg:space-y-4 lg:gap-0 w-full justify-center lg:justify-start">
							<Button asChild variant="outline">
								<a
									href="https://github.com/AleksanderEvensen"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center text-muted-foreground hover:text-foreground gap-2 font-medium text-sm sm:text-base"
								>
									<SiGithub
										className="w-5 h-5"
										stroke="none"
										fill="currentColor"
									/>
									<span className="hidden sm:inline">GitHub</span>
								</a>
							</Button>
							<Button asChild variant="outline">
								<a
									href="https://www.linkedin.com/in/aleksander-evensen/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm sm:text-base"
								>
									<SiLinkedIn
										className="w-5 h-5"
										stroke="none"
										fill="currentColor"
									/>
									<span className="hidden sm:inline">LinkedIn</span>
								</a>
							</Button>
						</nav>
					</div>

					{/* Main Content */}
					<div className="flex-1 w-full max-w-4xl">
						{/* Name Header */}
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
							Aleksander Evensen
						</h1>
						<h3 className="text-red-500 font-space-mono mb-4 text-center text-xl sm:text-2xl lg:text-3xl lg:text-left lg:mb-8">
							Software Developer
						</h3>

						{/* Bio Content */}
						<div className="space-y-6 lg:space-y-8 text-base sm:text-lg leading-relaxed px-2 sm:px-0">
							<section className="mb-8">
								<h2 className="text-2xl font-semibold mb-4">
									I am a self-taught programmer from Norway
								</h2>
								<div className="space-y-4 text-lg">
									<p>
										Hello, I'm Aleksander, a software developer from Norway.
										I've been passionate about technology and computers from an
										early age. Over the past few years, I've expanded my
										expertise to focus on backend and systems development.
										During this time, I've learned languages like Rust, Go, and
										Zig. In addition to my interests in software, I have a
										passion for space exploration and rocket technology. A dream
										of mine would be to work in both fields. Combining my love
										for software and complex systems with space technology. I'm
										currently working towards a bachelor's degree in Computer
										Engineering at NTNU in Trondheim, Norway.
									</p>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
