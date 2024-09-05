import type { MetaFunction } from "@vercel/remix";
import { FaGithub } from "react-icons/fa";
import Blob from "~/components/Blob";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function Index() {
    return (
        <div className="w-svw h-svh grid place-items-center overflow-hidden">
            <div className="w-[50%] h-[50%] relative flex flex-col place-items-center">
                <Blob className="z-[-1] absolute top-0 left-[50%] translate-x-[-50%] w-[50%] h-[50%] min-w-[500px]" />
                <img src="/me.jpg" className=" rounded-3xl w-48" alt="Me" />
                <h1 className="text-center text-3xl font-space-mono">
                    Aleksander Evensen
                </h1>
                <h3 className="text-center text-xl text-red-500 font-space-mono mb-5">
                    Software Developer
                </h3>
                <div className="flex gap-4">
                    <a
                        className="font-dm-sans px-4 inline-flex items-center bg-[#FF6D33] rounded-full text-black/70 hover:text-black/90 hover:bg-[#FF6D33]/70 transition-colors"
                        href="https://github.com/AleksanderEvensen"
                    >
                        <FaGithub className="mr-1" /> GitHub
                    </a>
                    <Button
                        disabled
                        className="font-dm-sans px-4 bg-[#33FFCE] hover:bg-[#33FFCE]/70 rounded-full"
                    >
                        About Me
                    </Button>
                </div>
            </div>
        </div>
    );
}
