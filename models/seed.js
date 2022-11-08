// require('dotenv').config()
// const db = require('./db')
// const Monster = require('./monster')

// const starterMonsters = [
//   {
//     name: 'Flareon',
//     regionalForm: '',
//     primaryType: 'fire',
//     secondaryType: '',
//     species: 'Flame Pokémon',
//     region: 'kanto',
//     image: 'https://img.pokemondb.net/artwork/avif/flareon.avif',
//     entry: 'Flareon’s fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon’s body temperature can rise to a maximum of 1,650 degrees Fahrenheit.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Whimsicott',
//     regionalForm: '',
//     primaryType: 'grass',
//     secondaryType: 'fairy',
//     species: 'Windveiled Pokémon',
//     region: 'unova',
//     image: 'https://img.pokemondb.net/artwork/avif/whimsicott.avif',
//     entry: 'It scatters cotton all over the place as a prank. If it gets wet, it’ll become too heavy to move and have no choice but to answer for its mischief.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Beautifly',
//     regionalForm: '',
//     primaryType: 'bug',
//     secondaryType: 'flying',
//     species: 'Butterfly Pokémon',
//     region: 'johto',
//     image: 'https://img.pokemondb.net/artwork/avif/beautifly.avif',
//     entry: 'Beautifly’s favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window. Beautifly is sure to come looking for pollen.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },,
//   {
//     name: 'Flygon',
//     regionalForm: '',
//     primaryType: 'ground',
//     secondaryType: 'dragon',
//     species: 'Mystic Pokémon',
//     region: 'hoenn',
//     image: 'https://img.pokemondb.net/artwork/avif/flygon.avif',
//     entry: 'Flygon is nicknamed “the elemental spirit of the desert.” Because its flapping wings whip up a cloud of sand, this Pokémon is always enveloped in a sandstorm while flying.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Talonflame',
//     regionalForm: '',
//     primaryType: 'fire',
//     secondaryType: 'flying',
//     species: 'Scorching Pokémon',
//     region: 'alola',
//     image: 'https://img.pokemondb.net/artwork/avif/talonflame.avif',
//     entry: 'Bird Pokémon make up most of its diet. It approaches at high speeds and smacks them down to the ground with its powerful kick.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Shiinotic',
//     regionalForm: '',
//     primaryType: 'grass',
//     secondaryType: 'fairy',
//     species: 'Illuminating Pokémon',
//     region: 'galar',
//     image: 'https://img.pokemondb.net/artwork/avif/shiinotic.avif',
//     entry: 'Its flickering spores lure in prey and put them to sleep. Once this Pokémon has its prey snoozing, it drains their vitality with its fingertips.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Mismagius',
//     regionalForm: '',
//     primaryType: 'ghost',
//     secondaryType: '',
//     species: 'Magical Pokémon',
//     region: 'sinnoh',
//     image: 'https://img.pokemondb.net/artwork/avif/mismagius.avif',
//     entry: 'The incantations Mismagius chants can ward against misfortune, so a custom exists of inviting it into one’s home. Incur the Pokémon’s displeasure, however, and disaster will surely ensue.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Amaura',
//     regionalForm: '',
//     primaryType: 'rock',
//     secondaryType: 'ice',
//     species: 'Tundra Pokémon',
//     region: 'kalos',
//     image: 'https://img.pokemondb.net/artwork/avif/amaura.avif',
//     entry: 'This Pokémon was successfully restored from a fossil. In the past, it lived with others of its kind in cold lands where there were fewer predators.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Hatterene',
//     regionalForm: '',
//     primaryType: 'psychic',
//     secondaryType: 'fairy',
//     species: 'Silent Pokémon',
//     region: 'galar',
//     image: 'https://img.pokemondb.net/artwork/avif/hatterene.avif',
//     entry: 'If you’re too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Overqwil',
//     regionalForm: '',
//     primaryType: 'dark',
//     secondaryType: 'poison',
//     species: 'Pin Cluster Pokémon',
//     region: 'paldea',
//     image: 'https://img.pokemondb.net/artwork/avif/overqwil.avif',
//     entry: 'Its lancelike spikes and savage temperament have earned it the nickname “sea fiend.” It slurps up poison to nourish itself.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Mareanie',
//     regionalForm: '',
//     primaryType: 'poison',
//     secondaryType: 'water',
//     species: 'Brutal Star Pokémon',
//     region: 'alola',
//     image: 'https://img.pokemondb.net/artwork/avif/mareanie.avif',
//     entry: 'Aside from its head, its body parts regenerate quickly if they’re cut off. After a good night’s sleep, Mareanie is back to normal.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Galvantula',
//     regionalForm: '',
//     primaryType: 'bug',
//     secondaryType: 'electric',
//     species: 'EleSpider Pokémon',
//     region: 'unova',
//     image: 'https://img.pokemondb.net/artwork/avif/galvantula.avif',
//     entry: 'It launches electrified fur from its abdomen as its means of attack. Opponents hit by the fur could be in for three full days and nights of paralysis.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Rapidash',
//     regionalForm: 'galarian',
//     primaryType: 'psychic',
//     secondaryType: 'fairy',
//     species: 'Unique Horn Pokémon',
//     region: 'galar',
//     image: 'https://img.pokemondb.net/artwork/avif/rapidash-galarian.avif',
//     entry: 'Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Archeops',
//     regionalForm: '',
//     primaryType: 'rock',
//     secondaryType: 'flying',
//     species: 'First Bird Pokémon',
//     region: 'hoenn',
//     image: 'https://img.pokemondb.net/artwork/avif/archeops.avif',
//     entry: 'It needs a running start to take off. If Archeops wants to fly, it first needs to run nearly 25 mph, building speed over a course of about 2.5 miles.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Sliggo',
//     regionalForm: 'hisuian',
//     primaryType: 'dragon',
//     secondaryType: 'steel',
//     species: 'Snail Pokémon',
//     region: 'hisui',
//     image: 'https://img.pokemondb.net/artwork/avif/sliggoo-hisuian.avif',
//     entry: 'A creature given to melancholy. I suspect its metallic shell developed as a result of the mucus on its skin reacting with the iron in hisui’s water.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Aromatisse',
//     regionalForm: '',
//     primaryType: 'psychic',
//     secondaryType: '',
//     species: 'Fragrance Pokémon',
//     region: 'kalos',
//     image: 'https://img.pokemondb.net/artwork/avif/aromatisse.avif',
//     entry: 'The scents Aromatisse can produce range from sweet smells that bolster allies to foul smells that sap an opponent’s will to fight.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Fraxure',
//     regionalForm: '',
//     primaryType: 'dragon',
//     secondaryType: '',
//     species: 'Axe Jaw Pokémon',
//     region: 'unova',
//     image: 'https://img.pokemondb.net/artwork/avif/fraxure.avif',
//     entry: 'Its skin is as hard as a suit of armor. Fraxure’s favorite strategy is to tackle its opponents, stabbing them with its tusks at the same time.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Eelektrik',
//     regionalForm: '',
//     primaryType: 'electric',
//     secondaryType: '',
//     species: 'EleFish Pokémon',
//     region: 'unova',
//     image: 'https://img.pokemondb.net/artwork/avif/eelektrik.avif',
//     entry: 'These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Tsareena',
//     regionalForm: '',
//     primaryType: 'grass',
//     secondaryType: '',
//     species: 'Fruit Pokémon',
//     region: 'kalos',
//     image: 'https://img.pokemondb.net/artwork/avif/tsareena.avif',
//     entry: 'Its long, striking legs are not just for show but to be used to kick with skill. In victory, it shows off by kicking the defeated, laughing boisterously.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Corviknight',
//     regionalForm: '',
//     primaryType: 'flying',
//     secondaryType: 'steel',
//     species: 'Raven Pokémon',
//     region: 'galar',
//     image: 'https://img.pokemondb.net/artwork/avif/corviknight.avif',
//     entry: 'This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Vikavolt',
//     regionalForm: '',
//     primaryType: 'bug',
//     secondaryType: 'electric',
//     species: 'Stag Beetle Pokémon',
//     region: 'galar',
//     image: 'https://img.pokemondb.net/artwork/avif/vikavolt.avif',
//     entry: 'It has an organ that generates electricity in its abdomen. It concentrates energy in its strong jaws and fires off powerful jolts of electricity.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Piloswine',
//     regionalForm: '',
//     primaryType: 'ice',
//     secondaryType: 'ground',
//     species: 'Swine Pokémon',
//     region: 'johto',
//     image: 'https://img.pokemondb.net/artwork/avif/piloswine.avif',
//     entry: 'Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Crustle',
//     regionalForm: '',
//     primaryType: 'bug',
//     secondaryType: 'rock',
//     species: 'Stone Home Pokémon',
//     region: 'unova',
//     image: 'https://img.pokemondb.net/artwork/avif/crustle.avif',
//     entry: 'This highly territorial Pokémon prefers dry climates. It won’t come out of its boulder on rainy days.',
//     evolutionType: '',
//     hasBeenCaught: 'uncaught'
//   },
//   {
//     name: 'Gallade',
//     regionalForm: '',
//     primaryType: 'psychic',
//     secondaryType: 'fighting',
//     species: 'Blade Pokémon',
//     region: 'sinnoh',
//     image: 'https://img.pokemondb.net/artwork/avif/gallade-mega.avif',
//     entry: 'The blades extending from its elbows are sharper than the finest swords. Its swordsmanship, albeit self-taught, is astonishingly impressive.',
//     evolutionType: 'mega',
//     hasBeenCaught: 'caught'
//   },
//   {
//     name: 'Drifblim',
//     regionalForm: '',
//     primaryType: 'ghost',
//     secondaryType: 'flying',
//     species: 'Blimp Pokémon',
//     region: 'sinnoh',
//     image: 'https://img.pokemondb.net/artwork/avif/drifblim.avif',
//     entry: 'It drifts along at dusk, perfectly silent. Its transient, melancholy aspect touches some people deeply—every so often, one will come upon a song or poem devoted to Drifblim.',
//     evolutionType: '',
//     hasBeenCaught: 'caught'
//   }
// ]

// Monster.deleteMany({})
//   .then(() => {
//     Monster.create(starterMonsters)
//       .then((createdMonsters) => {
//         console.log(createdMonsters)
//         db.close()
//       })
//       .catch(err => {
//         console.log(err)
//         db.close()
//       })
//   }).catch(err => {
//     console.log(err)
//     db.close()
//   })
