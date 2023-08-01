
function historyPage() {

    window.location.href = "index1.html";
  }

  document.body.style.backgroundImage = 'url("./backgroundPhoto.jpg")';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
 
  // document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/37/60/aLKFHY.jpg')";

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
  
  newDiv.style.width = "100%";
  newDiv.style.marginTop = "50px";
  newDiv.style.height = "100%";
  newDiv.style.backgroundColor = "blue";
  newDiv.style.color = "white";
  newDiv.style.padding = "10px";
  newDiv.style.borderTopLeftRadius = "15px";
  

  var heading = document.createElement('h2');
  heading.style.color = "white";
  heading.textContent = "🔊 "+ word;
  // var btnVoice = document.createElement("button")
  

  var details = document.createElement("div");
  details.classList.add("details");
  details.style.padding = "10px";
  details.style.fontFamily = "verdana";
  details.style.fontSize = "14px";

  var paragraph = document.createElement('p');
  paragraph.style.color = "white";
  paragraph.textContent = "📢 "+  meaning;

  details.appendChild(heading);
  details.appendChild(paragraph);
  newDiv.appendChild(details);
  container.appendChild(newDiv);
}