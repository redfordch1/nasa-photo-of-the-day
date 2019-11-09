import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import PicOfDay from "./components/picOfDay.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HXZtTRSTcX4ZhuiAzslbvWWEn6HbkuVTxnVCPkqm&date=2012-12-31").then(response => {
    setData(response.data);
    console.log(response.data);
    })
  },[]);

  return (
    <div className="App">
      <PicOfDay title = {data.title}  url = {data.url} explanation = {data.explanation} date = {data.date}/>
    </div>
  );
}

export default App;
