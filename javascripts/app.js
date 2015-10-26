$(document).ready(function() {

 /*
   Test code to generate a human player and an orc player
  */
 var warrior = new Human();
 warrior.setWeapon(new Axe());
 warrior.generateClass();  // This will be used for "Surprise me" option
 console.log("warrior", warrior.toString());

 var orc = new Orc();
 orc.generateClass();
 orc.setWeapon(new Sword());
 console.log("orc", orc.toString());

 /*
   Test code to generate a spell
  */
 var spell = new Sphere();
 console.log("spell: ", spell.toString());


 /*
   END OF TEST CODE

   Show the initial view that accepts player name
  */
 $("#player-setup").show();

 /*
   When any button with card__link class is clicked,
   move on to the next view.
  */
 $(".card__link").click(function(e) {
   var nextCard = $(this).attr("next");
   var moveAlong = false;

   switch (nextCard) {
     case "card--class":
       moveAlong = ($("#player-name").val() !== "");
       break;
     case "card--weapon":
       moveAlong = ($("#player-name").val() !== "");
       break;
   }

   if (moveAlong) {
     $(".card").hide();
     $("." + nextCard).show();
   }
 });

////// save click on characters ////////
 var chosenClass;

 $(".class__link").click(function (event) {

     chosenClass = $(this).html();  //getting string value
     var charSave = new window[chosenClass]();
     console.log("charsave", charSave);
 })

///////save click on weapons

var chosenWeaponClass;

 $(".class__link").click(function (event) {
     chosenWeaponClass = $(this).html();  //getting string value
     var weaponSave = new window[chosenWeaponClass]();
     console.log("weaponSave", weaponSave);
 })



 // function () {
 //   player = new chosenClass();

 // }

 // var warrior = new Human();
 // warrior.setWeapon(new Axe());
 // warrior.generateClass();  // This will be used for "Surprise me" option
 // console.log("warrior", warrior.toString());

 /*
   When the back button clicked, move back a view
  */
 $(".card__back").click(function(e) {
   var previousCard = $(this).attr("previous");
   $(".card").hide();
   $("." + previousCard).show();
 });

  var refObj = {
     'Warrior': Warrior,
     'Valkyrie':  Valkyrie,
     'Berserker': Berserker,
     'Monk': Monk,
     'Wizard': Wizard,
     'Sorcerer': Sorcerer,
     'Conjurer': Conjurer,
     'Thief': Thief,
     'Ninja': Ninja,
     'Assassin': Assassin
   };




});

