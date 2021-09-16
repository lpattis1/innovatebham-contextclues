function getNames() {
  var names = [
    "Half-Life 3",
    "Yeoman Yaffingale",
    "Pink Sparkles",
    "Captain Planet",
    "Chad",
  ];

  return function () {
    return names;
  };
}

function getWeapons() {
  var weapons = [
    "Typewriter",
    "Red Lego",
    "Lamp",
    "Dragon",
    "Paper Towel",
    "An Entire TV",
    "Dog",
    "Luigi",
    "Vitamins",
    "Macbook Pro",
    "Gerlat of Riviaaaa",
    "Blue Yeti Microphone",
    "Accusation",
    "Hair",
    "Thunder",
    "Candlewax",
    "Boredom",
    "Cake",
    "Portal Gun",
    "Papercut",
  ];

  return function () {
    return weapons;
  };
}

function getLocations() {
  var locations = [
    "Hell",
    "Alabama",
    "Morrowind",
    "McDonalds Parking Lot",
    "Thessia",
    "Willie Nelson Concert",
    "Jeff Bezos' Hottub on Mars",
    "Chewbacca",
    "Retirement Home",
    "UAB Hospital",
  ];

  return function () {
    return locations;
  };
}

function createAccusations(name, weapon, location) {
  var accusationContainer = document.querySelector(".accusations");
  for (var i = 0; i < 100; i++) {
    var accusation = document.createElement("h3");
    accusation.className = "accusation";
    accusation.textContent = `Accusation ${i + 1}`;
    accusationContainer.append(accusation);
  }

  document.querySelectorAll(".accusation").forEach((accusation, i) => {
    accusation.addEventListener("click", function (e) {
      alert(
        `Accusation ${i}: I accuse ${name[i % name.length]}, with the ${
          weapon[i % weapon.length]
        } in ${location[i % location.length]}`
      );
    });
  });
}

createAccusations(getNames()(), getWeapons()(), getLocations()());
