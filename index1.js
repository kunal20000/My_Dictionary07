function homePage() {

    window.location.href = "index.html";
  }



  document.addEventListener("DOMContentLoaded", function() {
    var cards = localStorage.getItem("cards");
    var cardContainer = document.getElementById("card-container");

    if (cards) {
      var parsedCards = JSON.parse(cards);

      parsedCards.forEach(function(card, index) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.style.width = "350px";
        newDiv.style.height = "220px";
        newDiv.style.backgroundColor = "rgb(169, 169, 169)";
        newDiv.style.color = "black";
        newDiv.style.padding = "10px";
        newDiv.style.position = "relative";

        var heading = document.createElement('h2');
        heading.textContent = "Word: " + card.word;

        var details = document.createElement("div");
        details.classList.add("details");
        details.style.padding = "10px";
        details.style.fontFamily = "Verdana";
        details.style.fontSize = "5px";

        var paragraph = document.createElement('p');
        paragraph.textContent = card.meaning;

        //var deleteButton = document.createElement("button");
        var imageDeleteButton =document.createElement('img');
        imageDeleteButton.src='images11.png';
        imageDeleteButton.style.width="40px";
        imageDeleteButton.style.height="40px";
        imageDeleteButton.style.position = "absolute";
        imageDeleteButton.style.bottom = "10px";
        imageDeleteButton.style.right = "10px";
        imageDeleteButton.style.cursor = "pointer";


       imageDeleteButton.addEventListener("click", function() {
          parsedCards.splice(index, 1);
          localStorage.setItem("cards", JSON.stringify(parsedCards));
          cardContainer.removeChild(newDiv);
        });

        details.appendChild(heading);
        details.appendChild(paragraph);
        details.appendChild(imageDeleteButton);
        newDiv.appendChild(details);
        cardContainer.appendChild(newDiv);
      });
    }
  });