# Van Scratch naar JavaScript

Weet jij alles van [Scratch](https://scratch.mit.edu) en wil je nu een echte programmeertaal zoals JavaScript leren?

Dat kan bij CodeCab!

CodeCab heeft herkenbare [Scratch](https://scratch.mit.edu) blokken maar als je er op klikt zie je JavaSript.


Als voorbeeld gaan we het volgende programma in CodeCab maken:

```scratch
when green flag clicked
say [Hello CodeCab!] for (2) secs
repeat (10)
    move (20) steps
    wait (0.25) secs
    move (-20) steps
    wait (0.25) secs
end
```

## Nieuw project

Begin een nieuw project:




![](doc/img/lesson1-new.gif)


## Begin met start

Klik op het start blok. Je krijgt 2 stukjes voorbeeldcode. Kies voor de code waar __async__ in staat.
Later leer je wel waarom.

![](doc/img/lesson1-onstart-block.gif)



## Vul de goede waarden in

De code wordt toegevoegd aan je programma op de plaats van de cursor. Het woord __sprite1__ is geselecteerd.

Type __cab__ om het woord te vervangen. Druk daarna op __TAB__.

![](doc/img/lesson1-onstart-code.gif)

::: fullcode
```js
let stage = new CStage();

let cab = new CSprite('/img/cab.png');

cab.onStart(async function() {
    ▌
});
```
:::

## Zeg iets

Klik nu op het __say__ blok en kies weer voor de code waar __async__ in staat.

![](doc/img/lesson1-say-block.gif)

Type __"Hello CodeCab!"__ (vergeet de quotes __"__ niet) en druk daarna op _TAB_

![](doc/img/lesson1-say-code.gif)

::: fullcode
```js
let stage = new CStage();

let cab = new CSprite('/img/cab.png');

cab.onStart(async function() {
    await this.say("Hello CodeCab!", 2);
    ▌
});
```
:::

## En nu wat actie

Probeer zelf de volgende blokken toe te voegen.

```scratch
when green flag clicked
say [Hello CodeCab!] for (2) secs
repeat (10)
    move (20) steps
    wait (0.25) secs
    move (-20) steps
    wait (0.25) secs
end
```

Let op de plaats van de cursor! Oplossing op de volgende pagina

## Code in actie

Hier is _een_ oplossing!

```js
cab.onStart(async function () {
    await this.say("Hello CodeCab!", 2);
    for (let count = 0; count < 10; count += 1) {
        this.move(20);
        await this.delay(0.25);
        this.move(-20);
        await this.delay(0.25);
    }
});
```

Een andere oplossing is met __this.repeat__ in plaats van __for__.

```js
let stage = new CStage();

let cab = new CSprite('img/cab.png');

cab.onStart(async function () {
    await this.say("Hello CodeCab!", 2);
    await this.repeat(10, async () => {
        this.move(20);
        await this.delay(0.25);
        this.move(-20);
        await this.delay(0.25);
    });
});
```



