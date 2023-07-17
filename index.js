
function historyPage() {

    window.location.href = "index1.html";
  }

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("content");
  var userInput = document.getElementById("wordsearch");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var word = userInput.value;
    if(word=="")
      {
        var hideButton = document.getElementById("container");

        hideButton.style.display = "none";

      }
      else
      {
        var hideButton = document.getElementById("container");

        hideButton.innerHTML = "";
        retrieveMeaning(word);
        userInput.value=" ";
      }
  });

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      var word = userInput.value;
      if(word=="")
      {
        var hideButton = document.getElementById("container");

        hideButton.style.display = "none";
      }
      else
      {
        var hideButton = document.getElementById("container");

        hideButton.innerHTML = "";

        retrieveMeaning(word);
        userInput.value=" ";

      }

    }
  });

});

function retrieveMeaning(word) {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(response=>response.json())
    .then(data => {
      var meaning = data[0].meanings[0].definitions[0].definition;
      createCard(word,meaning);
      var cardData = {
        word: word,
        meaning: meaning
    };

    var existingCards = localStorage.getItem("cards");
    var cards = existingCards ? JSON.parse(existingCards) : [];
    cards.push(cardData);
    localStorage.setItem("cards", JSON.stringify(cards));
    })
    .catch(error => {
      window.alert("Please give me a correct word!!");
    });
}
function createCard(word, meaning) {
  var container = document.getElementById('container');
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  
  newDiv.style.width = "300px";
  newDiv.style.marginTop = "50px";
  newDiv.style.height = "150px";
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.color = "black";
  newDiv.style.padding = "10px";
  

  var heading = document.createElement('h2');
  heading.textContent = "Word: " + word;

  var details = document.createElement("div");
  details.classList.add("details");
  details.style.padding = "10px";
  details.style.fontFamily = "Verdana";
  details.style.fontSize = "14px";

  var paragraph = document.createElement('p');
  paragraph.textContent = meaning;

  details.appendChild(heading);
  details.appendChild(paragraph);
  newDiv.appendChild(details);
  container.appendChild(newDiv);
}