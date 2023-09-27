import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
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
  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e21242aa87244bf5b4709af2da0ac368&page=${this.state.page}&pageSize=${this.props.pageSize}`

    this.setState({ loading: true })

    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  async componentDidMount() {
    this.updateNews()
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  render() {
    return (
      <>
        <div className='container my-3'>
          <div className='row'>
            {this.state.loading && <Spinner />}

            {!this.state.loading &&
              this.state.articles.map((el) => {
                if (el.source.name !== '[Removed]') {
                  return (
                    <div className='col-md-4' key={el.url}>
                      <NewsItem
                        imageUrl={el.urlToImage}
                        title={el.title ? el.title.slice(0, 48) : ''}
                        description={
                          el.description
                            ? el.description.slice(0, 88) + '...'
                            : ''
                        }
                        newsUrl={el.url}
                        author={el.author}
                        date={el.publishedAt}
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
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
