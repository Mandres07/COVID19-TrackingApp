import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api/index';

const CountryPicker = ({ handleCountryChange }) => {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         const fetchedCountries = await fetchCountries();
         setCountries(fetchedCountries);
      };

      fetchApi();

   }, [setCountries]);

   // console.log(countries);

   return (
      <FormControl className={styles.formControl}>
         <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
            <option value=''>Global</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
      </FormControl>
   );
}

export default CountryPicker;