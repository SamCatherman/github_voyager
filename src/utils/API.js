const URL = `https://api.github.com/users/`;

//exports function that returns a fetch to the Github API.
//Add additional API calls to different endpoints here
export default {
  search: function(query) {
    return fetch(URL + query);
  }
};
