const React = require('react')
// const Layout = require('../layout/Layout.jsx')

class Index extends React.Component {
  render () {
    const { monsters } = this.props

    return (
      <div>
        {
          monsters.map((monster) => {
            return (
              <div key={monster._id}>
                hi
              </div>
            )
          }).reverse()
        }
      </div>
    )
  }
}

module.exports = Index
