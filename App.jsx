import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Current from "./Components/Current";
import Forecast from "./Components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap";



export default function App() {
  const [city, setCity] = useState();
  const [clickedcity, setclickedCity] = useState();
  const [citysuggestion, setCitysuggesion] = useState([]);
  const [current,setCurrent]= useState();
  const [forecast,setForecast]=useState();
  const [location,setLocation]=useState();

  const autofetchUrl = 'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q='

  const weatherurl=(city)=>` https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`

  useEffect(() => {
    if (city && city.length > 3)
      fetchautocompUrl();

  }, [city])

  const fetchautocompUrl = async () => {
    try {

      const response = await axios.get(autofetchUrl + city);
      const resp = response.data;
      console.log(resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`
      });

      setCitysuggesion(cityData);
    } catch (e) {
      console.log('error', e)

    }
  };

  const handleclickedcity=(city)=>{
    console.log('clicked city',city);
    setclickedCity(city);
    fetchweatherurl(city);
    setCitysuggesion([]);
  };

  const fetchweatherurl= async(city)=>{
    try {
      const response =await axios.get(weatherurl(city));
      const resp=response.data;
      console.log(resp);
      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log('Current',resp.current);
      console.log('Forecast',resp.forecast);
      console.log('Location',resp.location);
    } catch (e) {
      console.log("weather api error",e);
    }
  }

  return (
    <div className="container bg-info  p-5 rounded mt-5 border border-primary border-3">
      <input value={clickedcity} type='text' className='form-control'
        onChange={(e) => {
          setCity(e.target.value);
          if(e.target.value===""){
            setCurrent();
            setForecast();
            setLocation();
            setclickedCity();
          }
        }} />
      {citysuggestion && citysuggestion.map((city,index) => {
        return <div key={index} className='text-center bg-light rounded p-1 bg-opacity-50 border border-primary border-opacity-75'
         onClick={()=>handleclickedcity(city)}><h4>{city}</h4>
          </div>
      })}
      {current && <Current  current={current} location={location}/>}
      {forecast && <Forecast forecast={forecast} location={location}/>}
    </div>
  );
}




 
