/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

import { updateSearch, updateWeatherInfo, updateHistory } from './searchActions';


export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.changeSearchBar = this.changeSearchBar.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
    this.clickSearchButtonSD = this.clickSearchButtonSD.bind(this);
    this.clickSearchButtonDC = this.clickSearchButtonDC.bind(this);
    this.clickSearchButtonNY = this.clickSearchButtonNY.bind(this);
    this.clickSearchButtonTokyo = this.clickSearchButtonTokyo.bind(this);
    this.clickSearchButtonLondon = this.clickSearchButtonLondon.bind(this);
  }

  changeSearchBar(e) {
    const { dispatch } = this.props;
    const { value } = e.target;

    dispatch(updateSearch(value));
  }

  clickSearchButton() {
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo(userQuery));
    dispatch(updateHistory(userQuery));
  }

  clickSearchButtonSD() {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo('San Diego'));
    dispatch(updateHistory('San Diego'));
  }

  clickSearchButtonNY() {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo('New York'));
    dispatch(updateHistory('New York'));
  }


  clickSearchButtonDC() {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo('Washington D.C.'));
    dispatch(updateHistory('Washington D.C.'));
  }

  clickSearchButtonTokyo() {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo('Tokyo'));
    dispatch(updateHistory('Tokyo'));
  }

  clickSearchButtonLondon() {
    const { dispatch } = this.props;
    dispatch(updateWeatherInfo('London'));
    dispatch(updateHistory('London'));
  }


  render() {
    const { userQuery } = this.props;

    return (

      <div>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonSD }>San Diego</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonNY }>New York</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonLondon }>London</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonTokyo }>Tokyo</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonDC }>Washington D.C.</button>
        <div className='input-group input-group-sm'>

          <input value={ userQuery } onChange={ this.changeSearchBar } className='form-control mb-3' />

          <div className='input-group-append'>
            <button onClick={ this.clickSearchButton } className='input-group-text mb-3'>go</button>


          </div>
        </div>
      </div>
    );
  }


}
