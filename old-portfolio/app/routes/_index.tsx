import type { MetaFunction } from "@vercel/remix";
import {
    ArrowDown,
    ArrowRight,
    Code,
    Database,
    Globe,
    Library,
    Smartphone,
} from "lucide-react";

import {
    SiGithub as Github,
    SiLinkedin as Linkedin,
    SiAndroid,
    SiCss3,
    SiDotnet,
    SiDrizzle,
    SiFlutter,
    SiGo,
    SiHtml5,
    SiJavascript,
    SiLua,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiRemix,
    SiRust,
    SiSass,
    SiSurrealdb,
    SiSvelte,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
    SiZig,
} from "~/components/icons/SimpleIcons";

import React, { createRef, useCallback } from "react";
import Blob from "~/components/Blob";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Aleksander Evensen" },
        { name: "description", content: "Software Developer from Norway" },
    ];
};

export const handle = {
    i18n: "common",
};

export default function Index() {
    const aboutRef = createRef<HTMLDivElement>();

    const gotoAbout = useCallback(() => {
        aboutRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [aboutRef]);

    return (
        <>
            {/* Main Section */}
            <div className="w-full h-[100vh] grid place-items-center overflow-hidden">
                <div className="w-[50%] h-[50%] relative flex flex-col place-items-center">
                    <Blob className="z-[-1] absolute top-[-10%] left-[50%] translate-x-[-50%] w-[70%] h-[70%] min-w-[500px]" />
                    <img
                        src="/images/me.jpg"
                        className=" rounded-3xl w-48"
                        alt="Me"
                    />
                    <h1 className="text-center text-3xl font-space-mono mt-5">
                        Aleksander Evensen
                    </h1>
                    <h3 className="text-center text-xl text-red-500 font-space-mono">
                        Software Developer
                    </h3>
                    <div className="flex gap-4 m-5">
                        <a
                            className="bg-[#181717] hover:brightness-150 hover:scale-110 transition-all p-2 rounded-xl border-white/20 border-2"
                            href="https://github.com/AleksanderEvensen"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github stroke="none" fill="currentColor" />
                        </a>
                        <a
                            className="bg-[#0A66C2] hover:brightness-150 hover:scale-110 transition-all p-2 rounded-xl border-white/20 border-2"
                            href="https://linkedin.com/in/aleksander-evensen"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin stroke="none" fill="currentColor" />
                        </a>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Button
                            onClick={gotoAbout}
                            className="rounded-xl flex gap-2"
                        >
                            <ArrowDown /> About Me
                        </Button>
                        <Button
                            className="rounded-xl flex gap-2"
                            variant={"secondary"}
                            asChild
                        >
                            <Link to="/projects">
                                My Projects <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <div
                    ref={aboutRef}
                    className="container max-w-screen-2xl place-items-center scroll-mt-20"
                >
                    <div className="grid md:grid-cols-2 gap-6 p-5 md:p-20 place-items-center">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                About Me
                            </h2>
                            <p>
                                {" "}
                                {`
                                Hello, I'm Aleksander, a software developer from
                                Moss, Norway. I've been passionate about
                                technology and computers from an early age,
                                starting to code at the age of 11. My journey in
                                web development began at 14, and over the past
                                few years, I've expanded my expertise to focus
                                on backend and systems development. During this
                                time, I've learned languages like Rust, Go, and
                                Zig. In addition to my interests in software, I
                                have a passion for space exploration and rocket
                                technology. A dream of mine would be to work in
                                both fields. Combining my love for software and
                                complex systems with space technology. I'm
                                currently working towards a bachelor's degree in
                                Computer Engineering at NTNU in Trondheim,
                                Norway.
                            `}
                            </p>
                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-2 aspect-square">
                            <img
                                className="rounded-xl col-span-3 object-cover h-full w-full place-items-stretch"
                                src="/images/aerial_photo_moss.jpg"
                                alt="Aerial view of Moss"
                            />
                            <img
                                className="rounded-xl object-cover h-full w-full place-items-stretch"
                                src="/images/helmetphoto.jpg"
                                alt="Me in a flight helmet"
                            />
                            <img
                                className="rounded-xl col-span-2 object-cover h-full w-full place-items-stretch"
                                src="/images/rocket-launch.jpg"
                                alt="Scenic view of a rocket launch|"
                            />
                        </div>
                    </div>
                </div>
                <div className="container max-w-screen-2xl grid scroll-mt-20 p-5 md:p-20">
                    <div className="grid gap-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">
                                Technologies I know / have used
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <TechCard
                                    icon={<Globe />}
                                    title="Web Development"
                                >
                                    <Tech
                                        icon={
                                            <SiHtml5
                                                stroke="none"
                                                fill="#E34F26"
                                            />
                                        }
                                        name="HTML"
                                    />
                                    <Tech
                                        icon={
                                            <SiJavascript
                                                stroke="none"
                                                fill="#F7DF1E"
                                            />
                                        }
                                        name="JavaScript"
                                    />
                                    <Tech
                                        icon={
                                            <SiCss3
                                                stroke="none"
                                                fill="#1572B6"
                                            />
                                        }
                                        name="CSS"
                                    />
                                    <Tech
                                        icon={
                                            <SiSass
                                                stroke="none"
                                                fill="#CC6699"
                                            />
                                        }
                                        name="Sass"
                                    />
                                    <Tech
                                        icon={
                                            <SiTailwindcss
                                                stroke="none"
                                                fill="#06B6D4"
                                            />
                                        }
                                        name="Tailwind CSS"
                                    />
                                </TechCard>

                                <TechCard icon={<Code />} title="Programming">
                                    <Tech
                                        icon={
                                            <SiTypescript
                                                stroke="none"
                                                fill="#3178C6"
                                            />
                                        }
                                        name="TypeScript"
                                    />
                                    <Tech
                                        icon={
                                            <SiRust
                                                stroke="none"
                                                fill="#f04900"
                                            />
                                        }
                                        name="Rust"
                                    />
                                    <Tech
                                        icon={
                                            <SiZig
                                                stroke="none"
                                                fill="#F7A41D"
                                            />
                                        }
                                        name="Zig"
                                    />
                                    {/* TODO: Find icon with correct colors */}
                                    <Tech
                                        icon={
                                            <SiPython
                                                stroke="none"
                                                fill="#3776AB"
                                            />
                                        }
                                        name="Python"
                                    />

                                    <Tech
                                        icon={
                                            <SiGo
                                                stroke="none"
                                                fill="#00ADD8"
                                            />
                                        }
                                        name="Go"
                                    />
                                    <Tech
                                        icon={
                                            <SiDotnet
                                                stroke="none"
                                                fill="#512BD4"
                                            />
                                        }
                                        name=".NET (C#)"
                                    />
                                    <Tech
                                        icon={
                                            <SiLua
                                                stroke="none"
                                                fill="#2C2D72"
                                            />
                                        }
                                        name="Lua"
                                    />
                                </TechCard>
                                <TechCard icon={<Library />} title="Frameworks">
                                    <Tech
                                        icon={
                                            <SiReact
                                                stroke="none"
                                                fill="#61DAFB"
                                            />
                                        }
                                        name="React"
                                    />
                                    <Tech
                                        icon={
                                            <SiVuedotjs
                                                stroke="none"
                                                fill="#4FC08D"
                                            />
                                        }
                                        name="Vue"
                                    />
                                    <Tech
                                        icon={
                                            <SiSvelte
                                                stroke="none"
                                                fill="#FF3E00"
                                            />
                                        }
                                        name="Svelte"
                                    />
                                    <Tech
                                        icon={
                                            <SiNextdotjs
                                                stroke="none"
                                                fill="#FFFFFF"
                                            />
                                        }
                                        name="Next.js"
                                    />
                                    {/* TODO: Replace this icon */}
                                    {/* <Tech
                                        icon={<SiVite color="#646CFF" />}
                                        name="Vite"
                                    /> */}
                                    <Tech
                                        icon={
                                            <SiRemix
                                                stroke="none"
                                                fill="#FFFFFF"
                                            />
                                        }
                                        name="Remix"
                                    />
                                </TechCard>

                                <TechCard
                                    icon={<Database />}
                                    title="Databases"
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex flex-auto gap-6 flex-wrap">
                                        <Tech
                                            icon={
                                                <SiMysql
                                                    stroke="none"
                                                    fill="#4479A1"
                                                />
                                            }
                                            name="MySQL"
                                        />
                                        <Tech
                                            icon={
                                                <SiPostgresql
                                                    stroke="none"
                                                    fill="#4169E1"
                                                />
                                            }
                                            name="PostgreSQL"
                                        />
                                        <Tech
                                            icon={
                                                <SiSurrealdb
                                                    stroke="none"
                                                    fill="#FF00A0"
                                                />
                                            }
                                            name="SurrealDB"
                                        />
                                        <Tech
                                            icon={
                                                <SiMongodb
                                                    stroke="none"
                                                    fill="#47A248"
                                                />
                                            }
                                            name="MongoDB"
                                        />
                                    </div>
                                    <Separator />
                                    <div className="flex flex-auto gap-6 flex-wrap">
                                        <Tech
                                            icon={
                                                <SiDrizzle
                                                    stroke="none"
                                                    fill="#C5F74F"
                                                />
                                            }
                                            name="Drizzle"
                                        />
                                        <Tech
                                            icon={
                                                <SiPrisma
                                                    stroke="none"
                                                    fill="#2D3748"
                                                />
                                            }
                                            name="Prisma"
                                        />
                                    </div>
                                </TechCard>

                                <TechCard
                                    icon={<Smartphone />}
                                    title="Mobile Development"
                                >
                                    <Tech
                                        icon={
                                            <SiReact
                                                stroke="none"
                                                fill="#61DAFB"
                                            />
                                        }
                                        name="React Native"
                                    />
                                    <Tech
                                        icon={
                                            <SiFlutter
                                                stroke="none"
                                                fill="#02569B"
                                            />
                                        }
                                        name="Flutter"
                                    />
                                    <Tech
                                        icon={
                                            <SiAndroid
                                                stroke="none"
                                                fill="#34A853"
                                            />
                                        }
                                        name="Android"
                                    />
                                </TechCard>

                                {/* 
                                
                                <TechItem
                                    icon={<Smartphone className="h-5 w-5" />}
                                    name="Mobile Dev"
                                    techs={["React Native", "Flutter", "Swift"]}
                                />
                                
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TechCard({
    title,
    icon,
    className,
    children,
}: React.PropsWithChildren<{
    title: string;
    icon: React.ReactNode;
    className?: string;
}>) {
    return (
        <Card>
            <CardHeader className="flex flex-row gap-3 font-medium">
                {icon}
                {title}
            </CardHeader>
            <CardContent
                className={className ?? "flex flex-auto gap-6 flex-wrap"}
            >
                {children}
            </CardContent>
        </Card>
    );
}

function Tech({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
        <div className="flex flex-row gap-3">
            {icon}
            <span className="text-muted-foreground">{name}</span>
        </div>
    );
}
