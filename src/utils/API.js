const URL = `https://api.github.com/users/`

export default {
  search: function(query) {
    return fetch(URL + query)
  }
};
