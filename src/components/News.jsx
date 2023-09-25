import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }
  // fetchData = async () => {}
  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21242aa87244bf5b4709af2da0ac368&page=1&pageSize=20'
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      totalResults: parsedData.totalResults,
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21242aa87244bf5b4709af2da0ac368&page=${
        this.state.page + 1
      }&pageSize=20`
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,

        // totalResults: parsedData.totalResults,
      })
    }
    console.log(this.state.page)
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21242aa87244bf5b4709af2da0ac368&page=${
      this.state.page - 1
    }&pageSize=20`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      // totalResults: parsedData.totalResults,
    })
    console.log(this.state.page)
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <div className='row'>
            {this.state.articles.map((element) => {
              if (element.source.name !== '[Removed]') {
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
              } else {
                return null
              }
            })}
          </div>
        </div>
        <div className='container clearfix mb-3'>
          <button
            disabled={this.state.page <= 1}
            className='btn btn-primary float-start'
            type='button'
            onClick={this.handlePrevClick}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 20)
            }
            className='btn btn-primary float-end'
            type='button'
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </>
    )
  }
}
