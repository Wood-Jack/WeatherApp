import React from 'react';

import CityInfo from '../components/CityInfo';
import SearchHistory from '../components/SearchHistory';
import SearchBar from '../components/SearchBar';

export default class App extends React.Component {
  render() {



    return (
      <div className= 'container'>
        <div className='jumbotron'>
              <h1 className='display-3 text-center'>Weather App</h1>
              <p className='page-description '>Blank</p>
            </div>
            <div className='content-container'>
          <SearchBar />
          <div className="row">
            <CityInfo />
            <SearchHistory />
          </div>
        </div>
      </div>
    
    );
  }
}
 