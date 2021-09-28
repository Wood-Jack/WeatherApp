<<<<<<< HEAD
/* eslint-disable max-len */
=======
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

import { updateSearch, updateWeatherInfo, updateHistory } from './searchActions';


export default class SearchBar extends React.Component {

<<<<<<< HEAD
  constructor(props) {
=======
  constructor(props) { 
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
    super(props);

    this.changeSearchBar = this.changeSearchBar.bind(this);
    this.clickSearchButton = this.clickSearchButton.bind(this);
    this.clickSearchButtonSD = this.clickSearchButtonSD.bind(this);
    this.clickSearchButtonDC = this.clickSearchButtonDC.bind(this);
    this.clickSearchButtonNY = this.clickSearchButtonNY.bind(this);
    this.clickSearchButtonTokyo = this.clickSearchButtonTokyo.bind(this);
    this.clickSearchButtonLondon = this.clickSearchButtonLondon.bind(this);
<<<<<<< HEAD
=======
        
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
  }

  changeSearchBar(e) {
    const { dispatch } = this.props;
    const { value } = e.target;

    dispatch(updateSearch(value));
  }

  clickSearchButton() {
<<<<<<< HEAD
=======

>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo(userQuery));
    dispatch(updateHistory(userQuery));
  }

  clickSearchButtonSD() {
<<<<<<< HEAD
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
=======
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo('San Diego'));
    dispatch(updateHistory('San Diego'));

  } 
 
  clickSearchButtonNY() {
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo('New York'));
    dispatch(updateHistory('New York'));
        
  }

    
  clickSearchButtonDC() {
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo('Washington D.C.'));
    dispatch(updateHistory('Washington D.C.'));
        
  }

  clickSearchButtonTokyo() {
    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo('Tokyo'));
    dispatch(updateHistory('Tokyo'));
        
  }

  clickSearchButtonLondon() {

    const { dispatch, userQuery } = this.props;
    dispatch(updateWeatherInfo('London'));
    dispatch(updateHistory('London'));
        
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
  }


  render() {
<<<<<<< HEAD
    const { userQuery } = this.props;

    return (
=======
    const { userQuery }= this.props;

    return(
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22

      <div>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonSD }>San Diego</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonNY }>New York</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonLondon }>London</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonTokyo }>Tokyo</button>
        <button type='button' className='btn btn-primary mb-5' onClick={ this.clickSearchButtonDC }>Washington D.C.</button>
        <div className='input-group input-group-sm'>

<<<<<<< HEAD
          <input value={ userQuery } onChange={ this.changeSearchBar } className='form-control mb-3' />

          <div className='input-group-append'>
            <button onClick={ this.clickSearchButton } className='input-group-text mb-3'>go</button>

=======
          <input value={ userQuery } onChange={ this.changeSearchBar } className= 'form-control mb-3'/>

          <div className='input-group-append'>
            <button onClick={ this.clickSearchButton } className='input-group-text mb-3'>go</button>
                    
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22

          </div>
        </div>
      </div>
<<<<<<< HEAD
    );
  }


}
=======
      )
  }


}
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
