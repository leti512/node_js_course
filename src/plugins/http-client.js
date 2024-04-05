const axios = require('axios');

const httpClientPlugin = {
  get: async(url) => {
    const { data } = await axios.get( url );
      return data
  },

    // post: async(url, body) => {},
    // put: async(url, body) => {},
    // delete: async(url) => {}
};

// axios.get(url)
//   .then(function (response) {
//     // manejar respuesta exitosa
//     console.log(response);
//   })
//   .catch(function (error) {
//     // manejar error
//     console.log(error);
//   })
//   .finally(function () {
//     // siempre sera executado
//   })


module.exports = {
    httpClientPlugin,
}