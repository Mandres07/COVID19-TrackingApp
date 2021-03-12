import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
   try {
      let mutableUrl = url;
      if (country) {
         mutableUrl = `${url}/countries/${country}`;
      }
      // destructuring data then inside data destructuring confirmed, recovered, deaths and lastUpdate
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(mutableUrl);
      return { confirmed, recovered, deaths, lastUpdate };

   } catch (err) {
      throw err;
   }
};

export const fetchDailyData = async () => {
   try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map((dailyData) => ({
         confirmed: dailyData.confirmed.total,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate
      }));

      return modifiedData;
   } catch (err) {
      throw err;
   }
};

export const fetchCountries = async () => {
   try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
      const modifiedCountries = countries.map((country) => country.name);
      return modifiedCountries;
   } catch (err) {
      throw err;
   }
};
