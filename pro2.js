console.log("Hello!");

let contentDiv = document.getElementById("quote-API");

let button = document.getElementById("btn-getquote");


button.addEventListener("mouseup", function(event) {

  event.preventDefault();

  let url = "https://api.quotable.io/random";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {

      console.log(json);
      console.log(json.content);

      contentDiv.innerHTML = "&quot;" + json.content + "&quot;";

    });
});
