var axios = require('axios');

const seachPlanet = async (namePlanet) => {

    const result = await axios.get(`https://swapi.dev/api/planets/?search=${namePlanet}`)
    .catch((error) => {
      return error;    
    });
    return result.data;
};

module.exports = seachPlanet;

