
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


function makePokemonCard(name) {
    //POKEMON NAME
    const h2 = document.createElement('h2')
    //CARD IMAGE HOLDER
    const imgBox = document.createElement('div')
    imgBox.setAttribute('class', 'imgBox')
    //POKEMON IMAGE
    const img = document.createElement('img')
    //CARD
    const cardli = document.createElement('li')
    cardli.setAttribute('class', 'card')
    //CARD STATS
    const cardText = document.createElement('ul')
    cardText.setAttribute('class', 'card--text')
    const hp = document.createElement('li')
    const attack = document.createElement('li')
    const defence = document.createElement('li')
    const specialAttack = document.createElement('li')
    const specialDefence = document.createElement('li')
    const speed = document.createElement('li')
    const cards = document.querySelector('.cards')
    // GAME APPEARANCE
    const game = document.createElement('ul')
    const gameTitles = document.createElement('li')


    for (pokemon of data) {
        const OFFICIAL_ARTWORK = pokemon.sprites.other['official-artwork'].front_default
        const HP = pokemon.stats[0].stat.name.toUpperCase()
        const ATTACK = pokemon.stats[1].stat.name.toUpperCase()
        const DEFENCE = pokemon.stats[2].stat.name.toUpperCase()
        const SPECIAL_ATTACK = pokemon.stats[3].stat.name.toUpperCase()
        const SPECIAL_DEFENCE = pokemon.stats[4].stat.name.toUpperCase()
        const SPEED = pokemon.stats[5].stat.name.toUpperCase()

        const HP_STAT = pokemon.stats[0].base_stat
        const ATTACK_STAT = pokemon.stats[1].base_stat
        const DEFENCE_STAT = pokemon.stats[2].base_stat
        const SPECIAL_ATTACK_STAT = pokemon.stats[3].base_stat
        const SPECIAL_DEFENCE_STAT = pokemon.stats[4].base_stat
        const SPEED_STAT = pokemon.stats[5].base_stat

      

        if (pokemon.name === name) {
            h2.innerText = pokemon.name
            img.setAttribute('src', OFFICIAL_ARTWORK)
            hp.innerText = `${HP}:\u00A0 ${HP_STAT}`
            attack.innerText = `${ATTACK}:\u00A0 ${ATTACK_STAT}`
            defence.innerText = `${DEFENCE}:\u00A0 ${DEFENCE_STAT}`
            specialAttack.innerText = `${SPECIAL_ATTACK}:\u00A0 ${SPECIAL_ATTACK_STAT}`
            specialDefence.innerText = `${SPECIAL_DEFENCE}:\u00A0 ${SPECIAL_DEFENCE_STAT}`
            speed.innerText = `${SPEED}:\u00A0 ${SPEED_STAT}`









        }




        cardli.append(h2)
        imgBox.append(img)
        cardli.append(imgBox)
        cardText.append(hp)
        cardText.append(attack)
        cardText.append(defence)
        cardText.append(specialAttack)
        cardText.append(specialDefence)
        cardText.append(speed)
        cardli.append(cardText)
        cards.append(cardli)
        cards.append(game)
        game.append(gameTitles)
    }

}

for (pokemon of data) {
    console.log(makePokemonCard(pokemon.name))
    console.log()
}