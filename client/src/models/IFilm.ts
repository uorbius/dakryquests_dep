interface IPlayer {
    player: string
}

export interface IFilm {
    id: number
    name: string
    year: string
    country: string
    length: string
    description: string 
    poster: string
    players: IPlayer[]
}