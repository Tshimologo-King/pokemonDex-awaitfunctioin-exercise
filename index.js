//Process

//Step 1: Create an Array that will hold the data required
const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
const pokemonList = [];

//Use the async fucntion to retrieve the details
async function getData() {
  //use fetch + json to retrieve data
  const data = await fetch(url).then((res) => res.json());

  //Pull the results from the array
  const { results } = data;

  //Step 2: Loop Over the array and update the list
  results.forEach(async (pokemon) => {
    //Get individual pokemon data from API
    const pokemonHero = await fetch(pokemon.url).then((res) => res.json());

    //Add pokemonHero to array
    pokemonList.push(pokemonHero);

    //Update HTML
    showPokemon(pokemonList);
  });
}

getData();


//Step 3: Fetch the details from the api and push to the List
function showPokemon(pokemonArr) {

    //Get id from HTML and set it to blank
  document.querySelector("#pokemonList").innerHTML = "";
  //LOOP through the pokemon list
  pokemonArr.forEach((pokemon) => {
    document.querySelector("#pokemonList").innerHTML += `<div id="pokemonList">
        <img src=${pokemon.sprites.front_default} alt='Pokemon'>
        </div>`;
  });
}

//Step 4: Display the final details
