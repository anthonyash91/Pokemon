const React = require('react')
// const Layout = require('../layout/Layout.jsx')

class Index extends React.Component {
  render () {
    const { monsters } = this.props

    return (
      <div>
        {
          monsters.map((monster) => {
            const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught } = monster
            const capRegionalForm = regionalForm.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capPrimaryType = primaryType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capSecondaryType = secondaryType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capRegion = region.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')

            return (
              <div key={monster._id}>
                {monsters.length} Pokémon entered<br /><br /><br />
                {name}<br />
                {regionalForm ? <>{capRegionalForm}<br /></> : ''}
                {capPrimaryType}<br />
                {secondaryType ? <>{capSecondaryType}<br /></> : ''}
                {species}<br />
                {capRegion}<br />
                <img src={image} width='100px' /><br />
                {entry}<br />
                {evolutionType ? <>{evolutionType}<br /></> : ''}
                {hasBeenCaught}
                <br /><br /><br /><br /><br /><br />
              </div>
            )
          }).reverse()
        }
      </div>
    )
  }
}

module.exports = Index
