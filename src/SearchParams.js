import { useState } from "react";

const SearchParams = () => {
  // const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  return(
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input type="text" id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default SearchParams;
