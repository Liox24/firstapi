document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemonContainer = document.createElement("div");
      pokemonContainer.classList.add("pokemonContainer");

      pokemonContainer.innerHTML = `
        <div class="pokemonImage">
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="Pokemon name"
          />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h1>
          <p>Weight: ${data.weight}</p>
        </div>`;

      document.querySelector(".pokemonBox").appendChild(pokemonContainer);
    })
    .catch((err) => {
      const errorContainer = document.createElement("div");
      errorContainer.innerHTML = `
        <h4>Pokemon not found 😞</h4>`;
      document.querySelector(".pokemonBox").appendChild(errorContainer);

      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
