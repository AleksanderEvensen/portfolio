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
                            src="/assets/lego/FinalRacer.jpg"
                            alt="Lego Mindstorm Line Follower"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/lego/ObstacleAvoider.jpg"
                            alt="Lego Mindstorm Obstacle Avoider"
                            className="object-cover w-full h-full rounded-lg col-span-2"
                        />
                        <img
                            src="/assets/lego/ObstacleAvoider2.jpg"
                            alt="Lego Mindstorm Obstacle Avoider angle 2"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/lego/SquareRoller.jpg"
                            alt="Lego Mindstorm Square Roller"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <img
                            src="/assets/lego/SquareRoller2.jpg"
                            alt="Lego Mindstorm Square Roller angle 2"
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/50">
                            <h2 className="text-3xl font-bold text-center underline font-space-mono">
                                Lego Mindstorm Prosjekt
                            </h2>
                        </div>
                    </section>

                    {/* Generated from docs/legoproject.md */}
                    <section className="[&_h2]:text-2xl [&_h2]:mt-6 [&_h2]:underline [&_h3]:text-lg [&_h3]:my-3 [&_h3]:underline [&_code]:bg-white/10 [&_code]:text-orange-300 flex flex-col gap-2 m-auto max-w-[1000px]">
                        <h2 id="gruppearbeid-i-teambasert-samhandling">
                            Gruppearbeid i Teambasert samhandling
                        </h2>
                        <p>
                            I det første semesteret i teambasert samhandling ble
                            vi delt inn i grupper for å lage Lego roboter. Målet
                            var å utvikle kompetanse innen samarbeid og smidige
                            arbeidsprosesser.
                        </p>
                        <p>
                            I prosjektet brukte vi verktøy som{" "}
                            <a href="https://git-scm.com/">Git</a> for
                            versjonskontroll og NTNUs Gitlab server til å hoste
                            filene vi produserte. I tillegg til kode utviklet vi
                            Wiki-sider ved hjelp av Markdown og GitLab sin
                            Wiki-funksjon.
                        </p>
                        <p>
                            Vi fikk også erfaring med å holde teammøter for å
                            diskutere både samholdet i teamet og hvordan vi
                            kunne jobbe sammen på en effektiv måte.
                        </p>
                        <h2 id="lego-prosjektene">Lego Prosjektene</h2>
                        <h3 id="øving-1-kjøre-i-en-firkant">
                            Øving 1: Kjøre i en firkant
                        </h3>
                        <p>
                            I denne øvingen skulle vi lage en robot som kjørte i
                            en &quot;perfekt&quot; firkant. Den skulle kjøre
                            rett frem i en forhåndsbestemt tid, snu 90 grader,
                            og gjenta dette tre ganger til.
                        </p>
                        <p>
                            I denne øvingen ble vi kjent med roboten og hvordan
                            man programmerer den i Python. Jeg brukte også tid
                            på å få alle på teamet til å bli kjent med Git og
                            grunnleggende konsepter som <code>branching</code>,{" "}
                            <code>merge conflicts</code>, og andre
                            versjonskontrollhandlinger som{" "}
                            <code>committing</code> og å sende endringer til og
                            fra Gitlab serveren.
                        </p>
                        <p>
                            Alt i alt var dette en ny opplevelse for mange på
                            teamet og en god start på prosjektarbeidet.
                        </p>
                        <h3 id="øving-2-unngå-hindringer">
                            Øving 2: Unngå hindringer
                        </h3>
                        <p>
                            I den neste øvingen skulle vi å måle avstanden til
                            objekter foran roboten ved hjelp av en ultrasonisk
                            sensor. Roboten skulle kjøre fremover som en
                            &quot;robotgressklipper&quot;, og når den møtte en
                            hindring, skulle den styre unna og fortsette videre.
                        </p>
                        <p>
                            Denne oppgaven krevde at vi jobbet med sensordata og
                            programmerte handlinger basert på informasjonen
                            roboten mottok. Det ga oss en god introduksjon til å
                            programmere dynamiske systemer som reagerer på
                            &quot;real-world data&quot;.
                        </p>
                        <p>
                            Vi hadde mange løsninger som hver og en av oss
                            presenterte for gruppen, og vi valgte til slutt å
                            kombinere de beste ideene til ett samlet produkt. En
                            av ideene var at roboten skulle stoppe ved et hinder
                            og &quot;scanne&quot; omgivelsene for å finne den
                            mest optimale veien videre. Dessverre fungerte dette
                            ikke dette som forventet, så vi endte med en enklere
                            løsning der roboten enten valgte en tilfeldig
                            retning eller en ferdig definert retning for å styre
                            unna hindringer.
                        </p>
                        <p>
                            Dette var en oppgave der vi ikke måtte være redd for
                            å prøve og feile. Vi møtte på utfordringer og måtte
                            tilpasse oss underveis.
                        </p>
                        <h3 id="øving-3-linjefølger">Øving 3: Linjefølger</h3>
                        <p>
                            I øving 3 skulle vi gjøre vårt første forsøk på den
                            klassiske linjefølger-roboten, kanskje den mest
                            kjente oppgaven innen Lego Mindstorm.
                        </p>
                        <p>
                            Til denne oppgaven brukte vi en fargesensor som
                            input for roboten. Vi innså raskt at én sensor ikke
                            var nok, da roboten trengte en sensor på hver side
                            av linjen for å kunne svinge både til høyre og
                            venstre. Dette er sikkert et problem som kunne løses
                            med en sensor, men vi endte med den enkleste
                            løsningen for gruppen.
                        </p>
                        <p>
                            Vår løsning ble den naive-metoden der roboten
                            svingte i retningen av den sensoren som oppdaget
                            linjen. Denne løsningen fungerte godt for denne
                            oppgaven, selv om den kanskje ikke var den raskeste
                            roboten.
                        </p>
                        <h3 id="øving-4-race">Øving 4 (Race)</h3>
                        <p>
                            Den siste øvingen, og kanskje den som mange hadde
                            ventet på, var et race der vi konkurrerte en mot en
                            på en bane for å se hvilken robot som kom først i
                            mål.
                        </p>
                        <p>
                            Banen var konstruert med et krysningspunkt og to
                            baner markert med svarte striper. Vi visste at den
                            naive-metoden ikke kunne gi oss den hastigheten vi
                            ønsket, så vi måtte gå tilbake til tegnebordet for å
                            finne en raskere løsning.
                        </p>
                        <p>
                            Det var da vi oppdaget PID (Proportional Integral
                            Derivative) kontrolleren. Denne metoden brukes ofte
                            i mekaniske systemer for å korrigere feilmarginer og
                            nå spesifike mål. Vi fant ut at dette også var
                            metoden de proffe brukte på sine lego roboter.
                            Implementeringen var relativt enkel, men det som tok
                            tid var å finjustere konstantene til PID
                            kontrolleren for å bevege seg raskest mulig, men
                            også ikke falle av linjen.
                        </p>
                        <p>
                            Til slutt endte vi opp med en rask og nøyaktig robot
                            som fulgte linjene nesten perfekt. Det vi derimot
                            ikke hadde lagt til var en måte å unngå
                            motstanderlaget sine hindringer i banen. Kankje det
                            å implementere logikken fra robot-gressklipperne
                            kunne vi fullført banen. Roboten våres endte ikke
                            opp med å vinne, men vi lærte mye av denne øvingen,
                            spesielt når det kom til å kontrollere roboter
                            basert på feilmarginer istedenfor å gjette seg frem
                            til hva som er riktig.
                        </p>
                        <p>Se videoen under for resultatet fra racet.</p>
                        <div className="grid place-items-center">
                            <video controls className="aspect-square w-[50%]">
                                <track default kind="captions" />
                                <source
                                    src="/assets/lego/lego-race.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <h2 id="noen-siste-ord">Noen siste ord</h2>
                        <p>
                            Alt i alt har disse øvingene vært lærerik på mange
                            måter. Jeg tok på meg rollen som &quot;lead
                            developer&quot; i prosjektene og hadde ansvar for å
                            lære opp de andre på gruppen i git og python. Siden
                            jeg allerede hadde mye erfaring med programmering,
                            kunne jeg hjelpe de andre der de trengte det, men
                            jeg lærte også mye av deres måte å løse problemene
                            på. Dette prosjekte lærte meg mye om det å jobbe med
                            flere personer med ulike kompetanser og erfaringer,
                            både innen programmering og det å jobbe i lag med
                            andre.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
