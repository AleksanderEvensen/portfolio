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
                    <section className="mx-auto max-w-2xl text-left">
                        <article className="[&_h2]:text-2xl [&_h2]:mt-6 [&_h3]:text-lg [&_h3]:my-3 [&_hr]:border-white/70 [&_hr]:my-7 [&_code]:bg-white/10 [&_code]:text-orange-300 flex flex-col gap-2 m-auto max-w-[1000px]">
                            <header>
                                <h1 className="text-3xl my-5">
                                    Programmering 1
                                </h1>
                            </header>
                            <p>
                                I programmering 1 har vi jobbet med mange ulike
                                øvinger som gir en god introduksjon til Java
                                programmeringsspråket. Her er en oppsummering av
                                hva vi har gjort i løpet av semesteret:
                            </p>
                            <h2 id="øving-1--grunnleggende-funksjoner-og-datatyper">
                                Øving 1 - Grunnleggende funksjoner og datatyper
                            </h2>
                            <p>
                                Denne øvingen introduserte oss til grunnleggende
                                funksjoner og datatyper. Vi startet med enkle
                                konverteringsprogrammer, som å bytte mellom
                                centimeter og tommer eller omregne tid fra
                                sekunder til timer og minutter. Gjennom disse
                                oppgavene fikk vi en forståelse for hvordan
                                funksjoner og klasseoppsett fungerer i Java.
                            </p>
                            <h2 id="øving-2--kontrollstrukturer-og-beregninger">
                                Øving 2 - Kontrollstrukturer og beregninger
                            </h2>
                            <p>
                                Her lærte vi om kontrollstrukturer som if-else
                                og hvordan vi kan bruke dem i praktiske
                                oppgaver. Vi implementerte en funksjon for å
                                sjekke om et år er et skuddår og sammenlignet
                                prisen på ulike varer basert på vekt og pris per
                                gram. Disse oppgavene la grunnlaget for å forstå
                                beregninger og beslutningstaking i koden.
                            </p>
                            <h2 id="øving-3--løkker-og-enkle-algoritmer">
                                Øving 3 - Løkker og enkle algoritmer
                            </h2>
                            <p>
                                I denne øvingen utforsket vi løkker og
                                algoritmer ved å skrive et program som genererer
                                en gangetabell for et tall valgt av brukeren. Vi
                                jobbet også med primtall, der vi utviklet en
                                funksjon for å sjekke om et tall er et primtall.
                                Dette hjalp oss med å forstå hvordan repetisjon
                                og logikk fungerer i kode, og det å ta input fra
                                brukeren.
                            </p>
                            <h2 id="øving-4--kontrollflyt-og-spillmekanikker">
                                Øving 4 - Kontrollflyt og spillmekanikker
                            </h2>
                            <p>
                                Vi gikk dypere inn i kontrollflyt med oppgaver
                                som valutakonvertering og et terningkastspill.
                                Spillet gikk ut på at to spillere kastet
                                terninger, og summen deres ble nullstilt dersom
                                de kastet en 6-er. Disse oppgavene ga oss en
                                praktisk innføring i if-else-strukturer og
                                while-løkker som i øving 3.
                            </p>
                            <h2 id="øving-5--klasser-og-objektorientert-programmering">
                                Øving 5 - Klasser og objektorientert
                                programmering
                            </h2>
                            <p>
                                Her fikk vi vår første introduksjon til klasser
                                og objektorientering. Vi lagde en brøkregner som
                                utførte matematiske operasjoner og fant laveste
                                fellesnevner. I tillegg utviklet vi en
                                egendefinert random-generator som kunne generere
                                tall og desimaler innenfor bestemte grenser.
                                Dette viste oss verdien av å bruke klasser for å
                                strukturere programmet, og bruke dem til å
                                kommunisere mellom hverandre.
                            </p>
                            <h2 id="øving-6--lister-og-matriser">
                                Øving 6 - Lister og matriser
                            </h2>
                            <p>
                                I denne øvingen jobbet vi med datastrukturer som
                                lister og matriser. Vi genererte tilfeldige
                                lister og analyserte hvor ofte en verdi forekom.
                                Videre skrev vi et program som analyserte tekst
                                for å finne unike tegn og gjentakelser, og vi
                                utviklet en matrise-klasse for matematiske
                                operasjoner. Dette styrket vår forståelse av
                                arrays og datastrukturhåndtering, og fikk bruke
                                det vi lærte i mattetimen i praksis.
                            </p>
                            <h2 id="øving-7--teksthåndtering">
                                Øving 7 - Teksthåndtering
                            </h2>
                            <p>
                                Vi fokuserte på tekstmanipulasjon gjennom
                                oppgaver som en NyString-klasse, der vi kunne
                                bytte ut eller forkorte ord. Vi analyserte også
                                tekster for å telle antall setninger, og regne
                                ut gjennomsnittlig ordlengde og setningslengde.
                                Disse oppgavene var nyttige for å lære
                                string-manipulasjon i Java.
                            </p>
                            <h2 id="øving-8--ansatt-håndtering">
                                Øving 8 - Ansatt-håndtering
                            </h2>
                            <p>
                                Her utviklet vi et system for å håndtere
                                ansattinformasjon. Programmet kunne beregne
                                lønn, skatt og alder basert på informasjon om
                                ansatte. Vi fikk også muligheten til å endre
                                skattesats og lønn. Denne øvingen introduserte
                                oss til objektorienterte konsepter som arv.
                            </p>
                            <h2 id="øving-9--student-og-oppgave-tracking">
                                Øving 9 - Student og oppgave-tracking
                            </h2>
                            <p>
                                I denne øvingen laget vi et system for å spore
                                studenters fullførte oppgaver. Ved å bruke
                                ArrayLists kunne vi holde oversikt over både
                                studenter og oppgaver, samt gi statistikk over
                                fullførte oppgaver. Dette var en nyttig øving
                                for å lære hvordan klasser kan samarbeide
                                gjennom relasjoner og metoder både for seg selv
                                og i lister.
                            </p>
                            <h2 id="øving-10--arrangement--og-restaurantstyring">
                                Øving 10 - Arrangement- og restaurantstyring
                            </h2>
                            <p>
                                Vi utviklet to større systemer i denne øvingen.
                                Det ene var et event management-system som
                                sorterte og filtrerte arrangementer etter sted,
                                dato og type. Det andre var et
                                restaurantmeny-system som håndterte retter og
                                menyer. Begge oppgavene ga oss praktisk erfaring
                                med datastrukturer, filtrering og bruk av enums
                                for å kategorisere data.
                            </p>
                            <h2 id="øving-11--eiendomsregister-eksamens-oppgave">
                                Øving 11 - Eiendomsregister (Eksamens oppgave)
                            </h2>
                            <p>
                                Den siste øvingen var også en eksamensoppgave,
                                der vi utviklet et kommunalt eiendomsregister
                                som kunne lagre og vise informasjon om
                                eiendommer, som kommunenummer og areal.
                                Programmet inkluderte søkefunksjonalitet og
                                beregning av gjennomsnittlig areal. Her
                                fokuserte vi på datahåndtering og mutable
                                collections for å gjøre programmet funksjonelt.
                            </p>
                            <hr />
                            <p>
                                Selv om oppgavene i Programmering 1 har vært
                                godt designet for å lære grunnleggende
                                programmeringskonsepter i Java, har jeg ikke
                                hatt et like stort læringsutbytte som mange
                                andre i faget. Jeg har allerede flere års
                                erfaring med både funksjonell og objektorientert
                                programmering, så mye av innholdet var kjent for
                                meg fra før og var mer repitisjon.
                            </p>
                            <p>
                                En av de mest givende delene av kurset var
                                muligheten til å hjelpe andre i klassen. Flere
                                av medstudentene mine hadde mindre erfaring med
                                programmering, og jeg var derfor til god nytte
                                ved å bidra med veiledning og støtte når de sto
                                fast. Gjennom denne prosessen fikk jeg også et
                                bedre innblikk i hvordan andre løste problemene,
                                og det utfordret meg til å forklare komplekse
                                konsepter på en enkel og forståelig måte.
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    );
}
