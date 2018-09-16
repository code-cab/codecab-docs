# Fouten opsporen

Tijd voor de waarheid: JavaScript is niet makkelijk. In ieder geval een heel stuk lastiger dan [Scratch](https://scratch.mit.edu).

Enerzijds is JavaScript heel flexibel en kan je er ontzettend veel mee. Maar je kan daardoor ook ontzettend veel
_fouten_ maken in de code.

Om de fouten in je programma op de sporen, worden er in dit hoofdstuk een paar methoden beschreven.


## Console venster

In JavaScript kan je met het ___console.log___ commando tekst naar een speciaal venster sturen om fouten op te sporen:


```js
console.log('Hello CodeCab');
console.log('The answer is: ' + 42);
```


Zo gauw CodeCab zo'n commando uitvoert, wordt het console venster onderaan geopend:

![](doc/img/consolelog.png)

> Het console venster is alleen beschikbaar als de optie __menu -> Run -> Capture debug console__ is aangevinkt.

Je ziet dan (afhankelijk van de browser) gelijk in welk script en op welke regel
de console.log is uitgevoerd. Door op die link (de ondstreepte programmanaam:regelnummer) te klikken wordt het script gelijk geopend
en wordt de cursor op de goede plek gezet.

Je kan het venster tonen/verbergen met de menu opte __menu -> Run -> Toggle debug console__ of de knop:

![](doc/img/consolelog_button.png)

## Ontwikkeltools openen in de browser.

Browsers hebben ingebouwde middelen om fouten op te sporen.

::: browser chrome
In Chrome open je het ___Developer tools___ venster door op de __F12__ toets te drukken.

> Als er niets gebeurd, kies dan in het Chrome menu ___Meer hulpprogramma's___ -> ___Hulpprogramma's voor ontwikkelaars___.

![](doc/img/developer-tools.png)


:::

::: browser !chrome
> CodeCab heeft helaas geen documentatie voor de huidige browser.
Raadpleeg internet of neem een andere browser.
:::

## Console venster in ontwikkeltools

Zorg nu dat in het menu de optie __menu -> Run -> Capture debug console__ ___NIET___ is aangevinkt.

Start je programma opnieuw.

De console.log regels verschijnen nu in het ontwikkeltools venster onder de tab __Console__.

![](doc/img/developer-tools-console.png)

## Broncode in ontwikkeltools

Als je de vorige pagina hebt uitgevoerd zie je dat ook in het console venster de programmanaam:regelnummer zijn onderstreept.
Ook hier kan je op klikken.

Nu wordt in ontwikkeltools de tab __Sources__ geopend en wordt de uit te voeren en wordt je programma daarin getoond.

![](doc/img/developer-tools-sources.png)

## Het debugger commando

Als je het ontikkeltools venster open hebt staan, kan je in je programma een speciaal commando ___debugger___ toevoegen. Wanneer de browser
bij het uitvoeren van je programma dat commando tegenkomt, blijft de browser op die positie wachten.

Probeer maar eens het volgende programma uit:

```js
let stage = new CStage();

let cab = new CSprite('/img/cab.png');

cab.onStart(function() {
	let a = 5;
	debugger;
	a = a + 2;
});
```

Zorg dat het ontwikkeltools venster is geopend en start het programma.

In het ontwikkeltools venster zie je nu dat het programma wordt onderbroken:

![](doc/img/developer-tools-debugger.png)

## Variabelen bekijken

Nadat je programma met ___debugger___ is onderbroken, kan je zien wat de waarde van je variabelen is.

Door met je muis een variabele in de code aan te wijzen kan je de waarde zien. Tenmiste, als die op de plek van de code relevant is.

In het paneel aan de rechterkant is een tab ___Scope___ te zien waarmee je kan zien welke variabelen relevant zijn en wat de waarde is.

![](doc/img/developer-tools-variables.png)

## Stap voor stap door de code

In ontwikkeltools kan je, wanneer je programma is onderbroken, stap voor stap door de code gaan.

Hiervoor zijn een aantal knoppen beschikbaar

| ![](doc/img/developer-tools-resumecode.png) | Ga verder met het programma en stop met debuggen |

| ![](doc/img/developer-tools-stepcode.png) | Ga naar de volgende regel |

| ![](doc/img/developer-tools-stepintocode.png) | Ga in de huidige functie aanroep indien mogelijk. Dit kan je doen als er een functie wordt aangeroe




