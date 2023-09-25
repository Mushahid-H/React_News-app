import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
    }
  }
  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21242aa87244bf5b4709af2da0ac368'
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })
  }

  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  imageUrl={element.urlToImage}
                  title={element.title ? element.title.slice(0, 48) : ''}
                  description={
                    element.description
                      ? element.description.slice(0, 88) + '...'
                      : ''
                  }
                  newsUrl={element.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
