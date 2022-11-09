const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Show extends React.Component {
  render () {
    const { name, primaryType, secondaryType, species, region, regionalForm, image, entry, evolutionType, hasBeenCaught, _id, comments } = this.props.monster

    return (
      <Layout>
        {name}<br />
        {regionalForm ? <span className='cap'>{regionalForm}<br /></span> : ''}
        Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />
        {secondaryType ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}
        {species}<br />
        <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
        <img src={image} width='100px' /><br />
        {entry}<br />
        {evolutionType ? <>{evolutionType}<br /></> : ''}
        {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />

        <form method='POST' action={`/pokemon/${_id}?_method=DELETE`}><input type='submit' value={`Delete ${name}`} /></form><br />
        <a href={`/pokemon/${_id}/edit`}>edit {name}</a>

        {
          comments.length
            ? comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>Name: {comment.commentName}</p>
                  <p>Comment: {comment.commentBody}</p>
                </div>
              )
            })
            : ''
        }

        <form method='POST' action={`/pokemon/${_id}/comments?_method=PUT`}>
          <input type='text' name='commentName' required />
          <input type='text' name='commentBody' required />
          <input type='submit' value='submit' />
        </form>
      </Layout>
    )
  }
}

module.exports = Show
