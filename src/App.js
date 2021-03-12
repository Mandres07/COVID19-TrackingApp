import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/index';
import styles from './App.module.css';
import { fetchData } from './api/index';
import cvImage from './images/image.png';

class App extends Component {
   state = {
      data: {},
      country: ''
   }

   async componentDidMount() {
      try {
         const fetchedData = await fetchData();
         this.setState({ data: fetchedData });
      } catch (err) {
         console.log(err);
         alert(err.message);
      }
   }

   handleCountryChange = async (country) => {
      const fetchedData = await fetchData(country);
      this.setState({ country: country, data: fetchedData });
   }

   render() {
      const { data, country } = this.state;

      return (
         <div className={styles.container}>
            <img src={cvImage} className={styles.image} alt='COVID-19' />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
         </div>
      );
   }
}

export default App;