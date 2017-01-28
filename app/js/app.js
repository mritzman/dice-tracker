import React from 'react'
import ReactDOM from 'react-dom'
import Header from './containers/header/Header.jsx'
import Footer from './containers/footer/Footer.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <p>Content should go here</p>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
