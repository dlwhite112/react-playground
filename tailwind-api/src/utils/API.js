import axios from "axios";

var options = {
  method: "GET",
  url: "https://numbersapi.p.rapidapi.com/6/21/date",
  params: { fragment: "true", json: "true" },
  headers: {
    "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    "x-rapidapi-key": "fc59749277msh5739753a05bb4c3p1fe10cjsn564de6700695",
  },
};

const api = {
  getData: function () {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};

export default api