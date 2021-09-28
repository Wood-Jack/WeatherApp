<<<<<<< HEAD
/* eslint-disable linebreak-style */
import React from 'react';


export default class cityInfo extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { weatherInfo } = this.props;
    console.log('weather info', weatherInfo);
    const icon = weatherInfo.data.weather[0].icon;
   // console.log(weatherInfo);
    const url = `http://openweathermap.org/img/w/${icon}.png`;
    return (

      <div>
        <div
          className='card'
          id='city-card-border'
        >
          <div
            className='card-header'
            id='city-card-header'
          >
=======
import React from 'react';

export default class cityInfo extends React.Component {

  render() {
    const { weatherInfo } = this.props; 
    const icon = weatherInfo.data.weather[0].icon;
    console.log(weatherInfo);

    const url = `http://openweathermap.org/img/w/${icon}.png`;

    return (

      <div>
        <div className='card' 
             id='city-card-border'>
          <div className='card-header' 
               id='city-card-header'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
            City Information
          </div>
          <div className='card-body'>
            <div className='row justify-content-center'>
<<<<<<< HEAD
              {icon != '' && <img src={ url } />}
              <p
                className='font-weight-bold'
                id='cityName'
              >
=======
              {icon != '' && <img src={url} />}
              <p className='font-weight-bold' 
                 id='cityName'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                {weatherInfo.data.name}
              </p>
            </div>
            <div className='row justify-content-center'>
              {weatherInfo.data.coord.lat != '' &&
                `Lat/Long: ${weatherInfo.data.coord.lat}, ${weatherInfo.data.coord.lon}`}
            </div>
            <hr />
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Temperature (F)
                </p>
                {weatherInfo.data.main.temp != '' &&
<<<<<<< HEAD
                  <p
                    className='text-center font-weight-bold'
                    id='cityInformation'
                  >
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                    {weatherInfo.data.main.temp}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Pressure
                </p>
<<<<<<< HEAD
                <p
                  className='text-center font-weight-bold'
                  id='cityInformation'
                >
                  {weatherInfo.data.main.pressure}
                </p>
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
                    {weatherInfo.data.main.pressure}
                  </p>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Hummidity
                </p>
                {weatherInfo.data.main.humidity != '' &&
<<<<<<< HEAD
                  <p
                    className='text-center font-weight-bold'
                    id='cityInformation'
                  >
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                    {weatherInfo.data.main.humidity}%
                </p>}
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Lowest Temp(F)
                </p>
                {weatherInfo.data.main.temp_min != '' &&
<<<<<<< HEAD
                  <p
                    className='text-center font-weight-bold'
                    id='cityInformation'
                  >
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                    {weatherInfo.data.main.temp_min}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Highest Temp(F)
                </p>
                {weatherInfo.data.main.temp_max != '' &&
<<<<<<< HEAD
                  <p
                    className='text-center font-weight-bold'
                    id='cityInformation'
                  >
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                    {weatherInfo.data.main.temp_max}F
                </p>}
              </div>
              <div className='col-4'>
                <p className='font-weight-bold text-center'>
                  Wind Speed
                </p>
                {weatherInfo.data.wind.speed != '' &&
<<<<<<< HEAD
                  <p
                    className='text-center font-weight-bold'
                    id='cityInformation'
                  >
=======
                  <p className='text-center font-weight-bold' 
                     id='cityInformation'>
>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
                    {weatherInfo.data.wind.speed}mph
                </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======


>>>>>>> 200ccbb50b6fedfbf9e8b95bb0028c0e04ecbb22
    );
  }
}
