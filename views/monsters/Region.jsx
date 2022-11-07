const React = require('react')
// const Layout = require('../layout/Layout.jsx')

class Region extends React.Component {
  render () {
    const { monsters } = this.props

    return (
      <div>
        {
          monsters.map((monster) => {
            return (
              <div key={monster._id} />
            )
          }).reverse()
        }
      </div>
    )
  }
}

module.exports = Region
