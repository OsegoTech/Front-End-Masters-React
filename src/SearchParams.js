import { useState, useEffect } from "react";
import Pet from "./pet";
import pet from "./pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["poodle", "bichon"];
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets(){
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return(
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input type="text" id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name=""
            id="animal"
            value={ animal }
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option value="" />
            {ANIMALS.map((animal) =>(
                <option value={animal} key={animal}>
                  {animal}
                </option>
              )
            )}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name=""
            id="breed"
            value={ breed }
            onChange={(e) => {
              setBreed(e.target.value)
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option value="" />
            {breeds.map((breed2) =>(
                <option value={breed2} key={breed2}>
                  {breed2}
                </option>
              )
            )}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        pets.map((pet) => (
          <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}/>
        ))
      }
    </div>
  )
};

export default SearchParams;
