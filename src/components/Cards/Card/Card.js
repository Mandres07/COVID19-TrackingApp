import React from 'react';
import { Grid, CardContent, Typography, Card } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Card.module.css';

const CustomCard = ({ label, value, date, description }) => {

   let classes = null;
   switch (label) {
      case 'Infectados':
         classes = cx(styles.card, styles.infected)
         break;
      case 'Recuperados':
         classes = cx(styles.card, styles.recovered)
         break;
      case 'Decesos':
         classes = cx(styles.card, styles.deaths)
         break;
      default:
         classes = cx(styles.card, styles.infected)
         break;
   }

   return (
      <Grid item component={Card} xs={12} md={3} className={classes}>
         <CardContent>
            <Typography color='textSecondary' gutterBottom>{label}</Typography>
            <Typography variant='h5'>
               <CountUp start={0} end={value} duration={2} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{date}</Typography>
            <Typography variant='body2'>{description}</Typography>
         </CardContent>
      </Grid>
   );
}

export default CustomCard;