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
     case "card--battleground":
      moveAlong = ($("#player-name").val() !== "");
      break;
   }
// when the button clicked, move back a view
   if (moveAlong) {
     $(".card").hide();
     $("." + nextCard).show();
   }
 });
  /*
   When the back button clicked, move back a view
  */
 $(".card__back").click(function(e) {
   var previousCard = $(this).attr("previous");
   $(".card").hide();
   $("." + previousCard).show();
 });

//current player
var currentPlayer = new Human();

//store player name
$("#player-setup .card__button").click(function() { 
  console.log("Current player name", $("#player-name").val());
  currentPlayer.playerName = $("#player-name").val();
});

////// save click on characters ////////
 var chosenClass;
 $(".class__link").click(function (event) {
     chosenClass = $(this).html();  
     var charSave = new window[chosenClass]();
     console.log("charsave", charSave);
     currentPlayer.class = charSave;
     console.log("current player", currentPlayer);
 })

///////save click on weapons
  var chosenWeaponClass;
   $(".weapon__link").click(function (event) {
       chosenWeaponClass = $(this).html();  //getting string value
       var weaponSave = new window[chosenWeaponClass]();
        console.log("weaponSave", weaponSave);
       currentPlayer.weapon = weaponSave;
       console.log("current player w/ weapon", currentPlayer);
   });

////////battlefield
var enemyPlayer;
$(".start__link").click(function(event) {
  // $("#sound").click(playSound);
  // function playSound();

    enemyPlayer = orc;
    console.log("orc", orc);
    console.log("enemyplayer", enemyPlayer);
    console.log("currentPlayer", currentPlayer);
    $("#human-stats").append("<p>" + currentPlayer.toString() + "<br/> Current Health is "+"<span>"+ currentPlayer.health +"</span><p>"+
        "<p>Current Strength is "+"<span>"+ currentPlayer.strength+"</span><p>"+
        "<p>Current Intelligence is "+"<span>"+ currentPlayer.intelligence+"</span><p><br/>"); 
    
       $("#enemy-stats").append( "<p>" + orc.toString() + "<br/> Current Health is "+"<span>"+ enemyPlayer.health+"</span><p>"+
          "<p>Current Strength is "+"<span>"+ enemyPlayer.strength+"</span><p>"+
          "<p>Current Intelligence is "+"<span>"+ enemyPlayer.intelligence+"</span><p><br/>");
});

//////////attack
  $(".attack__link").click(function(event) {

    orcDoIt = Math.round(Math.random() * (enemyPlayer.weapon.damage));
    heroDoIt = Math.round(Math.random() * (currentPlayer.weapon.damage));

    $("#battle-record").append(
      "<p>" + enemyPlayer.species + "(" + 
      enemyPlayer.health + "hp) attacks for " + orcDoIt + " damage.</p>"
    );
    $("#battle-record").append(
      "<p>" + currentPlayer.playerName + "(" + 
        currentPlayer.health + "hp) attacks for " + heroDoIt + " damage.</p><br/>");

    currentPlayer.health -= orcDoIt;
    console.log("currentPlayer health: ", currentPlayer.health);

    enemyPlayer.health -= heroDoIt;
    console.log("enemyplayer health: ", enemyPlayer.health);

    if (currentPlayer.health <= 0) {
      alert("The Enemy Won");
    }
    if (enemyPlayer.health <= 0) {
      alert("You Win!!!");
    }
  })
});

