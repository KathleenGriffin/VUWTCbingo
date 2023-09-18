var bingoList = setBingoList();
var bingoListIndex = new Array(bingoList.legnth);

function newCard() {
  for(var i=0; i < 24; i++) {
	  setSquare(i);
	}
}

function setSquare(thisSquare) {
  var currSquare = "square"+thisSquare;
  var newEvent;
  newEvent = getRandomEvent(bingoList);
  document.getElementById(currSquare).innerHTML = newEvent;
}

function getRandomEvent(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  do {
      randomIndex = Math.floor(Math.random() * arr.length);
  }
  while (bingoListIndex.includes(randomIndex));  
  const event = arr[randomIndex];
  bingoListIndex.push(randomIndex);
  //console.log(event);
  return event;
}

function setBingoList() {
  var listOfEvents = new Array ("Skipping stones", "Using topomaps to navigate roads", "Swimming in cold water", "Traverse a slip", "Spontaneous bush bash", "Get the hut to yourselves", "Full hut", "Someone can't light a dragonfly", "VUWTC in the hut book", "No VUWTC in the hut book :(", "Someone checks if they have signal", "Above knee-deep river crossing", "Drinking alchohol at the hut", "Meet nobody else on the tramp", "See snow", "See a goat, pig, deer or rabbit", "See cows or sheep", "Someone brings dessert", "Someone asks for toilet paper", "Playing card games", "Tramping in the dark", "Take longer than DOC time", "Hot raro", "The long drop doesn't stink", "Struggle to light the fireplace", "Find a tarn", "Fallen tree across the track", "See a doggo", "Stopping to de-layer after we JUST stopped", "Taking shoes off for a river crossing", "Someone points out good rock climbing face", "Stopping for fast food on the way home", "Wet socks", "Someone talks about the food they want to eat after the tramp", "Someone has to stop at supermarket or dairy on the way", "Complaining about being sweaty", "Someone doesn't turn up to the Hunter carpark", "Group strech/yoga session", "Playing a game while walking", "Someone makes a meal that closely resembles vomit", "Someone brings something unnecessarily heavy", "Amazing sunrise or sunset", "Someone's laces keep coming untied", "Run out of water", "Fall in a river/stream", "Someone trips over", "Walking in the rain", "Mimicing bird calls", "Vulgar Would You Rather questions", "Concerningly long time with no orange triangles", "Minor injury", "Snoring", "Mushroom spotting");
  
  var goldenBingoList = new Array("Lost car keys", "Need to actually self arrest", "Set off a PLB", "Encounter a hut warden", "See or hear an avalanche", "Not able to cross a river", "Run into other VUWTC members unplanned", "First VUWTC member to bag the hut", "Splashback from the longdrop");
  //console.log(listOfEvents.length);
  return listOfEvents;
  //return goldenBingoList
}

function anotherCard() {
	bingoListIndex = [];
  newCard();
}

