## Vekkerklokke Legorobot

Semesterprosjektet i IDATT1004 gikk ut på å utvikle et sluttprodukt med kunnskapen fra [øvingsprosjektene](https://example.com/projects/lego), og det man har lært om smidig arbeidsmetoder, GANTT-diagramer og rapportskriving.

### Prosjektidéen

Vi gikk litt frem og tilbake på hva vi ønsket å lage. Det startet med en robot som balanserte seg selv på et hjul, men så tenkte vi på samfunnsnytten til det prosjektet. Etter litt idémyldring, så kom vi frem til å lage en vekkerklokke som kjører vekk, og tvinger eieren til å stå opp av sengen for å ikke forsove seg. I tillegg til å kjøre vekk, så ville vi være helt sikre på at brukeren blir helt våken, ved å droppe legoklosser som brukeren enten må tråkke på eller unngå.

### Prosessen

Vi startet prosjektet med å vurdere programmeringsspråk, først så var tanken at Micro Python ikke kunne kjøre kode på flere CPU-threads, og vi valgte derfor å starte med Java. Vi klarte å lage et eksempel der kode kjørte på flere threads, men fant raskt ut at JVMen på EV3 enhetene ikke var rask nok til å utføre instruksjoner. Vi valgte derfor å gjøre litt mere research og fant fort ut at det var mulig å kjøre Micro Python kode på flere CPU-threads. Prosjektet ble deretter delt inn i bevegelsesdelen (med robotklasse og movementsystemklasse) og menydelen (med menyklasse og klokkeklasse).

### Endelig produkt
