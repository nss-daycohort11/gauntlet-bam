var Barehands = function() {
  this.name = "Barehands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Bow = function() {
  this.name = "Bow";
  this.damage = 4;
  this.hands = 1;
};
Bow.prototype = new Barehands();

var Sword = function() {
  this.name = "Sword";
  this.damage = 14;
  this.hands = 2;
};
Sword.prototype = new Barehands();

var Axe = function() {  
  this.name = "Axe";
  this.damage = 18;
  this.hands = 2;
};
Axe.prototype = new Barehands();

