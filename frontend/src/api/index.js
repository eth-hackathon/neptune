import axios from "axios";
// This will be put in a .env
axios.defaults.baseURL = "http://localhost:8080";

// Example of a Get request. When you send a params object you will receive a
// query object in Express
async function getUser(params) {
  try {
    const response = await axios({
      method: "get",
      url: "/api/user",
      params: params,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Example of a Post request. When you send a data object you will receive a
// body object in Express
async function addUser(body) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/user",
      data: body,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getServerDID() {
  try {
    const response = await axios({
      method: "get",
      url: "/api/server-did",
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export {getUser, addUser, getServerDID};
