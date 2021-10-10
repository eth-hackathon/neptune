import {add, isFuture} from "date-fns";

const api_url = "https://api.stackexchange.com/2.3/";

async function exampleRequest() {
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

    // Handle the refresh of the token
  }

  // Add the params
  const url = new URL(api_url);
  url.searchParams.append("key", access_token);

  console.log(url);

  // Do the API Call
  /* const response = await axios({
    method: 'get',
    url,
  }) 
  return response.data
  */
}

// ?key=U4DMV*8nvpm3EOpvf69Rxw((

export {exampleRequest};
