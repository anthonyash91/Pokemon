const React = require('react')

class Layout extends React.Component {
  render () {
    const { index, number, category, pageType, username } = this.props
    return (
      <html lang='en'>
        <head>
          <title>Poképroject</title>
          <link rel='stylesheet' href='/css/app.css' />
          <link rel='stylesheet' href='https://i.icomoon.io/public/temp/fe8e32fd01/UntitledProject/style.css' />
          <script defer src='/js/app.js' />
        </head>

        <body>
          <div id='container'>
            <div className='poke-container navigation'>
              <a href='/'>Home</a>
              <a href='/pokemon/new'>New</a>
              <a href='/user/logout'>Logout</a>
            </div>

            <div className='poke-container header'>
              {index === '/' ? <><span className='cap'>{username}</span>, you've logged {number} Pokémon!</> : ''}

              {
                pageType === 'status'
                  ? <>{number} <span className={`cap ${category}`}>{category}</span> Pokémon!</>
                  : pageType === 'region'
                    ? <>{number} Pokémon from the <span className='cap'>{category}</span> region!</>
                    : pageType === 'type'
                      ? <>{number} Pokémon with <span className={`cap ${category}`}>{category}</span> typing!</>
                      : ''
            }
            </div>

            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Layout
