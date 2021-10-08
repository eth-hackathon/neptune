import axios from "axios";
// This will be put in a .env
axios.defaults.baseURL = "https://api.stackexchange.com/2.3/";

//Make a Stack Exchange query of top answers based upon user ID and a tag and some parameters
async function getTopAnswerByUserId(params, id, tag) {
  try {
    const response = await axios({
      method: "get",
      url: "users/" + id + "/tags/" + tag + "/top-answers",
      params,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

export {getTopAnswerByUserId};
