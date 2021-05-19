import { Component } from 'react'
import Quote from './components/Quote'
import Author from './components/Author'

import './App.scss';

const APIURL = 'https://quote-garden.herokuapp.com/api/v3/quotes/'

const getRandomQuote = async () => {
  const response = await fetch(`${APIURL}random`)
  const jsonData = await response.json()
  return jsonData
}

const getAuthorQuotes = async (author) => {
  console.log('get quotes')
  const response = await fetch(`${APIURL}/?author=${author}`)
  const jsonData = await response.json()
  return jsonData
}

class App extends Component {
  constructor(){
    super()

    this.handleRandomQuote = this.handleRandomQuote.bind(this)
    this.handleAuthorClick = this.handleAuthorClick.bind(this)
    this.switchDisplayQuote = this.switchDisplayQuote.bind(this)

    this.state = {
      author: '',
      quote: '',
      genre: '',
      displayQuote: true,
      authorQuoteList: [],
    }
  }

  componentDidMount(){
    getRandomQuote()
    .then(res => {
      const quote = res.data[0]
      this.setState({
        author: quote.quoteAuthor,
        quote: quote.quoteText,
        genre: quote.quoteGenre,
      })
    })
  }

  handleRandomQuote(){
    console.log('random')
    getRandomQuote()
    .then(res => {
      const quote = res.data[0]
      this.setState({
        author: quote.quoteAuthor,
        quote: quote.quoteText,
        genre: quote.quoteGenre,
        displayQuote: true,
      })
    })
  }

  handleAuthorClick(){
    console.log('author click')
    this.switchDisplayQuote()
    getAuthorQuotes(this.state.author)
    .then(res => {
      this.setState({
        authorQuoteList: res.data
      })
    })
  }

  switchDisplayQuote(){
    console.log('switch')
    this.setState({ displayQuote: !this.state.displayQuote})
  }

  render(){

    const state = this.state

    return(
      <div className="App">
        <div className="random" onClick={() => this.handleRandomQuote()}>random</div>


        {this.state.displayQuote ?
          <Quote
            quote={state.quote}
            author={state.author}
            genre={state.genre}
            authorClick={this.handleAuthorClick}
          />
          :
          <Author 
            author={state.author}
            quoteList={state.authorQuoteList}
            returnClick={this.switchDisplayQuote}
          />}
        
      </div>
    )
  }
}



export default App;
