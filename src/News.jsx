import React, { Component } from 'react'

export default class News extends Component {
  render() {
    let { title, description } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem;' }}>
              <img
                src='https://www.reuters.com/resizer/JzIEjXdZXWb4VGQ9W6gDoraB26w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUUV5CROL5NYPB434DWAQ2XI2U.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <a href='/news' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem;' }}>
              <img
                src='https://www.reuters.com/resizer/JzIEjXdZXWb4VGQ9W6gDoraB26w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUUV5CROL5NYPB434DWAQ2XI2U.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <a href='/news' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card' style={{ width: '18rem;' }}>
              <img
                src='https://www.reuters.com/resizer/JzIEjXdZXWb4VGQ9W6gDoraB26w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUUV5CROL5NYPB434DWAQ2XI2U.jpg'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <a href='/news' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
