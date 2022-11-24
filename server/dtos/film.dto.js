module.exports = class FilmDto {
    id 
    name 
    year 
    country
    length
    description 
    poster 
    players

    constructor(model) {
        this.id = model.Id 
        this.name = model.Name 
        this.year = model.Year 
        this.country = model.Country 
        this.length = model.Length 
        this.description = model.Description 
        this.poster = model.Poster 
        this.players = JSON.parse(model.Players)
    }

}