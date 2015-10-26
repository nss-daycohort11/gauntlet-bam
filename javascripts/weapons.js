var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Bow = function() {
  this.name = "bow";
  this.damage = 10;
  this.hands = 2;
};
Bow.prototype = new Weapon();

var Sword = function() {
  this.name = "sword";
  this.damage = 14;
  this.hands = 2;
};
Sword.prototype = new Weapon();

var Axe = function() {
  this.name = "axe";
  this.damage = 18;
  this.hands = 2;
};
Axe.prototype = new Weapon();



