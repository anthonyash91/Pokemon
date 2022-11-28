const React = require('react')
const Layout = require('../layout/Layout.jsx')

class Index extends React.Component {
  render () {
    const { monsters } = this.props
    const category = this.props.category
    const number = this.props.number
    const indexPage = this.props.indexPage
    const username = this.props.username

    return (
      <Layout index={indexPage} number={number} pageType={this.props.pageType} category={category} username={username}>
        {
            monsters.map((monster) => {
              const { name, regionalForm, primaryType, secondaryType, region, image, evolutionType, hasBeenCaught, likes, _id } = monster

              return (
                <div id={_id} className='poke-container' key={monster._id}>
                  <div className='poke-section'>
                    <h1><span><a href={`/pokemon/${name.toLowerCase()}/${_id}`}>{evolutionType === 'mega' ? 'Mega ' : evolutionType === 'gigantamax' ? 'Gigantamax ' : regionalForm ? regionalForm + ' ' : ''}{name}</a></span></h1>
                    <div className='poke-picture' style={{ backgroundImage: `url(${image})` }} />

                    <div className='likes'>
                      <form method='POST' action={`/pokemon/${name}/${_id}/postIndexLikes?_method=PUT`}>
                        <input className='heart like' type='submit' value='' />
                      </form>

                      <div className={`likes-number ${likes > 0 ? 'positive' : likes === 0 ? 'neutral' : 'negative'}`}>{likes}</div>

                      <form method='POST' action={`/pokemon/${name}/${_id}/postIndexDislikes?_method=PUT`}>
                      <input className='heart dislike' type='submit' value='' />
                      </form>
                    </div>
                  </div>

                  <div className='poke-section'>
                    <h1><span>Status</span></h1>

                    <div className='badge-container'>
                      <div className={`badge-type ${hasBeenCaught === 'caught' ? 'caught' : 'uncaught'}`}>
                        {this.props.pageType === 'status' ? <div className={`badge status ${hasBeenCaught === 'caught' ? 'caught' : 'uncaught'}`} /> : <a href={`/pokemon/status/${hasBeenCaught}`} className={`badge status ${hasBeenCaught === 'caught' ? 'caught' : 'uncaught'}`} />}<br />
                        <span>{hasBeenCaught === 'caught' ? 'Caught' : 'Uncaught'}</span>
                      </div>
                    </div>
                  </div>

                  <div className='poke-section'>
                    <h1><span>{this.props.pageType === 'type' ? primaryType === category ? <>Primary Typing</> : secondaryType === category ? <>Secondary Typing</> : '' : <>Typing</>}</span></h1>

                    {
                      this.props.pageType === 'type'
                        ? primaryType === category
                          ? <><div className='badge-container'><div className={primaryType}><div className={`badge ${primaryType}`} /><br /><span>{primaryType}</span></div></div></>
                          : secondaryType === category
                            ? <><div className='badge-container'><div className={secondaryType}><div className={`badge ${secondaryType}`} /><br /><span>{secondaryType}</span></div></div></>
                            : ''
                        : <><div className='badge-container'><div className={primaryType}><a className={`badge ${primaryType}`} href={`/pokemon/type/${primaryType}`} /><br /><span>{primaryType}</span></div>{secondaryType ? <><div className={secondaryType}><a className={`badge ${secondaryType}`} href={`/pokemon/type/${secondaryType}`} /><br /><span>{secondaryType}</span></div></> : ''}</div></>
                    }
                  </div>

                  <div className='poke-section'>
                    <h1><span>Region</span></h1>

                    <div className='badge-container'>
                      <div className='badge-type'>
                        {this.props.pageType === 'region' ? <div className='badge region' /> : <a className='badge region' href={`/pokemon/region/${region}`} />}<br />
                        <span>{region}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }).reverse()
          }
      </Layout>
    )
  }
}

module.exports = Index
