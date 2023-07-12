// Function to fetch data from the PokeAPI
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // 1. Fetching the cost and id of an "ultra-ball"
  async function fetchUltraBallData() {
    const ultraBallUrl = 'https://pokeapi.co/api/v2/item/ultra-ball';
    const ultraBallData = await fetchData(ultraBallUrl);
  
    const ultraBallCost = ultraBallData.cost;
    const ultraBallId = ultraBallData.id;
  
    console.log("\nPROBLEM 1");
    console.log('Ultra Ball Cost:', ultraBallCost);
    console.log('Ultra Ball ID:', ultraBallId);
  }
  
  // 2. Fetching the list of locations found in the "kanto" region
  async function fetchKantoLocations() {
    const kantoUrl = 'https://pokeapi.co/api/v2/region/kanto';
    const kantoData = await fetchData(kantoUrl);
  
    const kantoLocations = kantoData.locations.map((location) => location.name);
  
    console.log("\nPROBLEM 2");
    console.log('Locations in Kanto:', kantoLocations);
  }
  
  // 3. Fetching the list of all the sweet berries found in the pokemon world
  async function fetchSweetBerries() {
    const berriesUrl = 'https://pokeapi.co/api/v2/berry?limit=100';
    const berriesData = await fetchData(berriesUrl);
  
    const sweetBerries = await Promise.all(
      berriesData.results
        .map(async (berry) => {
          const berryData = await fetchData(berry.url);
          return {
            name: berryData.name,
            naturalGiftType: berryData.natural_gift_type?.name
          };
        })
    );
  
    console.log("\nPROBLEM 3");
    console.log('Sweet Berries:', sweetBerries);
  }
  
  // 4. Fetching the accuracy and power of the move "thunder-punch"
  async function fetchMoveData() {
    const moveUrl = 'https://pokeapi.co/api/v2/move/thunder-punch';
    const moveData = await fetchData(moveUrl);
  
    const moveAccuracy = moveData.accuracy;
    const movePower = moveData.power;
  
    console.log("\nPROBLEM 4");
    console.log('Thunder Punch Accuracy:', moveAccuracy);
    console.log('Thunder Punch Power:', movePower);
  }
  
  // 5. Fetching a list of all the pokemon that are considered to be red
  async function fetchRedPokemon() {
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon-color/red';
    const pokemonData = await fetchData(pokemonUrl);
  
    const redPokemon = pokemonData.pokemon_species.map((species) => species.name);
  
    console.log("\nPROBLEM 5");
    console.log('Red Pokemon:', redPokemon);
  }
  
  // Calling the functions to fetch and display the data
  fetchUltraBallData();
  fetchKantoLocations();
  fetchSweetBerries();
  fetchMoveData();
  fetchRedPokemon();
  