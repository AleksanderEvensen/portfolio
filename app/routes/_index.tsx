import type { MetaFunction } from "@vercel/remix";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Blob from "~/components/Blob";

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
    const { t } = useTranslation();

    return (
        <>
            {/* Main Section */}
            <div className="w-full h-[100vh] grid place-items-center overflow-hidden">
                <div className="w-[50%] h-[50%] relative flex flex-col place-items-center">
                    <Blob className="z-[-1] absolute top-[-10%] left-[50%] translate-x-[-50%] w-[70%] h-[70%] min-w-[500px]" />
                    <img src="/me.jpg" className=" rounded-3xl w-48" alt="Me" />
                    <h1 className="text-center text-3xl font-space-mono mt-5">
                        Aleksander Evensen
                    </h1>
                    <h3 className="text-center text-xl text-red-500 font-space-mono">
                        {t("main.profession")}
                    </h3>
                    <div className="flex gap-4 m-5">
                        <a
                            className="bg-[#181717] hover:brightness-150 hover:scale-110 transition-all p-2 rounded-xl border-white/20 border-2"
                            href="https://github.com/AleksanderEvensen"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github />
                        </a>
                        <a
                            className="bg-[#0A66C2] hover:brightness-150 hover:scale-110 transition-all p-2 rounded-xl border-white/20 border-2"
                            href="https://www.linkedin.com/in/aleksander-evensen-70bb10303/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin />
                        </a>
                    </div>

                    <a
                        href="#aboutMe"
                        className="rounded-xl bg-white text-black flex gap-2 py-2 px-4 hover:bg-white/50 transition-colors"
                    >
                        <ArrowDown /> {t("main.aboutMe")}
                    </a>
                </div>
            </div>

            {/* About Me Section */}
            <div
                id="aboutMe"
                className="w-full grid place-items-center scroll-mt-20"
            >
                <div className="grid grid-cols-2">
                    <div>
                        <h2>About Me</h2>
                        <p>
                            Hi, my name is Aleksander. I am a software developer
                            from Moss, Norway.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
