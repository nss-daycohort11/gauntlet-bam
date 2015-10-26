var Barehands = function() {
  this.name = "Barehands";
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
Bow.prototype = new Barehands();

var Sword = function() {
  this.name = "sword";
  this.damage = 14;
  this.hands = 2;
};
Sword.prototype = new Barehands();

var Axe = function() {
  this.name = "axe";
  this.damage = 18;
  this.hands = 2;
};
Axe.prototype = new Barehands();



