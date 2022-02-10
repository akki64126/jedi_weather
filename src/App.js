import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherSVG from "./img/weather.svg";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import './App.css';

function App() {
  const [city, setCity] = useState("kargil");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("India"));
  }, []);

  const state = useSelector(state => state);
  const { weather, loading, error } = state;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  var local_date = new Date(weather?.daily[0].dt * 1000).toLocaleTimeString("en-US")
  var dayNum = new Date( local_date * 1000).getDay();
  var days_res = [], i = -1, len = 5;
  while (++i <= len) {
    var dayNum = new Date( weather?.daily[i].dt * 1000).getDay();
  days_res.push(days[dayNum]);
  }
  // console.log(state);
  return (
    <div>
      <section class="relative bg-gray-900  min-h-screen">
        <div class="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Weather App
          </h2>
          <input
            // onClick={() => dispatch(fetchWeatherAction(city))}
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
            class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
          ></input>
          <button
            type="button"
            className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => dispatch(fetchWeatherAction(city))}
          >
            Search
          </button>
        </div>
        {loading ? (
          <h1 className="text-gray-400 text-4xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-2xl text-center">
            {error?.message}
          </h1>          
        ) : (
          <div>
            <div class="container1">
              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[0].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> Today</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[0].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[0].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[0].humidity))}{" "}
                  </h1>
                </div>
              </div> 
            </div>


            <div class="container1">
              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[1].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> { days_res[1] }</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[1].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[1].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[1].humidity))}{" "}
                  </h1>
                </div>
              </div> 
          
              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[0].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> { days_res[2] }</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[2].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[2].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[2].humidity))}{" "}
                  </h1>
                </div>
              </div> 

              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[3].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> { days_res[3] }</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[3].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[3].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[3].humidity))}{" "}
                  </h1>
                </div>
              </div> 

              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[4].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> { days_res[4] }</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[4].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[4].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[4].humidity))}{" "}
                  </h1>
                </div>
              </div> 

              <div class="block" id="result1">
                <div class="image">
                  <img src={`https://openweathermap.org/img/wn/${weather?.daily[3].weather[0].icon}@2x.png`}
                        alt="/" width="60px" height="60px"/>
                </div>
                <h1 class = "day"> { days_res[5] }</h1>
                <div class="content"> 
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Max: </span>
                    {Math.ceil(Number(weather?.daily[5].temp?.max)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                  <h1 class="text-gray-300 text-center text-2xl">
                    <span class="text-yellow-500 text-2xl">Min: </span>
                    {Math.ceil(Number(weather?.daily[5].temp?.min)-273.15)}{" "}
                    <span class="text-yellow-500 text-2xl">°C</span>
                  </h1>
                </div>
                <div class="content">
                  <h1 class="text-gray-300 text-center text-2xl ">
                    <span class="text-yellow-500 text-2xl">Humidity: </span>
                    {Math.ceil(Number(weather?.daily[5].humidity))}{" "}
                  </h1>
                </div>
              </div> 
            </div>
        </div>
        )}
      </section>
    </div>
  )
}
export default App;