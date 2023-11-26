const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//create a factory function and add properties
const createPet = function (name,species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5,
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz`);
            this.isTired = 1;
        },
        play: function () {
            if (this.isTired === 10) {
                console.log("Too tired to play");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
           }
        }

        return pet;
}

// create five new objects
const sora = createPet ("Sora", "ferret");
const clover = createPet ("Clover", "rabbit");
const baxter = createPet ("Baxter", "hamster");
const cleo = createPet ("Cleo", "rat");
const francine = createPet ("Francine", "turtle");

//verify objects and methods
//console.log(sora, clover, baxter, cleo, francine);

clover.sleep();
baxter.play();

console.log(clover, baxter);

//update properties and create an array of objects
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];
//console.log(allPets);

//display pets in browser
const showPets = function (petArray) {
    pets.innerHTML = "";
    for (let pet of petArray) {
        let status = "ready to play!";
        if (pet.isTired >= 7){
            status = "sleeping";
        }
        const li = document.createElement("li");
        li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    } 
}

//add click event
statusButton.addEventListener("click", function(){
    showPets(allPets);
});