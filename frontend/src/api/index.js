import axios from "axios";
// This will be put in a .env
axios.defaults.baseURL = "http://localhost:8080";

// Example of a Get request. When you send a params object you will receive a
// query object in Express
async function exampleGet(params) {
  try {
    const response = await axios({
      method: "get",
      url: "/api/example",
      params: params,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

// Example of a Post request. When you send a data object you will receive a
// body object in Express
async function examplePost(body) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/example",
      data: body,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export {exampleGet, examplePost};
