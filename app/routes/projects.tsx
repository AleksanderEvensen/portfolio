import type { MetaFunction } from "@vercel/remix";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export const meta: MetaFunction = () => {
    return [
        { title: "Aleksander Evensen" },
        { name: "description", content: "Software Developer from Norway" },
    ];
};

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const projects: Project[] = [
    {
        title: "Change Fuzzyfinder Directory (CFD)",
        description:
            "A cli application written in rust for navigating the filsystem with a fuzzyfinder.",
        imageUrl: "/images/banner/banner_cfd.svg",
        link: "https://github.com/AleksanderEvensen/cfd",
    },
    {
        title: "Rusty JVM",
        description:
            "A simple Java Virtual Machine written in Rust. Made for educational purposes, and as a learning process. The JVM is able to run a simple Hello World program, but thats about it.",
        imageUrl: "/images/banner/banner_rustyjvm.svg",
        link: "https://github.com/AleksanderEvensen/Rusty-JVM",
    },
    {
        title: "Native RPC (nRPC)",
        description:
            "A RPC library made as an wrapper around Cfx.re event listeners, for FiveM and RedM scripts. The first and so far only npm package that i have published.",
        imageUrl: "/images/banner/banner_nrpc.svg",
        link: "https://github.com/AleksanderEvensen/nRPC",
    },
    {
        title: "Portfolio",
        description:
            "The website you are currently on. Made with Remix.run, TailwindCSS and hosted on Vercel.",
        imageUrl: "/images/banner/banner_portfolio.svg",
        link: "https://github.com/AleksanderEvensen/portfolio",
    },
    {
        title: "RedM Norge",
        description:
            "A RedM server for the Cfx.re platform. The server is a roleplay server for norwegian players. Check out the website for more information.",
        imageUrl: "/images/banner/banner_redmno.png",
        link: "https://redmnorge.no/",
    },
];

const schoolProjects: Project[] = [
    {
        title: "Lego Mindstorm EV3 Robots",
        description:
            "The first year at NTNU we made Lego robots with the Lego Mindstorm EV3 kit. The project was a collaboration between me and 4 other students, and the robots were programmed in Python.",
        imageUrl: "/images/banner/banner_lego.png",
        link: "/projects/lego",
    },
];

export default function Index() {
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div className="container max-w-screen-2xl grid scroll-mt-20 p-5 md:p-20">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        My Highlighted Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <Button asChild>
                                        <a href={project.link}>View Project</a>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold text-center mt-20">
                        School Projects
                    </h2>
                    <p className="text-center text-muted-foreground mt-3 mb-8">
                        {
                            "These are some of the projects i have been working on durring my bachelor's degree at NTNU"
                        }
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schoolProjects.map((project, index) => (
                            <Card key={index} className="overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <Button asChild>
                                        <a href={project.link}>View Project</a>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
