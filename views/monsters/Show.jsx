const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Show extends React.Component {
  render () {
    const { name, primaryType, secondaryType, species, region, regionalForm, image, entry, evolutionType, hasBeenCaught, _id } = this.props.monster

    return (
      <Layout>
        {name}<br />
        {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}

        {this.props.pageType === 'type' ? primaryType === category ? <>Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br /></> : secondaryType === category ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : '' : <>Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />{secondaryType ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}</>}
        {species}<br />
        <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
        <img src={image} width='100px' /><br />
        {entry}<br />
        {evolutionType ? <>{evolutionType}<br /></> : ''}
        {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />
        <form method='POST' action={`/pokemon/${_id}?_method=DELETE`}><input type='submit' value={`Delete ${name}`} /></form><br />
        <a href={`/pokemon/${name.toLowerCase()}/${_id}/edit`}>edit {name}</a>
      </Layout>
    )
  }
}

module.exports = Show
