
import React from 'react';
import {TextareaAutosize, makeStyles, Button, ThemeProvider} from '@material-ui/core';
import {Grid,Paper} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
MuiPickersUtilsProvider,
Calendar
} from '@material-ui/pickers';

const usedStyle = makeStyles((theme)=>({
    grid: {
        color:'black',
        minHeight:'3vh',
        fontSize: '1rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        padding: theme.spacing(5)
    },
    text: {
        width:'80%'
    },
    root: {
        flexGrow: 1
    },
    gridTest1: {
        background:'#FAFAFA'
    }
}))


export default function MinHeightTextarea() {
    const classes = usedStyle();
    const [selectDate, setSelectDate] = React.useState(new Date())
    const handleDateChange = (date) => {
        setSelectDate(date)
    }

  return (
    <>
         
            <Grid container >
                <Grid container item className={classes.grid} xs={7} justify="center">
                    <TextareaAutosize aria-label="minimum height" className={classes.text} rowsMin={10} placeholder="Minimum 3 rows" />
                </Grid>
                <Grid item xs={5} className={classes.grid} className={classes.gridTest1} >
                    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                        <Calendar date={selectDate} onChange={handleDateChange}/>
                    </MuiPickersUtilsProvider>
                </Grid>
                
            </Grid>
            
        
    </>
  )
}