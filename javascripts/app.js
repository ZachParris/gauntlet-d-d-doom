var Gauntlet = Game.getGauntlet();
var lastId;
// This is the Player variable
var Player;
/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */

   //Click to choose the weapon and class
  $("body").click(function(e){
    if (e.target.id !== "") {
      lastId = e.target.id;
    }
  })
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        Player = new Gauntlet.Combatants.Player($("#player-name").val());
        break;
      case "card--weapon":
        moveAlong = (lastId !== "");
        switch (lastId) {
          case "Warrior":
            Player.class = new Gauntlet.GuildHall.Warrior();
            break;
          case "Wizard":
            Player.class = new Gauntlet.GuildHall.Wizard();
            break;
          case "Thief":
            Player.class = new Gauntlet.GuildHall.Thief();
            break;
          case "Valkyrie":
            Player.class = new Gauntlet.GuildHall.Valkyrie();
            break;
          case "Sorcerer":
            Player.class = new Gauntlet.GuildHall.Sorcerer();
            break;
          case "Ninja":
            Player.class = new Gauntlet.GuildHall.Ninja();
            break;
          case "Berserker":
            Player.class = new Gauntlet.GuildHall.Berserker();
            break;
          case "Conjurer":
            Player.class = new Gauntlet.GuildHall.Conjurer();
            break;
          case "Assassin":
            Player.class = new Gauntlet.GuildHall.Assassin();
            break;
          case "Monk":
            Player.class = new Gauntlet.GuildHall.Monk();
            break;
          case "Suprise":
            Player.class = new Gauntlet.GuildHall.PlayerClass();
            break;
        }
        lastId = "";
        break;
      case "card--battleground":
        moveAlong = (lastId !== "");
        switch (lastId) {
          case "BroadSword":
          Player.weapon = new BroadSword();
          break;
          case "WarAxe":
          Player.weapon = new WarAxe();
          break;
          case "Dagger":
          Player.weapon = new Dagger();
          break;
        }
        lastId = "";
        startBattle();
        newEnemy();
        update();
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }


  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});
});
