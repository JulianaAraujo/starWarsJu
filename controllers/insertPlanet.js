
const HttpError = require('../models/http-error')
const planet = require('../models/planet')
const getStarWars = require('../client/apiStarWars')

const newPlanet = async (req, res, next) => {
    const { nome, clima, terreno} = req.body

    const responsePlanetsByName = await getStarWars(nome)

    if (responsePlanetsByName.count == 0) {
        const err = new HttpError('Planeta não existe', 500)
        return next(err)
    }

  
    let climate = responsePlanetsByName.results[0].climate

    if (climate != clima) {
        const err = new HttpError(`O clima deste planeta é: ${climate}`, 500)
        return next(err)
    }

    let terrain = responsePlanetsByName.results[0].terrain

    if (terrain != terreno) {
        const err = new HttpError(`O terreno deste planeta é: ${terrain}`, 500)
        return next(err)
    }

    let films = responsePlanetsByName.results[0].films.length
    console.log(films)
     
    const createdPlanet = new planet ({
      nome: nome,
      clima: clima,
      terreno: terreno,
      qtdFilmes: films
    });

    try {
      await createdPlanet.save()
    } catch (error) {
      console.log(error)
      const err = new HttpError('Não foi possivel salvar o Planeta', 500)
      return next(err)
    }
    }
exports.newPlanet = newPlanet