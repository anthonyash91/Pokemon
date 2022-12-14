const React = require('react')
const Layout = require('../layout/Layout.jsx')

class New extends React.Component {
  render () {
    return (
      <Layout newPage='true'>
        <form method='POST' action='/pokemon'>
          <input type='text' name='name' placeholder='name' /><br />
          <input type='text' name='regionalForm' placeholder='regionalForm' /><br />
          <input type='text' name='primaryType' placeholder='primaryType' /><br />
          <input type='text' name='secondaryType' placeholder='secondaryType' /><br />
          <input type='text' name='species' placeholder='species' /><br />
          <select name='region'>
            <option value=''>Choose Region</option>
            <option value='kanto'>Kanto</option>
            <option value='johto'>Johto</option>
            <option value='hoenn'>Hoenn</option>
            <option value='sinnoh'>Sinnoh</option>
            <option value='unova'>Unova</option>
            <option value='kalos'>Kalos</option>
            <option value='alola'>Alola</option>
            <option value='galar'>Galar</option>
            <option value='hisui'>Hisui</option>
            <option value='paldea'>Paldea</option>
          </select><br />
          <input type='text' name='image' placeholder='image' /><br />
          <input type='text' name='entry' placeholder='entry' /><br />
          <input type='text' name='evolutionType' placeholder='evolutionType' /><br />
          <input type='text' name='hasBeenCaught' placeholder='hasBeenCaught' /><br />
          <input type='submit' value='submit' />
        </form>
      </Layout>
    )
  }
}

module.exports = New
