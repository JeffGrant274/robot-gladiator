var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
//Game States
//"WIN" - Player robot has defated all enemy-robots
//  *Fight all enemy-robots
//  *Fight each enemy-robot
//"LOSE"-Player robot's health is zero or less
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
//prompt the player if they want to fight or skip
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT' or 'SKIP' to choose.");
    //if player choses to skip
 if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    //if yes (true), leave fight
    if (confirmSkip){
    window.alert(playerName + " has chosen to skip the fight.  Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney -10;
    console.log("playerMoney ",playerMoney);
    break;
    }    
}

//remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " health remaining.");

//check enemy's health
if (enemyHealth <=0) {
window.alert(enemyName + " has died!");

//award player money for winning 
playerMoney = playerMoney + 20
//leave while() loop since enemy is dead
break;
} else {
window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player's health
if (playerHealth <=0) {
window.alert(playerName + " has died!");
break;
} else {
window.alert(playerName + " still has " + playerHealth + " health left.");
};
};
};   
//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    //if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length -1) {
    //ask if player wants to use the store before next round
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
    //if yes, take them to the store() function    
    if (storeConfirm){
        shop();}
     } else {
        window.alert("you have lost your robot in battle! Game Over!")
        break;
    }
}   
}
endGame();
}
var endGame = function () {
   //if player is still alive, player wins!
   if (playerHealth > 0){
       window.alert("Great job, you've survived the game!  YOu now have a score of " + playerMoney + ".");
   }
   else{
       window.alert("You've lost your robot in battle.");
   }
   //ask player if they'd like to play again
   var playAgainConfirm = window.confirm("Whould you like to play again");
   if (playAgainConfirm){
       //restart the game
       startGame();
   }
   else{
       window.alert("Thank you for playing Robot Gladiators! Come back soon!");
   }
   }
   var shop = function(){
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
   // use switch to carry out action
switch (shopOptionPrompt) {
    case "REFILL": 
    case "refill":
        if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        
            // increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
        
          break;
    case "UPGRADE":      
    case "upgrade":
        if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        
           // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You don't have enough money!");
          }
        
          break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  } 
}

//start game when page loads
startGame();
