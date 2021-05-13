
const HttpError = require('../models/http-error')
const planet = require('../models/planet')
const infoPlanet = require('../client/apiStarWars')

const newPlanet = async (req, res, next) => {
    const { nome, clima, terreno } = req.body

    const responsePlanetsByName = await infoPlanet(nome)

   
    console.log(responsePlanetsByName)
    
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

    let qtdFilmes = responsePlanetsByName.results[0].films.length

      const createdPlanet = new planet ({
        nome,
        clima,
        terreno,
        qtdFilmes
      });

      try {
        await createdPlanet.save()
      } catch (error) {
        const err = new HttpError('Não foi possivel salvar o Planeta', 500)
        return next(err)
      }

  }


exports.newPlanet = newPlanet