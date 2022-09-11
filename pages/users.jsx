import axios from "axios";

const users = () => {
  var config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: false,
  };
  axios
    .get("http://localhost:8080/users", config)

    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {});
  return <></>;
};

export default users;
