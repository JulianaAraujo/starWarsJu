const HttpError = require('../models/http-error')
const planet = require('../models/planet')
const getStarWars = require('../client/apiStarWars')

const deletPlanet = async (req, res, next){
    const { nome } = req.body

    planet.find
}