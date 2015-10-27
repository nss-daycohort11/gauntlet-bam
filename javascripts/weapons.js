var Barehands = function() {
  this.name = "Barehands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Beets = function() {
  this.name = "Beets";
  this.damage = 4;
  this.hands = 1;
};
Beets.prototype = new Barehands();

var Banjo = function() {
  this.name = "Banjo";
  this.damage = 14;
  this.hands = 2;
};
Banjo.prototype = new Barehands();

var Angelas_Cat = function() {  
  this.name = "Angelas_Cat";
  this.damage = 18;
  this.hands = 2;
};
Angelas_Cat.prototype = new Barehands();

var Nunchucks = function() {  
  this.name = "Nunchucks";
  this.damage = 18;
  this.hands = 2;
};
Nunchucks.prototype = new Barehands();