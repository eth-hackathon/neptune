import {add, isFuture} from "date-fns";
import axios from "axios";

const stackAxios = axios.create({
  baseURL: "https://api.stackexchange.com/2.3/",
});

async function getUserInfo() {
  const access_token = localStorage.getItem("access_token");
  const expires = localStorage.getItem("expires");

  if (!access_token || !expires) {
    console.log("no token error");
    return {
      data: null,
      error: "The user has not authenticated.",
    };
  }

  const today = new Date();
  const expires_in = add(today, {seconds: expires});
  if (!isFuture(expires_in)) {
    console.log("date error");

    return {data: null, error: "The token has expired."};
  }

  // add key, site and access_token
  try {
    const response = await stackAxios({
      method: "get",
      url: "/me/",
      params: {access_token},
    });

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {data: null, error: error};
  }
}

// ?key=U4DMV*8nvpm3EOpvf69Rxw((

export {getUserInfo};
