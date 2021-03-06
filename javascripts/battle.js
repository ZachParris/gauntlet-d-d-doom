var Game = (function(oldGame) {
  //gives health bonus Player needs, etc..wrap in IIFE name Game
  var win = false;
  var Player
  var Gauntlet = Game.getGauntlet()
  oldGame.startBattle = function() {
    Player = Game.getPlayer()
    Player.health += Player.class.healthBonus
    Player.strength += Player.class.strengthBonus + Player.weapon.damage
    Player.intelligence += Player.class.intelligenceBonus

  };

  $("#attackButton").click(function() { 
    battleResult();
    orc.health -= Player.strength
    Player.health -= orc.strength
    Game.update()
    if (Player.health <= 0) {
      setTimeout(playerLost, 2000)
    }  else if (orc.health <= 0) {
      setTimeout(playerWin, 2000)
    }
  });

  oldGame.update = function() {
    $("#player-stat").html(Player.toString())
    $("#enemy-stat").html(orc.toString())
  };

  oldGame.newEnemy = function() {
    orc = new Gauntlet.Combatants.Orc();
    orc.generateClass();
    orc.generateWeapon()
    orc.health += orc.class.healthBonus
    orc.strength = orc.class.strengthBonus + orc.weapon.damage
  };
  function playerLost() {
    $(".card").hide();
    $(".card--result").show();
    $("#win-loss").html(`${orc.playerName} killed you!`);
  }
  function playerWin() {
    $(".card").hide();
    $(".card--result").show();
    $("#win-loss").html(`You killed ${orc.playerName}! ...You Bastard!`);
    win = true;
  }


function battleResult() {
  $("#result").html(`${Player.playerName} attacked ${orc.playerName} with ${$('#selector').val()} for ${Player.strength}<br>${orc.playerName} attacked ${Player.playerName} with ${orc.weapon} for ${orc.strength}<br>`)
}

$("#playAgain").click(function(){
  if (win) {
    $(".card").hide();
    $(".card--battleground").show();
    Game.newEnemy();
    Game.update();
    win = false;
  } else {
    $(".card").hide();
    $(".card--name").show();
  }
  $("#result").html("");
})



  // #result
  // #win-loss
  // #playAgain


  return oldGame
})(Game || {})