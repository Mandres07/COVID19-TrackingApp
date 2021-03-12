import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
   if (!confirmed) {
      return <Typography variant='overline'>Cargando información...</Typography>;
   }

   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify='center'>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>Infectados</Typography>
                  <Typography variant='h5'>REAL DATA</Typography>
                  <Typography color='textSecondary'>REAL DATE</Typography>
                  <Typography variant='body2'>Number of active cases of COVID-19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>Recuperados</Typography>
                  <Typography variant='h5'>REAL DATA</Typography>
                  <Typography color='textSecondary'>REAL DATE</Typography>
                  <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>Decesos</Typography>
                  <Typography variant='h5'>REAL DATA</Typography>
                  <Typography color='textSecondary'>REAL DATE</Typography>
                  <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   );
}

export default Cards;