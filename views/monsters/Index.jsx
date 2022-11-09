const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Index extends React.Component {
  render () {
    const { monsters } = this.props
    const category = this.props.category
    const number = this.props.number
    const indexPage = this.props.indexPage

    return (
      <Layout index={indexPage} number={number} pageType={this.props.pageType} category={category}>
        {
          monsters.map((monster) => {
            const { name, regionalForm, primaryType, secondaryType, species, region, image, entry, evolutionType, hasBeenCaught, _id } = monster

            return (
              <div key={monster._id}>
                <a href={`/pokemon/${_id}`}>{name}</a><br />
                {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}
                {this.props.pageType === 'type' ? primaryType === category ? <>Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br /></> : secondaryType === category ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : '' : <>Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />{secondaryType ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}</>}
                {species}<br />
                <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
                <img src={image} width='100px' /><br />
                {entry}<br />
                {evolutionType ? <>{evolutionType}<br /></> : ''}
                {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />

                <form method='POST' action={`/pokemon/${_id}?_method=DELETE`}><input type='submit' value={`Delete ${name}`} /></form><br />
                <br /><br /><br /><br /><br /><br />
              </div>
            )
          }).reverse()
        }
      </Layout>
    )
  }
}

module.exports = Index
