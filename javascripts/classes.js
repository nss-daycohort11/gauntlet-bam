/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.stealthBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Michael
      - Jim
      - Pam
      - Andy
 */
var Fighter = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Fighter.prototype = new PlayerClass();


var Michael = function() {
  this.name = "Michael";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.stealthBonus = this.stealthBonus - 5;
};
Michael.prototype = new Fighter();


var Jim = function() {
  this.name = "Jim";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.stealthBonus = this.stealthBonus - 5;
};
Jim.prototype = new Fighter();


var Pam = function() {
  this.name = "Pam";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.stealthBonus = this.stealthBonus -10;
};
Pam.prototype = new Fighter();


var Andy = function() {
  this.name = "Andy";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.stealthBonus + 40;
};
Andy.prototype = new Fighter();



// Enemies Class


var Dwight = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Dwight.prototype = new PlayerClass();


var Toby = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Toby.prototype = new PlayerClass();

var Angela = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Angela.prototype = new PlayerClass();

var Creed = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Creed.prototype = new PlayerClass();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */
// var Mage = function() {
//   this.name = "Mage";
//   this.magical = true;
//   this.healthBonus = this.healthBonus - 10;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Mage.prototype = new PlayerClass();


// var Shaman = function() {
//   this.name = "Shaman";
//   this.healthBonus = this.healthBonus + 5;
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Shaman.prototype = new Mage();


// var Wizard = function() {
//   this.name = "Wizard";
//   this.healthBonus = this.healthBonus - 15;
//   this.strengthBonus = this.strengthBonus - 25;
//   this.intelligenceBonus = this.intelligenceBonus + 40;
// };
// Wizard.prototype = new Mage();


// var Conjurer = function() {
//   this.name = "Conjurer";
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 10;
// };
// Conjurer.prototype = new Mage();


// var Sorcerer = function() {
//   this.name = "Sorcerer";
//   this.healthBonus = this.healthBonus - 5;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 30;
// };
// Sorcerer.prototype = new Mage();


// /*
//     STEALTH CLASSES
//       - Thief
//       - Ninja
//       - Assassin
//  */

// var Stealth = function() {
//   this.healthBonus = - 5;
//   this.strengthBonus = - 15;
//   this.intelligenceBonus = + 5;
//   this.stealthBonus = + 5;
// };
// Stealth.prototype = new PlayerClass();

// var Thief = function() {
//   this.name = "Thief";
//   this.healthBonus = this.healthBonus + 5;
//   this.strengthBonus = this.strengthBonus - 5;
//   this.intelligenceBonus = this.intelligenceBonus + 15;
// };
// Thief.prototype = new Stealth();

// var Ninja = function() {
//   this.name = "Ninja";
//   this.healthBonus = this.healthBonus + 15;
//   this.strengthBonus = this.strengthBonus - 5;
//   this.intelligenceBonus = this.intelligenceBonus + 15;
//   this.stealthBonus = this.stealthBonus + 10;
// };
// Ninja.prototype = new Stealth();

// var Assassin = function() {
//   this.name = "Assassin";
//   this.healthBonus = this.healthBonus + 10;
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 10;
//   this.stealthBonus = this.stealthBonus + 5;
// };
// Assassin.prototype = new Stealth();



