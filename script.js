const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button')
const pokemonImgDiv = document.getElementById('pokemon-img');

const pokemonName = document.getElementById('pokemon-name')
const pokemonId= document.getElementById('pokemon-id')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const types = document.getElementById('types')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const specialAttack = document.getElementById('special-attack')
const specialDefense = document.getElementById('special-defense')
const speed = document.getElementById('speed')
const removeBtn = document.getElementById('remove-input')

const pokemons = [
    {
        id: 25,
        name: "Pikachu",
        weight: 60,
        height: 4,
        hp: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90,
        types: ["ELECTRIC"],
        img: "https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-png-transparent-0.png"
    },
    {
        id: 94,
        name: "Gengar",
        weight: 405,
        height: 15,
        hp: 60,
        attack: 65,
        defense: 60,
        specialAttack: 130,
        specialDefense: 75,
        speed: 110,
        types: ["GHOST", "POISON"],
        img: "https://static.wikia.nocookie.net/pokemonunite/images/c/c6/Gengar_art.png"
    }
]

searchBtn.addEventListener('click', controlPokemon);
searchInput.addEventListener('keyup', removeBtnF)

searchInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') controlPokemon();
})

removeBtn.addEventListener('click', () => {
    searchInput.value = "";
    removeBtn.style.display = "none";
})

function removeBtnF(){
    if(searchInput.value.trim() === '' ){
        removeBtn.style.display = "none";
    } else {
        removeBtn.style.display = "block";
    }
}


function controlPokemon(){
    val = searchInput.value.trim();

    pokemonImgDiv.innerHTML = "";
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
    types.textContent = "";

    if( val === 'Red'){
        alert('Pokémon not found');
    } else {
        pokemons.map((pokemon) => {
            if(pokemon.id === val || pokemon.name === val){
                const img = document.createElement('img');
                img.src = pokemon.img;
                pokemonImgDiv.append(img)

                pokemonName.textContent = pokemon.name;
                pokemonId.textContent = pokemon.id;
                weight.textContent = pokemon.weight;
                height.textContent = pokemon.height;
                hp.textContent = pokemon.hp;
                attack.textContent = pokemon.attack;
                defense.textContent = pokemon.defense;
                specialAttack.textContent = pokemon.specialAttack;
                specialDefense.textContent = pokemon.specialDefense;
                speed.textContent = pokemon.speed;

                pokemon.types.forEach((type) => {
                    const span = document.createElement('span');
                    span.textContent = type;
                    types.append(span);
                })
                
            }
        })
    }
}