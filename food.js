// Create an XHR object
var myRequestDog = new XMLHttpRequest();
var myRequestCat = new XMLHttpRequest();

// XHR objects emit events when their operation is complete,
// or an error occurs, once the request is loaded run the function told below
myRequestDog.addEventListener("load", feedDogs);
myRequestCat.addEventListener("load", feedCats);

// Then tell the XHR object exactly what to do
myRequestDog.open("GET", "dog.json");
myRequestCat.open("GET", "cat.json");

// Tell the XHR object to start
myRequestDog.send();
myRequestCat.send();




// Vars for the DOM elements
var dogFoods = document.getElementById("dog-content");
var catFoods = document.getElementById("cat-content");



// Dog JSON function to import and parse contents of dog.json
function feedDogs() {
  var data = JSON.parse(this.responseText);
  var clifford = data.dog_brands;
  barkInDom(clifford);
}

// Dog Loop-A-Lot
function barkInDom(dogData) {
  for (var i = 0; i < dogData.length; i++) {

    var foodType = dogData[i].types;
    for (var j = 0; j < foodType.length; j++) {

      var foodVolumes = foodType[j].volumes;
      for (var k = 0; k < foodVolumes.length; k++) {
        dogFoods.innerHTML +=
          "<tr>" + "<td>" + dogData[i].brand + "</td>" +
          "<td>" + foodType[j].type + "</td>" +
          "<td>" + foodVolumes[k].size + "</td>" +
          "<td>" + foodVolumes[k].price + "</td>" +
          "</tr>";
      } // k
    } // j
  } // i
} //function barkInDom



// Cat JSON function to import and parse contents of cat.json
function feedCats() {
	var data = JSON.parse(this.responseText);
	console.log("data", data );
	var zelda = data.cat_brands;
	console.log(zelda);
	purInDom(zelda);
}

// Cat Loop-A-Lot
function purInDom(catData) {
  for (var i = 0; i < catData.length; i++) {

    var catBreed = catData[i].breeds;
    for (var j = 0; j < catBreed.length; j++) {

      var foodTypes = catData[i].types;
      for (var k = 0; k < foodTypes.length; k++) {

        var foodVolumes = foodTypes[k].volumes;
        for (var l = 0; l < foodVolumes.length; l++) {
          catFoods.innerHTML +=
            "<tr>" + "<td>" + catData[i].brand + "</td>" +
            "<td>" + catBreed[j] + "</td>" +
            "<td>" + foodTypes[k].type + "</td>" +
            "<td>" + foodVolumes[l].size + "</td>" +
            "<td>" + foodVolumes[l].price + "</td>" + "</tr>";
        } // l
      } // k
    } // j
  } // i
} // purInDom
