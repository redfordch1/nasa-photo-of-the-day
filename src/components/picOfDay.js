import React from "react";

function PicOfDay(props) {
  console.log(props);
  return (
    <div className = "topInfo">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src = {props.url} alt = "NASA PHOTO OF THE DAY"></img>
        <div className = "bottomInfo">
            <h3>Details</h3>
            <p>{props.explanation}</p>
        </div>
    </div>
  );
}

export default PicOfDay;