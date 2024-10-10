## Gruppearbeid i Teambasert samhandling
I det første semesteret i teambasert samhandling ble vi delt inn i grupper for å lage Lego roboter. Målet var å utvikle kompetanse innen samarbeid og smidige arbeidsprosesser.

I prosjektet brukte vi verktøy som [Git](https://git-scm.com/) for versjonskontroll og NTNUs Gitlab server til å hoste filene vi produserte. I tillegg til kode utviklet vi Wiki-sider ved hjelp av Markdown og GitLab sin Wiki-funksjon.

Vi fikk også erfaring med å holde teammøter for å diskutere både samholdet i teamet og hvordan vi kunne jobbe sammen på en effektiv måte.

## Lego Prosjektene

### Øving 1: Kjøre i en firkant
I denne øvingen skulle vi lage en robot som kjørte i en "perfekt" firkant. Den skulle kjøre rett frem i en forhåndsbestemt tid, snu 90 grader, og gjenta dette tre ganger til.

I denne øvingen ble vi kjent med roboten og hvordan man programmerer den i Python. Jeg brukte også tid på å få alle på teamet til å bli kjent med Git og grunnleggende konsepter som `branching`, `merge conflicts`, og andre versjonskontrollhandlinger som `committing` og å sende endringer til og fra Gitlab serveren.

Alt i alt var dette en ny opplevelse for mange på teamet og en god start på prosjektarbeidet.

### Øving 2: Unngå hindringer

I den neste øvingen skulle vi å måle avstanden til objekter foran roboten ved hjelp av en ultrasonisk sensor. Roboten skulle kjøre fremover som en "robotgressklipper", og når den møtte en hindring, skulle den styre unna og fortsette videre.

Denne oppgaven krevde at vi jobbet med sensordata og programmerte handlinger basert på informasjonen roboten mottok. Det ga oss en god introduksjon til å programmere dynamiske systemer som reagerer på "real-world data".

Vi hadde mange løsninger som hver og en av oss presenterte for gruppen, og vi valgte til slutt å kombinere de beste ideene til ett samlet produkt. En av ideene var at roboten skulle stoppe ved et hinder og "scanne" omgivelsene for å finne den mest optimale veien videre. Dessverre fungerte dette ikke dette som forventet, så vi endte med en enklere løsning der roboten enten valgte en tilfeldig retning eller en ferdig definert retning for å styre unna hindringer.

Dette var en oppgave der vi ikke måtte være redd for å prøve og feile. Vi møtte på utfordringer og måtte tilpasse oss underveis.

### Øving 3: Linjefølger

I øving 3 skulle vi gjøre vårt første forsøk på den klassiske linjefølger-roboten, kanskje den mest kjente oppgaven innen Lego Mindstorm.

Til denne oppgaven brukte vi en fargesensor som input for roboten. Vi innså raskt at én sensor ikke var nok, da roboten trengte en sensor på hver side av linjen for å kunne svinge både til høyre og venstre. Dette er sikkert et problem som kunne løses med en sensor, men vi endte med den enkleste løsningen for gruppen.

Vår løsning ble den naive-metoden der roboten svingte i retningen av den sensoren som oppdaget linjen. Denne løsningen fungerte godt for denne oppgaven, selv om den kanskje ikke var den raskeste roboten.

### Øving 4 (Race)

Den siste øvingen, og kanskje den som mange hadde ventet på, var et race der vi konkurrerte en mot en på en bane for å se hvilken robot som kom først i mål.

Banen var konstruert med et krysningspunkt og to baner markert med svarte striper. Vi visste at den naive-metoden ikke kunne gi oss den hastigheten vi ønsket, så vi måtte gå tilbake til tegnebordet for å finne en raskere løsning.

Det var da vi oppdaget PID (Proportional Integral Derivative) kontrolleren. Denne metoden brukes ofte i mekaniske systemer for å korrigere feilmarginer og nå spesifike mål. Vi fant ut at dette også var metoden de proffe brukte på sine lego roboter. Implementeringen var relativt enkel, men det som tok tid var å finjustere konstantene til PID kontrolleren for å bevege seg raskest mulig, men også ikke falle av linjen.

Til slutt endte vi opp med en rask og nøyaktig robot som fulgte linjene nesten perfekt. Det vi derimot ikke hadde lagt til var en måte å unngå motstanderlaget sine hindringer i banen. Kankje det å implementere logikken fra robot-gressklipperne kunne vi fullført banen. Roboten våres endte ikke opp med å vinne, men vi lærte mye av denne øvingen, spesielt når det kom til å kontrollere roboter basert på feilmarginer istedenfor å gjette seg frem til hva som er riktig.

Se videoen under for resultatene fra racet.


### Noen siste ord

Alt i alt har disse øvingene vært lærerik på mange måter. Jeg tok på meg rollen som "lead developer" i prosjektene og hadde ansvar for å lære opp de andre på gruppen i git og python. Siden jeg allerede hadde mye erfaring med programmering, kunne jeg hjelpe de andre der de trengte det, men jeg lærte også mye av deres måte å løse problemene på. Dette prosjekte lærte meg mye om det å jobbe med flere personer med ulike kompetanser og erfaringer, både innen programmering og det å jobbe i lag med andre.