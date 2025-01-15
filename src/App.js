
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // api data insert //
  const fetchData = () => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json()
      ).then((result) => {
        setCountriesData(result.data)
        setFilteredData(result.data)
      }).catch((error) => {
        console.log("Error", error);

      });



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
          return item;
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
 
    <div className='bg-black flex justify-center items-center h-[1200px] w-[1600px]'>
     <div className="rounded-full bg-white h-[140px] w-[140px]"></div>
      <img className='h-[100px] w-[100px]'
        src='sun.png'
        alt=''
      />
      <div>
        <div>
          <input onChange={handleChange} placeholder='Search country' className='h-[50px] w-[300px]' />
        </div>
        <div>
          {filteredData.map((country, index) => {
            return <div className="" key={index}>{country.country}</div>;
          })}
        </div>
      </div>


      <div className="">
        <div className="">
          <div className="">
          </div>
        </div>
        <div className="">
          <div className=""></div>
        </div>
      </div>
    </div>

  );
}

export default App;
