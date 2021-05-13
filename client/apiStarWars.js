const request = require ('request')
const http = require ('http')

const hostname = "https://swapi.dev/api/planets/?search="

function getInfoPlanet(nome) {
    request(`${hostname}${nome}`, (err, res, body) => {

       const {data} = body
       return data;
        });
        
}
nome = "Tatooine"
console.log(getInfoPlanet(nome))



/*
async function getInfoPlanet(nome) {
  try {

    const list =  ({
        url: hostname,
        method: 'GET',
        params: {
            search: nome
        }
    })

    const {data} = await request(list);

    return data;
  } catch  (error) {
    
  }
  
}
nome = "Tatooine"
console.log(getInfoPlanet(nome))

module.exports = getInfoPlanet; */
