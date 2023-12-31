import React from 'react'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
  return (
    <div className='my-3'>
      <div className='card'>
        <img
          src={imageUrl ? imageUrl : 'https://images.wsj.net/im-856795/social'}
          className='card-img-top'
          height={200}
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>
            <small className='text-muted'>
              Published by {author ? author : 'Unknown'} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target='_blank'
            rel='noreferrer'
            className='btn btn-sm btn-primary'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}
export default NewsItem
