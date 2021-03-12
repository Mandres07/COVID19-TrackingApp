import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CustomCard from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
   if (!confirmed) {
      return <Typography variant='overline'>Cargando información...</Typography>;
   }
   var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
   const date = new Date(lastUpdate).toLocaleDateString('es-PA', options);
   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify='center'>
            <CustomCard label='Infectados' value={confirmed.value} date={date} description='Casos activos de COVID-19' />
            <CustomCard label='Recuperados' value={recovered.value} date={date} description='Casos recuperados de COVID-19' />
            <CustomCard label='Decesos' value={deaths.value} date={date} description='Decesos a causa del COVID-19' />
         </Grid>
      </div>
   );
}

export default Cards;