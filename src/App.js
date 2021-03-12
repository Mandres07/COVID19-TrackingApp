import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/index';
import styles from './App.module.css';
import { fetchData } from './api/index';

class App extends Component {
   state = {
      data: {}
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

   render() {
      const { data } = this.state;

      return (
         <div className={styles.container}>
            <Cards data={data} />
            <CountryPicker />
            <Chart />
         </div>
      );
   }
}

export default App;