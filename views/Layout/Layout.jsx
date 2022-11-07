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
          <a href='/'>Home</a><br /><br />
          {indexPage ? <>{indexPage}</> : ''}
          {caughtPage ? <>{caughtPage}</> : ''}
          {typePage ? <>{typePage}</> : ''}
          {regionPage ? <>{regionPage}</> : ''}<br /><br /><br />

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
