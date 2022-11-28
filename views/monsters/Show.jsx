const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Show extends React.Component {
  render () {
    const { name, primaryType, secondaryType, species, region, regionalForm, image, entry, evolutionType, hasBeenCaught, _id, comments, likes } = this.props.monster
    const nameLowerCase = name.toLowerCase()

    return (
      <Layout>
        {evolutionType === 'mega' ? `Mega ${name}` : evolutionType === 'gigantamax' ? `Gigantamax ${name}` : ' '}{regionalForm ? regionalForm + ' ' + name : name}<br />
        Primary type: <a className='cap' href={`/pokemon/type/${primaryType}`}>{primaryType}</a><br />
        {secondaryType ? <>Secondary type: <a className='cap' href={`/pokemon/type/${secondaryType}`}>{secondaryType}</a><br /></> : ''}
        {species}<br />
        <a className='cap' href={`/pokemon/region/${region}`}>{region}</a><br />
        <img src={image} width='100px' /><br />
        {entry}<br />
        {evolutionType ? <>{evolutionType}<br /></> : ''}
        {hasBeenCaught === 'caught' ? <><a className='cap' href='/pokemon/status/caught'>caught</a></> : <><a className='cap' href='/pokemon/status/uncaught'>uncaught</a></>}<br />

        <form method='POST' action={`/pokemon/${nameLowerCase}/${_id}?_method=DELETE`}><input type='submit' value={`Delete ${name}`} /></form><br />
        <a href={`/pokemon/${nameLowerCase}/${_id}/edit`}>edit {name}</a>

        <div id='comments'>
          <h1>Comments ({comments.length})</h1>
          {
          comments.length
            ? comments.map((comment) => {
              return (
                <div id={comment._id} className='comment-container' key={comment._id}>
                  <div className='icon-container'>
                    <div className='icon' style={{ backgroundImage: `url(${comment.commentProfileIconUrl})` }} />
                  </div>

                  <div className='comment'>
                    <div><b>Name:</b> {comment.commentName}</div>
                    <div><b>Comment:</b> {comment.commentBody}</div>
                    <div><small>{comment.datePosted}</small></div>

                    <form method='POST' action={`/pokemon/${nameLowerCase}/${_id}/comments/${comment._id}?_method=DELETE`}><input type='submit' value='delete comment' /></form>

                    <p><span>Likes: </span>{comment.likes}</p>

                    <form method='POST' action={`/pokemon/${nameLowerCase}/${_id}/comments/${comment._id}/commentLikes?_method=PUT`}>
                      <input type='submit' value='Like' />
                    </form>

                    <form method='POST' action={`/pokemon/${nameLowerCase}/${_id}/comments/${comment._id}/commentDislikes?_method=PUT`}>
                      <input type='submit' value='Dislike' />
                    </form>
                  </div>
                </div>
              )
            }).reverse()
            : ''
        }
        </div>

        <div id='comments-end' />
        <form method='POST' action={`/pokemon/${nameLowerCase}/${_id}/comments?_method=PUT`}>
          <input type='text' name='commentName' required /><br />
          <input type='text' name='commentBody' required /><br />
          <input type='submit' value='submit' />
        </form>

        <p><span>Likes: </span>{likes}</p>

        <form method='POST' action={`/pokemon/${name}/${_id}/postShowLikes?_method=PUT`}>
          <input type='submit' value='Like' />
        </form>

        <form method='POST' action={`/pokemon/${name}/${_id}/postShowDislikes?_method=PUT`}>
          <input type='submit' value='Dislike' />
        </form>
      </Layout>
    )
  }
}

module.exports = Show
