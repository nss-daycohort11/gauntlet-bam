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
  this.name = "Dwight"
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Dwight.prototype = new PlayerClass();


var Toby = function() {
  this.name = "Toby"
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Toby.prototype = new PlayerClass();

var Angela = function() {
  this.name = "Angela"
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Angela.prototype = new PlayerClass();

var Creed = function() {
  this.name = "Creed"
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Creed.prototype = new PlayerClass();





