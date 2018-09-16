## CSprite.body.type

CodeCab voegt fysieke eigenschappen (zwaartekracht, botsen en verbindingen) toe aan je projecten!

Met de property **body** kan je aangeven hoe de sprite zich in de fysieke wereld moet gedragen.

De porperty **body.type** bepaald wat voor object de sprite is:

- **none** -  Geen fysieke eigenschappen.
- **dynamic** -  De sprite heeft een massa en is onder invloed van de zwaartekracht, botsingen en verbindingen.
- **static** -  Vast stilstaand fysiek object. Gebuik dir type voor muren en niet bewegende objecten.
- **kinematic** -  Lijkt op een 'static' object maar mag bewegen, bijvoorbeeld met [glideTo](CSprite.glideTo).
 Gebruik dit type voor bewegende vloeren en muren.
- **sensor** -  Detecteerd botsingen maar heeft zelf geen fysieke eigenschappen.

## CSprite.body.collisionLayers

CodeCab is een 2D wereld waarbij standaard alle fysieke objecten met elkaar botsen. Met de property **body.collisionLayers**
kan je objecten achter en voor elkaar langs laten bewegen.

Alleen objecten die op dezelfde collision layer kunnen botsen.
Per body zijn meerdere collision layers in te stellen en kunnen een waarde hebben van 0 tot 31.

## CSprite.body.createFixedJoint

Maak een vaste fysieke verbinding tussen 2 sprites.

Zonder x en y offset wordt het verbindingspunt op het zwaartepunt (Center Of Mass, dus niet de origin) van de
**andere** sprite geplaatst.

Wanneer dx en dy offset worden opgegeven wordt het verbindingspunt relatief ten opzichte van
de origin (0,0) van de **eigen** sprite geplaatst.

## CSprite.body.createRotatingJoint

Maak een draaiende verbinding tussen 2 fysieke sprites.

Hier kan eventueel een
motor van worden gemaakt door er [force](CRotatingJoint.force) en [speed](CRotatingJoint.speed)
aan toe te voegen.

Plaats de sprites op verschillende [collision layers](CSprite.body.collisionLayers) om
vrije beweging mogelijk te maken.

Zonder x en y offset wordt het draaipunt op het zwaartepunt (Center Of Mass, dus niet de origin) van de
**andere** sprite geplaatst.

Wanneer dx en dy offset worden opgegeven wordt het draaipunt relatief ten opzichte van
de origin (0,0) van de **eigen** sprite geplaatst.

```javascript
cab.body.collisionLayers = [0];
wheel.body.collisionLayers = [1];
let joint = cab.createRotatingJoint(wheel);
```

## CMotorizedJoint.speed

Maak een motor van een [rotating joint](CSprite.body.createRotatingJoint) door er speed en [force](CMotorizedJoint.force) aan toe te voegen.

De waarde van speed is rotaties per seconden.

Speed werkt alleen in combinatie met [force](CMotorizedJoint.force).


## CMotorizedJoint.force

Geeft de motor van de [rotating joint](CSprite.body.createRotatingJoint) kracht.

Force werkt alleen in combinatie met [speed](CMotorizedJoint.speed).

## CMotorizedJoint.autoBreak

Bepaald of de motor van een [rotating joint](CSprite.body.createRotatingJoint)
direct stilstaat als de [speed](CMotorizedJoint.speed) naar 0 wordt gezet of
door blijft draaien door het momentum.

## CJoint.elasticy

Stijfheid of elasticiteit van de verbinding. Een waarde van 0 zorgt
dat het draaipunt exact op hetzelfde punt blijft. Een hogere waarde
zorgt voor meer flexibiliteit in de verbinding.



