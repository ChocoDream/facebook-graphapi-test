import 'date-fns';
import React from 'react';
import {Grid,
        makeStyles} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  Calendar
} from '@material-ui/pickers';


const useStyles = makeStyles({
    root:{
        background:'grey',
        color: 'white',
    },
    colors:{
        background:'white',
        color:'black'
    }
})

export default function ShowCalendar() {
    const classes = useStyles();
    const [selectDate, setSelectDate] = React.useState(new Date())

    const handleDateChange = (date) => {
        setSelectDate(date)
    }
    return(
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
            <Grid className={classes.root} container justify="center">
                <Grid className={classes.colors} item xs={3}>
                    <Calendar date={selectDate} onChange={handleDateChange}/>
                </Grid>
            </Grid>

            
        </MuiPickersUtilsProvider>
        
    )
}