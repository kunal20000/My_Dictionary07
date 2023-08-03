function homePage() {

    window.location.href = "index.html";
  }
   
  

  document.body.style.backgroundImage = 'url("./images (1).png")';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

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
        newDiv.style.backgroundColor = "blue";
        newDiv.style.padding = "10px";
        newDiv.style.position = "relative";

        // var buttonAllClear = document.createElement("button");
        // buttonAllClear.style.height = "50px";
        // buttonAllClear.style.width  = "50px";
        // buttonAllClear.style.backgroundColor = 'green';

        var heading = document.createElement('h2');
        heading.style.color = "white";
        heading.style.fontWeight = "bold";
        heading.style.fontWeight = "30px";
        heading.textContent = "🔊 " + card.word;

        var details = document.createElement("div");
        details.classList.add("details");
        details.style.padding = "10px";
        details.style.fontFamily = "Verdana";
        details.style.fontSize = "5px";

        var paragraph = document.createElement('p');
        paragraph.style.color = "white";
        paragraph.textContent = "📢 " +card.meaning;

        //var deleteButton = document.createElement("button");
        var imageDeleteButton =document.createElement('img');
        imageDeleteButton.classList.add = "imgMain"
        imageDeleteButton.src='./trash-delete-bin.svg';
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

        

        const deleteButtonAll = document.getElementById("third-button");
        deleteButtonAll.addEventListener('click', function(){
           
            parsedCards.splice(0);
            cardContainer.remove(parsedCards);
            localStorage.clear();
           
            
           })


        details.appendChild(heading);
        details.appendChild(paragraph);
        details.appendChild(imageDeleteButton);
        
        newDiv.appendChild(details);
        cardContainer.appendChild(newDiv);
      });
    }
  });