import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const CaptalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const updateNews = async () => {
    // props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e21242aa87244bf5b4709af2da0ac368&page=${this.state.page}&pageSize=${props.pageSize}`
    document.title = `${CaptalizeWord(props.category)} News-Daily`
    setLoading(true)
    // props.setProgress(30)
    let data = await fetch(url)
    let parsedData = await data.json()
    // props.setProgress(70)
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    // setLoading(false)

    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
  }, [1])

  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews()
  }
  const handlePrevClick = async () => {
    setPage(page - 1)
    updateNews()
  }

  return (
    <>
      <div className='container my-3'>
        <div className='row'>
          {loading && <Spinner />}

          {!loading &&
            articles.map((el) => {
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
          disabled={page <= 1}
          className='btn btn-primary float-start'
          type='button'
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          disabled={page >= Math.ceil(totalResults / props.pageSize)}
          className='btn btn-primary float-end'
          type='button'
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default News
