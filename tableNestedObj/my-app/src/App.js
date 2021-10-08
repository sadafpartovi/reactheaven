import axios from "axios";
import { useState, useEffect } from "react";
import Table from './Table'

function App() {
  const [users, setUser] = useState([]);
  const [faltLocations, setFlatLocations] = useState([]);


  const getData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=20");
      setUser(data.results);

      const locationData = data.results.map(item => flattenLocation(item.location));
      setFlatLocations(locationData)

    } catch (err) {
      console.log(err);
    }
  };

  const flattenLocation = (obj) => {
    const flattened = {};
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(flattened, flattenLocation(obj[key]));
      } else {
        flattened[key] = obj[key];
      }
    });
    return flattened;
  };


  useEffect(() => {
    getData();

  }, []);


  return (
    <>
    {faltLocations.length  &&  <Table data={faltLocations}/>}

    </>
  );
}

export default App;
