async function example({tag}) {
  return await fetch("/api/example", {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  })
    .then((response) => {
      console.log(response);
      // If request is not successful, display error message
      // if (response.ok !== "true") {
      //   throw new Error("HTTP status " + response.status);
      // }

      return response.json();
    })
    .catch((err) => {
      console.log("=>", err);
    });
}

export {example};
