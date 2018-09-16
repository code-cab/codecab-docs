# Wat is JavaScript / CodeCab?

CodeCab helpt je om de overstap te maken van [Scratch](https://scratch.mit.edu) naar
de JavaScript programmeertaal.

CodeCab is ook de naam van een uitbreiding (of ___package___)
waardoor JavaScript op [Scratch](https://scratch.mit.edu) gaat lijken.

> Wil je weten wat een ___package___ is? Lees dit hoofdstuk!

In CodeCab programmeer je in code (tekst commando's en uitdrukkingen).

Om je daarbij te helpen heeft CodeCab [Scratch](https://scratch.mit.edu)-achtige
blokken aan de linkerkant. Als je daar op klikt krijg je een aantal voorbeeld code fragmenten
te zien van hoe dat blok in JavaScript kan worden vertaald.

Door op één van de fragmenten te klikken wordt de bijbehorende code aan je project
toegevoegd en kunnen eventueel de parameters worden aangepast.

# Maar wat is nu JavaScript?

JavaScript is de programmeertaal die onder andere in browsers wordt gebruikt.

JavaScript code betaat uit text waarin woorden en uitdrukkingen worden gebruikt die
de browser begrijpt en kan uitvoeren. Deze code kan aan webpagina's worden toegevoegd
waardoor er zeer geavanceerde websites kunnen worden gemaakt.

De CodeCab website is bijvoorbeeld volledig in JavaScript gemaakt!


## Hoe werkt JavaScript?

In de CodeCab editor (waar je nu bent) kan je zelf een JavaScript programma
(of script) schrijven. Als je op start drukt wordt de code uitgevoerd door de browser.

> TODO plaatje code -> browser -> programma

## Keywords
De JavaScript code bestaat uit __keywords__ die soms wel wat lijken op de blokken in
[Scratch](https://scratch.mit.edu).

Bijvoorbeeld het [Scratch](https://scratch.mit.edu) blok _if .. then .. else.._ lijkt op het
__keyword__ _if_  _else_

```js
if (myVar < 5) {

} else {

}
```

Andere keywords zijn bv: _let_, _new_, _return_, _for_ en _this_.

## Data variabelen (variables)

Om in JavaScript een __data variabele__ toe te voegen gebruik je het keyword _let_:

```js
let myVar = 2;
myVar = myVar + 3;
myVar += 5;

let a = "Hallo";
let b = 'CodeCab';
```

> In JavaScript kan je van alles in een variabele doen. Getallen, teksten
(tussen "dubbele quotes" of 'enkele quotes'),
lijsten, functieblokken, sprites en andere objecten.

## Functies (functions)

_Functie blokken_ worden in JavaScript heel veel gebruikt en kan je maken met _function_:

```js
function myFunc() {

}

myFunc();
```

De laatste regel _myFunc();_ voert het functieblok _myFunc_ uit.

Je kan ook een functie aan een variabele toewijzen:

```js
let myFunc = function() {

};

myFunc();
```

In plaats van het keyword _function_ kan je ook de notatie _() =>_ gebruiken. Deze werkt iets anders
maar dat verschil is nu niet belangrijk:

```js
let myFunc = () => {

};

myFunc();
```

## Objects

Een __object__ in JavaScript kan je zien als een soort denkbeeldige doos waar je variabelen in kan doen. Je kan een _object_ maken met het commando _new Object()_ of veel korter: _{}_.

```js
let myObject = new Object();

let myOtherObject = {};
```

> TODO: Plaatje doos met variabelen

Vervolgens kan je gewoon variabelen aan het _object_ toevoegen en gebruiken:

```js
myObject.x = 5;
myObject.x += 4;

myOtherObject.move = function (x, y) {
};

myOtherObject.move(10, 20);

myOtherObject.someName = myObject;
```

## Prototypes / classes

_Objecten_ kunnen van een bepaald type zijn. In JavaScript heet dat een _prototype_ of _class_.

Zo kan je bijvoorbeeld een type _Sprite_ maken.

De eigenschappen beschrijven wat de Sprite heeft en kan: de naam van de afbeelding,
een manier om te verplaatsen of hallo te zeggen.

Alle objecten van het type _Sprite_ hebben dan die eigenschappen.

```js
class Sprite {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this.y = 0;
    }

    goto(x, y) {
        this.x = x;
        this.y = y;
    }

    say(text) {
        ...
    }
}
```

> De __constructor__ is een speciale functie die wordt aangeroepen bij het maken
> van een nieuw _object_.

Je kan nu als volgt een object van het type _Sprite_ maken.

```js
let cab = new Sprite('cab.jpg');
cab.goto(10, 50);
cab.x += 5;
cab.say('Hello CodeCab');
```

> __Let op:__ vergeet het _keyword_ ___new___ niet!

## Packages

In JavaScript kan je meerdere scripts combineren en achter elkaar uitvoeren.
_Functions_ en _classes_ die in het
ene script worden gemaakt, zijn dan te gebruiken in een ander script.

Je kan een zo hele verzameling _functions_ en _classes_ bij elkaar zetten die vervolgens weer
in andere programma's (van jezelf of anderen!) kunnen worden gebruikt.
Die verzameling heet een ___package___.

De ___package___ van CodeCab heet ___codecab.js___ en is standaard toegevoegd
aan elk nieuw project in CodeCab.

Je kan de __codecab.js__ ook vinden in:

- [github](https://github.com/code-cab/codecab)
- [npm](https://www.npmjs.com/~codecab)

Wil je meer weten over JavaScript? Een goede website is:

- [w3schools](https://www.w3schools.com/js/)