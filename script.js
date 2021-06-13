/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 200;   // x-positie van vijand
var vijandY = 100;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("green");
  rect(0, 600, width - 1 * 1, height - 2 * 20); /*gras*/

  fill("brown")
  rect(0,625, width - 1 * 1, height - 2 * 20) /*aarde onder gras*/
  
  /* bomen genummerd van links naar rechts */
  fill("brown")                       /*1*/
  rect(100, 600, 40, -200)
  fill("green")
  ellipse(125, 400, 200, 200)

  fill("brown")                      /*2*/
  rect(500, 600, 40, -200)
  fill("green")
  rect(425, 300, 200, 200)

  fill("brown")                     /*3*/
  rect(1075, 600, 40, -200)
  fill("green")
  ellipse(1100, 400, 200, 200)


fill("darkgreen")
ellipse(225,575, 15 -80)
fill("darkgreen")
ellipse(200,585, 40 -90)
fill("darkgreen")
ellipse(245,585, 40 -90)

};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
  fill("lightgray")
rect(x-105,y-15, 50, 50); /**robotlichaam */
fill("gray")

rect(x-95,y-45,30,30); /**robothoofd */
   fill("white");

  ellipse(x-80, y+50, 100, 80); /**midden wolk */

  ellipse(x-50, y+50, 80, 70); /**rechterkant wolk */

  ellipse(x-110, y+50, 80, 60);  /**linkerkant wolk */
 
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("red");
  ellipse(x, y, 50, 50);
  rect(x-20, y+25, 40, 40)
 



  fill("yellow")
  rect(x-15, y-15, 30, 20)
  

};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('lightblue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
