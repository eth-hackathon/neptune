import {add, isFuture} from "date-fns";
import axios from "axios";
import {useState} from "react";

axios.defaults.baseURL = "https://api.stackexchange.com/2.3/";

async function getUserInfo(idx) {
  const access_token = localStorage.getItem("access_token");
  const expires = localStorage.getItem("expires");

  if (!access_token || !expires) {
    console.log("no token error");
    return {
      error: "The user has not authenticated.",
    };
  }

  const today = new Date();
  const expires_in = add(today, {seconds: expires});
  if (!isFuture(expires_in)) {
    console.log("error");

    return {error: "The token has expired."};
  }

  // add key, site and access_token
  try {
    const response = await axios({
      method: "get",
      url: "/me/",
      params: {
        access_token: "LFlKbmmKYscGUPKYNlPSdQ))",
        key: "CET*C8wBS4xDPrPA)DboRA((",
        site: "ethereum",
      },
    });
    const stackID = response.data.items[0].user_id;
    idx.set("profil", {stackID});
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// ?key=U4DMV*8nvpm3EOpvf69Rxw((

export {getUserInfo};
