var BadGuys = function() {
  this.health = this.health + 20;
  this.species = "Office Worker";
  this.allowedClasses = ["Dwight", "Toby", "Angela", "Creed"];
  
  // this.generateClass = function() {
  //   // Get a random index from the allowed classes array
  //   var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  //   console.log("badguys random" ,random);
  //   // Get the string at the index
  //   var randomClass = this.allowedClasses[random];
  //   console.log("random class", randomClass);
  //   // Composes the corresponding player class into the player object
  //   this.class = new window[randomClass]();
  //   console.log("this class", this.class);
  //   return this.class;
  // }
};

BadGuys.prototype = new Monster();

