# Waarom async - await?

In [Scratch](https://scratch.mit.edu) kan een programma meerdere taken tegelijkertijd uitvoeren.

Hieronder zie je hoe 2 taken worden uitgevoerd en tegelijkertijd het scherm wordt bijgewerkt.

[!lesson:0.52](Scratch multitasking)


## JavaScript kan niet wachten

JavaScript maar __1 taak tegelijkertijd__ uitvoeren en moet ook zorgen dat het __scherm wordt bijgewerkt__.
Pas als een taak helemaal is afgerond kan een volgende taak worden uitgevoerd.

Als je in JavaScript bijvoorbeeld een (oneindige) lus zou maken dan blijft je programma (en de browser!) daar hangen
en worden andere blokken en het scherm niet bijgewerkt.

[!lesson:0.64](Javascript blocking)

> De functie _someBlockingWait_ (het script blokkeren totdat de tijd voorbij is) bestaat niet in JavaScript maar is wel te maken.
> Zoals te zien is in dit voorbeeld zijn dergelijke constructies af te raden.

## Onderbreken met async await

_Een_ oplossing hiervoor is het _await_ commando wat altijd in combinatie met _async_ wordt gebruikt.

Het ___async___ keyword zet je voor het functieblok (_function_ of _()=>_ keyword) dat je aanroept.

Het ___await___ keyword zet je voor de functie aanroep waarop gewacht moet worden. In CodeCab zijn dit de functies is met een
_tijd_ waarde (_delay_, _say_, _think_).

> _Async_ en _await_ gaan altijd samen!

Hieronder zie je hoe JavaScript bij een _await_ de positie in het script bewaard,
ondertussen wat anders kan doen en,
wanneer de wachttijd verstreken is, weer verder gaat met de rest van het script.

[!lesson:0.64](Javascript async await)

> __Belangrijk__: gebruik _while (true) {}_ alleen met een _await_ anders blijft
> je browser hangen !!!

## Functies in functies

In CodeCab wordt in een paar _Control_ blokken oplossingen gebruikt waarin ook
weer een _async function_ wordt gebruikt. Deze kan je op de volgende manier gebruiken:

```js
cab.onStart(async function() {
	await this.repeat(10, async () => {
		await this.delay(1);
	});
});
```


