
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


function makePokemonCard(name) {
    //pokemon name
    const h2 = document.createElement('h2')
    //pokemon image-holder
    const imgBox = document.createElement('div')
    imgBox.setAttribute('class', 'imgBox')
    //pokemon image
    const img = document.createElement('img')
    //pokemon card 
    const cardli = document.createElement('li')
    cardli.setAttribute('class', 'card')
    //card stats
    const cardText = document.createElement('ul')
    cardText.setAttribute('class', 'card--text')
    const hp = document.createElement('li')
    const attack = document.createElement('li')
    const defence = document.createElement('li')
    const specialAttack = document.createElement('li')
    const specialDefence = document.createElement('li')
    const speed = document.createElement('li')
    const cards = document.querySelector('.cards')

    for (pokemon of data) {
        const HP = pokemon.stats[0].stat.name.toUpperCase()
        const ATTACK = pokemon.stats[1].stat.name.toUpperCase()
        const DEFENCE = pokemon.stats[2].stat.name.toUpperCase()
        const SPECIAL_ATTACK = pokemon.stats[3].stat.name.toUpperCase()
        const SPECIAL_DEFENCE = pokemon.stats[4].stat.name.toUpperCase()
        const SPEED = pokemon.stats[5].stat.name.toUpperCase()

        if (pokemon.name === name) {
            h2.innerText = pokemon.name
            img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
            hp.innerText = HP + pokemon.stats[0].base_stat
            attack.innerText = ATTACK + pokemon.stats[1].base_stat
            defence.innerText = DEFENCE + pokemon.stats[2].base_stat
            specialAttack.innerText = SPECIAL_ATTACK + pokemon.stats[3].base_stat
            specialDefence.innerText = SPECIAL_DEFENCE + pokemon.stats[4].base_stat
            speed.innerText = SPEED + pokemon.stats[5].base_stat
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

    }

}

for (pokemon of data) {
    console.log(makePokemonCard(pokemon.name))
}