
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // api data insert //
  const fetchData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
    .then((response) =>response.json()
    ).then((result) => {
      setCountriesData(result.data)
      setFilteredData(result.data)
    }).catch((error) => {
      console.log("Error", error);

    });
    console.log("owww");
    
    
  };
  const filterData = () => {
    setFilteredData(
      countriesData.filter((item) => {

        console.log("item country", item.country);
        console.log("countriesSearch", countriesSearch);

        if (item.country
          .toUpperCase()
          .split("")
          .includes(countriesSearch.toUpperCase())
        )
        return item ;
      })
    );
  }
  useEffect(() => {
    filterData();
    ;
  }, [countriesSearch]);
  // appending to inserted api data //
  useEffect(() => {
    console.log("useEffect data worked")

    fetchData();
  }, [])





  const handleChange = (event) => {
    setCountriesSearch(event.target.value);

  };


  return (

    <div>

      <div>
        <div>
          <input onChange={handleChange} placeholder='Search country' className='searchInput' />
        </div>
        <div>
          {filteredData.map((country, index) => {
            return <div key={index}>{country.country}</div>;
          })}
        </div>
      </div>


      <div className='boardPosition'>
        <div className='whiteScreen'>
          <div className='whiteScreenInfo'>
          </div>
        </div>
        <div className='blackScreen'>
          <div className='blackScreenInfo'></div>
        </div>
      </div>
    </div>

  );
}

export default App;
