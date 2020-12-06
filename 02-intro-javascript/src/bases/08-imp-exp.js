import heroes, {owners} from '../data/heroes'
// console.log(owners)


export const getHeroById = (id) => heroes.find((hero) => hero.id === id)
// console.log(getHeroById(2))

export const getHeroByOwner = (own) => heroes.filter((hero) => hero.owner === own)
// console.log(getHeroByOwner('DC'))
