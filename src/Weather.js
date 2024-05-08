import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather({ city }) {
  function handleResponse(response) {
    alert(`Weather in ${response.data.name} ${response.data.main.temp}`);
  }

  let apiKey = `5863935ee9cca4c02ed68203f807c65b`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return (
    <Audio
      height="80"
      width="80"
      radius="3"
      color="pink"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
