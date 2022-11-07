const React = require('react')

class Layout extends React.Component {
  render () {
    const { indexPage, newPage, showPage, editPage, caughtPage, typePage, regionPage } = this.props

    return (
      <html lang='en'>
        <head>
          <title>Poképroject</title>
          <link rel='stylesheet' href='/css/style.css' />
          <script defer src='/js/app.js' />
        </head>

        <body>
          {caughtPage ? <>{caughtPage}<br /><br /><br /></> : ''}
          {typePage ? <>{typePage}<br /><br /><br /></> : ''}
          {regionPage ? <>{regionPage}<br /><br /><br /></> : ''}
          
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
