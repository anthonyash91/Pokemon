const React = require('react')

class Layout extends React.Component {
  render () {
    const { indexPage, newPage, showPage, editPage, caughtPage, typePage, typePagePrimary, typePageSecondary, regionPage } = this.props

    return (
      <html lang='en'>
        <head>
          <title>Poképroject</title>
          <link rel='stylesheet' href='/css/app.css' />
          <script defer src='/js/app.js' />
        </head>

        <body>
          <a href='/'>Home</a><br />
          <a href='/pokemon/new'>New</a><br />
          <a href='/user/logout'>Logout</a><br /><br />
          {indexPage ? <>{indexPage}<br /><br /><br /></> : ''}
          {caughtPage ? <>{caughtPage}<br /><br /><br /></> : ''}
          {regionPage ? <>{regionPage}<br /><br /><br /></> : ''}
          {typePagePrimary ? <><span className='header-primary'></span>{typePagePrimary}<br /></> : ''}
          {typePageSecondary ? <><span className='header-secondary'></span>{typePageSecondary}<br /><br /><br /></> : ''}
          

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
