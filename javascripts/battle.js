var Game = (function(oldGame) {
  //gives health bonus Player needs, etc..wrap in IIFE name Game
  var Player
  oldGame.startBattle = function() {
    Player = Game.getPlayer()
    Player.health += Player.class.healthBonus
    Player.strength += Player.class.strengthBonus + Player.weapon.damage
    Player.intelligence += Player.class.intelligenceBonus
  };

  $("#attackButton").click(function() {
    orc.health -= Player.strength
    Player.health -= orc.strength
    Game.update()
    if (Player.health === 0) {
      playerLost()
    }  else if (orc.health === 0) {
      playerWin()
    }
  });

  oldGame.update = function() {
    $("#player-stat").html(Player.toString())
    $("#enemy-stat").html(orc.toString())
  };

  oldGame.newEnemy = function() {
    orc = new Gauntlet.Combatants.Orc();
    orc.generateClass();
    orc.setWeapon(new BroadSword());
    orc.health += orc.class.healthBonus
    orc.strength = orc.class.strengthBonus + orc.weapon.damage
  };
  function playerLost() {}
  function playerWin() {}
  // #result
  // #win-loss
  // #playAgain


  return oldGame
})(Game || {})