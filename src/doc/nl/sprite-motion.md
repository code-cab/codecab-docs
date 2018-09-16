## CSprite.move

Verplaats 10 pixels in de beweegrichting [direction](CSprite.direction).

```scratch
when this sprite clicked
move (10) steps
```


```javascript
sprite1.onClick(function() {
    this.move(10);
});
```


## CSprite.turn

Wijzig de bewegingsrichting _direction_.

Gebruik een negatief getal om tegen de klok in te draaien.

Je kan ook [rotation](CSprite.rotation) gebruiken om alleen de sprite te draaien.

```javascript
sprite1.onKey('right', function() {
    this.turn(5);
}

sprite1.onKey('left', function() {
    this.turn(-5);
}
```

## CSprite.direction

Wijzig de beweegrichting van de sprite.

## CSprite.rotation

Draai de sprite zonder de [direction](CSprite.direction) te wijzigen.

