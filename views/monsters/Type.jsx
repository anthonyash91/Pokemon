const React = require('react')
// const Layout = require('../layout/Layout.jsx')

class Type extends React.Component {
  render () {
    const { monsters } = this.props
    const type = this.props.type

    const types = monsters.filter(object => object.primaryType === type || object.secondaryType === type)

    return (
      <div>
        {
          types.map((monster) => {
            const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught } = monster
            const capRegionalForm = regionalForm.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capPrimaryType = primaryType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capSecondaryType = secondaryType.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')
            const capRegion = region.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')

            return (
              <div key={monster._id}>
                {types.length} {this.props.type} Pokémon<br /><br /><br />
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

module.exports = Type
