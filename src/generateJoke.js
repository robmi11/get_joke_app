import axios from "axios";

const URL = "https://icanhazdadjoke.com";

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get(URL, config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}

export default generateJoke;
