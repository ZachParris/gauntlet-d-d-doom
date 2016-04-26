var Game = (function(oldGame) {

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var Sword = function() {
  this.name = "sword";
  this.damage = 14;
  this.hands = 2;
};

Sword.prototype = new Weapon();

oldGame.getSword = function() {
  return new Sword()
}

oldGame.getAxe = function() {
  return new WarAxe()
}

oldGame.getDagger = function() {
  return new Dagger()
}

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();


return oldGame
})(Game || {})

