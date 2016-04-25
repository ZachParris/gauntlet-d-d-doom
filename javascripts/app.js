var Game = (function(oldGame) {
  var lastId;
  // This is the Player variable
  var Player;
  oldGame.getPlayer = function() {
    return Player
  }
  var Gauntlet = Game.getGauntlet()

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
            case "Surprise":
              Player.class = Player.generateClass()
              break;
          }
          lastId = "";
          break;
        case "card--battleground":
          moveAlong = (lastId !== "");
          switch (lastId) {
            case "Sword":
            Player.weapon = new Sword();
            break;
            case "WarAxe":
            Player.weapon = new WarAxe();
            break;
            case "Dagger":
            Player.weapon = new Dagger();
            break;
          }
          $("#selector").html(`<option value='${Player.weapon}'>${Player.weapon}</option>`)
          if (Player.class.magical) {
            $("#selector").append(`<option value='Earth'>Earth</option><option value='Fire'>Fire</option><option value='Water'>Water</option><option value='Wind'>Wind</option><option value='Heart'>Heart</option>`)
          }
          lastId = "";
          Game.startBattle();
          Game.newEnemy();
          Game.update();
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
  Game.setGauntlet(Gauntlet)
  return oldGame
})(Game || {})