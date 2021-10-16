import axios from "axios";

const mainAxios = axios.create({
  baseURL: "http://localhost:8080",
});

// Example of a Get request. When you send a params object you will receive a
// query object in Express
async function getUser(params) {
  try {
    const response = await mainAxios({
      method: "get",
      url: "/api/user",
      params: params,
    });

    return {data: response.data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}

// Example of a Post request. When you send a data object you will receive a
// body object in Express
async function addUser(body) {
  try {
    const response = await mainAxios({
      method: "post",
      url: "/api/user",
      data: body,
    });

    return {data: response.data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}

async function getServerDID() {
  try {
    const response = await mainAxios({
      method: "get",
      url: "/api/server-did",
    });

    return {data: response.data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}

async function getJsonModel() {
  try {
    const response = await mainAxios({
      method: "get",
      url: "/api/json-model",
    });

    return {data: response.data, error: null};
  } catch (error) {
    return {data: null, error: error};
  }
}

export {getUser, addUser, getServerDID, getJsonModel};
