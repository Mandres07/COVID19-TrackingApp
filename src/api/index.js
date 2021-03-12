import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
   try {
      // destructuring data then inside data destructuring confirmed, recovered, deaths and lastUpdate
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
      return { confirmed, recovered, deaths, lastUpdate };

   } catch (err) {
      throw err;
   }
};
