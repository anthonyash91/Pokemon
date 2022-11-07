const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Region extends React.Component {
  render () {
    const { monsters } = this.props
    const category = this.props.category

    if (category === 'kanto' || category === 'johto' || category === 'hoenn' || category === 'sinnoh' || category === 'unova' || category === 'kalos' || category === 'alola' || category === 'galar' || category === 'hisui' || category === 'paldea') {
      const regions = monsters.filter(object => object.region === category)

      return (
        <Layout regionPage={`${regions.length} Pokémon from the ${category} region.`}>
          {
            regions.map((monster) => {
              const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught } = monster
              return (
                <div key={monster._id}>
                  {name}<br />
                {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}
                primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />
                {secondaryType ? <>secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}
                {species}<br />
                <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
                <img src={image} width='100px' /><br />
                {entry}<br />
                {evolutionType ? <>{evolutionType}<br /></> : ''}
                {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />
                  <br /><br /><br /><br /><br /><br />
                </div>
              )
            }).reverse()
          }
        </Layout>
      )
    } else if (category === 'caught' || category === 'uncaught') {
      const caughtStatus = monsters.filter(object => object.hasBeenCaught === category)

      return (
        <Layout caughtPage={category === 'caught' ? <>{caughtStatus.length} caught Pokémon</> : category === 'uncaught' ? <>{caughtStatus.length} uncaught Pokémon</> : ''}>
          {
            caughtStatus.map((monster) => {
              const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught } = monster
              return (
                <div key={monster._id}>
                  {name}<br />
                {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}
                primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />
                {secondaryType ? <>secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}
                {species}<br />
                <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
                <img src={image} width='100px' /><br />
                {entry}<br />
                {evolutionType ? <>{evolutionType}<br /></> : ''}
                {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />
                  <br /><br /><br /><br /><br /><br />
                </div>
              )
            }).reverse()
          }
        </Layout>
      )
    } else if (category === 'bug' || category === 'dark' || category === 'dragon' || category === 'electric' || category === 'fairy' || category === 'fighting' || category === 'fire' || category === 'flying' || category === 'ghost' || category === 'grass' || category === 'ground' || category === 'ice' || category === 'normal' || category === 'poison' || category === 'psychic' || category === 'rock' || category === 'steel' || category === 'water') {
      const types = monsters.filter(object => object.primaryType === category || object.secondaryType === category)

      return (
        <Layout typePagePrimary={` Pokémon with primary ${category} typing`} typePageSecondary={` Pokémon with secondary ${category} typing`}>
          { 
            types.map((monster) => {
              const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught } = monster
              return (
                <div key={monster._id}>
                  

                  {name}<br />
                {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}
                {primaryType === category ? <div className='primary'>primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br /></div> : ''}
                  {secondaryType === category ? <div className='secondary'>secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></div> : ''}
                {species}<br />
                <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
                <img src={image} width='100px' /><br />
                {entry}<br />
                {evolutionType ? <>{evolutionType}<br /></> : ''}
                {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />
                  <br /><br /><br /><br /><br /><br />
                </div>
              )
            }).reverse()
          }
        </Layout>
      )
    } else {
      return (
        <Layout>
          hi
        </Layout>
      )
    }
  }
}

module.exports = Region
