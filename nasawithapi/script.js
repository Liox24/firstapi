const apiKey = "tAZbkEeAoBJyVZQNHM3eghEQHCmE8uvMMdZSLweY";
const url = "https://api.nasa.gov/planetary/apod?";

let container = document.querySelector(".container");
let fetchDataButton = document.getElementById("fetch-data");

fetchDataButton.addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  let imageContainer = document.querySelector(".image-container");
  let textContainer = document.querySelector(".text-container");

  // Remove existing content
  imageContainer.innerHTML = "";
  textContainer.innerHTML = "";

  let dateInput = document.querySelector(".details-input input");
  let date = dateInput.value;

  let request = new XMLHttpRequest();
  request.open("GET", url + "date=" + date + "&api_key=" + apiKey, true);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);

      // Display image
      let imageUrl = data.url;
      let image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.appendChild(image);

      // Display text data
    //   let explanation = document.createElement("p");
    //   explanation.textContent = data.explanation;
    //   textContainer.appendChild(explanation);
        let explanation = document.getElementById("datatext");
        explanation.textContent = data.explanation;
    } else {
      window.alert("Please enter the date in correct format.");
    }
  };
}
