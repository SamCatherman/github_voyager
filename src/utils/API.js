import axios from 'axios'

const URL = 'https://api.github.com/users/'

export default {
  search: function(query) {
    return axios.get(URL + query)
  }
};
