let axios = require('axios')

module.exports = {
  searchChart: function (airport) {
    let encodedURI = window.encodeURI('https://api.aircharts.org/v2/Charts/' + airport)

    return axios.get(encodedURI)
            .then(function (response) {
              return response.data
            })
  }
}
