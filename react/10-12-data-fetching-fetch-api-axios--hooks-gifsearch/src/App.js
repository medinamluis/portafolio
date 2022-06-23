import React, { useState, useEffect } from 'react';  // Component no longer used
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import acknow from './img/Poweredby_100px-White_VertText.png';

// App as functional component with hooks:

function App() {

  // Replaces the state declarationss with the constructor:
  const [gifs, setData] = useState([]);         // declare state with inital gif value []
  const [query, setQuery] = useState('cats');
  const [isLoading, setIsLoading] = useState(true);

  // Replaces componentDidMount:
  useEffect(
    () => {
      // Similar axios request as used before (below, in the class component approach), but with setData instead of this.setState
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=cASlnnpaU5E0aDs1Qk5lr7PynJMYG5y9`)
      .then( response => setData(response.data.data) )
      .catch( error =>  console.log('Error fetching and parsing data', error) )
      .finally( () => setIsLoading(false) );
    },
    [query]   // call useEffect each time query changes. No need to pass isLoading, since it is beiing update within the hook
  );

  // New performSearch in functional component:
  const performSearch = (value) => setQuery(value);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
        <span className="acknow"><img src={acknow} alt="Giphy Acknowledgment" /></span>
      </div>
      <div className="main-content">
       { isLoading ? <p>Loading...</p> : <GifList data={gifs} /> }
      </div>
    </>
  );
}

export default App

// ... replacing the App class component:
/*
export default class App extends Component {
  
  constructor() {
    super();   // to use .this in the context of App and not the parent Component class
    this.state = {
      gifs: [],   // the collection of objects
      loading: true   // to prevent showing the NoGifs page at page load when gifs.length = 0 since we are loading
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {   // give a default to call the function in componentDidMount and display gifs already at page load

    // React fetch:
    // fetch('http://api.giphy.com/v1/gifs/trending?api_key=cASlnnpaU5E0aDs1Qk5lr7PynJMYG5y9')  // returns a Promise
    //   .then(response => response.json())   // returns a Promise
    //   .then(responseData => {
    //       this.setState({ gifs: responseData.data });   // based on the response schema https://developers.giphy.com/docs/api/endpoint#endpoint
    //     }
    //   )   // returns a Promise
    //   .catch(error => console.log('Error fetching and parsing data', error));   // catch errors in fulfilling promises (e.g. API server is down, promise not fulfilled, or returns in error state)
    
   // Axios request replacing fetch, from https://github.com/axios/axios
   // (Axios has  some advantages over fetch):
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=12&api_key=cASlnnpaU5E0aDs1Qk5lr7PynJMYG5y9`)
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          gifs: response.data.data,   // based on the response schema https://github.com/axios/axios#response-schema and https://developers.giphy.com/docs/api/endpoint#endpoint
          loading: false
        });
      })
      .catch(error => {
        // handle error
        console.log(error => console.log('Error fetching and parsing data', error));
      })
      .then(
        // always executed
      );
  }
  
  render() { 
    console.log(acknow);
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
          <span className="acknow"><img src={acknow} alt="Giphy Acknowledgment" /></span>
        </div>    
        <div className="main-content">
          { this.state.loading ? <p>Loading...</p> : <GifList data={this.state.gifs} /> }
        </div>
      </div>
    );
  }
}
*/
