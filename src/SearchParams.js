import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["poodle", "bichon"]
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
    </div>
  )
};

export default SearchParams;
