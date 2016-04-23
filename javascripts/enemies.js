var Game = (function(oldGame) {

  var Gauntlet = Game.getGauntlet()

Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.allowedNames = ["Joe", "Zoe", "Kate", "Greg"]
  this.playerName = this.allowedNames[Math.floor(Math.random()*4)]
  
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

Game.setGauntlet(Gauntlet);

return oldGame
})(Game || {})