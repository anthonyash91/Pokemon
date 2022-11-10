const React = require('react')

class Layout extends React.Component {
  render () {
    const { index, number, category, pageType, username } = this.props
    return (
      <html lang='en'>
        <head>
          <title>Poképroject</title>
          <link rel='stylesheet' href='/css/app.css' />
          <link rel="stylesheet" href="https://i.icomoon.io/public/temp/fe8e32fd01/UntitledProject/style.css" />
          <script defer src='/js/app.js' />
        </head>

        <body>
          <a href='/'>Home</a><br />
          <a href='/pokemon/new'>New</a><br />
          <a href='/user/logout'>Logout</a><br /><br />

          {index === '/' ? <>{username}, you've entered {number} Pokémon<br /><br /><br /></> : ''}

          {
            pageType === 'status'
              ? <>{number} {category} Pokémon<br /><br /><br /></>
              : pageType === 'region'
                ? <>{number} Pokémon from the {category} region<br /><br /><br /></>
                : pageType === 'type'
                  ? <>{number} Pokémon with {category} typing<br /><br /><br /></>
                  : ''
          }

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Layout
