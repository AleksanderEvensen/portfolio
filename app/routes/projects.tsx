import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
    return [
        { title: "Aleksander Evensen" },
        { name: "description", content: "Software Developer from Norway" },
    ];
};

export default function Index() {
    return (
        <>
            {/* About Me Section */}
            <div
                id="aboutMe"
                className="w-[100vw] grid place-items-center scroll-mt-20"
            >
                <div className="w-[90vw] h-[calc(100vh)] bg-white/10">
                    <h1 className="font-space-mono text-3xl">
                        {"Projects Page"}
                    </h1>
                </div>
            </div>
        </>
    );
}
