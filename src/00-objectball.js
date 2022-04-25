function gameObject() {
    return {
         home:{
             teamName:"Brooklyn Nets",
             colors:["Black", "White"],
             players:{
                 "Alan Anderson":{
                 number:0,
                 shoe:16,
                 points:22,
                 rebounds:12,
                 assists:12,
                 steals:3,
                 blocks:1,
                 slamDunks:1,
                 },
                  "Reggie Evans":{
                 number:30,
                 shoe:14,
                 points:12,
                 rebounds:12,
                 assists:12,
                 steals:12,
                 blocks:12,
                 slamDunks:7,
                 },
                  "Brook Lopez":{
                 number:11,
                 shoe:17,
                 points:17,
                 rebounds:19,
                 assists:10,
                 steals:3,
                 blocks:1,
                 slamDunks:15,
                 },
                  "Mason Plumlee":{
                 number:1,
                 shoe:19,
                 points:26,
                 rebounds:12,
                 assists:6,
                 steals:3,
                 blocks:8,
                 slamDunks:5,
                 },
                  "Jason Terry":{
                 number:31,
                 shoe:15,
                 points:19,
                 rebounds:2,
                 assists:2,
                 steals:4,
                 blocks:11,
                 slamDunks:1,
                 },
             },
         },
     away: {
         teamName:"Charlotte Hornets",
         colors:["Turquoise", "Purple"],
         players:{
             "Jeff Adrien":{
                 number:4,
                 shoe:18,
                 points:10,
                 rebounds:1,
                 assists:1,
                 steals:2,
                 blocks:7,
                 slamDunks:2,
             },
             "Bismak Biyombo":{
                 number:0,
                 shoe:16,
                 points:12,
                 rebounds:4,
                 assists:7,
                 steals:7,
                 blocks:15,
                 slamDunks:10,
             },
             "DeSagna Diop":{
                 number:2,
                 shoe:14,
                 points:24,
                 rebounds:12,
                 assists:12,
                 steals:4,
                 blocks:5,
                 slamDunks:5,
             },
             "Ben Gordon":{
                 number:8,
                 shoe:15,
                 points:33,
                 rebounds:3,
                 assists:2,
                 steals:1,
                 blocks:1,
                 slamDunks:0,
             },
             "Brendan Haywood":{
                 number:33,
                 shoe:15,
                 points:6,
                 rebounds:12,
                 assists:12,
                 steals:22,
                 blocks:5,
                 slamDunks:12,
             },
         },
     },
     }
 }

 function teamNames(place) {
    let object = gameObject()
    return object[place].teamName
  }
  //console.log(team("home"))

  function numPointsScored(name){
      let object = playersObj()
      return object[name].points
  }
  //console.log(numPointsScored("Alan Anderson"))
  function shoeSize(name){
    let object = playersObj();
    return object[name].shoe
}
//console.log(shoeSize("Alan Anderson"))
  function teamColors(teamName){
      let object = gameObject();
      return Object.values(object).find(team => team.teamName ===teamName).colors
  }
  //console.log(teamColors("Brooklyn Nets"))

  const playerNumbers = (teamName) =>{
    const game = gameObject()
    const numbers = []
    for (const key in game) {
        let team = game[key]
        if (team.teamName === teamName) {
            for (const player in team.players) {
                numbers.push(team.players[player].number)
            }
        }
    }
    return numbers;
}
// console.log(playerNumbers("Charlotte Hornets"))

function playerStatus (playerName){
    let players = {...gameObject()["home"]["players"], ...gameObject()["away"]["players"] }
    return players[playerName]
}
//console.log(playerStatus("Bismak Biyombo"))

function bigShoeRebounds(){
    let players = {...gameObject()["home"]["players"], ...gameObject()["away"]["players"] }
    let bigShoe = 0
    let playerName = ""

    for(let player in players){
        if(players[player].shoe > bigShoe){
            bigShoe = players[player].shoe
            playerName = player
        }
    }
    return `${playerName}, shoe size: ${bigShoe} rebounds: ${players[playerName].rebounds}`
}
//console.log(bigShoeRebounds())
//bonus

function mostPointsScored(){
    let players = {...gameObject()["home"]["players"], ...gameObject()["away"]["players"] }
    let score = 0
    let playerNames = ""

    for(let player in players){
        if(players[player].points > score){
            score = players[player].points
            playerNames = player
        }
    }
    return `most points award goes to ${playerNames} with ${score} points!`
}
//console.log(mostPointsScored())

function playerWithLongestName (){
    let players = {...gameObject()["home"]["players"], ...gameObject()["away"]["players"] }
    let longestName = ""

    for(let player in players){
        if(player.length > longestName.length){
            longestName = player
        }
    }
    return `${longestName}`
}
//console.log(playerWithLongestName())

/*
Which team has the most points? Call the function winningTeam.
Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
*/


