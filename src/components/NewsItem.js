import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date , source} = this.props;
    return (
      <div className='my-3'>
            <div className="card">
              <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
              </div>
                <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/HAHBspnDaSTe2jgpno.GBw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/c078deb2a04986337a8a7c215bed1e3b":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
