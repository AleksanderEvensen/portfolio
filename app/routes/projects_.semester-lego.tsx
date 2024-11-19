import { Link } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
    return [
        { title: "Aleksander Evensen" },
        { name: "description", content: "Software Developer from Norway" },
    ];
};

export default function Index() {
    return (
        <>
            <div className="w-full flex flex-col items-center">
                <div className="container max-w-screen-2xl grid scroll-mt-20 p-5 md:px-20">
                    <Button
                        asChild
                        variant={"outline"}
                        className="bg-transparent flex flex-row text-muted-foreground gap-2 w-fit"
                    >
                        <Link to={"/projects"}>
                            <ArrowLeft /> Go back to projects
                        </Link>
                    </Button>

                    <section className="relative grid grid-cols-3 grid-rows-2 aspect-video w-full mt-8 place-items-stretch gap-2">
                        <img
                            src="/assets/semester-lego/robotback.png"
                            alt="Semester Project"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/semester-lego/robotdrop.png"
                            alt="Lego Mindstorm Obstacle Avoider"
                            className="object-cover w-full h-full rounded-lg col-span-2"
                        />
                        <img
                            src="/assets/semester-lego/robotside.png"
                            alt="Lego Mindstorm Obstacle Avoider angle 2"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/semester-lego/robotfront.png"
                            alt="Lego Mindstorm Square Roller"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/semester-lego/robottop.png"
                            alt="Lego Mindstorm Square Roller angle 2"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/50">
                            <h2 className="text-3xl font-bold text-center underline font-space-mono">
                                Semesterprosjekt IDATT1004
                            </h2>
                        </div>
                    </section>
                    <section className="[&_h2]:text-2xl [&_h2]:mt-6 [&_h2]:underline [&_h3]:text-lg [&_h3]:my-3 [&_h3]:underline [&_code]:bg-white/10 [&_code]:text-orange-300 flex flex-col gap-2 m-auto max-w-[1000px]">
                        <h2 id="vekkerklokke-legorobot">
                            Vekkerklokke Legorobot
                        </h2>
                        <p>
                            Semesterprosjektet i IDATT1004 gikk ut på å utvikle
                            et sluttprodukt med kunnskapen fra{" "}
                            <a href="https://example.com/projects/lego">
                                øvingsprosjektene
                            </a>
                            , og det man har lært om smidig arbeidsmetoder,
                            GANTT-diagramer og rapportskriving.
                        </p>
                        <h3 id="prosjektidéen">Prosjektidéen</h3>
                        <p>
                            Vi gikk litt frem og tilbake på hva vi ønsket å
                            lage. Det startet med en robot som balanserte seg
                            selv på et hjul, men så tenkte vi på samfunnsnytten
                            til det prosjektet. Etter litt idémyldring, så kom
                            vi frem til å lage en vekkerklokke som kjører vekk,
                            og tvinger eieren til å stå opp av sengen for å ikke
                            forsove seg. I tillegg til å kjøre vekk, så ville vi
                            være helt sikre på at brukeren blir helt våken, ved
                            å droppe legoklosser som brukeren enten må tråkke på
                            eller unngå.
                        </p>
                        <h3 id="prosessen">Prosessen</h3>
                        <p>
                            Vi startet prosjektet med å vurdere
                            programmeringsspråk, først så var tanken at Micro
                            Python ikke kunne kjøre kode på flere CPU-threads,
                            og vi valgte derfor å starte med Java. Vi klarte å
                            lage et eksempel der kode kjørte på flere threads,
                            men fant raskt ut at JVMen på EV3 enhetene ikke var
                            rask nok til å utføre instruksjoner. Vi valgte
                            derfor å gjøre litt mere research og fant fort ut at
                            det var mulig å kjøre Micro Python kode på flere
                            CPU-threads. Prosjektet ble deretter delt inn i
                            bevegelsesdelen (med robotklasse og
                            movementsystemklasse) og menydelen (med menyklasse
                            og klokkeklasse).
                        </p>
                        <h3 id="endelig-produkt">Endelig produkt</h3>
                        <div className="grid place-items-center">
                            <video controls className="aspect-square w-[50%]">
                                <track default kind="captions" />
                                <source
                                    src="/assets/semester-lego/result.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
