const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Edit extends React.Component {
  render () {
    const { name, primaryType, secondaryType, species, region, regionalForm, image, entry, evolutionType, hasBeenCaught, _id } = this.props.monster

    return (
      <Layout>
        <form method='POST' action={`/pokemon/${_id}?_method=PUT`}>
          <input type='text' name='name' placeholder='name' defaultValue={name} /><br />
          <input type='text' name='regionalForm' placeholder='regionalForm' defaultValue={regionalForm} /><br />
          <input type='text' name='primaryType' placeholder='primaryType' defaultValue={primaryType} /><br />
          <input type='text' name='secondaryType' placeholder='secondaryType' defaultValue={secondaryType} /><br />
          <input type='text' name='species' placeholder='species' defaultValue={species} /><br />
          <input type='text' name='region' placeholder='region' defaultValue={region} /><br />
          <input type='text' name='image' placeholder='image' defaultValue={image} /><br />
          <input type='text' name='entry' placeholder='entry' defaultValue={entry} /><br />
          <input type='text' name='evolutionType' placeholder='evolutionType' defaultValue={evolutionType} /><br />
          <input type='text' name='hasBeenCaught' placeholder='hasBeenCaught' defaultValue={hasBeenCaught} /><br />
          <input type='submit' value='submit' />
        </form>
      </Layout>
    )
  }
}

module.exports = Edit
